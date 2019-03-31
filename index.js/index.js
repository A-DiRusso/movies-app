const http = require('http');
const GaryBuseyMovies = require('../models/movies');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/busey') {
        const buseyMovies = await GaryBuseyMovies.getAll();
        const buseyMoviesJSON = JSON.stringify(buseyMovies);
        res.end(buseyMoviesJSON);
    } else {
        res.end(`{message: "Why isn't Tommy Boy on this list?}`)
    }
});

server.listen(port, hostname, () => {
    console.log(`The server IS running at http://${hostname}:${port} ????`)
});