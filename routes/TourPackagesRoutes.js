const express = require("express");
const router = express.Router();
const { getTourPackagesById, getTourPackages, createTourPackages, UpdateTourPackages } = require("../controllers/TourPackagesController");

router.post("/createTourPackages",createTourPackages);
router.get("/getAllTourPackages",getTourPackages);
router.get("/getTourPackages/:id",getTourPackagesById);
router.patch("/updateTourPackages/:id",UpdateTourPackages);

module.exports = router;
