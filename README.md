# 404TABLE 官網 V3

> **V3 = V1 的 UI/UX 視覺語言 ＋ V2 的分頁內容架構**
>
> 把 V1「紙感拼貼」的層次配色、背景、圓角卡片、圖框塗層與 SVG icon 裝飾，
> 套到 V2 那套更完整的多分頁內容上，去掉 V2「很像 AI 做的」brutalist 硬邊感。

## 為什麼這樣做

| | 官網 v1 | 官網 V2 | **官網 V3（本資料夾）** |
|---|---|---|---|
| 視覺 | ✅ 喜歡：紙感層次、柔陰影、SVG 拼貼裝飾 | ❌ Tailwind brutalist、灰階照、硬陰影 | **採 v1 視覺語言** |
| 內容 | 較通用（課程/空間/創業/活動/關於） | ✅ 完整：404敘事、6堂職業×AI、Founders、Kids、空間、活動、關於 | **採 V2 內容架構** |
| 結構 | 單頁 SPA（JS 切頁） | 多分頁（7 個 .html） | **多分頁（沿用 V2 各分頁）** |

兩版本本來就共用同一組品牌色（綠 `#0B332B` / 米 `#F6F3EB` / 金 `#F2C14E` / 珊瑚 `#FF6B4A` / 青 `#00BFC2`），所以 v1 的視覺與 V2 的內容能無縫融合。

## 頁面

| 檔案 | 內容 |
|---|---|
| `index.html` | 首頁：「404，是希望的代碼」hero 拼貼、三大服務、Thesis 信念、6 堂學程精選、Founders、業師團、404 Voices 飛輪、合作企業、CTA |
| `courses.html` | 學程：6 堂職業×AI 課程詳細卡（含課綱手風琴 `<details>`）、分類篩選、報名 / 30 秒測驗 Modal |
| `kids.html` | 未來素養 404 Kids：被動 vs 拿筆、國小／國中／高中分齡、親子共學、預約表單 |
| `founders.html` | 創業孵化：Cohort metric、M1–M3 歷程、提供／不提供、業師、3 步申請、申請表單 |
| `space.html` | 空間：六大區域、三種使用方案、為何選我們、評價、預約 Modal |
| `events.html` | 活動：本月主場、近期工作坊（圖釘卡）、Lab Reports、訂閱 CTA、報名 Modal |
| `about.html` | 關於：404=被動的敵人 使命、三大服務、五大價值、10 位業師、母公司肆方創育、聯絡 / 企業包班 |

## 技術

- **純手刻 CSS（`css/style.css`）**：沿用 v1 的設計系統並擴充 V2 內容所需元件（課綱手風琴、metric strip、業師大卡、價格方案卡、活動圖釘卡等）。刻意不用 Tailwind CDN，回到 v1 那種「手作、有溫度」的層次感。
- **共用 JS（`js/site.js`）**：行動版抽屜、滾動進度條、進場淡入 `reveal`、Toast、Modal、表單假送出、課程分類篩選。
- **字體**：Noto Sans TC（內文）＋ Space Grotesk（數字／英文標籤）＋ Material Symbols（icon）。
- **資產**：`assets/` 為 V2 照片（teachers / space / work / kids / events / community / kv / brand / icons）＋ v1 的 `assets/svg/`（拼貼裝飾：撕紙、虛線圈、金色爆點、科技線、紙紋、價值 icon）。

## 預覽

直接以瀏覽器開啟 `index.html` 即可（純靜態，無需 server）。

表單與報名皆為前端假送出（顯示 Toast），尚未串接後端。
