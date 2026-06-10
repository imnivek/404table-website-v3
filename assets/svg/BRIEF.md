# 任務：為 404TABLE 官網產出 SVG 拼貼插圖素材

## 你的身份
你是一位現代藝術拼貼風格的網頁插畫師 + SVG 工程師。
本任務 **只產出 SVG 檔案**，不需要也不能呼叫任何圖像 API 或外部下載。所有圖形必須以純 SVG 路徑、形狀、漸層完成。

## 工作資料夾
請把所有產出檔案寫進「目前工作目錄」（你會被 `-C` 指到 `官網_v1/assets/svg/`）。
所有檔案直接放在這個資料夾根目錄，不要建子資料夾。

## 品牌色票（必須只用這些顏色）
```
--green-900 : #0B332B   主背景、深區塊
--green-700 : #1E5F4E   次背景
--green-500 : #2F8062   中間綠
--cream     : #F6F3EB   米白底
--paper     : #EFE3D1   暖奶油紙
--gold      : #F2C14E   主重點、CTA、數字
--gold-deep : #D8A332   金的深一階
--coral     : #FF6B4A   珊瑚橘強調
--cyan      : #00BFC2   湖水藍科技
--black     : #111111   文字、線條
--white     : #FFFFFF
```

## 整體風格
**現代藝術拼貼插圖**（modern art collage illustration），紙感、撕紙幾何、手繪線、點陣、半色調、UI 片段、科技互動環。
- 一定要有「層疊感」：背景紙色塊 → 撕紙幾何 → 主元素 → 點綴
- 撕紙幾何用 `clip-path: polygon(...)`（在 SVG 裡用 `<polygon>` 或不規則路徑）
- 手繪線用 `stroke-linecap="round"` + 微微歪斜
- 點陣用一群小 circle 或 pattern
- 科技互動圓環用 dashed stroke

## 共通技術規範
- 每個 SVG 必須包含：`xmlns="http://www.w3.org/2000/svg"` 與正確的 `viewBox`
- 不要外連字型（如有文字直接用 `font-family="sans-serif"`）
- 不要使用 `<image href="...">`，全部用向量
- 檔案大小不要超過 12KB / 檔
- 不要加 `<script>`、不要加 `<style>` 用 inline style 或屬性即可
- 不能含中文以外的怪字符，避免 encoding 問題；如要文字用英文或簡短中文皆可

---

## 產出清單（嚴格依檔名輸出）

### A. 課程縮圖（4:3，viewBox `0 0 600 450`）
每張要有：背景漸層（用該色系深淺）、撕紙幾何、主元素符號、點陣或半色調、1-2 個 UI 片段、科技點綴。

1. **course-ai.svg** — 主題：AI 應用實戰  
   元素建議：人頭側影＋腦中發光的 `AI` 字、神經網路節點、prompt 卡片、cursor 軌跡、teal 點陣。  
   主色：深綠底 + 暖金強調 + 湖水藍光點。

2. **course-data.svg** — 主題：資料分析與商業洞察  
   元素建議：折線圖、長條圖、儀表板 UI 卡、放大鏡、數據點。  
   主色：深綠 + teal 線條 + 暖金高光。

3. **course-brand.svg** — 主題：品牌與內容行銷  
   元素建議：擴音器、社群愛心 / 留言泡泡、便利貼、相機框、手繪箭頭。  
   主色：珊瑚橘 + 米白底 + 深綠細節。

4. **course-finance.svg** — 主題：創業財務與募資  
   元素建議：上升箭頭、金幣堆、計算機、pitch deck 頁面、長條圖。  
   主色：暖金主導 + 深綠 + 少量珊瑚橘。

5. **course-design.svg** — 主題：設計思考  
   元素建議：燈泡、便利貼牆、流程箭頭、原型線稿、握手或腦袋齒輪。  
   主色：森林綠 + 暖金 + 米白。

6. **course-nocode.svg** — 主題：自動化 / No-Code  
   元素建議：IF/THEN 邏輯方塊、連接節點、齒輪、cursor、光點線。  
   主色：暗紫綠底 + 湖水藍光線 + 暖金節點。

### B. 三大入口卡片插圖（1:1，viewBox `0 0 300 300`）
**透明背景**，靠卡片本身的色塊撐起。元素要清楚、留白、不要塞滿。

7. **entry-courses.svg** — 探索課程：筆電 + 書本 + AI 火花 + 教室小窗
8. **entry-spaces.svg** — 預約空間：桌椅 + 日曆 + 地標 pin + 時段 chips
9. **entry-startup.svg** — 創業輔導：火箭 + 上升箭頭 + 網絡節點 + 表單片段

### C. 品牌價值圖標（1:1，viewBox `0 0 80 80`）
極簡線稿風（stroke-only, stroke-width 約 2），用 `var(--green-900)` 直接寫色碼 `#0B332B`。

10. **value-learn.svg** — 學習無界：翻開的書 + 火花
11. **value-space.svg** — 空間共創：椅子 + 桌子框
12. **value-startup.svg** — 創業加速：火箭 + 上升箭頭
13. **value-community.svg** — 社群共好：3 個人連接的圈
14. **value-future.svg** — 展望未來：地球 + 眼睛或水平線

### D. Hero 拼貼裝飾組（單獨檔，可被 HTML 任意放置）
15. **deco-torn-shape.svg** — viewBox `0 0 200 150`，珊瑚橘撕紙幾何 polygon
16. **deco-dashed-ring.svg** — viewBox `0 0 200 200`，湖水藍 dashed 圓環 + 內圈點陣
17. **deco-gold-burst.svg** — viewBox `0 0 120 120`，暖金 8 角星狀 burst
18. **deco-tech-lines.svg** — viewBox `0 0 300 200`，湖水藍細線網格 + 光點 + cursor 軌跡

### E. 創業頁 4 步流程小圖（viewBox `0 0 120 120`，透明背景）
19. **flow-01-apply.svg** — 文件 + 筆
20. **flow-02-review.svg** — 放大鏡 + 文件
21. **flow-03-interview.svg** — 兩個人頭 + 對話泡泡
22. **flow-04-join.svg** — 開門 + 進入箭頭 或 握手

---

## 設計判斷力
- 不要做成 stock icon。要有「拼貼層次」：撕紙幾何放底層、主題符號中層、點綴在上層。
- 每張圖至少要有 2 種主色（不只是單色 icon）。
- 留白優先於塞滿。
- 構圖要有方向感（左下→右上、或從邊角延伸進畫面）。
- 不要把所有元素都放畫面正中央。

## 驗收標準
- 22 個 svg 檔案全部產出（檢查 `Get-ChildItem *.svg` 應該是 22 個）
- 每個檔案能在瀏覽器直接打開不報錯
- 顏色都來自上面色票，沒有亂入色
- 沒有外連資源、沒有 script

## 完成後
請在資料夾根目錄寫一個 `DONE.md`，列出你產出的檔案與每張圖的構圖簡述（一行就好），方便我驗收。

開始工作。一氣呵成，不要中途問我問題。
