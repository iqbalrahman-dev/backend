import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Fasilitas = mongoose.Schema({
    nama_fasilitas:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
});
 
// export model
export default mongoose.model('M_fasilitas', Fasilitas);