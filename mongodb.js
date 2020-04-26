const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.error(error)
	}

	console.info('Connected to DB')

	const db = client.db(databaseName)

	const updateId = new ObjectID('5ea55096615da6550b3707a8')
})
