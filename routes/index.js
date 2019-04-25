const express = require('express');
const router = express.Router();


//retrieve the projects list from the json file
const projects_list_json = require('../data.json');
const projects_list = JSON.parse(JSON.stringify(projects_list_json));

router.get('/', (req, res) => {
    
    //render index page and pass the projects list array to the template
    res.render('index', {projects : projects_list.projects });

});


router.get('/about', (req, res) => {
    res.render('about');

});

module.exports = router;