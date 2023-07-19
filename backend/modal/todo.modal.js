const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  title: String,
  complete: String,
  date: {
    type: 'Date',
    default: Date.now,
  },
});
const todoModal = mongoose.model('todo', todoSchema);
module.exports = todoModal;
