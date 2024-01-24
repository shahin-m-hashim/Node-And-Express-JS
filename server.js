// Require MongoDB language driver
const { MongoClient } = require("mongodb");
require('dotenv').config();

// Set uri of connection string.
const uri = process.env.MONGODB_URI;

// process.env will look for the .env file and load the variables into the environment

// Create the MongoClient instance, this connects to a cluster or standalone server
const client = new MongoClient(uri);

// Database Name
const dbName = "students";

console.log('Connecting to the database...');

async function Run() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected to the database');

        // Access your database
        const database = client.db(dbName);

        // Access your collection
        const collection = database.collection('cse');

        // single line collection syntax
        // const collection = client.db(dbName).collection('cse');

        const document = { name: 'John Doe', major: 'Computer Science', year: 2023 };

        const multipleDocuments = [
            {
                name: 'Sam Daniel',
                age: 30,
                profession: 'Engineer'
            },
            {
                name: 'Jane Smith',
                age: 28,
                profession: 'Designer'
            },
            {
                name: 'Alex Johnson',
                age: 35,
                profession: 'Manager'
            }
        ]

        // console.log('Database:', database);
        // console.log('Collection:', collection);

        const insertOneStatus = await collection.insertOne(document);
        console.log(`Document inserted with the _id: ${insertOneStatus.insertedId}`);

        const insertManyStatus = await collection.insertMany(multipleDocuments);
        console.log(`${insertManyStatus.insertedCount} documents were inserted`);

        /*
            It's quite straightforward to use the MongoDB Node.js driver to perform operations 
            such as insertOne, insertMany, find, and more.
        */

    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    } finally {
        // Ensure that the client will close when you finish
        await client.close();
    }
}

Run();