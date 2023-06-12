import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Galeri = mongoose.Schema({
    kategori_wisata:{
        type: String,
        required: true
    },
    gambar:{
        type: String,
        required: true
    },
    nama_galeri:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
});
 
// export model
export default mongoose.model('M_galeri', Galeri);