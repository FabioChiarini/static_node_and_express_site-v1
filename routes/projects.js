const express = require('express');
const router = express.Router();

//retrieve the projects list from the json file
const projects_list_json = require('../data.json');
const projects_list = JSON.parse(JSON.stringify(projects_list_json));

router.get('/:id', (req, res) => {
    res.render('../views/project', { project : projects_list.projects[req.params.id] });

});

module.exports = router;