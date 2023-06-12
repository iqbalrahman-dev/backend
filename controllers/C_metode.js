import Metode from "../models/M_metode.js";

export const getMetode = async (req, res) => {
    try {
        const Metodes = await Metode.find();
        res.json(Metodes);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getMetodeById = async (req, res) => {
    try {
        const Metodes = await Metode.findById(req.params.id);
        res.json(Metodes);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const saveMetode = async (req, res) => {
    const Metodes = new Metode(req.body);
    try {
        const savedMetode = await Metodes.save();
        res.status(201).json(savedMetode);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateMetode = async (req, res) => {
    const cekId = await Metode.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateMetode = await Metode.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateMetode);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteMetode = async (req, res) => {
    const cekId = await Metode.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedMetode = await Metode.deleteOne({_id: req.params.id});
        res.status(200).json(deletedMetode);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}