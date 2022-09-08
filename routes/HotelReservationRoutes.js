const express = require("express");
const router = express.Router();
const { getReservation, getReservationByID, createHotelReservation, UpdateHotelReservation } = require("../controllers/HotelReservationController");

router.post("/createHotelReservation",createHotelReservation);
router.get("/getAllHotelReservations",getReservation);
router.get("/getHotelReservation/:id",getReservationByID);
router.patch("/updateHotelReservation/:id",UpdateHotelReservation);

module.exports = router;


