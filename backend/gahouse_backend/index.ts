
require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT;
import mongoose from "mongoose";
const mongoSanitize = require('express-mongo-sanitize')
app.use(mongoSanitize())
const cors = require('cors');
// const corsOpts = {
//     origin: 'http://localhost:3000',
// };

// app.use(cors(corsOpts));
const corsOptions = {
    //To allow requests from client
    origin: [
        "http://localhost:3000",
        "https://gahouse-front-end.vercel.app",
        "vercel.app"
    ],
    credentials: true
};
app.use(cors(corsOptions));
const router = require("./routes/routes");
require("./db/conn");
app.use(express.json())
const cookieParser = require("cookie-parser");
app.use(cookieParser())









app.use(router)
app.listen((PORT || 8080), () => {
    console.log(`server is listen on the port on ${PORT}`)
})
