import path from 'path'
import morgan from 'morgan';
import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// static file
app.use(express.static(path.resolve('./src/public')))

// Template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('./src/resources/views'));

// method
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
