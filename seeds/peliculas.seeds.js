const mongoose = require("mongoose");
const Pelicula = require("../models/peliculas");
const dbConection = require("../db/db");


const peliculas = [
    {
      title: 'The Matrix',
      director: 'Hermanas Wachowski',
      year: 1999,
      genre: 'Acción',
    },
    {
      title: 'The Matrix Reloaded',
      director: 'Hermanas Wachowski',
      year: 2003,
      genre: 'Acción',
    },
    {
      title: 'Buscando a Nemo',
      director: 'Andrew Stanton',
      year: 2003,
      genre: 'Animación',
    },
    {
      title: 'Buscando a Dory',
      director: 'Andrew Stanton',
      year: 2016,
      genre: 'Animación',
    },
    {
      title: 'Interestelar',
      director: 'Christopher Nolan',
      year: 2014,
      genre: 'Ciencia ficción',
    },
    {
      title: '50 primeras citas',
      director: 'Peter Segal',
      year: 2004,
      genre: 'Comedia romántica',
    },
  ];

const peliculasDocuments = peliculas.map((pelicula) => new Pelicula(pelicula))

dbConection
  .then(async () => {
      const allPeliculas = await Pelicula.find()
      if (allPeliculas.length > 0) {
          await Pelicula.collection.drop();
      }
  })
  .catch((error) => console.error(`Error eliminando la colección de peliculas: ${error}`))
  .then(async () => {
      await Pelicula.insertMany(peliculasDocuments)
  })
  .catch((error) => console.error(`Error al insertar peliculas ${error}`))
  .finally(() => mongoose.disconnect());