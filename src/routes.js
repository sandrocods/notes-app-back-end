// Import Handler
const { 
    addNoteHandler, 
    getAllNotesHandler, 
    getNoteByIdHandler, 
    editNoteByIdHandler, 
    deleteNoteByIdHandler 
    } = require("./handler");

const routes = [

    // Post New Notes

    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },

    // Get All Notes
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    // Get Notes by Id
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler
    },


    // Edit Notes by Id
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler
    },
    
    // Delete Note by Handler

    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler
    }

];

// Export Routes
module.exports = routes;