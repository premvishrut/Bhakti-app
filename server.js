const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const quotes = require('./quotes.json');

app.use(express.static('public'));

app.get('/api/quote', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote });
});

app.listen(PORT, () => console.log(`Running on ${PORT}`));
