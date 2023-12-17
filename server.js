import http from 'http';
import fs from 'fs';

const port = 3000;
const hostname = '127.0.0.1';

// using streams and pipes are good for static files like images, videos, etc.
// If your HTML document contains dynamic data that needs to be generated dynamically for each request, 
// you'll typically need to use a templating engine or a mechanism to inject dynamic data into your HTML
// before sending it as a response. Streaming the entire HTML file might not be suitable for cases where 
// the content needs to be customized for each request.

const server = http.createServer((req, res) => {
    const name = 'Shahin';

    res.writeHead(200, { 'Content-Type': 'text/html' })

    let indexHTML = fs.readFileSync('./index.html', 'utf8');
    indexHTML = indexHTML.replace('{{name}}', name);

    res.end(indexHTML);
})

/*
    This method can work well for simpler scenarios and is suitable when you have a limited number of 
    dynamic values to replace.

    As your application grows or if you have more complex dynamic content, using a templating engine might 
    become a more maintainable solution. Templating engines offer features like conditional statements, 
    loops, and a cleaner syntax for injecting dynamic data into HTML. They are designed specifically for 
    this purpose and can make your code more readable and extensible.
*/

server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));