/*
    GLOBALS OR GLOBAL VARIABLES in Node JS

    In Node theres no window object, instead theres a global object
    which contains all the global variables and methods available for the program anywhere and anytime

    __dirname   - path to current directory
    __filename  - file name 
    require     - function to use modules (CommonJS)
    module      - info about current module (file)
    process     - info about env where the program is being executed
*/

console.log("Directory Name: ", __dirname);
console.log("File Name: ", __filename);
