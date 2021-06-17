const dotenv = require('dotenv');
dotenv.config();
const dbConnection = process.env.dbConnection
const mongoose = require('mongoose')
const chalk = require('chalk')
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
const connectDb = async() => {
    let response;
    try {
        await mongoose.connect(dbConnection, options);
        response = chalk.green('mongoDB connected');
    } catch (error) {
        response = chalk.red('Connection error', error.message);
    } finally {
        console.log(response);
    }
}
connectDb();

module.exports = mongoose.connection;