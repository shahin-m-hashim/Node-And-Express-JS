const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('Welcome to Express & Node JS Backend Server'));

/* 
    Insomnia testing and debugging
    1. Open insomnia
    2. create new collection
    3. create new http request
    4. select the request type
    5. enter the url and send the request
    6. Incase of post,put,delete etc use the body tab to enter the data
*/

const users = [
    {
        id: 1,
        name: 'John',
    },
    {
        id: 2,
        name: 'Jane',
    },
    {
        id: 3,
        name: 'Doe',
    }
];

app.delete('/delete/user/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({
            success: true,
            message: `User with id ${id} deleted successfully`,
            data: users
        });
    } else {
        res.status(404).json({
            success: false,
            message: `User with id ${id} does not exist`,
            data: users
        });
    }
});

app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));