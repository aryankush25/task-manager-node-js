const mongoose = require('mongoose')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

mongoose.connect(connectionURL + '/' + databaseName, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

// const User = mongoose.model('User', {
// 	name: {
// 		type: String
// 	},
// 	age: {
// 		type: Number
// 	}
// })

// const me = new User({
// 	name: 'Aryan',
// 	age: 21
// })

// me.save()
// 	.then((user) => {
// 		console.log(user)
// 	})
// 	.catch((error) => {
// 		console.error(error)
// 	})

const Task = mongoose.model('Task', {
	description: {
		type: String
	},
	completed: {
		type: Boolean
	}
})

const task1 = new Task({
	description: 'I have to complete this course by 27th April 2020',
	completed: false
})

task1
	.save()
	.then((task) => {
		console.log(task)
	})
	.catch((error) => {
		console.error(error)
	})
