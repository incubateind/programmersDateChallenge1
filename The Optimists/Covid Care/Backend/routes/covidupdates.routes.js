
module.exports = (app) => {

    const updates = require('../controllers/update.controller.js');

    // Create a new Note
    app.post('/updates', updates.create);

    // Retrieve all Notes


    // Retrieve a single Note with noteId
    app.get('/update/:updateId', updates.findOne);

    // Update a Note with noteId
    app.put('/updates/:updateId', updates.update);

    // Delete a Note with noteId
    app.delete('/updates/:updateId', updates.delete);
}
