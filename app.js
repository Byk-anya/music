// Require packages and set the port
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const albums = require('./albums/albums');
const songs = require('./songs/songs');
const port = 3002;
const app = express();
 
// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


routes(app);
albums(app);
songs(app);
 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});