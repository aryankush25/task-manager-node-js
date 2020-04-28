const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})

const bcrypt = require('bcrypt')

// const myFunction = async () => {
// 	const myPass = 'My@12345'
// 	const hashedPassword = await bcrypt.hash(myPass, 8)

// 	console.log('myPass', myPass)
// 	console.log('hashedPassword', hashedPassword)

// 	const isMatch = await bcrypt.compare('My@12345', hashedPassword)

// 	console.log('isMatch', isMatch)
// }

// myFunction()
