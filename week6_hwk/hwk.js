// 顯示結果
function showResult(text) {
  const pre = document.getElementById("result");
  pre.textContent += text + "\n";
  alert(text);
}

// ===============================
// 溫度轉換計算
// ===============================
function convertTemperature(temp, unit) {
  if (unit === "C") return `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F`;
  else if (unit === "F") return `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`;
  else return "[錯誤單位]";
}

// ===============================
// 輸入溫度與單位
// ===============================
function inputTemperature(msg) {
  while (true) {
    let tempInput = prompt(msg + "（或輸入 Q 離開）");
    if (!tempInput || tempInput.toUpperCase() === "Q") return null;

    let temp = parseFloat(tempInput);
    if (isNaN(temp)) { alert("請輸入有效數字！"); continue; }

    let unit = prompt("請輸入單位 (C/F)：");
    if (!unit) continue;
    unit = unit.toUpperCase();
    if (unit !== "C" && unit !== "F") { alert("單位錯誤！"); continue; }

    return { temp, unit };
  }
}

// ===============================
// 單筆轉換
// ===============================
function singleConversion() {
  let text = "=== 單筆溫度轉換 ===\n";
  let repeat = true;

  while (repeat) {
    let data = inputTemperature("請輸入溫度");
    if (!data) break;

    text += convertTemperature(data.temp, data.unit) + "\n";

    let again = prompt("是否繼續單筆轉換？(Y/N)：");
    if (!again || again.toUpperCase() !== "Y") repeat = false;
  }

  showResult(text);
}

// ===============================
// 矩陣批次轉換
// ===============================
function matrixConversion() {
  let text = "=== 矩陣批次溫度轉換 ===\n";
  let rows = parseInt(prompt("請輸入行數："));
  let cols = parseInt(prompt("請輸入每行數量："));
  if (isNaN(rows) || isNaN(cols) || rows <=0 || cols <=0) { alert("輸入錯誤！"); return; }

  for (let i=1; i<=rows; i++) {
    text += `第 ${i} 行: `;
    for (let j=1; j<=cols; j++) {
      let data = inputTemperature(`第 ${i} 行第 ${j} 個溫度值`);
      if (!data) { text += "[跳過] "; continue; }
      text += convertTemperature(data.temp, data.unit) + " ";
    }
    text += "\n";
  }

  showResult(text);
}

// ===============================
// 溫度轉換器選單
// ===============================
function temperatureMenu() {
  while (true) {
    let choice = prompt(
      "=== 溫度轉換器 ===\n" +
      "1. 單筆轉換\n" +
      "2. 矩陣批次轉換\n" +
      "3. 返回首頁\n" +
      "請輸入 1~3："
    );
    if (!choice) continue;

    switch(choice) {
      case "1": singleConversion(); break;
      case "2": matrixConversion(); break;
      case "3": return;
      default: alert("請輸入有效選項 1~3！");
    }
  }
}

// ===============================
// 猜數字遊戲
// ===============================
function guessNumberGame() {
  let text = "=== 猜數字遊戲 ===\n";
  let repeat = true;

  while (repeat) {
    const answer = Math.floor(Math.random()*100)+1;
    let count = 0;

    while (true) {
      let guessInput = prompt("請猜 1~100 (輸入 Q 離開)：");
      if (!guessInput || guessInput.toUpperCase() === "Q") { text += "提前結束\n"; break; }

      let guess = parseInt(guessInput);
      if (isNaN(guess) || guess<1 || guess>100) { alert("請輸入 1~100！"); continue; }

      count++;
      if (guess < answer) alert("再大一點！");
      else if (guess > answer) alert("再小一點！");
      else { alert(`恭喜答對！答案是 ${answer}`); text += `答案 ${answer}，共猜 ${count} 次\n`; break; }
    }

    let again = prompt("是否再玩一次？(Y/N)：");
    if (!again || again.toUpperCase() !== "Y") repeat = false;
  }

  showResult(text);
}
