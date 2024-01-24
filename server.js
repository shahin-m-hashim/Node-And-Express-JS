// Require MongoDB language driver
const { MongoClient } = require("mongodb");

// Set uri of connection string.
const uri = "mongodb://127.0.0.1:27017"

// Create the MongoClient instance, this connects to a cluster or standalone server
const client = new MongoClient(uri);

// Database Name
const dbName = "students";

console.log('Connecting to the database...');

async function connectToDatabase() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        console.log('Connected to the database');

        // Access your database
        const database = client.db(dbName);

        console.log('Database:', database);

    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    } finally {
        // Ensure that the client will close when you finish
        await client.close();
    }
}

connectToDatabase();