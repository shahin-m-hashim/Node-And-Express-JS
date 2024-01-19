import http from 'http';
import fs from 'fs';

const port = 3000;
const hostname = '127.0.0.1';

const homePage = fs.readFileSync('./pages/home.html');
const aboutPage = fs.readFileSync('./pages/about.html');
const contactPage = fs.readFileSync('./pages/contact.html');

// when it comes to real life we send files directly by copying the
// contents as string and sending that as a response via proper routing.

/*
    Routing and hyperlinks serve different purposes in the context of web development, and 
    understanding their respective roles can provide insight into why both are necessary.

    Hyperlinks: Hyperlinks, or simply links, are elements within web pages that allow users to 
    navigate between different resources on the internet. They are used to connect various web pages, 
    documents, or sections within a single document. When a user clicks on a hyperlink, the browser 
    sends a request to the server for the linked resource, and the server responds by providing 
    the content to the user's browser.

    Navigation: Hyperlinks facilitate navigation within a website or between different websites. 
    They allow users to move from one piece of content to another without the need for an intermediary step.

    Discoverability: Hyperlinks enable users and search engines to discover and access various web resources. 
    They form the backbone of the interconnected nature of the web, making it possible to explore and 
    access a wide array of content.

    Routing: Routing, on the other hand, is a mechanism used in web development to determine how incoming
    HTTP requests are handled by the server. It serves as a way to map specific URLs to the corresponding 
    code that processes and responds to those requests.

    URL Resolution: Routing is essential for mapping specific URLs to the appropriate server-side code or 
    resources. It enables the server to understand which piece of code or which resource is meant to 
    handle a particular URL.

    Dynamic Content: Routing allows developers to create applications with dynamic content and user 
    interactions. For example, in single-page applications (SPAs), routing is used to manage the display 
    of different components based on the URL, without requiring a full page refresh.

    SEO and Permalinks: Routing helps in creating search-engine-friendly URLs and enables the implementation 
    of permalinks, which are stable and consistent URLs for specific content. This is crucial for search 
    engine optimization (SEO) and user experience.

    RESTful Services: In the context of APIs, routing plays a key role in defining the endpoints and handling 
    requests for data retrieval, manipulation, and other interactions.

    Parameter Handling: Routing also allows for the handling of parameters within URLs, which is important 
    for passing data or instructions between the client and server.

*/

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homePage);
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(aboutPage);
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(contactPage);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 Page Not Found</h1><a href = '/'>Go Back Home</a>");
    }
});

// now in the browser's address bar, type http://localhost:3000 and hit enter
// then try http://localhost:3000/about
// and finally try something not in our routing, like http://localhost:3000/blahblah
// this will throw the corresponding error


/*
HTTP routing is a way to handle different requests made to a web server and determine how to respond to 
each request. It's like a traffic cop directing incoming requests to the appropriate destination.

When a user visits a website or interacts with a web application, their actions generate HTTP requests. 
These requests can be for different pages, resources, or actions on the server.

HTTP routing helps the server understand which code or functionality should be executed based on the 
requested URL. It maps specific URLs to specific functions or handlers that generate the appropriate 
response.

For example, if a user visits "http://example.com/about", the server needs to know what to do with this 
request. With HTTP routing, you can define a route that matches the "/about" URL and specify the code or 
function that should be executed to handle that request. This could be displaying information about the 
website or fetching data from a database.

In real life scenarios, its best to use frameworks like Express.js to handle routing much more efficiently.

*/

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));