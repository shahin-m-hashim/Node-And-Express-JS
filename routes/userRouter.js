const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => res.send('User Home Page'));

userRouter.get('/about', (req, res) => res.send('User About Page'));

userRouter.get('/contact', (req, res) => res.send('User Contact Page'));

userRouter.get('/profile', (req, res) => res.send('User Profile Page'));

module.exports = userRouter;