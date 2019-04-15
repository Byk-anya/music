const album = app => {
   
    /*app.get('/albums', (request, response) => {
        response.send(albums);
    });*/

    app.get('/albums', (request, response) => {
        pool.query('SELECT * FROM albums', (error, result) => {
            if (error) throw error;
     
            response.send(result);
        });
    });

    // Display a single album by ID
app.get('/albums/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('SELECT * FROM albums WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

// Add a new album
app.post('/albums', (request, response) => {
    pool.query('INSERT INTO albums SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`Album added with ID: ${result.insertId}`);
    });
});

// Update an existing album
app.put('/albums/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('UPDATE albums SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
 
        response.send('Album updated successfully.');
    });
});

// Delete an albums
app.delete('/albums/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('DELETE FROM albums WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('Album deleted.');
    });
});

}

// Export the router
module.exports = album;

// Load the MySQL pool connection
const pool = require('../data/config');

/*
const albums = [{
    id: 1,
    name: "Назв1",
    artist: "Пляж",
    spisok: "123",
    god: "2003"
},
];*/