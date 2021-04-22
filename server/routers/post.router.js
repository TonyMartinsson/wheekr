const express = require('express');
const PostModel = require('../models/post.model');
const router = express.Router();

router.get('/api/posts', async (req, res) => {
    const posts = await PostModel.find({});
    res.status(200).json(posts);
});

router.post('/api/posts', async (req, res) => {
    const postToSave = {
        user: req.body.user,
        message: req.body.message,
        timestamp: new Date()
    }
    const post = await PostModel.create(postToSave);
    res.status(201).json(post);
});

module.exports = router;

