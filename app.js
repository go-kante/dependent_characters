const express = require('express');
const mysql = require('mysql');

const app = express();
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM user',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'kanta',
  password: 'sk0422OK',
  database: 'detect_d_chara'
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
  });

  // connection.query(
  //   `insert into user (user_id, content) values (1, '${todo}');`,
  //   (error, results) => {
  //    SQL実行後に行う処理を書く
  //   }
  // );
