require('dotenv').config();

const mongoose= require("mongoose");
const mongoDBConnection = mongoose.connect(process.env.MONGO_URL + '/onepercent')

module.exports = mongoDBConnection;