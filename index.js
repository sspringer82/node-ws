const express = require('express');
const http = require('node:http');
const controller = require('./books/controller');

console.log('initializing app');
const app = express();
app.use(express.json());

app.get('/books', (req, res) => controller.getAllBooks(req, res));
app.get('/books/:id', controller.getBookById.bind(controller));
app.post('/books', controller.createBook.bind(controller));
app.put('/books/:id', controller.updateBook.bind(controller));
app.delete('/books/:id', controller.removeBook.bind(controller));

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080')
);
