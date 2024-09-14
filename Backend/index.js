import express from 'express';
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";

const app = express();

//using to save port and main details
dotenv.config();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 3000;
const URI = process.env.Mongo_URI;

// MongoDB Connection
mongoose.connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
    });

//routes
app.use("/user", userRoute)

//need port to run webside
app.listen(PORT, () => {
    console.log('Server is Running on port ${PORT}');})