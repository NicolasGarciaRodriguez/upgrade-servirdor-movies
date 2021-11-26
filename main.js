require("./db/db")
const express = require("express")
const app = express()
const PORT = 3000
const peliculasRouter = require("./routes/peliculas.router")


app.use("/peliculas", peliculasRouter);

// app.use('*', (req, res) => {
//     res.status(404).json('Not found')
// });

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${PORT}`)
})