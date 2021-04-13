const express = require('express');

// Tool for dynamic create html (there are others like Pug, EJS etc..)
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const addCarRoutes = require('./routes/add');
const carRoutes = require('./routes/cars');

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

// Raw request body
app.use(express.urlencoded({extended: true}))

// Set preffix as a string path in the 1st param, then in a single file router.get('/')
app.use('/', homeRoutes);
app.use('/add', addCarRoutes);
app.use('/cars', carRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
