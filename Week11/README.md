# Week 11 - Web Fullstack 報名系統 
這是一個基於 Node.js (Express) 與 MongoDB 的簡易報名系統。專案包含後端 API、MongoDB Docker 容器配置以及測試腳本。
## 環境需求 
1. Docker 
  用途：執行 MongoDB 資料庫容器。
1. Node.js
  用途：執行後端 Express 伺服器。

## 啟動指令
啟動資料庫 (MongoDB)
進入docker資料夾並啟動容器：
- cd docker
- docker-compose up -d
啟動後端伺服器
- npm run dev

## 測試方式
API 測試
在 VS Code 中開啟 tests/api.http 檔案
點擊Send Request 按鈕

## 專案結構 
Week11/
├── 截圖/                  # 存放作業要求之執行結果截圖
├── docker/                # Docker 相關設定
│   ├── mongo-data/        # MongoDB 資料掛載目錄 (自動生成)
│   ├── docker-compose.yml # 容器編排設定檔
│   └── mongo-init.js      # 資料庫初始化腳本
├── server/                # Node.js 後端專案
│   ├── public/            # (選填) 前端靜態檔案 (index.html)
│   ├── node_modules/      # 專案依賴套件
│   ├── repositories/      # 資料庫操作邏輯
│   │   └── participants.js
│   ├── routes/            # API 路由定義
│   │   └── signup.js
│   ├── .env               # 環境變數設定 (需自行建立)
│   ├── app.js             # 伺服器入口檔案
│   ├── db.js              # MongoDB 連線設定
│   ├── package-lock.json
│   └── package.json
├── tests/                 # 測試工具
│   └── api.http           # REST Client API 測試檔案
└── README.md              # 專案說明文件