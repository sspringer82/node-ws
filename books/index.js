const Router = require('express').Router;
const controller = require('./books.controller');

const router = Router();

router.get('/', (req, res) => controller.getAllBooks(req, res));
router.get('/:id', controller.getBookById.bind(controller));
router.post('/', controller.createBook.bind(controller));
router.put('/:id', controller.updateBook.bind(controller));
router.delete('/:id', controller.removeBook.bind(controller));

module.exports = router;
