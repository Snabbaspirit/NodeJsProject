const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.get('/', (req, res, next) => {
    res.render('index');
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
});


app.use(express.static('public'));

app.get('/about', (req, res) => {
    res.render('about');
    // res.sendFile(path.join(__dirname, 'views', 'about.html'))
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
