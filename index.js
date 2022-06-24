const express = require('express');

console.log('initializing app');
const app = express();
app.use(express.json());

const books = [
  {
    id: 1,
    title: 'LotR',
    isbn: '123-1231231234',
    author: 'J R R Tolkien',
  },
];

app.get('/books', (request, response) => {
  response.json(books);
});
app.get('/books/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  const book = books.find((b) => b.id === id);
  response.json(book);
});
app.post('/books', (request, response) => {
  const newBook = request.body;
  const id = Math.max(...books.map((b) => b.id)) + 1;

  const createdBook = { ...newBook, id };
  books.push(createdBook);
  response.json(createdBook);
});
app.put('/books/:id', (request, response) => {
  const updatedBook = request.body;
  const id = parseInt(request.params.id, 10);
  const index = books.findIndex((b) => b.id === id);
  books[index] = updatedBook;
  response.json(updatedBook);
});
app.delete('/books/:id', (request, response) => {
  const id = parseInt(request.params.id, 10);
  const index = books.findIndex((b) => b.id === id);
  books.splice(index, 1);
  response.json();
});

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080')
);
