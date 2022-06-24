import express from 'express';
import graphqlHTTP from 'express-graphql';
import jwt from 'jsonwebtoken';
import cors from 'cors';

import schema from './schema.js';

const port = 3001;
const secret = 'topSecret!';

const server = express();

server.use(express.json());
server.use(cors());

server.post('/login', (req, res, next) => {
  if (req.body.username === 'admin' && req.body.password === 'test') {
    res.send(
      jwt.sign({ user: req.body.username }, secret, { expiresIn: '1800s' })
    );
  }
});

// server.use('/', (req, res, next) => {
//   try {
//     const token = req.headers['authorization'].split(' ')[1];
//     jwt.verify(token, secret);
//     next();
//   } catch (e) {
//     res.sendStatus(403);
//   }
// });

server.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

server.listen(port, () =>
  console.log(`server is listening to http://localhost:${port}`)
);
