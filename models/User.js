const mongoose = require('mongoose');
const { Schema } = mongoose; // ES6 destructuring const Schema = mongoose.Schema;
// mongoose wants to know all the different properties that our Collection might have

const userSchema = new Schema({
  googleId: String, // tells our Schema that this value will always be a String
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('users', userSchema);
// mongoose will not override existing collections, it will only create it
// if it doesn't exist
