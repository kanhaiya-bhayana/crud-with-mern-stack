const mongoose = require('mongoose');
const dbConn = require('./dbConn')

var crudCollecSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    dept: {
        type: String
    },
    salary: {
        type: String
    }
});




// responses is the collection name in the database.
module.exports = mongoose.model('crudCollec', crudCollecSchema);