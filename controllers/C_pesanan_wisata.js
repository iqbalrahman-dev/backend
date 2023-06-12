import Pesanan_wisata from "../models/M_pesanan_wisata.js";

export const getPesananWisata = async (req, res) => {
    try {
        const pesananWisatas = await Pesanan_wisata.find();
        res.json(pesananWisatas);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getPesananWisataById = async (req, res) => {
    try {
        const pesananWisatas = await Pesanan_wisata.findById(req.params.id);
        res.json(pesananWisatas);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const savePesananWisata = async (req, res) => {
    const pesananWisatas = new Pesanan_wisata(req.body);
    try {
        const savedPesananWisata = await pesananWisatas.save();
        res.status(201).json(savedPesananWisata);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updatePesananWisata = async (req, res) => {
    const cekId = await Pesanan_wisata.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatePesananWisata = await Pesanan_wisata.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatePesananWisata);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deletePesananWisata = async (req, res) => {
    const cekId = await Pesanan_wisata.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedPesananWisata = await Pesanan_wisata.deleteOne({_id: req.params.id});
        res.status(200).json(deletedPesananWisata);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}