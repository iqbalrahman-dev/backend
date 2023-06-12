import Member from "../models/M_member.js";

export const getMember = async (req, res) => {
    try {
        const Members = await Member.find();
        res.json(Members);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getMemberById = async (req, res) => {
    try {
        const Members = await Member.findById(req.params.id);
        res.json(Members);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const saveMember = async (req, res) => {
    const Members = new Member(req.body);
    try {
        const savedMember = await Members.save();
        res.status(201).json(savedMember);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateMember = async (req, res) => {
    const cekId = await Member.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updateMember = await Member.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateMember);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteMember = async (req, res) => {
    const cekId = await Member.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedMember = await Member.deleteOne({_id: req.params.id});
        res.status(200).json(deletedMember);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}