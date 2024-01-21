const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

const usersRouter = require('./routes/usersRouter');

app.get('/', (req, res) => res.send('Welcome to Express & Node JS Backend Server'));

app.use('/users', usersRouter);

app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));