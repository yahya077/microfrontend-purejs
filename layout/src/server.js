import express from 'express';
import morgan from 'morgan';
import renderDashboard from './dashboard/render.js';

const app = express();
app.use(morgan('dev'));

app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use('/layout/images', express.static('./images'));
app.use('/layout', express.static('./build'));

app.get('/', (req, res) => {
  const html = renderDashboard();
  res.render('layout', { html });
});

app.listen(3003);
console.log(`🔴  layout running. available here:
>> http://127.0.0.1:3003/`);