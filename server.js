const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server successfully  started on : ${PORT}`)
);

mongoose.connect(
  process.env.DB_LINK,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log('Successfully Connected to MongoDB');
  }
);

//import routes



const TourPackagesRouter = require("./routes/TourPackagesRoutes");

const HotelPackagesRouter = require("./routes/HotelPackagesRoutes");
const HotelReservationsRouter = require("./routes/HotelReservationRoutes");

//use routes
app.use("/travelgo",TourPackagesRouter);
app.use("/travelgo/packages",HotelPackagesRouter);
app.use("/travelgo",HotelReservationsRouter);



const UserRoutes = require("./routes/UserRoutes");

//use routes
app.use("/travelgo",TourPackagesRouter);
app.use("/travelgo/user",UserRoutes);


const TourPackagesRouter = require('./routes/TourPackagesRoutes');
const UserRoutes = require('./routes/UserRoutes');
const BlogsRouter = require('./routes/blogsRouter');

//use routes
app.use('/travelgo', TourPackagesRouter);
app.use('/travelgo/user', UserRoutes);
app.use('/blogs', BlogsRouter);


// //use routes
// app.use('/travelgo', TourPackagesRouter);
// app.use('/blogs', BlogsRouter);



