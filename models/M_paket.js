import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Paket = mongoose.Schema({
    gambar:{
        type: String,
        required: true
    },
    paket_deskripsi:{
        type: String,
        required: true
    },
    wisata_id:{
        type: String,
        required: true
    },
    penginapan_id:{
        type: String,
        required: true
    },
    harga:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
});
 
// export model
export default mongoose.model('M_paket', Paket);