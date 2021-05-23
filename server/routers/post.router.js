const express = require('express');
const PostModel = require('../models/post.model');
const router = express.Router();

router.get('/api/posts', async (req, res) => {
    const posts = await PostModel.find({});
    res.status(200).json(posts);
});

router.get('/api/posts/adminaccess', checkAdminAccess, async (req, res) => {
    const posts = await PostModel.find({});
    res.status(200).json(posts);
});

function checkLogin(req, res, next) {
    if(req.session.username) {
        next()   
    } else {
        res.status(401).json(null)
    }
}

function checkAdminAccess(req, res, next) {
    if(req.session.role === "admin") {
        next()   
    }
    else {
        res.status(403).json("You are not authorized to access this route.")
    }
}

function checkAccess(req, res, next) {
    if(req.session.role === "admin") {
        next()
    }
    else {        
        if(req.session.username === req.body.user) {
            next()
        }
        else {
            res.status(403).json("You can only edit your own posts.")
        }
    }
}

router.delete('/api/posts/:id', async (req, res) => {

    const deletedPost = await PostModel.deleteOne({ _id: req.params.id });
    if (deletedPost.deletedCount == 0)
    {
        res.status(418).json(deletedPost);
    }
    else if (deletedPost.ok != 1)
    {
        res.status(417).json(deletedPost);
    }
    else
    {
       res.status(200).json(req.body.user);
    }
});

router.put('/api/posts/', checkLogin, checkAccess, async (req, res) => {
    const postToEdit = await PostModel.findOneAndUpdate({ _id: req.body._id }, {message: req.body.message});
    res.status(200).json(req.body.message);
});

router.post('/api/posts', async (req, res) => {
    const postToSave = {
        user: req.body.user,
        message: req.body.message,
        avatar: req.body.avatar,
        timestamp: new Date()
    }
    const post = await PostModel.create(postToSave);
    res.status(201).json(post);
});

module.exports = router;