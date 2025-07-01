const Task = require('../models/Task')
const filterObject = require('../utils/filterObject');



exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOneTask = async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(500).json({message: "No id given"})
    }

    try {
        const task = await Task.findById(id)
        res.json({task})
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

exports.createTask = async (req, res) => {
    const { title } = req.body;;
    if(!title) {
        return res.status(500).json({ message: "No title  given"});
    }

    try {
        const task = Task({title});
        await task.save();
        console.log(task);
        res.json(task);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.body;
    const { title } = req.body
    const { status } = req.body
    try {
      console.log(filterObject)
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'No task found' });

    const allowedUpdates = ['title', 'status'];
    const filteredBody = filterObject(req.body, allowedUpdates);

    if (Object.keys(filteredBody).length === 0) {
      return res.status(400).json({ message: 'No field to update' });
    }

    Object.assign(task, filteredBody);

    const updatedTask = await task.save();
    res.json(updatedTask);

  } catch (err) {
    res.status(400).json({ message: err.message });
  }

}

exports.deleteTask = async (req, res) => {
    try {
    const task = await Task.findByIdAndDelete(req.params.id);
    console.log(task)
    if (!task) return res.status(404).json({ message: 'No task found' });

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

