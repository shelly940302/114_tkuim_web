// example5_script.js
// 以巢狀 for 產生 1~9 的乘法表
document.getElementById('result').textContent = output;
var start = parseInt(prompt('start（1~9）：'), 10);
var end = parseInt(prompt('end（1~9）：'), 10);
if (isNaN(start) || isNaN(end) || start < 1 || end > 9 || start > end) {
  alert('輸入無效，請輸入 1~9 且起始數字不大於結束數字');
} else {
  var output = '';
  for (var i = start; i <= end; i++) {
    for (var j = 1; j <= 9; j++) {
      output += i + 'x' + j + '=' + (i * j) + '\t';
    }
    output += '\n';
  }
  document.getElementById('result').textContent = output;
  console.log(output);
}