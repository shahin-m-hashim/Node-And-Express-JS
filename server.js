const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGODB_URI;

// Create the MongoClient instance, this connects to a cluster or standalone server
const client = new MongoClient(uri);

// Aggregation
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/aggregation/
// https://docs.mongodb.com/manual/aggregation/
// general workflow: collection -> $match -> $sort -> $group -> $project -> output

/*
    Aggregation operations process data records and return computed results. When working with data 
    in MongoDB, you may have to quickly run complex operations that involve multiple stages to gather 
    metrics for your project. Generating reports and displaying useful metadata are just two major use 
    cases where MongoDB aggregation operations can be incredibly useful, powerful, and flexible.

    Diff b/w find() and aggregate():

    - find() returns a cursor, aggregate() returns a promise
    - find() returns all documents that match the query, aggregate() returns a new collection/db 
        or replaces an existing collection/db
    - find() returns documents in the order of the index, aggregate() returns documents in the
        order of the pipeline
    - find() returns documents that match the query, aggregate() returns transformed documents
        that match the pipeline
    - find() returns documents in BSON format, aggregate() returns documents in JSON format

*/

async function Run() {
    // Create a new MongoClient instance
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster or server
        await client.connect();
        console.log('Connected to the server or cluster.');

        // Access the "aggregation" database and the "restaurants" collection
        const collection = client.db("aggregation").collection("restaurants");

        // Sample documents to insert into the collection
        const documents = [
            {
                name: "Rising Sun Bakery",
                stars: 3,
                categories: ["Bakery", "Sandwiches"],
                city: "New York",
                state: "NY",
                zipCode: "90001",
            },
            {
                name: "Cafe au Late",
                stars: 4,
                categories: ["Cafe", "Bar"],
                city: "Los Angeles",
                state: "CA",
                zipCode: "90002",
            },
            {
                name: "Liz's Coffee Bar",
                stars: 5,
                categories: ["Coffee", "Bakery"],
                city: "San Francisco",
                state: "CA",
                zipCode: "90003",
            },
            {
                name: "Oak Steakhouse",
                stars: 3,
                categories: ["Steak", "Bakery", "Seafood"],
                city: "New York",
                state: "NY",
                zipCode: "90004",
            },
            {
                name: "Petit Cookie",
                stars: 1,
                categories: ["Bakery", "Dessert"],
                city: "Boston",
                state: "MA",
                zipCode: "90005",
            },
            {
                name: "Chocolate Chip Cookie",
                stars: 5,
                categories: ["Dessert"],
                city: "Miami",
                state: "FL",
                zipCode: "90006",
            },
            {
                name: "Gingerbread Cookie",
                stars: 3,
                categories: ["Bar", "Cafe", "Dessert"],
                city: "Seattle",
                state: "WA",
                zipCode: "90007",
            },
            {
                name: "Oatmeal Cookie",
                stars: 4,
                categories: ["Bakery", "Dessert"],
                city: "Austin",
                state: "TX",
                zipCode: "90008",
            },
            {
                name: "Sugar Cookie",
                stars: 5,
                categories: ["Bar", "Dessert"],
                city: "Denver",
                state: "CO",
                zipCode: "90009",
            },
            {
                name: "Snicker doodle Cookie",
                stars: 2,
                categories: ["Cafe", "Dessert"],
                city: "Portland",
                state: "OR",
                zipCode: "90010",
            }
        ];

        // Insert sample documents into the "restaurants" collection
        let result = await collection.insertMany(documents);
        console.log(`${result.insertedCount} documents were inserted.`);

        // Define the aggregation pipeline stages
        const pipeline = [
            // Stage 1: Filter documents by category "Bakery"
            { $match: { categories: "Bakery" } },

            // Stage 2: Sort documents by stars in descending order
            { $sort: { stars: -1 } },

            // Stage 3: Group documents by stars and calculate the total count
            // in our we find the total number of bakeries for each star rating
            // https://www.mongodb.com/docs/manual/aggregation/
            { $group: { _id: "$stars", total: { $sum: 1 } } },

            // Stage 4: Project the _id and total fields to the output
            { $project: { _id: 0, stars: "$_id", count: "$total" } },

            // Stage 5: Write the result to a new collection named "bakery"
            { $out: "bakery" }
        ];

        // Execute the aggregation pipeline
        await collection.aggregate(pipeline).toArray();

        /*
            Note:
            if you use $out, the aggregated documents are written to a new collection, 
            and no documents are returned to the output cursor. Therefore, you won't see any 
            output when iterating over result.

            If you don't use $out, MongoDB returns the aggregated documents in the output cursor, 
            and you can see them in the console by iterating over result. 
        */

        // if $out is not used, this will print the result in the console
        // for await (const doc of result) {
        //     console.log(doc);
        // }

        console.log('Aggregation completed successfully.');

    } catch (err) {
        console.error('Error occurred:', err.message);
    } finally {
        // Close the MongoDB connection
        await client.close();
        console.log('Connection to the server is now closed.');
    }
}

Run();