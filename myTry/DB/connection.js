const mongoose = require('mongoose');

const URI = "mongodb+srv://My-First-MongoDB:aditya6123@connecting-mongodb-and-node-ibw5c.mongodb.net/test?retryWrites=true&w=majority";



const connectDB = async () => {
    await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true}).catch((err) => console.log(err));
    console.log('DB has been connected');

}

module.exports = connectDB;