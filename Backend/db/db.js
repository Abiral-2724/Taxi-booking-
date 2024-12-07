const mongoose = require('mongoose');

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT)
        .then(() => console.log('Connected to DB'))
        .catch(err => {
            console.error('Error connecting to DB:', err.message);
            console.error('Detailed Error:', err);
        });
}

module.exports = connectToDb;
