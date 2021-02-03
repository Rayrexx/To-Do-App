const express = require('express');

//Including Router in our App
const router = express.Router();

//Importing home controller for making requests
const homeController = require('../controllers/home_controller');

//Home page
router.get('/', homeController.home);

//Create task request
router.post('/createTask', homeController.createTask);

//Delete task request
router.get('/deleteTask', homeController.deleteTask);

//exporting router
module.exports = router;