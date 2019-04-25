const express = require('express');
const app = express();

//set view engine to use pug for template
app.set('view engine', 'pug');
app.use('/static', express.static('public'));


//create routes to display index and about pages
const mainRoutes = require('./routes');
//create routes to display the selected project
const projectsRoutes = require('./routes/projects');


app.use(mainRoutes);
app.use('/projects', projectsRoutes);


// setup error handling for 404 error
app.use((req, res, next) => {
    const err = new Error('PAGE NOT FOUND!!');
    err.status = 404;
    err.image = "/static/images/404_not_found.png"
    next(err);
});


// check if there is an error and, if so, render the respective error template
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    if (err.status === 404) {
        console.log('You encountered the following error: ' + err.status + ' ' + err.message);
        res.render('error', { message: err.message, status: err.status, image: err.image} );
    }
    else {
        console.log('You encountered the following error: 500 - INTERNAL SERVER ERROR');
        res.render('error', { message: 'INTERNAL SERVER ERROR', status: 500, image: "/static/images/500_internal_server_error.jpg"} );
    }
});

app.listen(3000, () => {
    console.log('Application running on localhost:3000');
});