const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const peliculasSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true},
}, {
    timestamps: true
});

const Pelicula = mongoose.model("pelicula", peliculasSchema)

module.exports = Pelicula