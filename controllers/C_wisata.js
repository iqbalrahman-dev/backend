import Wisata from "../models/M_wisata.js";

export const getWisata = async (req, res) => {
    try {
        const Wisatas = await Wisata.find();
        res.json(Wisatas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getWisataById = async (req, res) => {
    try {
        const Wisatas = await Wisata.findById(req.params.id);
        res.json(Wisatas);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const saveWisata = async (req, res) => {
    const Wisatas = new Wisata(req.body);
    try {
        const savedWisata = await Wisatas.save();
        res.status(201).json(savedWisata);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateWisata = async (req, res) => {
    const cekId = await Wisata.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateWisata = await Wisata.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateWisata);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteWisata = async (req, res) => {
    const cekId = await Wisata.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedWisata = await Wisata.deleteOne({_id: req.params.id});
        res.status(200).json(deletedWisata);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}