const express = require("express");
const router = express.Router();
const { getTourPackagesById, getTourPackages, createTourPackages, UpdateTourPackages,Removerpackage } = require("../controllers/TourPackagesController");

router.post("/createTourPackages",createTourPackages);
router.get("/getAllTourPackages",getTourPackages);
router.get("/getTourPackages/:id",getTourPackagesById);
router.patch("/updateTourPackages/:id",UpdateTourPackages);
router.delete("/RemoveTourPackages/:id",Removerpackage);


module.exports = router;
