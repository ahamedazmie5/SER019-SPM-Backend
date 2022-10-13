const mongoose = require("mongoose");
//hotel packages details
const HotelPackagesSchema = new mongoose.Schema({
	Hotel_ID: {
		type: String,
		required: true,
	},
	Hotel_Name: {
		type: String,
		required: true,
	},
	Single_Room_Price: {
		type: Number,
		required: true,
	},
	Double_Room_Price: {
		type: Number,
		required: true,
		unique: true,
	},
	Luxury_Room_Price: {
		type: Number,
		required: true,
	},
	Hotel_Contact: {
		type: Number,
		required: true,
	},
	Location: {
		type: String,
		required: true,
	},
    },
    {
        timestamps:true,
    },
);

module.exports = User = mongoose.model("hotelpackages", HotelPackagesSchema);


