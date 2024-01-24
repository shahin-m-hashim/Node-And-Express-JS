// Require MongoDB language driver
const { MongoClient, ObjectId } = require("mongodb");
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

        // node.js driver and mongo-shell are different, have similar syntax but not exactly the same.
        // so use - https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find
        // https://www.mongodb.com/docs/drivers/node/current/

        console.log('Updating documents in the collection...');

        const filter = { _id: new ObjectId("65b0aeafbcb6f3794ef21569") };

        // Specify the update to set a value for the plot field
        const update = {
            $set: {
                year: 2020
            },
            $unset: {
                age: ""
            }
        };

        /* Set the upsert option to insert a document if no documents match the filter */
        const options = { upsert: true };

        let result = await collection.updateOne(filter, update, options);

        // Print the number of matching and modified documents
        console.log(`Status: ${result.acknowledged},\nMatched Count: ${result.matchedCount},\nModified Count: ${result.modifiedCount},\nUpserted Document Id: ${result.upsertedId},\nUpserted Count: ${result.upsertedId}`);
    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    } finally {
        // Ensure that the client will close when you finish
        await client.close();
    }
}

Run();