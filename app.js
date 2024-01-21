const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('Welcome to Express & Node JS Backend Server'));

const userRouter = require('./routes/userRouter');

app.use('/user', userRouter);
// incase there is no base path, then we can use app.use(userRouter);
// the '/user' is a base path, its like a prefix to all the paths in userRouter.
// this middleware just appends this path to the userRouter paths and is handled by userRouter.

app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));