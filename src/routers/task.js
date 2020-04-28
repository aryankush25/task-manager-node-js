const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.get('/tasks', (req, res) => {
	Task.find({})
		.then((tasks) => {
			res.send(tasks)
		})
		.catch((error) => {
			res.status(400).send(error)
		})
})

router.get('/tasks/:id', (req, res) => {
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

router.post('/tasks', (req, res) => {
	const task = new Task(req.body)

	task.save()
		.then((currentTask) => {
			res.status(201).send(currentTask)
		})
		.catch((error) => {
			res.status(500).send(error)
		})
})

router.patch('/tasks/:id', async (req, res) => {
	const updates = Object.keys(req.body)
	const allowedUpdates = ['description', 'completed']

	const isAllowed = updates.every((update) => allowedUpdates.includes(update))

	if (!isAllowed) {
		return res.status(400).send({ error: 'Invalid Updates!' })
	}

	try {
		const task = await Task.findById(req.params.id)

		updates.forEach((update) => (task[update] = req.body[update]))

		task.save()

		// const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) // ------> Deprecated method middleware will not work

		if (!task) {
			return res.status(404).send()
		}

		res.send(task)
	} catch (error) {
		res.status(400).send(error)
	}
})

router.delete('/tasks/:id', async (req, res) => {
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

module.exports = router
