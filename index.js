const express = require('express');

// Tool for dynamic create html (there are others like Pug, EJS etc..)
const exphbs = require('express-handlebars');


const path = require('path');


const app = express();

// ExpressHandlebars Configuration
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

// Registering hbs type engine in Express
app.engine('hbs', hbs.engine);
// Setting it
app.set('view engine', 'hbs');
// Setting folder
app.set('views', 'views');

// Define static folder
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'Main page',
        isHome: true,
    });
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add course page',
        isAdd: true,
    });
    // res.sendFile(path.join(__dirname, 'views', 'about.html'))
});

app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Courses page',
        isCourses: true,
    });
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
