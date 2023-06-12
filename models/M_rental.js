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
export default mongoose.model('M_rental', Rental);