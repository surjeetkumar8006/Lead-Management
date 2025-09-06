import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./db/connectdb.js";
import serverRoutes from "./routes/serverRoutes.js";

dotenv.config();

//Setup Express App
const app = express();

// Set up CORS
app.use(cors());

//Set Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Load Routes
app.use("/", serverRoutes);

//Database Connection
const DATABASE_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
connectDB(DATABASE_URL, DB_NAME);

// Get port from environment and store in Express.
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
