import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Wisata = mongoose.Schema({
    kategori_wisata:{
        type: String,
        required: true
    },
    nama_wisata:{
        type: String,
        required: true
    },
    deskripsi_wisata:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
});
 
// export model
export default mongoose.model('M_wisata', Wisata);