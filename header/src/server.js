import express from 'express';
import morgan from 'morgan';
import render from './header/render.js';

const app = express();
app.use(morgan('dev'));
app.use('/header/images', express.static('./images'));
app.use('/header', express.static('./build'));

app.use('/header', (req, res) => {
  res.send(render());
});

app.listen(3001);

console.log(`💚  body running. fragment are available here:
>> http://127.0.0.1:3001/header`);
