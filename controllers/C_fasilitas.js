import Fasilitas from "../models/M_fasilitas.js";

export const getFasilitas = async (req, res) => {
    try {
        const Fasilitass = await Fasilitas.find();
        res.json(Fasilitass);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getFasilitasById = async (req, res) => {
    try {
        const Fasilitass = await Fasilitas.findById(req.params.id);
        res.json(Fasilitass);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const saveFasilitas = async (req, res) => {
    const Fasilitass = new Fasilitas(req.body);
    try {
        const savedFasilitas = await Fasilitass.save();
        res.status(201).json(savedFasilitas);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateFasilitas = async (req, res) => {
    const cekId = await Fasilitas.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateFasilitas = await Fasilitas.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateFasilitas);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteFasilitas = async (req, res) => {
    const cekId = await Fasilitas.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedFasilitas = await Fasilitas.deleteOne({_id: req.params.id});
        res.status(200).json(deletedFasilitas);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}