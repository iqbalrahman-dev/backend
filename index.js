//import express
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Router from "./routes/routes.js";

// init express
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedtopology: true
});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', ()=> {
    console.log('Database Connected');
// listen on port
app.listen(PORT, () => console.log("Server Running at port %d", PORT));
});

app.use(cors());
app.use(express.json());

// basic route
app.use(Router);
 