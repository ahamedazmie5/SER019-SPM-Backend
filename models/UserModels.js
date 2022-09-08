const mongoose =require ('mongoose');


const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	userName: {
		type: String,
		required: true,
	},
	IDnumber: {
		type: String,
		required: true,
	},
    contactNumber: {
		type: String,
		required: true,
		unique: true,
	},
    password:{
        type:String,
        require:true,
        unique:true,
    },
	userRole: {
		type: String,
		required: true,
	},
    },
	{
        timestamps:true,
    },
);
module.exports = Uesers = mongoose.model("users",UserSchema);