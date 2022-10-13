const express = require("express");
const router = express.Router();
const { getReservation, getReservationByID, createHotelReservation, UpdateHotelReservation, RemoveHotelReservation} = require("../controllers/HotelReservationController");

router.post("/createHotelReservation",createHotelReservation);
router.get("/getAllHotelReservations",getReservation);
router.get("/getHotelReservation/:id",getReservationByID);
router.patch("/updateHotelReservation/:id",UpdateHotelReservation);
router.delete("/RemoveHotelReservation/:id",RemoveHotelReservation);
module.exports = router;


