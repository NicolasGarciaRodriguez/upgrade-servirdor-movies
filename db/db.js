const mongoose = require("mongoose");

const DB_URL = "mongodb://localhost:27017/peliculas"

const dbConection = mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = dbConection