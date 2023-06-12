import Kategori from "../models/M_kategori.js";

export const getKategori = async (req, res) => {
    try {
        const Kategoris = await Kategori.find();
        res.json(Kategoris);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getKategoriById = async (req, res) => {
    try {
        const Kategoris = await Kategori.findById(req.params.id);
        res.json(Kategoris);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const saveKategori = async (req, res) => {
    const Kategoris = new Kategori(req.body);
    try {
        const savedKategori = await Kategoris.save();
        res.status(201).json(savedKategori);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateKategori = async (req, res) => {
    const cekId = await Kategori.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateKategori = await Kategori.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateKategori);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteKategori = async (req, res) => {
    const cekId = await Kategori.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedKategori = await Kategori.deleteOne({_id: req.params.id});
        res.status(200).json(deletedKategori);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}