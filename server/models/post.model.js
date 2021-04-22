const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: String, required: true },
    message: { type: String, required: true },
    timestamp: Date
});

const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;