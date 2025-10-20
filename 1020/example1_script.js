// example1_script.js
// 傳統語法：僅使用 var、function、字串串接

// 顯示提示窗
alert('歡迎來到 JavaScript！');

// 在 Console 顯示訊息
console.log('Hello JavaScript from console');

// 在頁面指定區域輸出文字
var el = document.getElementById('result');
el.textContent = '這行文字是由外部 JS 檔案寫入的。';

var studentId = '412631623';
var studentName = '李怡萱';
el.textContent += '\n學號：' + studentId + '　姓名：' + studentName;

var btn = document.getElementById('btn');
btn.onclick = function() {
  alert('學號：' + studentId + '　姓名：' + studentName);
};