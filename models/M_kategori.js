import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Kategori = mongoose.Schema({
    nama_kategori:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
});
 
// export model
export default mongoose.model('M_kategori', Kategori);