//import express
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Router from "./routes/routes.js";

// init express
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/peoject1", {
    useNewUrlParser: true,
    useUnifiedtopology: true
});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> console.log('Database Connected'));

app.use(cors());
app.use(express.json());

// basic route
app.use(Router);
 
// listen on por
app.listen(7500, () => console.log('Server Running at http://localhost:7500'));