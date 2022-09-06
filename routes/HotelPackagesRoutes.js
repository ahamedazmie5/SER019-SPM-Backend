const express = require("express");
const router = express.Router();
const { getHotelPackagesByID, getHotelPackages, createHotelPackages, UpdateHotelPackages } = require("../controllers/HotelPackagesController");

router.post("/createHotelPackages",createHotelPackages);
router.get("/getAllHotelPackages",getHotelPackages);
router.get("/getHotelPackages/:id",getHotelPackagesByID);
router.patch("/updateHotelPackages/:id",UpdateHotelPackages);

module.exports = router;


