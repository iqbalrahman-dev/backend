import Penginapan from "../models/M_penginapan.js";

export const getPenginapan = async (req, res) => {
    try {
        const penginapans = await Penginapan.find();
        res.json(penginapans);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPenginapanById = async (req, res) => {
    try {
        const penginapans = await Penginapan.findById(req.params.id);
        res.json(penginapans);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const savePenginapan = async (req, res) => {
    const penginapans = new Penginapan(req.body);
    try {
        const savedPenginapan = await penginapans.save();
        res.status(201).json(savedPenginapan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePenginapan = async (req, res) => {
    const cekId = await Penginapan.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatePenginapan = await Penginapan.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatePenginapan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePenginapan = async (req, res) => {
    const cekId = await Penginapan.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedPenginapan = await Penginapan.deleteOne({_id: req.params.id});
        res.status(200).json(deletedPenginapan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}