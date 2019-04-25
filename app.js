const express = require('express');
const app = express();

//set view engine to use pug for template
app.set('view engine', 'pug');
app.use('/static', express.static('public'));


app.get('/', (req, res) => {
    res.render('index');

});


app.get('/about', (req, res) => {
    res.render('about');

});


app.listen(3000, () => {
    console.log('Application running on localhost:3000');
});