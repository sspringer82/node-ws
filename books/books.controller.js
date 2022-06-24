import model from './books.model.js';

const controller = {
  async getAllBooks(request, response) {
    response.json(await model.getAllBooks());
  },
  async getBookById(request, response) {
    const id = parseInt(request.params.id, 10);
    const book = await model.getBookById(id);
    if (book === undefined) {
      response.statusCode = 404;
      response.end();
    } else {
      response.json(book);
    }
  },
  async createBook(request, response) {
    const newBook = await model.createBook(request.body);
    response.statusCode = 201;
    response.json(createdBook);
  },
  async updateBook(request, response) {
    const id = parseInt(request.params.id, 10);
    const updatedBook = await model.updateBook(id, request.body);
    response.json(updatedBook);
  },
  async removeBook(request, response) {
    const id = parseInt(request.params.id, 10);
    await model.removeBook(id);
    response.statusCode = 204;
    response.end();
  },
};

export default controller;
