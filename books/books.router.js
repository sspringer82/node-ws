import { Router } from 'express';
import controller from './books.controller.js';

const router = Router();

router.get('/', (req, res) => controller.getAllBooks(req, res));
router.get('/:id', controller.getBookById.bind(controller));
router.post('/', controller.createBook.bind(controller));
router.put('/:id', controller.updateBook.bind(controller));
router.delete('/:id', controller.removeBook.bind(controller));

export default router;
