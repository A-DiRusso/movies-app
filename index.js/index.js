const express = require('express');
const app = express();
// const http = require('http');
const GaryBuseyMovies = require('../models/movies');

// const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {res.send('Welcome to the Gary Busey Random movie page!')});

app.get('/busey', async (req, res) => {
    const buseyMovies = await GaryBuseyMovies.getAll();
    res.json(buseyMovies);
});

app.get('/busey/:id', async (req, res) => {
    const {id} = req.params;
    const buseyMovie = await GaryBuseyMovies.getById(id);
    res.json(buseyMovie);
});
// const server = http.createServer( async (req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');

//     if (req.url === '/busey') {
//         const buseyMovies = await GaryBuseyMovies.getAll();
//         const buseyMoviesJSON = JSON.stringify(buseyMovies);
//         res.end(buseyMoviesJSON);
//     } else {
//         res.end(`{message: "Why isn't Tommy Boy on this list?}`)
//     }
// });

app.listen(port, () => {
    console.log(`The server IS running at port:${port}?`)
});