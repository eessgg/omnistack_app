const express = require('express');
// const routes = require('routes');
const app = express();

// app.post('/users', (req, res) => {
//   return res.json({ message: 'HELLO'  });
// })

// => /users/:id query params
app.get('/users', (req, res) => {
  return res.json({ idade: req.query.birth });
})

// precisa achar o user (auth/params)
// //req.params -> acessar route params (editar, delete)
app.put('/users/:id', (req, res) => {
  return res.json({ idade: req.params.id }); // req.params.id === :id
})

app.use(express.json());

app.post('/users', (req, res) => {
  return res.json(req.body);
})

app.listen(3333);

const express = require('express');
// const routes = require('routes');
const app = express();

// app.post('/users', (req, res) => {
//   return res.json({ message: 'HELLO'  });
// })

// => /users/:id query params
app.get('/users', (req, res) => {
  return res.json({ idade: req.query.birth });
})

// precisa achar o user (auth/params)
// //req.params -> acessar route params (editar, delete)
app.put('/users/:id', (req, res) => {
  return res.json({ idade: req.params.id }); // req.params.id === :id
})

app.use(express.json());

app.post('/users', (req, res) => {
  return res.json(req.body);
})

app.listen(3333);

