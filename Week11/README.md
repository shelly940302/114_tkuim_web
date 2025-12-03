## 環境需求

1. Docker  
   用途：執行 MongoDB 資料庫容器。
2. Node.js  
   用途：執行後端 Express 伺服器。

## 啟動指令

啟動資料庫 (MongoDB)  
進入 docker 資料夾並啟動容器：
```
cd docker
docker-compose up -d
```
啟動後端伺服器：
```
npm run dev
```

## 測試方式

API 測試  
在 VS Code 中開啟 tests/api.http 檔案  
點擊 Send Request 按鈕

## 專案結構

```
Week11/
├── 截圖/                  
├── docker/                
│   ├── mongo-data/        
│   ├── docker-compose.yml 
│   └── mongo-init.js      
├── server/                
│   ├── public/            
│   ├── node_modules/      
│   ├── repositories/      
│   │   └── participants.js
│   ├── routes/            
│   │   └── signup.js
│   ├── .env               
│   ├── app.js             
│   ├── db.js              
│   ├── package-lock.json
│   └── package.json
├── tests/                 
│   └── api.http           
└── README.md              
```