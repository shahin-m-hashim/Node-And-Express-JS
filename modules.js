/*
Modules in JavaScript are a way to organize and encapsulate code into reusable and independent units.
They allow developers to break down their code into smaller, manageable pieces, making it easier to
maintain, test, and collaborate on larger projects.

Modules used in html was to prevent naming conflicts between different scripts using export and import.
In plain js, we use the require and module.exports to use modules.

There are several reasons why we need modules in JavaScript:

Encapsulation: Modules allow us to encapsulate related code and data together, preventing them from
polluting the global namespace. This helps avoid naming conflicts and promotes code reusability.

Code Organization: Modules provide a structured way to organize our codebase. By separating functionality
into modules, we can easily locate and understand different parts of our application.

Reusability: Modules enable us to reuse code across different parts of our application or even in other
projects. We can import and use modules wherever needed, reducing code duplication and improving
maintainability.

Dependency Management: Modules help manage dependencies between different parts of our application. By
explicitly specifying dependencies, we can ensure that the required code is loaded and executed in the
correct order.

Maintainability: With modules, it becomes easier to maintain and update our codebase. We can make changes
to a specific module without affecting other parts of the application, making debugging and troubleshooting
more efficient.

Types of Modules:
1.  Local Modules - These are modules that we create in our application. We can create a module by placing
    the code in a separate file and exporting it using the module.exports object.

2.  Built-in Modules - These are modules that are provided by Node.js. We can import and use these modules
    in our application without having to install them separately.

3.  Third-party Modules - These are modules that are created and published by other developers. We can
    install and use these modules in our application using the npm package manager.

*/

//local Module
import { Sum } from './localModule.js';

console.log(Sum(1, 2));