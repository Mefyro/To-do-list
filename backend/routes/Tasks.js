const express = require('express');
const router = express.Router();
const taskController = require('../controllers/Task');

router.get('/', taskController.getAllTasks);

router.post('/', taskController.createTask);

router.get('/:id', taskController.getOneTask)

router.put('/', taskController.updateTask);

router.delete('/:id', taskController.deleteTask);

module.exports = router;