require('dotenv').config()
const mongoose = require('mongoose');

const dbName = process.env.DB_NAME || 'vaitrade'
const dbEndpoint = process.env.DB_ENDPOINT || 'mongodb://localhost:27017'

mongoose.connect(`${dbEndpoint}/${dbName}`, {
	useNewUrlParser: true, 
	useUnifiedTopology: true
})
.then(() => console.log(`Successfully connected to db: "${dbName}"`))
.catch(err => {
	console.warn('Error connecting to the database ', err.message)
	console.log('Check your database connection? You can use .env file to add your db endpoint')
})

module.exports = mongoose;
