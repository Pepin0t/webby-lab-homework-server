require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./routes/films");
const errorHandler = require("./errorHandler");

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, autoReconnect: true, useCreateIndex: true }, err => {
    if (err) {
        console.log("MongoDB Error: " + err.name);
    } else {
        console.log("MongoDB Connected");
    }
});

app.use(bodyParser.json());
app.use("/api", router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});
