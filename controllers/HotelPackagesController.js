const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const HotelPackages = require('../models/HotelPackagesSchema.js');



const getHotelPackages = async (req, res) => {
    try {
        const details = await HotelPackages.find();

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getHotelPackagesByID = async (req, res) => {
    const { id } = req.params;

    try {
        const details = await HotelPackages.findById(id);

        res.status(200).json(details);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createHotelPackages = async (req, res) => {
    const hotelpackage = req.body;

    const newDetail = new HotelPackages(hotelpackage)
    console.log("saved data", newDetail);
    try {
        await newDetail.save();

        res.status(201).json({ newDetail });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const UpdateHotelPackages = async (req, res) => {
    const { id } = req.params;
    const { Hotel_ID,Hotel_Name,Single_Room_Price,Double_Room_Price,Luxury_Room_Price,Hotel_Contact,Location } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No accept with id: ${id}`);

    const updatedDetails = {Hotel_ID:Hotel_ID,Hotel_Name:Hotel_Name,Single_Room_Price:Single_Room_Price,Double_Room_Price:Double_Room_Price,Luxury_Room_Price:Luxury_Room_Price,Hotel_Contact:Hotel_Contact,Location:Location , _id: id };

    await HotelPackages.findByIdAndUpdate(id, updatedDetails, { new: true });

    res.json(updatedDetails);
}

const RemoveHotelPackages = async (req, res) => {
    const { id } = req.params;

    let data = await HotelPackages.findByIdAndRemove(id);

    res.json({data:data, msg:"delete success"});
}

module.exports = { getHotelPackagesByID, getHotelPackages, createHotelPackages, UpdateHotelPackages, RemoveHotelPackages };