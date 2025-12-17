//we will handle server related stuff here

import connectDb from "./Db/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import route from "./Routes/routes.js";

dotenv.config();

const PORT=process.env.PORT || 5000;
const app=express();


connectDb();

//middle wares
app.use(cors())
app.use(express.json())

// http://localhost:5000/csbs
app.use('/tasks',route);
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})