# Week09：報名系統（簡短說明）

1) 如何啟動後端

在 `Week09/server` 執行：

```powershell
cd C:\Users\shell\projects\114_tkuim_web\Week09\server
npm install
npm run dev
```

伺服器預設： http://localhost:3001

2) 如何啟動前端

- Live Server：在 `Week09/client` 開啟 `signup_form.html`。


1) API 端點文件與測試方式

- 端點：
	- `GET /health` — 狀態檢查
	- `POST /api/signup` — 建立報名（驗證失敗回 400 與 `{ error }`，成功回 201）
	- `GET /api/signup` — 取得報名清單（回傳 `{ total, data }`）
	- `DELETE /api/signup/:id` — 刪除報名

- 測試方式：
	- curl：

```powershell
curl -X POST http://localhost:3001/api/signup -H "Content-Type: application/json" -d @- ^
{ "name":"測試者", "email":"test@example.com", "phone":"0912345678", "password":"password1", "confirmPassword":"password1", "interests":["basketball"], "terms": true }
```

	- 終端機測試： `curl http://localhost:3001/api/signup`
	- VS Code REST Client：使用 `Week09/tests/api.http`。
	- Postman：建立 POST / GET 請求並以上面 JSON 測試。

