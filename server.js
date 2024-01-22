// Require MongoDB language driver
const { MongoClient } = require("mongodb")

// Set the value of uri to your Atlas connection string.
const uri = " add your connection string here "

// Create the MongoClient instance
const client = new MongoClient(uri)

// note - You need only one `MongoClient` instance per Atlas cluster for your application. 
// Having more than one `MongoClient` instance for a single Atlas cluster in your application
// will increase costs and negatively impact the performance of your database.

// Establishes a connection to the database using the MongoClient instance
const main = async () => {
    try {
        await client.connect()
        console.log("Connected to MongoDB Atlas!")
        // list out all the databases in the cluster
        const dbs = await client.db().admin().listDatabases()
        console.table(dbs.databases)
    } catch (error) {
        console.error(error.message)
    } finally {
        await client.close()
    }
}

// Run the  function, catch any errors and finally close the connection when the main function is done
main()
    .catch(err => console.log(err.message))
    .finally(() => client.close())
