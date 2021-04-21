const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: String, required: true },
    text: String,
    timestamp: Date
});

const PostModel = mongoose.model('post', postSchema);

module.exports = PostModel;