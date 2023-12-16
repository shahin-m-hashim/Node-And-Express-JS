/*
The path module in Node.js provides utilities for working with file and directory paths. It is an essential
module for handling file system operations and is widely used in web development, server-side scripting,
and other applications.

The path module offers various methods to manipulate and extract information from file paths, such as
resolving, joining, normalizing, and parsing paths. It helps in dealing with different operating systems'
file path formats, making your code more portable and cross-platform compatible.

Some of the key functionalities provided by the path module include:

Resolving paths: The path.resolve() method resolves a sequence of paths or path segments into an absolute
path. It handles relative paths, symbolic links, and parent directory references.

Joining paths: The path.join() method joins multiple path segments into a single path. It intelligently
handles the directory separator based on the operating system.

Normalizing paths: The path.normalize() method normalizes a given path by resolving . and .. segments and
removing redundant separators.

Extracting path components: The path.parse() method parses a path into an object containing its individual
components like the root, directory, base, name, and extension.

The path module is important because it simplifies working with file paths, ensures cross-platform
compatibility, and helps in writing robust and portable code. It saves developers from manually handling
path manipulations and reduces the chances of errors or inconsistencies when dealing with file system
operations.

*/

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('File Name: ', __filename);
console.log('Directory Name: ', __dirname);


// Some Important Methods of Path Module :

// path.basename() : Returns the last portion of a path
console.log('File Base Name: ', path.basename(__filename));
console.log('Directory Base Name: ', path.basename(__dirname));

// path.dirname() : Returns the directory part of a path
console.log('Directory Name: ', path.dirname(__filename));

// path.extname() : Returns the file extension of a path
console.log('File Ext Name: ', path.extname(__filename));
console.log('Directory Ext Name: ', path.extname(__dirname));

// path.parse() : Returns an object from a path
console.log('Parsed File Object: \n', path.parse(__filename));

// path.join() : Joins path segments
console.log('New Path: ', path.join(__dirname, 'test', 'index.html'));

// path.isAbsolute() : Check if a path is an absolute path
console.log('Is Path ', __dirname, ' Absolute: ', path.isAbsolute(__dirname));

// path.resolve() : Resolves an absolute path
console.log('Resolved Path: ', path.resolve('path.js'));

// path.normalize() : Normalizes the given path, resolving '..' and '.' segments
console.log('Normalized Path: ', path.normalize('./test/test1//2slashes/1slash/tab/..'));