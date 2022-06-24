module.exports = {
  books: [
    {
      id: 1,
      title: 'LotR',
      isbn: '123-1231231234',
      author: 'J R R Tolkien',
    },
  ],
  getAllBooks(request, response) {
    response.json(this.books);
  },
  getBookById(request, response) {
    const id = parseInt(request.params.id, 10);
    const book = this.books.find((b) => b.id === id);
    if (book === undefined) {
      response.statusCode = 404;
      response.end();
    } else {
      response.json(book);
    }
  },
  createBook(request, response) {
    const newBook = request.body;
    const id = Math.max(...this.books.map((b) => b.id)) + 1;

    const createdBook = { ...newBook, id };
    this.books.push(createdBook);
    response.statusCode = 201;
    response.json(createdBook);
  },
  updateBook(request, response) {
    const updatedBook = request.body;
    const id = parseInt(request.params.id, 10);
    const index = this.books.findIndex((b) => b.id === id);
    this.books[index] = updatedBook;
    response.json(updatedBook);
  },
  removeBook(request, response) {
    const id = parseInt(request.params.id, 10);
    const index = this.books.findIndex((b) => b.id === id);
    this.books.splice(index, 1);
    response.statusCode = 204;
    response.end();
  },
};
