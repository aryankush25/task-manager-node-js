const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.error(error)
	}

	console.info('Connected to DB')

	const db = client.db(databaseName)

	// db.collection('users').insertMany(
	// 	[
	// 		{
	// 			name: 'Yo Yo Honey Singh',
	// 			age: 31
	// 		},
	// 		{
	// 			name: 'Badshah',
	// 			age: 30
	// 		},
	// 		{
	// 			name: 'Raftaar',
	// 			age: 29
	// 		}
	// 	],
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.error(error)
	// 		}

	// 		console.info(result.ops)
	// 	}
	// )

	// db.collection('tasks').insertMany(
	// 	[
	// 		{
	// 			description: 'Clean the house',
	// 			completed: true
	// 		},
	// 		{
	// 			description: 'Renew inspection',
	// 			completed: false
	// 		},
	// 		{
	// 			description: 'Pot plants',
	// 			completed: false
	// 		}
	// 	],
	// 	(error, result) => {
	// 		if (error) {
	// 			return console.error(error)
	// 		}

	// 		console.info(result.ops)
	// 	}
	// )
})
