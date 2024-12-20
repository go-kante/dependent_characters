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

    //  if (regex.match(content)){
    //         textBox.style.color = 'red';
    //     }else{
    //         output.textContent = "一致する単語はありません";
    //     }
       
      

    // if(value.include(regex)){
    //     textBox.style.color = "red";

        // if(textBox.include(character)){
        // textBox.style.color = "red";
        // }

       
    // const textBox = document.getElementById('floatingTextarea2').value;
    // 
    //     if(textBox == regex)
    //     textBox.style.Color = 'red' });// テキストボックス要素を取得







    // const content = floatingTextarea2.innerText;
    // const highlightedContent = keywords.reduce((textBox, character) => { // キーワードに一致する部分を赤字に変更 
    //     const regex = new RegExp(`(${character})`, "gi"); // 大文字小文字を無視 
    //     return textbox.replace(regex, '<span class="highlight">$1</span>'); }, content);
    
    // textBox.style.Color = 'red'

//配列の中身
// var character = ['a','i','u','e','o'];

// function changeTextColor() {
//     if (character == textBox) {
//         document.getElementById("floatingTextarea2").style.TextColor = "blue";
//     }
// }
// console.log('character');
// console.log(character);

// const x = document.getElementById('floatingTextarea2').content.value;/*checkの情報を取得*/
// x.addEventListener('click',changeTextColor);/*イベント クリック時テキスト色を変える関数*/
//配列の中身
//     const x = document.getElementById('check').content.value;}

//     function (event) {

    // }
    //     event.preventDefault();
    //     const list1 = ["a,i"];
    //         If (list1 === content) {
    //             let inputForm = document.getElementById('form').content.value;
	// 	        // 入力内容を画面に出力
    //             document.getElementById('form').textContent.style.textColor = 'red'
    //         } else if (list1 != content) {
    //             console.log（"環境依存文字は有りません。"）;

        


