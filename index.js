const express = require('express');

console.log('initializing app');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.write('foo');
  res.write('foo');
  res.write('foo');
  res.end('bar');

  console.log('request incoming');
  res.json({
    id: 1,
    title: 'Lord of the rings',
    author: 'J R R Tolkien',
  });
});

app.post('/:id', (req, res) => {
  console.log(req.body);
  console.log(parseInt(req.params.id, 10));
  res.json('foo');
});

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080')
);
