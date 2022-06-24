import express from 'express';
import bookRouter from './books/books.router.js';
import jwt from 'jsonwebtoken';

const secret = 'topSecret';
const app = express();
app.get((req, res, next) => {
  console.log('foozah');
  next();
});

app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'test') {
    const token = jwt.sign({ username }, secret);
    res.send(token);
  } else {
    res.statusCode = 401;
    res.end();
  }
});

function authMiddleware(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  console.log(token);
  try {
    jwt.verify(token, secret);
    next();
  } catch {
    res.statusCode = 401;
    res.end();
  }
}

app.use('/books', authMiddleware, bookRouter);

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080')
);
