var character = ['a','i','u','e','o'];//環境依存文字の配列
// ボタンがクリックされたときにテキストボックスの内容を取得
document.getElementById('btn').addEventListener('click', () => {
    event.preventDefault()
    const regex = new RegExp(`(${character})`, "gi"); // 大文字小文字を無視 
    const textBox = document.getElementById('floatingTextarea2');
    const value = textBox.value;
    textBox.style.color = 'red';

    // if(value.include(regex)){
    //     textBox.style.color = "red";
    // }
}); 
       
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

        


