import { errorHandler } from './error';
import cors from "cors";
import express from "express";
import morgan from "morgan";
import inventory from "../routes/inventory";


const app=express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api",inventory);
app.use(errorHandler)


export default app