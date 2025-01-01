
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sk0422OK  ',
  database: 'detect_d_chara'
});

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.listen(3000);