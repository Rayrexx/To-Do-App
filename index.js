// Including express in our project
const express = require('express');
const app = express();
const path = require('path');

//Defining port where our app will listen on
const port = 8000;

//Importing the database
const db = require('./config/mongoose');

//for middleware purposes
app.use(express.urlencoded());

//using express router
app.use('/', require('./routes'));

//setting up our view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



//assets contains the static files of the app
app.use(express.static('assets'));



//making our App to listen on the specified port
app.listen(port, function(err) {
    if (err) {
        console.log('Error');

    }
    console.log('Server is up at port', port);
});