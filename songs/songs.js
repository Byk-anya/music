const song = app => {
   
   /* app.get('/songs', (request, response) => {
        response.send(songs);
    }); */

    app.get('/songs', (request, response) => {
        pool.query('SELECT * FROM songs', (error, result) => {
            if (error) throw error;
     
            response.send(result);
        });
    });

    // Display a single artist by ID
app.get('/songs/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('SELECT * FROM songs WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

// Add a new song
app.post('/songs', (request, response) => {
    pool.query('INSERT INTO songs SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`Song added with ID: ${result.insertId}`);
    });
});

// Update an existing song
app.put('/songs/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('UPDATE songs SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
 
        response.send('Song updated successfully.');
    });
});

// Delete a song
app.delete('/songs/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('DELETE FROM songs WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('Song deleted.');
    });
});

}

// Export the router
module.exports = song;

// Load the MySQL pool connection
const pool = require('../data/config');
/*
const songs = [{
    id: 1,
    name: "1",
    artist: "Пляж",
    album: "Вода"
},
];*/
