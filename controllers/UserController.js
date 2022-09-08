const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const Uesers = require("../models/UserModels");

var jwtSecret = "mysecrettoken";

const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userName, email, password, userRole, contactNumber, IDnumber } = req.body;

  if (!userName || !email || !password)
    return res.status(400).json({ errorMessage: "User name, email, password fields are required..!" });

  if (userName.length < 3)
    return res.status(400).json({
      errorMessage: "User name field is required..! (Min 3 charachtors)",
    });

  if (password.length < 7)
    return res.status(400).json({
      errorMessage: "Password field is required..! (Min 7 charachtors)",
    });
    
  try {
    // See if user exists
    let user = await Uesers.findOne({ email });

    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new Uesers({
      userName,
      contactNumber,
      email,
      password,
      IDnumber,
      userRole,
    });

    //Encrypt Password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    //Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token, userRole: user.userRole, user: user.userName });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const authUser = async (req, res) => {
  try {
    const user = await Uesers.findById(req.user.id);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json([{ msg: "Invalid Credentials" }]);
  }

  const { email, password } = req.body;

  try {
    // See if user exists
    let user = await Uesers.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    //Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "1 days" }, (err, token) => {
      if (err) throw err;
      res.json({ token, user: user.userName, userRole: user.userRole });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await Uesers.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const users = await Uesers.findById(id);

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { userName, email, password, userRole, contactNumber, IDnumber } = req.body;

  try {
    // See if user exists
    let user = await Uesers.findOne({ email });

    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({
      userName,
      contactNumber,
      email,
      password,
      IDnumber,
      userRole,
    });

    //Encrypt Password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { userName, email, password, userRole, contactNumber, IDnumber } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  const updatedUser = {
    userName,
    contactNumber,
    email,
    password,
    IDnumber,
    userRole,
    _id: id,
  };

  await Uesers.findByIdAndUpdate(id, updatedUser, { new: true });

  res.json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Uesers.findByIdAndRemove(id);

  res.json({ message: "User deleted successfully." });
};

const getUsersByIDNum = async (req, res) => {
  let id = req.params;
  console.log("IDnum", id.id);

  try {
    const users = await Uesers.findOne({ IDnumber: id.id });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};

module.exports = {getUsers,getUser,deleteUser,createUser,updateUser,registerUser,authUser,loginUser,getUsersByIDNum}; 