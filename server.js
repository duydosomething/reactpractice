const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const app = express();


mongoose.connect("mongodb://dtong92:test123@ds245772.mlab.com:45772/mongo1")
app.use(bodyParser.json());

let customers = [
  {id: 1, firstName: 'John', lastName: 'Doe'},
  {id: 2, firstName: 'Brad', lastName: 'Traversy'},
  {id: 3, firstName: 'Mary', lastName: 'Swanson'},
];

app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.post("/api/customers", (req, res) => {
  const { id, firstName, lastName } = req.body;
  const newUser = {id, userName, firstName};
  customers.push(newUser);
  res.json(customers);
})
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
