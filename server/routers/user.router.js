const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
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

router.post('/api/users/login', async (req, res) => {
    
    const user = await UserModel.findOne({username:req.body.username});
    const match = await bcrypt.compare(user.password, req.body.password);

    req.session.loggedInUser = user._id
    res.status(201).json(user);
});

router.post('/api/users/logout', async (req, res) => {
    req.session = null;
    res.status(201).json(user);
});

module.exports = router;