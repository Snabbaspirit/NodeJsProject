const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


const app = express();

const handlebars = exphbs.create({
    defaultLayout: 'main',
    extname: 'handlebars',
});


//чтобы зарегистрировать движок 

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'))
})


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})