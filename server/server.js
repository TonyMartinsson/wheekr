const express = require('express')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('HEJ SVEJS')
});

const app = express();

app.use(express.json())
// definera alla endpoints för erat API (router)

// Detta skall ligga i postRouter
app.get('/api/posts', async (req, res) => {
    const posts = await PostModel.find({});
    res.status(200).json(posts);
});

//app.use(userRouter);
//app.use(postRouter);

// Lägg till en felhanterare (VG)

app.listen(4000);


// npm i express
// npm i nodemon
// npm i mongoose
// installera servern för ditt OS.

