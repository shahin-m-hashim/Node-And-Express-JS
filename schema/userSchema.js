const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: 5,
        lowercase: true,
        immutable: true // prevents updates after creation
    },
    age: {
        type: Number,
        min: 12,
        max: 65,
        validate: {
            validator: v => v > 12,
            message: props => `${props.value} is not a valid age!`
        }

        // these all are great but they only work with the create and save method
        // for example instead of using updateOne,updateMany,deleteOne,deleteMany,
        // findOneAndUpdate,findOneAndDelete,findOneAndReplace,findOneAndRemove etc
        // instead always try to use findById,normal find and then call save on that user
        // coz thats gonna skip all of teh validations
        // eg - mode.findById(id).then(user => {user.age = 12; return user.save();})
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('User', userSchema);

// mongoose.model() is a function that takes two arguments: the name of the model and the
// schema that will be used to create the model. This model will be used to create
// documents in the database. The model name will be the name of the collection in the
// database. For example, if the model name is User, the collection name will be users. 