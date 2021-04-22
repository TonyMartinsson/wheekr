const express = require('express')
const mongoose = require('mongoose');
require('express-async-errors');
const postRouter = require('./routers/post.router');
const userRouter = require('./routers/user.router');
const app = express();

app.use(express.json())

//app.use(postRouter);
app.use(userRouter, postRouter);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json(err.message)
});

async function run() {
    try { 
        await mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database is connected');
    } catch (error) {
        console.error(error)
    }
}

app.listen(4000, ()=> (
    console.log('Server is up and running')
));

run();
