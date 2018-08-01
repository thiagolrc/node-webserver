const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

//rgister partials directory
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => { return new Date().getFullYear(); });
hbs.registerHelper('screamIt', (str) => { return str.toUpperCase();});

app.set('view_engine', 'hbs'); //sets handlebars as the view engine

//registering a middleware that will log all requests
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.path}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    console.log('Could not append log to file');
  });
  next();//WON'T WORK WITHOUT NEXT
});

//registering under maintenance middleware
// app.use((req, res, next) => {
  // res.render('maintenance.hbs');
//});

//exports everyting inside public to the root of the path: localhost:3000/help.html
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express</h1>');
  res.render('home.hbs', {
    aboutTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/bad', (req, res) => {
  res.status(400).send({
    errorMessage: 'Bad request'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    aboutTitle: 'About Page'
  });
});

app.listen(port, () => console.log(`Server is up on port ${port}`));
