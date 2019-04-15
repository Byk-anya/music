const router = app => {
    app.get('/', (request, response) => {
        response.status(200).send({
            message: 'Node.js and Express REST API'
        });
    });

   /* app.get('/users', (request, response) => {
        response.send(users);
    }); */

    // Display all artists
app.get('/users', (request, response) => {
    pool.query('SELECT * FROM routes', (error, result) => {
        if (error) throw response.status(500).send("Server error during operation");
 
        response.status(200).send(result);
    });
});

// Display a single artist by ID
app.get('/users/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('SELECT * FROM routes WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

// Add a new artist
app.post('/users', (request, response) => {
    pool.query('INSERT INTO routes SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`Artist added with ID: ${result.insertId}`);
    });
});

// Update an existing artist
app.put('/users/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('UPDATE routes SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw response.status(401).send("Not Authorized");
 
        response.send('Artist updated successfully.');
    });
});


// Delete an artist
app.delete('/users/:id', (request, response) => {
    const id = request.params.id;
 
    pool.query('DELETE FROM routes WHERE id = ?', id, (error, result) => {
        if (error) throw response.status(404).send("Not Found");
 
        response.send('Artist deleted.');
    });
});


}

// Export the router
module.exports = router;

// Load the MySQL pool connection
const pool = require('../data/config');



/*
const users = [{
    id: 1,
    name: "Пляж",
    album: "Вода",
    song: "1"
},
{
    id: 2,
    name: "Песок",
    album: "Море",
    song: "11"
},
]; */