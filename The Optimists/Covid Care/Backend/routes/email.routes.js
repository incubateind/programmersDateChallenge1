
module.exports = (app) => {

    const emails = require('../controllers/email.controller.js');

    // Create a new Note
    app.post('/emails', emails.create);

    // Retrieve all Notes


    // Retrieve a single Note with noteId
    app.get('/emails/:emailId', emails.findOne);

    // Update a Note with noteId
    app.put('/emails/:emailId', emails.update);

    // Delete a Note with noteId
    app.delete('/emails/:updateId', emails.delete);
}
