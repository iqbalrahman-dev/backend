import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Metode = mongoose.Schema({
    nama_metode:{
        type: String,
        required: true
    },
    kode:{
        type: String,
        required: true
    },
    keterangan:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
});
 
// export model
export default mongoose.model('M_metode', Metode);