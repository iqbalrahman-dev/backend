import Rental from "../models/M_rental.js";

export const getRental = async (req, res) => {
    try {
        const Rentals = await Rental.find();
        res.json(Rentals);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getRentalById = async (req, res) => {
    try {
        const Rentals = await Rental.findById(req.params.id);
        res.json(Rentals);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const saveRental = async (req, res) => {
    const Rentals = new Rental(req.body);
    try {
        const savedRental = await Rentals.save();
        res.status(201).json(savedRental);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateRental = async (req, res) => {
    const cekId = await Rental.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateRental = await Rental.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateRental);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteRental = async (req, res) => {
    const cekId = await Rental.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedRental = await Rental.deleteOne({_id: req.params.id});
        res.status(200).json(deletedRental);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}