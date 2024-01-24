// Require MongoDB language driver
const { MongoClient, ObjectId, Collection } = require("mongodb");
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
        const database = client.db(dbName);

        // node.js driver and mongo-shell are different, have similar syntax but not exactly the same.
        // so use - https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find
        // https://www.mongodb.com/docs/drivers/node/current/

        console.log('Creating collections in the database...');

        // Create a collection
        let result = await database.createCollection("test");
        console.log(result.collectionName, 'has been created in the database', result.dbName);

        // Drop a collection
        // result = await database.dropCollection("test");
        // console.log("Collection test has been dropped from the database:", result);

    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    } finally {
        // Ensure that the client will close when you finish
        await client.close();
    }
}

Run();