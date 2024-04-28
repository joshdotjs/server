const express = require('express');
const { readFileSync, writeFileSync, readFile } = require('fs');

const app = express();

app.get('/', (req, res) => {
  const count = readFileSync('./count.txt', 'utf8');
  console.log('count: ', count);
  const newCount = parseInt(count) + 1;
  writeFileSync('./count.txt', String(newCount));


  res.send(`count: ${newCount}`);
});

app.listen(5000, () => console.log('http://localhost:5000'));