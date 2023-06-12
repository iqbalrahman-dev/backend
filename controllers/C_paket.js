import Paket from "../models/M_paket.js";

export const getPaket = async (req, res) => {
    try {
        const Pakets = await Paket.find();
        res.json(Pakets);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPaketById = async (req, res) => {
    try {
        const Pakets = await Paket.findById(req.params.id);
        res.json(Pakets);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const savePaket = async (req, res) => {
    const Pakets = new Paket(req.body);
    try {
        const savedPaket = await Pakets.save();
        res.status(201).json(savedPaket);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePaket = async (req, res) => {
    const cekId = await Paket.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatePaket = await Paket.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatePaket);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePaket = async (req, res) => {
    const cekId = await Paket.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedPaket = await Paket.deleteOne({_id: req.params.id});
        res.status(200).json(deletedPaket);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}