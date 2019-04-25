const express = require('express');
const app = express();

//set view engine to use pug for template
app.set('view engine', 'pug');
app.use('/static', express.static('public'));


app.use((req, res, next) => {
    const err = new Error('Oh no!!');
    err.status = 500;
    next(err);
});


//create routes to display index and about pages
const mainRoutes = require('./routes');
//create routes to display the selected project
const projectsRoutes = require('./routes/projects');


app.use(mainRoutes);
app.use('/projects', projectsRoutes);


app.use((req, res, next) => {
    const err = new Error('Not Found!');
    err.status = 404;
    next(err);
});


app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log('Application running on localhost:3000');
});