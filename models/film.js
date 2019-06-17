const mongoose = require("mongoose");
const shortid = require("shortid");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    ID: {
        type: String,
        unique: true,
        default: shortid.generate
    },
    title: String,
    release: Number,
    format: String,
    stars: [String]
});

module.exports = mongoose.model("Film", filmSchema);
