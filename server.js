const mongoose = require('mongoose');
const User = require('./schema/userSchema');

require('dotenv').config();
const uri = process.env.MONGODB_URI;

const dbName = 'mongooseTest';

const userData = {
    username: 'John Doe',
    email: 'johndoe@gmail.com',
    age: 20,
    active: true
}

async function main() {
    await createDoc(userData);
}

const createDoc = async data => {

    await mongoose.connect(uri + dbName);

    // const user = new User(data);
    // user.save().then(() => console.log(result));

    // OR

    User

    const result = await User.create(data);
    console.log(result);

    mongoose.disconnect();
}

main().catch(err => console.log("Error occurred: ", err.message));