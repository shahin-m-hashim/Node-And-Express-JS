const express = require('express');
const { v4: uuidv4 } = require('uuid');
// this is used to generate unique id's for each user

const app = express();

const PORT = 3000;

app.get('/', (req, res) => res.send('Welcome to Express & Node JS Backend Server'));

// while working with post method there are certain key things to know
// by default express sends data in json format when using send method

// req.params: This refers to route parameters in the URL of the request.
// When defining routes in Express, you can specify placeholders in the URL, and the values for
// these placeholders are stored in "req.params".For example, in the URL "/users/:userId",
// the value for ":userId" would be accessible through "req.params.userId".

// req.body: This refers to the data sent with a POST or PUT request.Typically, when sending data from
// a form or through an API request, the data is included in the body of the request, and it is parsed and
// made accessible through "req.body".

// In Express.js, when handling a POST request, form data or JSON data sent in the request body would be 
// accessed using req.body, while route parameters specified in the URL would be accessed using req.params.

/* 
    Insomnia testing and debugging
    1. Open insomnia
    2. create new collection
    3. create new http request
    4. select the request type
    5. enter the url and send the request
    6. Incase of post,put,delete etc use the body tab to enter the data
*/

app.post('/login/param/:uid', (req, res) => {
    console.log("Request Params: ", req.params); // handles params like /login/123
    res
        .status(201)
        .send('Param POST Request Successful');
});

app.post('/login/query/', (req, res) => {
    console.log("Request Query: ", req.query); // handles query like /login/query?uid=123&pass=example&name=John
    res
        .status(201)
        .send('Query POST Request Successful');
});

app.use(express.json());
// handles body like {"uid": 123, "name": "John"}
// this middleware is used to parse the body of the request and make it accessible through req.body
// it's crucial to use this middleware before handling any POST requests instead of any JSON methods


// Using Body is the most recommended and secure way of sending data

const user = [];
app.post('/login/body/', (req, res) => {
    if (Object.keys(req.body).length === 0) { // Check if the request body is empty
        return res.status(400).send('Error: Empty request body'); // Return a 400 Bad Request response for an empty body
    }

    const id = uuidv4();
    user.push({ id, ...req.body });
    console.log("Data: ", user);
    res.status(201).send('Body POST Request Successful');
});

app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));