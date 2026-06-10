# 任務 #2：補做 7 個剩餘 SVG 素材

## 背景
你（codex）已經為 404TABLE 官網產出第一批 22 個 SVG。
這是第二批補完任務，補規劃文件 §10 還沒做的 G / J / E / I 系列。
全部以「**純 SVG**」交付，工作目錄是 `官網_v1/assets/svg/`，所有檔案直接寫在這層，不要建子資料夾。

## 沿用第一批的色票與風格
```
green-900 #0B332B   green-700 #1E5F4E   green-500 #2F8062
cream     #F6F3EB   paper     #EFE3D1
gold      #F2C14E   gold-deep #D8A332
coral     #FF6B4A   cyan      #00BFC2
black     #111111   white     #FFFFFF
```
風格：現代藝術拼貼插圖、紙感、撕紙幾何、手繪線、點陣、UI 片段、科技互動環。
請和第一批保持視覺一致（看你已交付的 course-ai.svg / entry-startup.svg 的層次邏輯）。

---

## 產出清單

### G 系列：背景紋理（tileable，可被 CSS `background-image: url()` 平鋪）

**G1 — texture-paper.svg**  
- viewBox `0 0 200 200`
- 米白紙感：底色 `#F6F3EB`，加上極淡的纖維紋（多條低透明度短斜線 `stroke="#111111" opacity=".035"`）、極淡的格線（每 42px 一道極淡灰線 opacity .03）、少許隨機小斑點（小圓圈 opacity .05）。
- 必須四邊接縫處能無縫拼接（pattern 友善）。
- 不要有任何明顯主體圖形。整張看起來「幾乎是純色紙」，只有近看才有紋理。

**G2 — texture-green.svg**  
- viewBox `0 0 200 200`
- 深綠紙感：底色 `#0B332B`，加極淡的半色調點 (`fill="#FFFFFF" opacity=".04"`)、極淡 vignette、少量 cyan opacity .03 的點。
- 同樣 tileable、四邊無縫。
- 給 Footer / 創業 Hero 等深色區塊用。

### J 系列：成功狀態插圖（viewBox `0 0 240 200`，透明背景）

每張都要：金色 ✓ check mark 主元素 + 主題相關小物件 + 一兩個撕紙幾何 + cyan 線條或點點。中央構圖、留邊。

**J1 — success-course.svg**  
報名課程成功。元素：⭕暖金大圈 + 內白色 ✓ + 旁邊一本翻開的書、一個 AI 火花、幾片彩色 confetti 紙片（coral / cyan / green）、底層淡 paper 撕紙。

**J2 — success-space.svg**  
空間預約成功。元素：暖金 ✓ + 日曆方塊（有 check mark）+ 一張小桌椅符號 + 地標 pin + cyan 細線軌跡。

**J3 — success-apply.svg**  
創業申請成功。元素：暖金 ✓ + 小火箭（向上）+ 一頁文件（有勾選清單）+ 上升箭頭 + 暖金與 cyan 光點。

### E 系列：創業頁 Hero 大圖

**E1 — startup-hero.svg**  
- viewBox `0 0 800 450`（16:9）
- **透明背景**（會疊在深綠 startup-hero 區塊上，所以背景透明就好，但用色要在深綠上看得清楚）
- 主構圖左半：留約 480×450 的空白給中文標題，請只在右半邊（約 x=400 之後）做圖。
- 元素：抽象創業旅程 —— 一個會議桌剪影、3-4 個便利貼層疊、火箭從右下往右上、growth chart 折線、燈泡、網絡節點、cyan dashed 圓環、coral 撕紙幾何、gold 點陣。
- 主色：cream + gold（在深綠底上才看得到）、coral 撕紙、cyan 線。**不要用深綠當主元素色**（會跟背景融在一起）。

### I 系列：活動頁主視覺

**I1 — news-hero.svg**  
- viewBox `0 0 1200 200`（橫幅，可貼在 page-hero 上方或右側）
- 透明背景，整體偏淺色（會疊在米白頁面上）。
- 元素橫向分布：左邊一個工作坊小桌椅剪影、中間幾片活動卡片（3-4 張不同角度的紙卡）、中間有對話泡泡、右邊一個日曆 + 暖金箭頭、整列點陣 + cyan 細線。
- 主色：deep green + coral + gold + cyan。

---

## 驗收
- 7 個檔名嚴格如上：`texture-paper.svg`、`texture-green.svg`、`success-course.svg`、`success-space.svg`、`success-apply.svg`、`startup-hero.svg`、`news-hero.svg`
- G1 / G2 必須 tileable（縱橫拼接不會看到明顯邊縫）
- 每張在瀏覽器直接打開不報錯
- 完成後寫 `DONE_2.md`，每個檔案一行構圖簡述
- 一氣呵成，中途不要問問題

開始。
