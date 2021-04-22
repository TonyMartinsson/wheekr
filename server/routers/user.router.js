const express = require('express');
const UserModel = require('../models/user.model');
const router = express.Router();

router.get('/api/users', async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
});

router.post('/api/users', async (req, res) => {
    const userToSave = {
        username: req.body.username,
        password: req.body.password,
        access: "user"
    }
    const user = await UserModel.create(userToSave);
    res.status(201).json(user);
});

module.exports = router;