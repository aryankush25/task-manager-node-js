const mongoose = require('mongoose')
const validator = require('validator')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

mongoose.connect(connectionURL + '/' + databaseName, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

const User = mongoose.model('User', {
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Email is invalid')
			}
		}
	},
	age: {
		type: Number,
		default: 0,
		validate(value) {
			if (value < 0) {
				throw new Error('Age must be greater than equal to 0.')
			}
		}
	}
})

const me = new User({
	name: '     Aryan Agarwal   ',
	email: 'aryan@GEEKYANTS.com       '
})

me.save()
	.then((user) => {
		console.log(user)
	})
	.catch((error) => {
		console.error(error)
	})

// const Task = mongoose.model('Task', {
// 	description: {
// 		type: String
// 	},
// 	completed: {
// 		type: Boolean
// 	}
// })

// const task1 = new Task({
// 	description: 'I have to complete this course by 27th April 2020',
// 	completed: false
// })

// task1
// 	.save()
// 	.then((task) => {
// 		console.log(task)
// 	})
// 	.catch((error) => {
// 		console.error(error)
// 	})
