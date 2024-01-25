const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);


async function main() {
    try {
        // Connect to the MongoDB cluster or server
        await client.connect();
        console.log('Connected to the server or cluster');

        // Get the collections
        const accounts = client.db("Bank").collection("accounts");
        const transfers = client.db("Bank").collection("transfers");

        // Account Information
        const transactionAmount = 150;
        const accountIDSender = "MDB574189300";
        const accountIDReceiver = "MDB343652528";

        const transferDoc = {
            from: accountIDSender,
            to: accountIDReceiver,
            amount: transactionAmount,
            timestamp: new Date()
        }

        // Start a session with the connected client
        const session = client.startSession();

        // Start a transaction for the session
        const transfer = async () => {
            try {
                const transactionResult = await session.withTransaction(async () => {

                    // Step 1: Update the sender account balance
                    const senderResult = await accounts.updateOne(
                        { account_id: accountIDSender },
                        { $inc: { balance: -transactionAmount } },
                        { upsert: true, session }
                    );
                    console.log(`${transactionAmount} Rs debited from sender ${accountIDSender}: ${senderResult.acknowledged}`);

                    // Step 2: Update the receiver account balance
                    const receiverResult = await accounts.updateOne(
                        { account_id: accountIDReceiver },
                        { $inc: { balance: transactionAmount } },
                        { upsert: true, session }
                    );
                    console.log(`${transactionAmount} Rs credited to receiver ${accountIDReceiver}: ${receiverResult.acknowledged}`);

                    // Step 3: Insert the transfer document
                    const transferResult = await transfers.insertOne(transferDoc, { session });
                    console.log(`Transfer record inserted with id: ${transferResult.insertedId}`);

                    // Step 4: Update the transfers complete for the sender
                    const updateSenderTransferResults = await accounts.updateOne(
                        { account_id: accountIDSender },
                        { $push: { transfers_complete: transferResult.insertedId } },
                        { upsert: true, session }
                    );
                    console.log(`Added transaction ${transferResult.insertedId} to senders account: ${updateSenderTransferResults.acknowledged}`);

                    // Step 5: Update the transfers complete for the receiver
                    const updateReceiverTransferResults = await accounts.updateOne(
                        { account_id: accountIDReceiver },
                        { $push: { transfers_complete: transferResult.insertedId } },
                        { upsert: true, session }
                    );
                    console.log(`Added transaction ${transferResult.insertedId} to receivers account: ${updateReceiverTransferResults.acknowledged}`);
                });

                console.log("Committing the transaction");

                // Step 6: Check the transaction result
                transactionResult // shit doesn't work in this terminal fsr 
                    ? console.log('Transaction completed successfully')
                    : console.log('Transaction aborted intentionally');
            } catch (err) {
                console.error('Transfer aborted:', err.message);
                process.exit(1);
            } finally {
                await session.endSession();
            }
        };

        await transfer();
    } catch (err) {
        console.error('Connection Error Occurred:', err.message);
    }
    finally {
        await client.close();
        console.log('Connection Closed');
    }
}

main();