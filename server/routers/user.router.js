const express = require('express');
const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const router = express.Router();

// MIDDLEWARES

function checkAdminAccess(req, res, next) {
    if(req.session.access === "admin") {
        next()   
    }
    else {
        res.status(403).json("You are not allowed to access this route.")
    }
}

function checkLogin(req, res, next) {
    if(req.session.username) {
        next()   
    } else {
        res.status(401).json(null)
    }
}

// ENDPOINTS

router.get('/api/users', checkAdminAccess, async (req, res) => {
    const users = await UserModel.find({});
    res.status(200).json(users);
});

router.delete('/api/users/:id', checkAdminAccess, async (req, res) => {
    await UserModel.deleteOne({ _id: req.params.id });
       res.status(200).json("User was deleted.");    
});

router.put('/api/users/', checkAdminAccess, async (req, res) => {
    await UserModel.findOneAndUpdate({ _id: req.body._id }, {access: req.body.access});
    res.status(200).json("User was updated.");
});

router.post('/api/users/register', async (req, res) => {
    const { username, password, avatar } = req.body;

    // check if user exists
    const existingUser = await UserModel.findOne({username: username});
    if (existingUser) {
        return res.status(400).json("Username already exists.");
    }
    // hash password and save user 
    const hashedPassword = await bcrypt.hash(password, 10);
    const userToSave = {
        username: username,
        password: hashedPassword,
        avatar: avatar,
        access: "user"
    }
    const newUser = await UserModel.create(userToSave);
    res.status(201).json(newUser);
});

// check if user is logged in and return user info
router.get('/api/users/authenticate', checkLogin, (req, res) => {
    res.status(200).json({
        username: req.session.username,
        access: req.session.access,
        avatar: req.session.avatar
    })
})

router.post('/api/users/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({username:username});

    if (!user || !await bcrypt.compare(password, user.password)) {    
        return res.status(401).json("Incorrect password or username!");
    }

    //create session
    req.session.username = user.username
    req.session.access = user.access
    req.session.avatar = user.avatar
    res.status(200).json(user);
});

router.post('/api/users/logout', async (req, res) => {
    req.session = null;
    res.status(200).json("Logged out.");
});

module.exports = router;