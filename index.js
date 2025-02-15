var character = ['aiueo'] // 環境依存文字の配列
const editableBox = document.getElementById('floatingTextarea2');// 入力されたテキスト
const output = document.getElementById('output');

document.getElementById('btn').addEventListener('click', (event) => {
  event.preventDefault();
  const content = editableBox.value;
  const regex = new RegExp(`[${character.join('')}]`, 'g'); // 配列を正規表現に変換

  if (regex.test(content)) {
    output.textContent = "環境依存文字が含まれています。";
    output.style.color = "red";
  } else {
    output.textContent = "環境依存文字は含まれていません。";
    output.style.color = "green";
    }
});

 
    //   Node.JSインストール用
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});
        


