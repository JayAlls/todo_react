const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    id: {type: String, required: true},
    name: {type: String, required: true},
    category: {type: String},
    priority: {type: String},
    completed: {type: Boolean, default: false }
});

module.exports = mongoose.model('Task', taskSchema);