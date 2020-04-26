const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.error(error)
	}

	console.info('Connected to DB')

	const db = client.db(databaseName)

	db.collection('users')
		.deleteMany({ age: 31 })
		.then((result) => {
			console.log(result)
		})
		.catch((error) => {
			console.error(error)
		})
})
