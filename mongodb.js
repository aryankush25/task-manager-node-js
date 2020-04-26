const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
	if (error) {
		return console.error(error)
	}

	console.info('Connected to DB')

	const db = client.db(databaseName)

	// db.collection('users').findOne({ _id: new ObjectID('5ea581a62dc2dc578fa26de1') }, (error, user) => {
	// 	if (error) {
	// 		return console.error('Error - ', error)
	// 	}

	// 	console.log('User', user)
	// })

	// db.collection('users')
	// 	.find({ age: 31 })
	// 	.toArray((error, users) => {
	// 		if (error) {
	// 			return console.error('Error - ', error)
	// 		}

	// 		console.log('users', users)
	// 	})

	db.collection('tasks')
		.find({ completed: true })
		.toArray((error, tasks) => {
			if (error) {
				return console.error('Error - ', error)
			}
			console.log('tasks', tasks)
		})
})
