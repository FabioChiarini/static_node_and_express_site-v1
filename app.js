const express = require('express');
const app = express();

//set view engine to use pug for template
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

//create routes to display index and about pages
const mainRoutes = require('./routes');
//create routes to display the selected project
const projectsRoutes = require('./routes/projects');

//console.log(projects_list.projects[2].image_urls[0]);

app.use(mainRoutes);
app.use('/projects', projectsRoutes);


app.listen(3000, () => {
    console.log('Application running on localhost:3000');
});