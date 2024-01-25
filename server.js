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

        // Access your database and your collection
        const database = client.db("students");
        const collection = database.collection("grades");

        console.log('Connected to the database:', database.databaseName);

        const result = await collection.bulkWrite([
            { insertOne: { document: { name: "John", grade: 80, subject: "English" } } },
            { insertOne: { document: { name: "Susan", grade: 65, subject: "Math" } } },
            { insertOne: { document: { name: "Mike", grade: 90, subject: "Science" } } },
            { insertOne: { document: { name: "Jane", grade: 10, subject: "History" } } },
            { insertOne: { document: { name: "Haifa", grade: 70, subject: "Science" } } },
            { insertOne: { document: { name: "Suhana", grade: 60, subject: "Science" } } },
            { insertOne: { document: { name: "Sumina", grade: 85, subject: "Biology" } } },
            { insertOne: { document: { name: "Ajmal", grade: 10, subject: "History" } } },
            {
                updateOne: {
                    filter: { name: "Sulthana" },
                    update: { $set: { grade: 100, subject: "Economics" } },
                    upsert: true
                }
            },
            {
                updateMany: {
                    filter: { subject: { $in: ["English", "Science"] } },
                    update: {
                        $set: {
                            GPA: 3.5
                        }
                    }
                }
            }, {
                updateMany: {
                    filter: { grade: { $lt: 20 } },
                    update: { $set: { grade: 55 } }
                }
            },
            { deleteOne: { filter: { name: "Haifa" } } },
            { deleteMany: { filter: { grade: { $lt: 20 } } } }
        ],
            {
                ordered: true, // default is true meaning the operations will be executed in order
            }
        )

        console.log('Result:', result);
    } catch (err) {
        console.error('Error Occurred:', err.message);
    } finally {
        await client.close();
    }
}

Run();