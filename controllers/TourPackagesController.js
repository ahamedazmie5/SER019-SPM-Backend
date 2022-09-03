const express = require('express');
const mongoose = require('mongoose');
const { title } = require('process');
const TourPackages = require('../models/TourPackagesSchema.js');



const getTourPackages = async (req, res) => {
    try {
        const topics = await TourPackages.find();

        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getTourPackagesById = async (req, res) => {
    const { id } = req.params;

    try {
        const topics = await TourPackages.findById(id);

        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const createTourPackages = async (req, res) => {
    const tourpackage = req.body;

    const newTopic = new TourPackages(tourpackage)
    console.log("saved data", newTopic);
    try {
        await newTopic.save();

        res.status(201).json({ newTopic });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const UpdateTourPackages = async (req, res) => {
    const { id } = req.params;
    const { title,description,topic } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No accept with id: ${id}`);

    const updatedTopic = {title:title,description:description,topic:topic , _id: id };

    await TourPackages.findByIdAndUpdate(id, updatedTopic, { new: true });

    res.json(updatedTopic);
}



module.exports = { getTourPackagesById, getTourPackages, createTourPackages, UpdateTourPackages };