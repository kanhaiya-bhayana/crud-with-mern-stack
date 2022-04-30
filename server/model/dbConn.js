const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crudDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Conccection Succeeded') }
    else { console.log('Error in Connection: + err')}
});


