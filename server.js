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

        console.log('Filtering documents from the collection...');

        const query = { name: "John Doe" };
        const projection = { _id: 0, name: 1 };

        // node.js driver and mongo-shell are different, have similar syntax but not exactly the same.
        // so use - https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find
        // https://www.mongodb.com/docs/drivers/node/current/

        // Use toArray method to convert find query result to an array

        // let docs = await collection.find(query, { projection }).toArray();
        // or collection.find(query).project(projection).sort(sort).limit(2).toArray();

        let docs = await collection.find({}, { projection, sort: { name: 1 }, limit: 3 }).toArray();

        // Print each document to the console
        docs.forEach(doc => console.log(doc));
        console.log(`No of documents found: ${docs.length}`);

    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    } finally {
        // Ensure that the client will close when you finish
        await client.close();
    }
}

Run();