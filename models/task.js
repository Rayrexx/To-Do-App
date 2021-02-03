//Creating a schema for our todo app

const mongoose = require('mongoose');

//defining fields for the tasks
const taskSchema = new mongoose.Schema({

    //task description
    description: {
        type: String,
        required: true
    },

    //category of the task
    category: {
        type: String,
        required: true
    },

    //Due date for task
    date: {
        type: Date,
        required: true
    }
});

//Defining a model by passing the previously defined schema and creating a module named 'Task'
const Task = mongoose.model('Task', taskSchema);

//exporting Task module to use it further in the project
module.exports = Task;