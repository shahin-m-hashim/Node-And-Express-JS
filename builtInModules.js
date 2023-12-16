// Some examples of built-in modules are:
// os - provides information about the operating system
// path - provides utilities for working with file and directory paths
// fs - provides file system-related functionality
// http - provides functionality for creating HTTP servers and clients

// to see all the modules available in Node.js, we can visit the Node.js documentation.

// OS Module
// import os from 'os';
// console.log("OS Object:\n", os);
// console.log("Home Directory:\n", os.homedir());
// console.log("OS Type:\n", os.type());
// console.log("OS Platform:\n", os.platform());
// console.log("OS Architecture:\n", os.arch());

// Path Module
// import path from 'path';
// console.log("Path Object:\n", path);
// console.log("Path Separator:\n", path.sep);
// console.log("Path Delimiter:\n", path.delimiter);

// File System Module
import fs from 'fs';
// console.log("File System Object:\n", fs);
// console.log("Read a file :\n", fs.readFileSync('./package.json', 'utf8'));
// console.log("Create a file :\n", fs.writeFileSync('./testFile.txt', 'Hello World!'));
// for reading and writing we have both sync and async methods
// for sync simply add 'Sync' to the method name
// for async, we need to pass a callback function as the last argument
console.log("Read a file using Async Read :\n", fs.readFile('./page.json', 'utf8', (err, data) => {
    if (err) {
        console.log("Error:", err);
        return;
    }
    console.log("Data:", data);
}));


// HTTP Module
// import http from 'http';
// console.log("HTTP Object:\n", http);
// console.log("Create a server :\n", http.createServer((req, res) => {
//     res.end("Hello World!");
// }).listen(5000, () => console.log("Server is running on port 5000...")));

// to see the output simply go to localhost:5000 in your browser

