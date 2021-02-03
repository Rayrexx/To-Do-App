//Importing Database
const db = require('../config/mongoose');

//Importing Task schema
const Task = require('../models/task');

//Rendering the App page
module.exports.home = function(req, res) {

    //fetching contacts from DB and sending it to home.ejs file 
    Task.find({}, function(err, task_list) {
        if (err) {
            console.log('Error in fetching tasks');
            return;
        }

        return res.render('home', {
            task: task_list
        });
    });
};


//Creating Tasks
module.exports.createTask = function(req, res) {

    Task.create(req.body, function(err, newTask) {

        if (err) {
            console.log('error creating task');
            return;
        }

        return res.redirect('back');
    });


};

//Deleting Tasks
module.exports.deleteTask = function(req, res) {
    var id = req.query;

    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {

        // finding and deleting tasks from the DB one by one using id
        Task.findByIdAndDelete(Object.keys(id)[i], function(err) {
            if (err) {
                console.log('error in deleting task');
            }
        });
    };
    return res.redirect('back');

};