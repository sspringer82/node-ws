const model = require('./books.model');

module.exports = {
  getAllBooks(request, response) {
    response.json(model.getAllBooks());
  },
  getBookById(request, response) {
    const id = parseInt(request.params.id, 10);
    const book = model.getBookById(id);
    if (book === undefined) {
      response.statusCode = 404;
      response.end();
    } else {
      response.json(book);
    }
  },
  createBook(request, response) {
    const newBook = model.createBook(request.body);
    response.statusCode = 201;
    response.json(createdBook);
  },
  updateBook(request, response) {
    const id = parseInt(request.params.id, 10);
    const updatedBook = model.updateBook(id, request.body);
    response.json(updatedBook);
  },
  removeBook(request, response) {
    const id = parseInt(request.params.id, 10);
    model.removeBook(id);
    response.statusCode = 204;
    response.end();
  },
};
