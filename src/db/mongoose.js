const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

mongoose.connect(connectionURL + '/' + databaseName, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

const User = mongoose.model('User', {
	name: {
		type: String
	},
	age: {
		type: Number
	}
})

const me = new User({
	name: 'Aryan',
	age: 21
})

me.save()
	.then((user) => {
		console.log(user)
	})
	.catch((error) => {
		console.error(error)
	})
