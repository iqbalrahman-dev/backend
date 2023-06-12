import Pesanan_rental from "../models/M_pesanan_rental.js";

export const getPesananRental = async (req, res) => {
    try {
        const pesananRentals = await Pesanan_rental.find();
        res.json(pesananRentals);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPesananRentalById = async (req, res) => {
    try {
        const pesananRentals = await Pesanan_rental.findById(req.params.id);
        res.json(pesananRentals);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const savePesananRental = async (req, res) => {
    const pesananRentals = new Pesanan_rental(req.body);
    try {
        const savedPesananRental = await pesananRentals.save();
        res.status(201).json(savedPesananRental);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePesananRental = async (req, res) => {
    const cekId = await Pesanan_rental.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatePesananRental = await Pesanan_rental.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatePesananRental);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePesananRental = async (req, res) => {
    const cekId = await Pesanan_rental.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedPesananRental = await Pesanan_rental.deleteOne({_id: req.params.id});
        res.status(200).json(deletedPesananRental);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}