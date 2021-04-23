const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const router = express.Router();

router.get('/api/users', async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
});

router.post('/api/users/register', async (req, res) => {
    const { username, password } = req.body;

    // check if user exists
    const existingUser = await UserModel.findOne({username: username});
    if (existingUser) {
        return res.status(400).json("Username already exists");
    }
    // hash password and save user 
    const hashedPassword = await bcrypt.hash(password, 10);
    const userToSave = {
        username: username,
        password: hashedPassword,
        access: "user"
    }
    const newUser = await UserModel.create(userToSave);
    res.status(201).json(newUser);
});

router.post('/api/users/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({username:username});

    if (!user || !await bcrypt.compare(password, user.password)) {    
        return res.status(401).json("Incorrect password or username!");
    }

    //create session
    req.session.loggedInUser = user._id
    req.session.role = user.access
    console.log(req.session.loggedInUser)
    res.status(204).json(user);
});

router.post('/api/users/logout', async (req, res) => {
    req.session = null;
    res.status(201).json("logged out");
});

module.exports = router;