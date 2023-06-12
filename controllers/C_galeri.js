import Galeri from "../models/M_galeri.js";

export const getGaleri = async (req, res) => {
    try {
        const Galeris = await Galeri.find();
        res.json(Galeris);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getGaleriById = async (req, res) => {
    try {
        const Galeris = await Galeri.findById(req.params.id);
        res.json(Galeris);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const saveGaleri = async (req, res) => {
    const Galeris = new Galeri(req.body);
    try {
        const savedGaleri = await Galeris.save();
        res.status(201).json(savedGaleri);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateGaleri = async (req, res) => {
    const cekId = await Galeri.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateGaleri = await Galeri.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateGaleri);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteGaleri = async (req, res) => {
    const cekId = await Galeri.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedGaleri = await Galeri.deleteOne({_id: req.params.id});
        res.status(200).json(deletedGaleri);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}