const express = require('express');
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./data/items');

const app = express();

app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
  const items = getStoredItems();
  res.json({ items });
});

module.exports = app;
