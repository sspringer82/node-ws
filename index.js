const express = require('express');
const bookRouter = require('./books');

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080')
);
