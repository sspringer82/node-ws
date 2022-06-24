const model = {
  books: [
    {
      id: 1,
      title: 'LotR',
      isbn: '123-1231231234',
      author: 'J R R Tolkien',
    },
  ],
  async getAllBooks() {
    return this.books;
  },
  async getBookById(id) {
    return this.books.find((b) => b.id === id);
  },
  async createBook(newBook) {
    const id = Math.max(...this.books.map((b) => b.id)) + 1;

    const createdBook = { ...newBook, id };
    this.books.push(createdBook);
    return createdBook;
  },
  async updateBook(id, updatedBook) {
    const index = this.books.findIndex((b) => b.id === id);
    this.books[index] = updatedBook;
    return updatedBook;
  },
  async removeBook(id) {
    const index = this.books.findIndex((b) => b.id === id);
    this.books.splice(index, 1);
  },
};

module.exports = model;
