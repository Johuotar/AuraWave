//Run application with "node server.js"
//grab the main Express module from the package installed. This module is a function, which we then run on the second line to create our app variable. 
const express = require('express');
const app = express();


app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next(); //tell middleware to continue to next middleware function if there is one, otherwise request gets stuck
});


app.use('/request-type', (req, res, next) => { //If connecting to http://localhost:3000/request-type print the request type
    console.log('Request-type: ', req.method);
    next();
});

//tell express server how to handle GET request to the server
//takes two arguments: req and res. req is request sent to server, this object is used to read data about what the client is requesting to do
//res represents the response sent back to client
app.get('/', (req, res) => {
    res.send('Successful response');
})

app.listen(3000, () => console.log('Example app is listening on port 3000')); //function passed in as second parameter is optional, it runs when server starts


