const express = require('express');
const usersRouter = express.Router();
const {
    addUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController');

usersRouter.get('/', (req, res) => res.send('User Home Page'));
// the '/' will be updated to '/user' from app.js

// add users
usersRouter.post('/signup', addUser);

// update users by id
usersRouter.put('/update/:id', updateUser);

// delete users by id
usersRouter.delete('/delete/:id', deleteUser);

module.exports = usersRouter;