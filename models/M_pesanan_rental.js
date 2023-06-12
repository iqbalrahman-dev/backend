import mongoose from "mongoose";
import { INTEGER } from "sequelize";
 
const Pesanan_rental = mongoose.Schema({
    metode_id:{
        type: Number,
        required: true
    },
    member_id:{
        type: Number,
        required: true
    },
    rental_id:{
        type: Number,
        required: true
    },
    keterangan:{
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
export default mongoose.model('M_pesanan_rental', Pesanan_rental);