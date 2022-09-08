const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const HotelReservations = require('../models/HotelReservation.js');



const getReservation = async (req, res) => {
    try {
        const details = await HotelReservations.find();

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getReservationByID = async (req, res) => {
    const { id } = req.params;

    try {
        const details = await HotelReservations.findById(id);

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createHotelReservation = async (req, res) => {
    const hotelreservation = req.body;

    const newDetail = new HotelReservations(hotelreservation)
    console.log("saved data", newDetail);
    try {
        await newDetail.save();

        res.status(201).json({ newDetail });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const UpdateHotelReservation = async (req, res) => {
    const { id } = req.params;
    const { Customer_Name,Customer_NIC,Contact_Number,Check_In_Date,Check_Out_Date,Room_Type,No_Of_Members } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No accept with id: ${id}`);

    const updatedDetails = {Customer_Name:Customer_Name,Customer_NIC:Customer_NIC,Contact_Number:Contact_Number,Check_In_Date:Check_In_Date,Check_Out_Date:Check_Out_Date,Room_Type:Room_Type,No_Of_Members:No_Of_Members , _id: id };

    await HotelReservations.findByIdAndUpdate(id, updatedDetails, { new: true });

    res.json(updatedDetails);
}



module.exports = { getReservation, getReservationByID, createHotelReservation, UpdateHotelReservation };

