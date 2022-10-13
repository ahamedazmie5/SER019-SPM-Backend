const mongoose = require("mongoose");
//hotel reservation details
const HotelReservationSchema = new mongoose.Schema({
	Customer_Name: {
		type: String,
		required: true,
	},
	Customer_NIC: {
		type: String,
		required: true,
	},
	Contact_Number: {
		type: Number,
		required: true,
		unique: true,
	},
	Check_In_Date: {
		type: String,
		required: true,
	},
	Check_Out_Date: {
		type: String,
		required: true,
	},
	Room_Type: {
		type: String,
		required: true,
	},
    No_Of_Members: {
		type: Number,
		required: true,
	}
    },
    {
        timestamps:true,
    },
);

module.exports = User = mongoose.model("reservation", HotelReservationSchema);