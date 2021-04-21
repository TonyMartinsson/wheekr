const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('HEJ SVEJS')
});


// npm i express
// npm i nodemon
// npm i mongoose
// installera servern för ditt OS.