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

        // Access your database and your collection
        const collection = client.db(dbName).collection('cse');

        console.log('Retrieving documents from the collection...');

        // Use toArray method to convert find query result to an array
        let docs = await collection.find().toArray();

        // Log the retrieved documents
        // console.log("Collection of documents: ", docs);
        docs.forEach(doc => console.log(doc)); // Print each document to the console

        // const count = await collection.countDocuments(); OR
        console.log(`Documents found: ${docs.length}`);

    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    } finally {
        // Ensure that the client will close when you finish
        await client.close();
    }
}

Run();