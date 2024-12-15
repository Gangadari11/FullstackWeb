import express from "express";
import cors from "cors";
import reviews from "./api/reviews.route.js"
import { json } from "body-parser";
import { error } from "console";

const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/v1/reviews" , reviews)
app.use("*" , (req , res) => res.status(404).json({error: "not found"}))

export default app