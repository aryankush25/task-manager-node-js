const mongoose = require('mongoose')
const validator = require('validator')
const R = require('ramda')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager-api'

mongoose.connect(connectionURL + '/' + databaseName, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
})

// const User = mongoose.model('User', {
// 	name: {
// 		type: String,
// 		required: true,
// 		trim: true
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		lowercase: true,
// 		validate(value) {
// 			if (!validator.isEmail(value)) {
// 				throw new Error('Email is invalid')
// 			}
// 		}
// 	},
// 	age: {
// 		type: Number,
// 		default: 0,
// 		validate(value) {
// 			if (value < 0) {
// 				throw new Error('Age must be greater than equal to 0.')
// 			}
// 		}
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 7,
// 		validate(value) {
// 			if (R.includes('password', R.toLower(value))) {
// 				throw new Error("Password must not contain string 'password'")
// 			}
// 		}
// 	}
// })

// const me = new User({
// 	name: '     Aryan Agarwal   ',
// 	email: 'aryan@GEEKYANTS.com       ',
// 	password: 'PASSWORD123'
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
		type: String,
		trim: true,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	}
})

const task1 = new Task({
	description: 'I am DON          ',
	completed: true
})

task1
	.save()
	.then((task) => {
		console.log(task)
	})
	.catch((error) => {
		console.error(error)
	})
