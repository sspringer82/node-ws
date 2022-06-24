const express = require('express');

console.log('initializing app');
const app = express();

app.get('/', (req, res) => {
  console.log('request incoming');
  res.json({
    id: 1,
    title: 'Lord of the rings',
    author: 'J R R Tolkien',
  });
});

app.listen(8080, () =>
  console.log('server is listening to http://localhost:8080')
);
