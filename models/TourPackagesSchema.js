const mongoose = require("mongoose");

const TourPackagesSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	topic: {
		type: String,
		required: true,
		
	},
	img: {
		type: String,
	},
    },
    {
        timestamps:true,
    },
);

module.exports = User = mongoose.model("tourPackages", TourPackagesSchema);