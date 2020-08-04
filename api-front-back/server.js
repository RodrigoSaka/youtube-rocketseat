const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const { data } = await axios('https://jsonplaceholder.typicode.com/users');
    return res.json(data);
  } catch (e) {
    console.log(e);
  }
});

app.listen('4567', () => {
  console.log('Running at http://localhost:4567');
});
