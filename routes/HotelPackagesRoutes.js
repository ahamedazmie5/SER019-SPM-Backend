const express = require("express");
const router = express.Router();
const { getHotelPackagesByID, getHotelPackages, createHotelPackages, UpdateHotelPackages, RemoveHotelPackages} = require("../controllers/HotelPackagesController");

router.post("/createHotelPackages",createHotelPackages);
router.get("/getAllHotelPackages",getHotelPackages);
router.get("/getHotelPackages/:id",getHotelPackagesByID);
router.patch("/updateHotelPackages/:id",UpdateHotelPackages);
router.delete("/RemoveHotelPackages/:id",RemoveHotelPackages);
module.exports = router;











