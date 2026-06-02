const mongoose = require('mongoose');
require("dotenv").config()
 
async function start() {
    console.log(process.env.MONGO_URI)
try {
await mongoose.connect(process.env.MONGO_URI);
console.log("MONGO")
} catch (err) {
    console.error(err.message)
}

}

start()
module.exports = mongoose;
