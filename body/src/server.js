import express from 'express';
import morgan from 'morgan';
import render from './body/render.js';

const app = express();
app.use(morgan('dev'));
app.use('/body/images', express.static('./images'));
app.use('/body', express.static('./build'));

app.use('/body', (req, res) => {
  res.send(render());
});

app.listen(3002);

console.log(`body running. fragment are available here:
>> http://127.0.0.1:3002/body`);
