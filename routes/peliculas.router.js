const express = require("express");
const router = express.Router();
const Pelicula = require("../models/peliculas")

router.get("/", (req, res) => {
    Pelicula.find()
        .then((peliculas) => {
            return res.json(peliculas);
        })
        .catch((error) => {
            console.error(`Ha ocurrido un error ${error}`)
            return res.status(500).json(`Ha ocurrido un error ${error}`)
        })
});

router.get("/:id", (req, res) => {
    const peliculaId = req.params.id;
    Pelicula.findById(peliculaId)
        .then((pelicula) => {
            if (!pelicula) {
                res.status(404).json(`Pelicula con el id: ${peliculaId} no encontrada`)
            }
            return res.json(pelicula)
        })
        .catch((error) => {
            console.error(`Ha ocurrido un error ${error}`)
            return res.status(500).json(`Pelicula no encontrada`)
        })
})

router.get("/titulo/:titulo", (req, res) => {
    const peliculaTitulo = req.params.titulo;
    Pelicula.find({ title: peliculaTitulo })
        .then((peliculas) => {
            if (!peliculas) {
                res.status(404).json(`Pelicula con el titulo: ${peliculaTitulo} no encontrada`)
            }
            return res.json(peliculas)
        })
        .catch((error) => {
            console.error(`Ha ocurrido un error ${error}`)
            return res.status(500).json(`Pelicula no encontrada`)
        })
})


router.get("/genero/:genero", (req, res) => {
    const peliculaGenero = req.params.genero;
    Pelicula.find({ genre: peliculaGenero })
        .then((peliculas) => {
            if (!peliculas) {
                res.status(404).json(`Pelicula con el genero: ${peliculaGenero} no encontrada`)
            }
            return res.json(peliculas)
        })
        .catch((error) => {
            console.error(`Ha ocurrido un error ${error}`)
            return res.status(500).json(`Pelicula no encontrada`)
        })
})


router.get("/ano/apartirde/2010", (req, res) => {
    Pelicula.find({ year: { $gte: 2010 } })
        .then((peliculas) => {
            if (!peliculas) {
                res.status(404).json(`No hay peliculas estrenadas a partir de 2010`)
            }
            return res.json(peliculas)
        })
        .catch((error) => {
            console.error(`Ha ocurrido un error ${error}`)
            return res.status(500).json(`Pelicula no encontrada`)
        })
})

module.exports = router