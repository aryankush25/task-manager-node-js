const express = require('express')
require('./db/mongoose')
const Task = require('./models/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.get('/tasks', (req, res) => {
	Task.find({})
		.then((tasks) => {
			res.send(tasks)
		})
		.catch((error) => {
			res.status(400).send(error)
		})
})

app.get('/tasks/:id', (req, res) => {
	Task.findById(req.params.id)
		.then((task) => {
			if (!task) {
				return res.status(404).send()
			}

			res.send(task)
		})
		.catch((error) => {
			res.status(500).send(error)
		})
})

app.post('/tasks', (req, res) => {
	const task = new Task(req.body)

	task.save()
		.then((currentTask) => {
			res.status(201).send(currentTask)
		})
		.catch((error) => {
			res.status(500).send(error)
		})
})

app.patch('/tasks/:id', async (req, res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['description', 'completed']

	const isAllowed = updates.every((update) => allowedUpdates.includes(update))

	if (!isAllowed) {
		return res.status(400).send({ error: 'Invalid Updates!' })
	}

	try {
		const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

		console.log('$$$$ task', task)

		if (!task) {
			return res.status(404).send()
		}

		res.send(task)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.delete('/tasks/:id', async (req, res) => {
	try {
		const task = await Task.findByIdAndDelete(req.params.id)

		if (!task) {
			return res.status(404).send()
		}

		res.send(task)
	} catch (error) {
		res.status(400).send(error)
	}
})

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})
