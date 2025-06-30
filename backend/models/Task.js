const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'in_progress', 'done'], 
    default: 'pending' 
  }
});

module.exports = mongoose.model('Task', taskSchema);