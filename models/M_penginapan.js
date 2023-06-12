import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Penginapan = mongoose.Schema({
    nama_penginapan:{
        type: String,
        required: true
    },
    deskripsi_penginapan:{
        type: Number,
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
export default mongoose.model('M_penginapan', Penginapan);