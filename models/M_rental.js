import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Rental = mongoose.Schema({
    armada:{
        type: String,
        required: true
    },
    deskripsi_rental:{
        type: String,
        required: true
    },
    dalam_kota:{
        type: String,
        required: true
    },
    zona1:{
        type: String,
        required: true
    },
    zona2:{
        type: String,
        required: true
    },
    zona3:{
        type: String,
        required: true
    },
    zona4:{
        type: String,
        required: true
    },
    zona5:{
        type: String,
        required: true
    },
    zona6:{
        type: String,
        required: true
    },
    stok:{
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true
    },
});
 
// export model
export default mongoose.model('M_rental', Rental);
