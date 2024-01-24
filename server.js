// Require MongoDB language driver
const { MongoClient } = require("mongodb");
require('dotenv').config();

// Set uri of connection string.
const uri = process.env.MONGODB_URI;

// process.env will look for the .env file and load the variables into the environment

// Create the MongoClient instance, this connects to a cluster or standalone server
const client = new MongoClient(uri);

console.log('Connecting to the server or cluster...');

// node.js driver and mongo-shell are different, have similar syntax but not exactly the same.
// so use - https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find
// https://www.mongodb.com/docs/drivers/node/current/

async function Run() {
    try {
        // Connect to the MongoDB cluster or server
        await client.connect();

        // Database Name
        const dbName = "test";

        // Access your database and your collection
        const database = client.db(dbName);

        console.log('Connected to the database', database.databaseName);
        // console.log("Database stats:", await database.stats());
        const collections = await database.listCollections().toArray();
        collections.length > 0 ?
            console.log("Collections in the database:", collections.map(collection => collection.name)) :
            console.log("No collections in the database");

        // create a collection
        let result = await database.createCollection('collectionTest');
        console.log("Created a collection: ", result.collectionName);


        // drop the database
        result = await database.dropDatabase();
        console.log("Dropped the database: ", result);

    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    } finally {
        // Ensure that the client will close when you finish
        await client.close();
    }
}

Run();