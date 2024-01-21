const express = require('express');
const app = express();

const PORT = 5500;

app.set('view engine', 'ejs');
// this fn will set the view engine to ejs, to make this work rename the index.html to index.ejs

app.get('/', (req, res) => res.send('Welcome to Express & Node JS Backend Server'));

app.get('/index', (req, res) => res.render('index', { name: 'Rahul' }));
// here we can pass in values via the locals object
// when we use render method, we need to set a view engine's like ejs, pug, handlebars etc.
// ejs is a view engine that generates HTML markup It is a simple templating language/engine that
// lets its user generate HTML with plain JavaScript.

// syntax - res.render(view [, locals] [, callback])
// view - It is a string that is the file path of the view file to render.
// locals - It is an object whose properties define local variables for the view.
// callback - It is a callback function whose signature is (err, renderedData).

app.get('*', (req, res) => res.status(404).send('<center><h1>404, Page Not Found</h1></center>'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})