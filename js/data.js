/* ==========================================================================
 * 精密螺絲百科 - 全站數據層 data.js
 * DDC 621.88 ｜ 3 層 MegaMenu 數據驅動 ｜ 繁體中文
 * 架構：第一層頂部主選單 → 第二層 MegaMenu 面板分組 → 第三層具體條目
 * ========================================================================== */

(function () {

const SITE_CONFIG = {
  name: "Eatscrew 吃螺絲",
  nameEn: "Eatscrew Screw Encyclopedia",
  brandFull: "Eatscrew 吃螺絲 | 精密百科",
  ddc: "621.88",
  version: "v1.0.0",
  author: "舒安境",
  updated: "2026-11-04",
  description: "Eatscrew 吃螺絲精密百科，完整收錄螺絲規格、材質、製程、檢測標準 DIN ISO GB JIS，工業緊固件專業知識庫。"
};

/* 3 層 MegaMenu 主數據 */
const MEGA_MENU = [
  {
    id: "types",
    label: "螺絲類型庫",
    labelEn: "Screw Types",
    icon: "🔩",
    groups: [
      {
        group: "頭型分類 Head Style",
        items: [
          { slug: "pan-head",      name: "盤頭 / 圓頭 Pan Head",        desc: "最通用頭型，接觸面小，適合電子與一般組裝" },
          { slug: "csk-head",      name: "沉頭 / 平頭 Countersunk",      desc: "埋入式，表面平整，用於外觀件與貼合面" },
          { slug: "round-head",    name: "半圓頭 / 扁圓頭 Round Head",    desc: "弧形美觀頭型，家具與家電常用" },
          { slug: "hex-head",      name: "六角頭 Hex Head",              desc: "高鎖緊力，營建、機械、重載必備" },
          { slug: "hex-flange",    name: "六角法蘭頭 Hex Flange",        desc: "整體法蘭面，增大壓力分散，免墊片" },
          { slug: "button-head",  name: "圓柱頭 / 杯頭 Button Head",     desc: "內六角圓柱頭，傢俱、車輛、儀表" },
          { slug: "oval-head",     name: "橢圓頭 / 半沉頭 Oval",          desc: "半埋入式，裝飾與維修件" },
          { slug: "truss-head",    name: "大扁頭 / 碟頭 Truss",          desc: "大直徑低高度，薄鈑與塑膠件" }
        ]
      },
      {
        group: "槽型 / 驅動 Drive",
        items: [
          { slug: "drive-slot",     name: "一字槽 Slotted",              desc: "傳統簡易，低扭力，歷史悠久" },
          { slug: "drive-phillips",name: "十字槽 Phillips / PH",        desc: "全球最普及，自動化鎖付首選" },
          { slug: "drive-pozidriv",name: "米字槽 Pozidriv / PZ",        desc: "防偏移，高扭力，歐系車用" },
          { slug: "drive-hex",      name: "內六角 Allen / Hex Socket",   desc: "高扭力，家具與高強度螺絲" },
          { slug: "drive-torx",     name: "梅花槽 Torx / 星型",          desc: "低磨損高扭力，汽車航太主流" },
          { slug: "drive-socket",   name: "複合驅動 Combo / Clutch",    desc: "一字十字複合，通用維修" }
        ]
      },
      {
        group: "牙型 / 螺紋 Thread",
        items: [
          { slug: "thread-metric",  name: "公制螺紋 Metric M",          desc: "M1.6–M100，國際通用，6g/6H 公差" },
          { slug: "thread-self-tap",name: "自攻牙 Self-Tapping (A/B/T)", desc: "不需攻牙，直接鎖入塑膠鈑金" },
          { slug: "thread-machine",  name: "機械牙 Machine Screw",       desc: "配合預攻牙孔，精密儀表電子" },
          { slug: "thread-unc-unf", name: "英制螺紋 UNC / UNF",          desc: "美系產品主流，粗牙細牙" },
          { slug: "thread-pipe",    name: "管牙 Pipe (NPT/PT/PS)",       desc: "配管接頭密封用，錐牙/直牙" },
          { slug: "thread-worm",    name: "小螺紋 / 微螺紋 Micro",        desc: "M0.6–M1.6，半導體、鐘錶、醫療" }
        ]
      }
    ]
  },
  {
    id: "materials",
    label: "材質與表面",
    labelEn: "Materials & Finish",
    icon: "⚙️",
    groups: [
      {
        group: "金屬材質 Material",
        items: [
          { slug: "mat-sus304",  name: "不鏽鋼 SUS304 / A2",       desc: "18-8 沃斯田鐵，通用防腐" },
          { slug: "mat-sus316",  name: "不鏽鋼 SUS316 / A4",       desc: "含鉬，耐氯腐，海洋化工" },
          { slug: "mat-carbon",  name: "碳鋼 Carbon Steel",         desc: "1018/1022/1035，強度分級 4.8–12.9" },
          { slug: "mat-alloy",   name: "合金鋼 Alloy Steel",       desc: "SCM435/440，高強度 10.9/12.9" },
          { slug: "mat-titan",   name: "鈦合金 Titanium Gr.2/5",   desc: "輕量高強度，航太醫療" },
          { slug: "mat-brass",   name: "黃銅 Brass / Cu3604",       desc: "導電防磁，電器裝潢" },
          { slug: "mat-alum",    name: "鋁合金 Aluminum 6061",      desc: "輕量陽極，消費電子" },
          { slug: "mat-plastic", name: "工程塑膠 PEEK/PA66",        desc: "絕緣輕量，化學設備" }
        ]
      },
      {
        group: "表面處理 Finish",
        items: [
          { slug: "fin-zinc-blue",  name: "藍白鋅 Zinc Blue",      desc: "環保三價鉻，一般防鏽" },
          { slug: "fin-zinc-color", name: "五彩鋅 Zinc Color",      desc: "六價→三價彩色，舊製程" },
          { slug: "fin-black",      name: "發黑 Black Oxide",       desc: "磷化+油，室內防鏽" },
          { slug: "fin-anodize",   name: "陽極硬化 Anodize",       desc: "鋁件裝飾耐磨，Black/Red/Blue" },
          { slug: "fin-dacromet",   name: "達克羅 Dacromet",        desc: "無鉻高耐蝕，汽車底盤" },
          { slug: "fin-geomet",     name: "Geomet / 機械鍍鋅",      desc: "無氫脆，高強度鋼件" },
          { slug: "fin-epoxy",      name: "環氧樹脂粉末 Epoxy",     desc: "厚膜耐候，戶外建材" },
          { slug: "fin-nickel",     name: "電鍍鎳 Nickel / Chrome", desc: "裝飾耐磨，家電五金" }
        ]
      }
    ]
  },
  {
    id: "standards",
    label: "標準規範",
    labelEn: "Standards",
    icon: "📏",
    groups: [
      {
        group: "國際 / 歐洲 ISO / EN / DIN",
        items: [
          { slug: "iso-4014", name: "ISO 4014 六角頭螺栓",       desc: "公制六角頭，半螺紋" },
          { slug: "iso-4017", name: "ISO 4017 全螺紋螺栓",       desc: "公制全牙六角螺栓" },
          { slug: "iso-7045", name: "ISO 7045 盤頭十字螺絲",      desc: "十字盤頭機械螺絲" },
          { slug: "iso-7098", name: "ISO 7098 梅花槽螺絲",        desc: "Torx 驅動系統" },
          { slug: "din-912",  name: "DIN 912 內六角圓柱頭",       desc: "杯頭內六角，最通用" },
          { slug: "din-933",  name: "DIN 933 六角頭全牙",        desc: "德國版 ISO 4017" },
          { slug: "din-7985", name: "DIN 7985 盤頭十字",          desc: "歐系盤頭基準" }
        ]
      },
      {
        group: "美國 ANSI / ASTM / SAE",
        items: [
          { slug: "ansi-b18-2-1", name: "ASME B18.2.1 六角螺栓",  desc: "英制六角頭基準" },
          { slug: "ansi-b18-3",   name: "ASME B18.3 內六角螺絲",  desc: "英制杯頭/圓頭/沉頭" },
          { slug: "astm-a325",    name: "ASTM A325 結構螺栓",      desc: "營建高強度鋼結構" },
          { slug: "astm-a490",    name: "ASTM A490 高強度結構",   desc: "淬火回火合金鋼" },
          { slug: "sae-j429",      name: "SAE J429 機械性質",      desc: "英制等級 2/5/8" }
        ]
      },
      {
        group: "日本 / 台灣 / 中國 JIS / CNS / GB",
        items: [
          { slug: "jis-b1111", name: "JIS B1111 小螺絲",          desc: "日規精密小螺絲基準" },
          { slug: "jis-b1176", name: "JIS B1176 內六角螺絲",       desc: "日規杯頭基準" },
          { slug: "cns-4550",  name: "CNS 4550 公制螺絲",         desc: "台灣國家標準" },
          { slug: "gb-t70",    name: "GB/T 70 內六角圓柱頭",     desc: "中國國家標準" },
          { slug: "gb-t5783",  name: "GB/T 5783 六角頭全牙",     desc: "陸製通用基準" }
        ]
      }
    ]
  },
  {
    id: "manufacturing",
    label: "製造工藝",
    labelEn: "Manufacturing",
    icon: "🏭",
    groups: [
      {
        group: "成型 Forming",
        items: [
          { slug: "mfg-cold-heading", name: "冷鐓 Cold Heading",   desc: "螺絲量大主流，無切削省料" },
          { slug: "mfg-hot-forge",    name: "熱鐓 Hot Forging",    desc: "M20 以上大尺寸螺栓" },
          { slug: "mfg-machining",    name: "車削 / 銑削 CNC",      desc: "特殊異形、小批量精密件" },
          { slug: "mfg-screw-machine",name: "螺旋自動車 Screw Mach.", desc: "平行頭走刀，大量小螺帽" }
        ]
      },
      {
        group: "螺紋加工 Threading",
        items: [
          { slug: "mfg-rolling",  name: "滾牙 Thread Rolling",    desc: "塑性成形，齒根連續，高強度" },
          { slug: "mfg-threading",name: "攻牙 / 車螺紋 Cutting",    desc: "切削牙，小批量或大件" },
          { slug: "mfg-worm-grind",name: "螺紋研磨 Thread Grind",   desc: "高精度絲桿與滾珠螺桿" }
        ]
      },
      {
        group: "熱處理 / 表面",
        items: [
          { slug: "mfg-heat-treat", name: "淬火回火 Q&T",        desc: "10.9/12.9 鋼件必經" },
          { slug: "mfg-carburize",  name: "滲碳 Carburizing",     desc: "表面硬心部韌，自攻牙件" },
          { slug: "mfg-plating",    name: "電鍍 Plating Line",    desc: "鋅/鎳/錫電鍍製程" },
          { slug: "mfg-coating",    name: "達克羅 / 機械鍍",       desc: "無氫脆環保塗層" }
        ]
      }
    ]
  },
  {
    id: "applications",
    label: "應用領域",
    labelEn: "Applications",
    icon: "🌍",
    groups: [
      {
        group: "電子資訊 Electronics",
        items: [
          { slug: "app-pcb",       name: "PCB 板鎖付",             desc: "M1.6–M3 微型螺絲" },
          { slug: "app-notebook",  name: "筆電 / 平板外殼",       desc: "鈦 / 鋁 / 小頭型" },
          { slug: "app-server",     name: "伺服器 / 機架",          desc: "面板螺絲、絞線板" },
          { slug: "app-led",       name: "LED 照明",              desc: "散熱片鎖付導熱螺絲" }
        ]
      },
      {
        group: "汽車 / 交通 Automotive",
        items: [
          { slug: "app-engine",   name: "引擎本體",               desc: "10.9/12.9 高強度螺栓" },
          { slug: "app-chassis",  name: "底盤 / 懸吊",            desc: "達克羅防鏽，法蘭面" },
          { slug: "app-ev",        name: "電動車電池模組",         desc: "鋁螺絲、導電塗層" },
          { slug: "app-brake",     name: "煞車系統",              desc: "離合器螺栓、碟盤" }
        ]
      },
      {
        group: "航太 / 醫療 / 營建",
        items: [
          { slug: "app-aerospace", name: "航太國防",              desc: "鈦合金、MP35N、特殊規" },
          { slug: "app-medical",   name: "醫療生技",              desc: "骨釘、人工關節鈦螺絲" },
          { slug: "app-building",  name: "預力混凝土 / 地錨",      desc: "預力鋼絞線、地脚螺栓" },
          { slug: "app-furniture", name: "家具 / 木業",           desc: "三合螺栓、木螺絲" }
        ]
      }
    ]
  },
  {
    id: "qc",
    label: "檢測與品管",
    labelEn: "QC & Testing",
    icon: "🧪",
    groups: [
      {
        group: "機械性質 Mechanical",
        items: [
          { slug: "qc-tensile",   name: "抗拉 / 降伏強度",        desc: "ISO 6892 拉力試驗" },
          { slug: "qc-hardness",  name: "硬度 HRC / HV",          desc: "洛氏、維氏硬度計" },
          { slug: "qc-torque",    name: "扭力 / 扭斷試驗",        desc: "ISO 898-1 扭矩楔負荷" },
          { slug: "qc-hardened",  name: "楔負荷試驗",            desc: "螺栓頭部強度驗證" }
        ]
      },
      {
        group: "尺寸 / 表面",
        items: [
          { slug: "qc-coating",   name: "膜厚 / 鹽霧 NSS",        desc: "ASTM B117 鹽霧測試" },
          { slug: "qc-thread-ga", name: "螺紋栓規 / 環規",        desc: "GO/NO-GO 6g/6H" },
          { slug: "qc-cmm",       name: "三次元 / 光學量測",      desc: "CMM 精密尺寸" },
          { slug: "qc-hfe",       name: "氫脆試驗 HFT",          desc: "高強度鋼必測" }
        ]
      },
      {
        group: "失效分析 FAI",
        items: [
          { slug: "fai-fracture", name: "斷口分析",              desc: "SEM/EDX 金相" },
          { slug: "fai-loosen",   name: "鬆動 / 震動分析",        desc: "Junker 震動測試" },
          { slug: "fai-corrosion",name: "腐蝕失效",              desc: "白鏽、紅鏽、縫隙腐蝕" }
        ]
      }
    ]
  },
  {
    id: "wiki",
    label: "產業百科",
    labelEn: "Industry Wiki",
    icon: "📚",
    groups: [
      {
        group: "術語詞典 Glossary",
        items: [
          { slug: "glos-grade",   name: "強度等級 4.8/8.8/10.9/12.9", desc: "公制螺栓等級識讀" },
          { slug: "glos-coef",     name: "摩擦係數 CoF",            desc: "鎖緊扭矩計算核心" },
          { slug: "glos-preload",  name: "預緊力 Preload",         desc: "螺栓軸向拉力" },
          { slug: "glos-torque-yz",name: "扭矩 Yield",              desc: "降伏鎖緊法" }
        ]
      },
      {
        group: "品牌 / 產業鏈",
        items: [
          { slug: "brand-wurth",  name: "Würth 德國伍爾特",       desc: "全球銷售龍頭" },
          { slug: "brand-fabory",  name: "Fastenal / Würth",        desc: "美系通路" },
          { slug: "brand-samsung", name: "三星 Screw / 台灣螺絲廠", desc: "亞洲供應鏈" },
          { slug: "brand-hilti",   name: "Hilti 喜利得",           desc: "營建錨栓" }
        ]
      },
      {
        group: "趨勢 / 問答",
        items: [
          { slug: "trend-smart",  name: "智慧螺絲 / 感測螺栓",     desc: "物聯網鎖緊監控" },
          { slug: "trend-light",  name: "輕量化 / 鈦鎂複合",        desc: "EV 與航太驅動" },
          { slug: "faq-loosen",   name: "螺絲為什麼會鬆？",        desc: "震動、鬆弛、熱循環" },
          { slug: "faq-size",     name: "M3/M4/M5 如何選？",       desc: "應用與負荷對照" }
        ]
      }
    ]
  },
  {
    id: "trivia",
    label: "白話冷知識庫",
    labelEn: "Counterintuitive Trivia",
    icon: "📰",
    groups: [
      {
        group: "迷思破解 Myths",
        items: [
          { slug: "myth-vibration-loosen", name: "螺絲其實不是被「震鬆」的", desc: "橫向滑動才是螺絲自鬆的真正元兇" },
          { slug: "myth-more-torque", name: "鎖緊不是扭力越大越好", desc: "過度鎖緊反而降低夾緊力與使用壽命" },
          { slug: "myth-washer-helical", name: "彈簧墊圈大多沒用", desc: "螺旋彈簧墊圈的防鬆效果常被高估" },
          { slug: "myth-stainless-gall", name: "不鏽鋼螺絲反而最容易咬死", desc: "冷焊現象讓不鏽鋼比碳鋼更難拆" },
          { slug: "myth-coarse-strong", name: "粗牙比細牙強？", desc: "牙距與強度的關係常被誤解" },
          { slug: "myth-bolt-screw", name: "螺絲與螺栓其實沒有嚴格界線", desc: "用法與標準才是真正的分野" },
          { slug: "myth-zinc-rust", name: "鍍鋅螺絲為什麼還是會生鏽", desc: "鋅是犧牲陽極不是永久防護罩" },
          { slug: "myth-hard-strong", name: "硬度高不等於強度高", desc: "10.9 級不是越硬越好" },
          { slug: "myth-loctite-every", name: "螺絲膠不是萬能", desc: "該用膠的場合才需要用膠" },
          { slug: "myth-longer-better", name: "螺絲越長越強？", desc: "長度與強度的關係比想像複雜" },
          { slug: "myth-torque-wrench", name: "有扭力扳手就萬無一失？", desc: "摩擦係數才是鎖緊的最大變數" },
          { slug: "myth-ss-stronger", name: "不鏽鋼不一定比碳鋼強", desc: "A2-70 約當 8.8 級以下" },
          { slug: "myth-reuse-bolt", name: "高強度螺栓不能重複使用", desc: "航太為什麼拆過就換" },
          { slug: "myth-cw-loosen", name: "順時針一定鎖緊？", desc: "左旋螺絲的存在" },
          { slug: "myth-grip-length", name: "螺絲「抓」得緊不靠牙深", desc: "預緊力才是夾持力的來源" },
          { slug: "myth-plastic-weak", name: "塑膠螺絲其實很能撐", desc: "工程塑膠的承載能力" },
          { slug: "myth-overtorque-head", name: "頭部斷掉一定是扭矩太大？", desc: "疲勞與氫脆常常才是主因" },
          { slug: "myth-self-tap-strong", name: "自攻牙不一定省力", desc: "鎖入轉矩與鑽尾設計的取捨" },
          { slug: "myth-lubricate-torque", name: "上油後要降扭矩", desc: "潤滑會改變摩擦係數與鎖緊結果" },
          { slug: "myth-galvanic", name: "不同金屬接觸會加速腐蝕", desc: "電位差的冷知識" },
        ]
      },
      {
        group: "力學物理 Physics",
        items: [
          { slug: "phys-preload-key", name: "螺栓接頭的靈魂是預緊力", desc: "不是螺紋本身" },
          { slug: "phys-friction-90", name: "鎖緊扭矩 90% 耗在摩擦", desc: "只有約 10% 變成夾緊力" },
          { slug: "phys-60deg", name: "螺紋角為什麼是 60 度", desc: "歷史與力學的妥協" },
          { slug: "phys-lead-angle", name: "導程角與自鎖", desc: "為什麼螺帽不會自己轉出來" },
          { slug: "phys-thermal-loosen", name: "熱脹冷縮會讓螺絲鬆？", desc: "熱循環與潛變的效應" },
          { slug: "phys-embedment", name: "沉陷鬆弛", desc: "鎖緊後前幾小時預緊力為何流失" },
          { slug: "phys-wedge", name: "螺紋本身就是斜楔", desc: "螺旋的機械優勢" },
          { slug: "phys-clamp-spring", name: "螺栓其實是彈簧", desc: "夾緊力來自拉伸變形" },
          { slug: "phys-shear-tension", name: "螺栓該抗剪還是抗拉", desc: "兩種受力大不同" },
          { slug: "phys-stress-area", name: "應力截面積不是小徑面積", desc: "As 的來歷" },
          { slug: "phys-pitch-effect", name: "牙距越小越不容易鬆？", desc: "導程與自鬆的關係" },
          { slug: "phys-torque-angle", name: "扭矩轉角法的物理", desc: "為什麼要轉 90 度" },
          { slug: "phys-yield-precise", name: "鎖到降伏點", desc: "工程上「剛好」的藝術" },
          { slug: "phys-stiffness-ratio", name: "夾緊件剛度比", desc: "誰來分擔外載" },
          { slug: "phys-prying", name: "撬離效應", desc: "偏心夾緊讓螺栓多扛幾倍力" },
          { slug: "phys-separation", name: "接頭分離條件", desc: "外載多大才「開縫」" },
          { slug: "phys-fatigue-life", name: "螺栓疲勞是小振幅大次數殺手", desc: "不是靜力不夠" },
          { slug: "phys-amplitude", name: "振幅比預緊力更致命", desc: "疲勞設計的 ABC" },
          { slug: "phys-gravity-micro", name: "微觀下螺紋怎麼咬合", desc: "接觸面的真相" },
          { slug: "phys-damping", name: "螺紋接頭的阻尼", desc: "為什麼機械結構靠螺栓吸震" },
        ]
      },
      {
        group: "材質真相 Materials",
        items: [
          { slug: "matl-stainless-name", name: "「不鏽鋼」其實會鏽", desc: "鈍化膜的真相" },
          { slug: "matl-galling", name: "不鏽鋼螺絲為什麼會冷焊咬死", desc: "以及如何避免" },
          { slug: "matl-alum-oxide", name: "鋁螺絲氧化反而保護自己", desc: "陽極膜原理" },
          { slug: "matl-titan-fire", name: "鈦螺絲摩擦會起火？", desc: "鈦屑自燃冷知識" },
          { slug: "matl-brass-spark", name: "黃銅螺絲防爆", desc: "為什麼危險場所工具用銅" },
          { slug: "matl-carbon-grades", name: "碳鋼 4.8 到 12.9 差在哪", desc: "成分與熱處理" },
          { slug: "matl-alloy-scratch", name: "SCM435 為什麼是高強度之王", desc: "合金鋼的秘密" },
          { slug: "matl-zinc-sacrificial", name: "鍍鋅的犧牲陽極", desc: "鋅為什麼「替死」" },
          { slug: "matl-black-oxide", name: "發黑其實不防鏽", desc: "只是「看起來」黑" },
          { slug: "matl-nickel-function", name: "鍍鎳不是為了好看", desc: "功能性考量" },
          { slug: "matl-peek-extreme", name: "PEEK 螺絲", desc: "耐高溫塑膠的極限" },
          { slug: "matl-nylon-nut", name: "尼龍螺帽的防鬆原理", desc: "摩擦 vs 變形" },
          { slug: "matl-brass-magnetic", name: "黃銅為什麼沒有磁性", desc: "材料科學小教室" },
          { slug: "matl-inconel", name: "高溫合金螺絲", desc: "Inconel 為何用在引擎" },
          { slug: "matl-hybrid-bi-metal", name: "雙金屬螺絲", desc: "異種金屬的接合術" },
          { slug: "matl-chromate-banned", name: "六價鉻為什麼被禁", desc: "環保法規的衝擊" },
          { slug: "matl-hydrogen-steel", name: "高強度鋼怕氫", desc: "氫脆的材質觀點" },
          { slug: "matl-dacromet-alternative", name: "達克羅之後", desc: "鋅片塗層家族" },
          { slug: "matl-wood-screw", name: "木螺絲的材質學", desc: "為什麼要硬化" },
          { slug: "matl-stainless-440", name: "440 不鏽鋼", desc: "可硬化的不鏽鋼" },
        ]
      },
      {
        group: "歷史冷知識 History",
        items: [
          { slug: "hist-ancient-thread", name: "螺紋不是工業革命發明", desc: "古希臘就有了" },
          { slug: "hist-leonardo-screw", name: "達文西的螺絲機", desc: "天才的設計" },
          { slug: "hist-whitworth", name: "惠氏螺紋", desc: "世界第一個螺紋標準" },
          { slug: "hist-unified-war", name: "二戰的螺紋災難", desc: "統一螺紋的誕生" },
          { slug: "hist-iso-unify", name: "ISO 公制螺紋大統一", desc: "各國妥協史" },
          { slug: "hist-din-iso", name: "DIN 為什麼被 ISO 取代", desc: "標準戰爭" },
          { slug: "hist-torx-60s", name: "Torx 的誕生", desc: "星形為什麼贏" },
          { slug: "hist-phillips-30s", name: "十字螺絲的發明", desc: "為了自動化" },
          { slug: "hist-pozidriv", name: "米字槽為何存在", desc: "十字槽的修正版" },
          { slug: "hist-hemlock-screw", name: "木螺絲的殖民史", desc: "美洲的螺絲釘" },
          { slug: "hist-nut-bolt-who", name: "螺帽與螺栓誰先發明", desc: "扣件考古" },
          { slug: "hist-lathe-thread", name: "螺紋車床的革命", desc: "莫茲利與標準化" },
          { slug: "hist-sae-inch", name: "英制螺紋為何還在", desc: "美系的慣性" },
          { slug: "hist-jis-ww2", name: "JIS 螺紋與二戰", desc: "日規的誕生" },
          { slug: "hist-cns-taiwan", name: "CNS 標準", desc: "台灣螺絲業的基石" },
          { slug: "hist-gb-soviet", name: "GB 標準的來歷", desc: "從蘇聯到自研" },
          { slug: "hist-cold-heading-history", name: "冷鐓的百年進化", desc: "從手搖到多工位" },
          { slug: "hist-washer-ancient", name: "墊圈的古老歷史", desc: "比螺紋還早？" },
          { slug: "hist-torque-wrench-hist", name: "扭力扳手的發明", desc: "飛行安全的推手" },
          { slug: "hist-fastener-future", name: "扣件的下一個百年", desc: "從標準到智慧" },
        ]
      },
      {
        group: "製造品管 Process & QC",
        items: [
          { slug: "proc-cold-vs-cut", name: "冷鐓為什麼比車削強", desc: "金屬流線的秘密" },
          { slug: "proc-rolling-strong", name: "滾牙讓螺紋強 20–30%", desc: "為什麼" },
          { slug: "proc-hyrogen-trap", name: "電鍍與氫脆", desc: "高強度螺絲的殺手" },
          { slug: "proc-salt-spray-limit", name: "鹽霧試驗的局限", desc: "不代表真實壽命" },
          { slug: "proc-hardness-cheat", name: "硬度測試能騙人", desc: "為什麼要三點量測" },
          { slug: "proc-quench-martensite", name: "淬火回火的顯微世界", desc: "麻田散鐵" },
          { slug: "proc-carburize-case", name: "滲碳不是整顆變硬", desc: "表面硬化" },
          { slug: "proc-temper-embrittle", name: "回火脆性", desc: "12.9 級的隱憂" },
          { slug: "proc-grain-flow", name: "鍛造流線", desc: "為什麼斷頭在螺紋不在頭部" },
          { slug: "proc-plating-parts", name: "電鍍厚度不均", desc: "滾鍍與掛鍍" },
          { slug: "proc-spec-gauge", name: "螺紋量規的哲學", desc: "GO/NO-GO 為什麼這樣設計" },
          { slug: "proc-first-article", name: "首件檢驗的意義", desc: "不是做一次就結束" },
          { slug: "proc-cmm-myth", name: "三次元量測的誤區", desc: "量得到不代表對" },
          { slug: "proc-tensile-test-cheat", name: "拉力試驗的細節", desc: "夾持方式會改變結果" },
          { slug: "proc-wedge-test", name: "楔負荷試驗", desc: "為什麼要斜著拉" },
          { slug: "proc-lot-trace", name: "批號追溯", desc: "一顆螺絲的身世" },
          { slug: "proc-cleanliness", name: "清潔度", desc: "螺絲也講潔淨" },
          { slug: "proc-sorting-bowl", name: "螺絲整列與篩選", desc: "振動盤的秘密" },
          { slug: "proc-inspection-stat", name: "抽驗統計", desc: "AQL 是什麼" },
          { slug: "proc-oil-quench-fire", name: "淬火油會燒起來？", desc: "熱處理安全" },
        ]
      },
      {
        group: "現場應用 Field & Application",
        items: [
          { slug: "field-engine-tty", name: "引擎螺栓為什麼要換新", desc: "一次性螺栓的祕密" },
          { slug: "field-aero-price", name: "航太螺絲為什麼貴", desc: "一顆上千元的秘密" },
          { slug: "field-rivet-plane", name: "飛機為什麼用鉚釘不用螺絲", desc: "疲勞設計" },
          { slug: "field-pcb-static", name: "PCB 螺絲與靜電", desc: "電子廠的講究" },
          { slug: "field-bridge-preload", name: "橋樑螺栓的預力", desc: "鋼結構的命脈" },
          { slug: "field-furniture-cam", name: "三合一螺絲", desc: "家具的模組化" },
          { slug: "field-bone-screw", name: "骨釘的奧妙", desc: "醫療螺絲不簡單" },
          { slug: "field-ev-busbar", name: "EV 電池銅排螺絲", desc: "導電接頭的眉角" },
          { slug: "field-brake-lug", name: "輪圈螺栓的扭矩", desc: "為什麼不能亂鎖" },
          { slug: "field-suspension", name: "底盤螺絲的防鏽戰", desc: "達克羅與鋅片" },
          { slug: "field-led-thermal", name: "LED 散熱螺絲", desc: "導熱與鎖付" },
          { slug: "field-server-rack", name: "機櫃螺絲的標準化", desc: "19 吋的約定" },
          { slug: "field-wind-turbine", name: "風機螺栓", desc: "巨無霸預緊力" },
          { slug: "field-space-bolt", name: "太空站用什麼螺絲", desc: "真空中的鎖固" },
          { slug: "field-nuclear-torque", name: "核電廠的螺栓管理", desc: "最高標準" },
          { slug: "field-wood-furniture", name: "木螺絲的鎖入學", desc: "木纖維的抓持" },
          { slug: "field-glass-mount", name: "玻璃幕牆的螺絲", desc: "建築五金" },
          { slug: "field-bike-light", name: "單車輕量化螺絲", desc: "鈦螺絲的浪漫" },
          { slug: "field-toy-safety", name: "玩具螺絲的安全", desc: "為什麼要防鬆膠" },
          { slug: "field-marine-corrosion", name: "船用螺絲的防腐", desc: "海洋的考驗" },
        ]
      },
      {
        group: "鎖固防鬆 Locking & Loosening",
        items: [
          { slug: "lock-vibration-truth", name: "震動不是直接鬆脫", desc: "橫向位移的連鎖反應" },
          { slug: "lock-junker-test", name: "Junker 試驗", desc: "防鬆的試金石" },
          { slug: "lock-washer-spring", name: "彈簧墊圈為什麼常被說沒用", desc: "力學分析" },
          { slug: "lock-washer-toothed", name: "齒形墊圈與溝槽墊圈", desc: "咬合防鬆" },
          { slug: "lock-nylon-insert", name: "尼龍防鬆螺帽", desc: "摩擦力從哪來" },
          { slug: "lock-nut-deformed", name: "變形螺帽", desc: "橢圓與切槽" },
          { slug: "lock-adhesive", name: "螺絲膠的固化", desc: "厭氧膠原理" },
          { slug: "lock-wire-safety", name: "安全鋼絲", desc: "航太的古老智慧" },
          { slug: "lock-pin-cotter", name: "開口銷與槽形螺帽", desc: "機械式防鬆" },
          { slug: "lock-loctite-222", name: "螺絲膠怎麼選", desc: "強度分級" },
          { slug: "lock-stamped-head", name: "點膠與壓點", desc: "出廠就鎖死" },
          { slug: "lock-prevailing", name: "預載型防鬆", desc: "扭矩型與定位型" },
          { slug: "lock-thread-forming", name: "自鎖螺紋", desc: "螺旋絲套" },
          { slug: "lock-helical-insert", name: "Heli-Coil 的妙用", desc: "修復與強化" },
          { slug: "lock-torque-retention", name: "防鬆測試標準", desc: "ISO 16130" },
          { slug: "lock-temperature", name: "高溫下防鬆", desc: "蠕變與應力釋放" },
          { slug: "lock-paint-mark", name: "畫線檢查", desc: "螺絲有沒有轉動" },
          { slug: "lock-double-nut", name: "雙螺帽", desc: "老方法科學嗎" },
          { slug: "lock-friction-analysis", name: "防鬆的物理", desc: "摩擦角與楔效應" },
          { slug: "lock-tab-washer", name: "止退墊圈", desc: "折邊的機械鎖" },
        ]
      },
      {
        group: "工具量測 Tools & Measuring",
        items: [
          { slug: "tool-phillips-camout", name: "十字螺絲為什麼會滑牙", desc: "凸出效應" },
          { slug: "tool-torx-win", name: "Torx 為什麼比十字好", desc: "傳動角度" },
          { slug: "tool-socket-6-12", name: "六角 vs 十二角套筒", desc: "該用哪個" },
          { slug: "tool-torque-wrench-type", name: "扭力扳手有幾種", desc: "機械與電子" },
          { slug: "tool-click-trust", name: "咔嗒聲可信嗎", desc: "扭力扳手校驗" },
          { slug: "tool-impact-secret", name: "衝擊扳手怎麼轉螺絲", desc: "錘擊原理" },
          { slug: "tool-driver-magnet", name: "螺絲刀為什麼要磁性", desc: "與退磁" },
          { slug: "tool-clutch-driver", name: "電動起子的離合器", desc: "扭矩控制的真相" },
          { slug: "tool-go-nogo", name: "GO/NO-GO 量規", desc: "為什麼兩個一組" },
          { slug: "tool-pitch-gauge", name: "牙距規", desc: "一眼分辨公制英制" },
          { slug: "tool-caliber-note", name: "游標卡尺的螺紋測量", desc: "別量外徑就下結論" },
          { slug: "tool-drill-tap-chart", name: "鑽孔與攻牙表", desc: "預鑽孔直徑" },
          { slug: "tool-extractor", name: "斷頭螺絲取出器", desc: "反向螺旋" },
          { slug: "tool-thread-repair", name: "螺紋修復", desc: "絲攻與螺旋絲套" },
          { slug: "tool-screwdriver-tip", name: "起子頭磨損", desc: "為什麼會打滑" },
          { slug: "tool-wrench-angle", name: "扳手開口角 15 度", desc: "設計的巧思" },
          { slug: "tool-e-torque", name: "電動工具扭矩曲線", desc: "動態與靜態" },
          { slug: "tool-measure-preload", name: "怎麼量預緊力", desc: "超音波螺栓" },
          { slug: "tool-bolt-gauge", name: "螺栓規格辨識", desc: "從頭型看標準" },
          { slug: "tool-torque-adapter", name: "轉接頭會改變扭矩", desc: "延長桿的誤差" },
        ]
      },
      {
        group: "選型數字 Selection & Numbers",
        items: [
          { slug: "choose-m3-m4-m5", name: "M3/M4/M5 怎麼選", desc: "不只是看大小" },
          { slug: "choose-length-rule", name: "螺絲長度怎麼算", desc: "貫穿 vs 盲孔" },
          { slug: "choose-grade-read", name: "強度等級怎麼讀", desc: "4.8 到 12.9 的密碼" },
          { slug: "choose-8-8-10-9", name: "8.8 和 10.9 差多少", desc: "一個等級的意義" },
          { slug: "choose-a2-a4", name: "A2-70 與 A4-80", desc: "不鏽鋼代號" },
          { slug: "choose-coarse-fine", name: "粗牙細牙選哪個", desc: "振動與調整" },
          { slug: "choose-self-tap-mate", name: "自攻牙的選配", desc: "板材厚度" },
          { slug: "choose-torque-table", name: "扭矩表從哪來", desc: "假設摩擦 0.2" },
          { slug: "choose-preload-75", name: "預緊力取 75% 降伏", desc: "安全邊際" },
          { slug: "choose-proof-load", name: "保應力是什麼", desc: "不永久變形的極限" },
          { slug: "choose-strength-yield", name: "降伏與抗拉", desc: "差在哪" },
          { slug: "choose-k-factor", name: "K 係數", desc: "扭矩公式的靈魂" },
          { slug: "choose-tensile-area", name: "應力截面積查表", desc: "M 系列的 As" },
          { slug: "choose-hardness-map", name: "硬度對照", desc: "HRC/HV/HB" },
          { slug: "choose-plating-thick", name: "鍍層厚度怎麼選", desc: "μm 的學問" },
          { slug: "choose-counterbore", name: "沉孔與過孔", desc: "頭部空間" },
          { slug: "choose-washer-need", name: "什麼時候要墊圈", desc: "承壓面積" },
          { slug: "choose-anti-loosen-which", name: "防鬆該選誰", desc: "膠 vs 墊圈 vs 螺母" },
          { slug: "choose-materials-map", name: "材質選型速查", desc: "環境與強度" },
          { slug: "choose-ss-grade", name: "不鏽鋼螺絲等級", desc: "70/80 的意義" },
        ]
      },
      {
        group: "產業趨勢 Industry & Trends",
        items: [
          { slug: "indus-taiwan-kingdom", name: "台灣螺絲王國", desc: "一年出口的秘密" },
          { slug: "indus-fastener-cost", name: "一顆螺絲的成本", desc: "鋼價與工序" },
          { slug: "indus-china-price", name: "中國螺絲為什麼便宜", desc: "規模與供應鏈" },
          { slug: "indus-smart-bolt", name: "智慧螺栓", desc: "會「說話」的扣件" },
          { slug: "indus-3d-print", name: "3D 列印螺紋", desc: "能取代嗎" },
          { slug: "indus-esg-plating", name: "ESG 下的電鍍革命", desc: "綠色表面處理" },
          { slug: "indus-ev-shift", name: "EV 改變螺絲業", desc: "電池與馬達" },
          { slug: "indus-aero-export", name: "航太認證", desc: "扣件的護城河" },
          { slug: "indus-supply-chain", name: "螺絲供應鏈", desc: "從礦砂到貨架" },
          { slug: "indus-robot-assembly", name: "機器人鎖付", desc: "自動化時代" },
          { slug: "indus-digital-twins", name: "數位雙生", desc: "螺絲的數位身分" },
          { slug: "indus-nano-coat", name: "奈米塗層", desc: "扣件的未來表面" },
          { slug: "indus-recycled-steel", name: "再生鋼螺絲", desc: "循環經濟" },
          { slug: "indus-standard-battle", name: "標準戰爭", desc: "誰說了算" },
          { slug: "indus-warehouse-ai", name: "AI 選型", desc: "螺絲的推薦系統" },
          { slug: "indus-brand-trust", name: "品牌螺絲的溢價", desc: "為什麼買 Würth" },
          { slug: "indus-counterfeit", name: "仿冒螺絲的危險", desc: "假 10.9 級" },
          { slug: "indus-logistics-sku", name: "螺絲的 SKU 戰爭", desc: "庫存管理" },
          { slug: "indus-tariff-trade", name: "關稅與螺絲貿易", desc: "全球流動" },
          { slug: "indus-next-gen", name: "下一代扣件", desc: "鎂合金與複合材" },
        ]
      }
    ]
  }
];

/* 全站條目索引（供檢索用） */
const SITE_INDEX = (() => {
  const idx = [];
  MEGA_MENU.forEach(top => {
    top.groups.forEach(g => {
      g.items.forEach(it => {
        idx.push({
          top: top.label,
          topId: top.id,
          group: g.group,
          slug: it.slug,
          name: it.name,
          desc: it.desc,
          url: `pages/${it.slug}.html`
        });
      });
    });
  });
  return idx;
})();

/* ==========================================================================
 * 全站百科目錄 TOC（百科 + 世界歷史 + 產業應用）
 * 第一層：3 篇 ｜ 第二層：100 條目 ｜ 第三層：200 細目（每條目 2 細目）
 * 每一層皆完整收錄（不能缺），並對應到現有頁面 slug 以利跳轉
 * ========================================================================== */
const TOC = {
  title: "全站百科目錄",
  intro: "第一層 篇（3）／第二層 條目（100）／第三層 細目（200），三層全數收錄。",
  parts: [
    {
      id: "p1", no: "壹", part: "第一篇", title: "螺絲百科基礎",
      en: "Screw Encyclopedia Basics", icon: "🔩", range: "1–40",
      desc: "從螺絲定義、螺紋結構、驅動槽型、頭型牙種、材料表面、製程檢測到選型術語的完整基礎體系。",
      items: [
        { n: 1, title: "螺絲基本定義與力學原理", link: "thread-machine", subs: [
          { n: "1.1", title: "螺旋線與斜面原理", link: "phys-wedge" },
          { n: "1.2", title: "螺絲作為可拆式緊固件的定位", link: "myth-bolt-screw" } ] },
        { n: 2, title: "螺紋基礎構造", link: "thread-metric", subs: [
          { n: "2.1", title: "牙型、大徑、小徑、中徑", link: "thread-metric" },
          { n: "2.2", title: "螺距、導程、升角、牙側角", link: "phys-lead-angle" } ] },
        { n: 3, title: "螺絲驅動槽型分類", link: "drive-phillips", subs: [
          { n: "3.1", title: "一字、十字、米字驅動", link: "drive-phillips" },
          { n: "3.2", title: "內六角、梅花、防盜特殊槽型", link: "drive-torx" } ] },
        { n: 4, title: "螺絲頭型分類", link: "pan-head", subs: [
          { n: "4.1", title: "圓頭、平頭、皿頭、膨脹頭", link: "csk-head" },
          { n: "4.2", title: "法蘭頭、傘頭、薄頭、特殊異型頭", link: "hex-flange" } ] },
        { n: 5, title: "螺絲牙種分類", link: "thread-self-tap", subs: [
          { n: "5.1", title: "機械牙、自攻牙、鑽尾牙", link: "thread-self-tap" },
          { n: "5.2", title: "木牙、塑膠專用牙、高低牙", link: "thread-worm" } ] },
        { n: 6, title: "公制螺紋體系 M 系列", link: "thread-metric", subs: [
          { n: "6.1", title: "粗牙規格參數", link: "thread-metric" },
          { n: "6.2", title: "細牙規格參數", link: "thread-metric" } ] },
        { n: 7, title: "英制螺紋體系 UNC / UNF", link: "thread-unc-unf", subs: [
          { n: "7.1", title: "統一粗牙規範", link: "thread-unc-unf" },
          { n: "7.2", title: "統一細牙規範", link: "thread-unc-unf" } ] },
        { n: 8, title: "管螺紋體系", link: "thread-pipe", subs: [
          { n: "8.1", title: "非密封管螺紋", link: "thread-pipe" },
          { n: "8.2", title: "密封錐管螺紋", link: "thread-pipe" } ] },
        { n: 9, title: "螺絲強度等級規範", link: "glos-grade", subs: [
          { n: "9.1", title: "碳鋼強度等級 4.8 / 8.8 / 10.9 / 12.9", link: "glos-grade" },
          { n: "9.2", title: "不鏽鋼強度分級 A2 / A4", link: "choose-a2-a4" } ] },
        { n: 10, title: "螺絲常用材料", link: "mat-sus304", subs: [
          { n: "10.1", title: "碳鋼、合金鋼", link: "mat-carbon" },
          { n: "10.2", title: "不鏽鋼、銅、鋁、鈦合金", link: "mat-titan" } ] },
        { n: 11, title: "表面處理技術", link: "fin-zinc-blue", subs: [
          { n: "11.1", title: "電鍍、黑氧化、發黑", link: "fin-black" },
          { n: "11.2", title: "熱浸鍍鋅、達克羅、特氟龍塗層", link: "fin-dacromet" } ] },
        { n: 12, title: "配套緊固件", link: "hist-nut-bolt-who", subs: [
          { n: "12.1", title: "螺帽種類與鎖附原理", link: "hist-nut-bolt-who" },
          { n: "12.2", title: "墊片、彈簧墊、止退扣環", link: "lock-washer-spring" } ] },
        { n: 13, title: "防鬆機制原理", link: "lock-vibration-truth", subs: [
          { n: "13.1", title: "摩擦力防鬆", link: "lock-prevailing" },
          { n: "13.2", title: "機械式鎖定、膠類防鬆", link: "lock-adhesive" } ] },
        { n: 14, title: "螺絲製程基礎", link: "mfg-cold-heading", subs: [
          { n: "14.1", title: "線材抽線、冷鐓成型", link: "mfg-cold-heading" },
          { n: "14.2", title: "滾牙、熱處理、表面後加工", link: "mfg-rolling" } ] },
        { n: 15, title: "檢測項目與設備", link: "qc-tensile", subs: [
          { n: "15.1", title: "外觀、尺寸、螺紋通止規", link: "qc-thread-ga" },
          { n: "15.2", title: "拉力、扭力、鹽霧測試", link: "qc-torque" } ] },
        { n: 16, title: "螺絲失效模式", link: "fai-fracture", subs: [
          { n: "16.1", title: "斷裂、滑牙、蠕變", link: "fai-fracture" },
          { n: "16.2", title: "鬆脫、腐蝕、疲勞破壞", link: "fai-loosen" } ] },
        { n: 17, title: "扭力與預緊力關係", link: "glos-preload", subs: [
          { n: "17.1", title: "扭力計算基礎公式", link: "glos-coef" },
          { n: "17.2", title: "潤滑對扭力的影響", link: "myth-lubricate-torque" } ] },
        { n: 18, title: "鎖附夾具與工具", link: "tool-torque-wrench-type", subs: [
          { n: "18.1", title: "手動工具、棘輪扳手", link: "tool-torque-wrench-type" },
          { n: "18.2", title: "氣動、電動定扭力起子", link: "tool-clutch-driver" } ] },
        { n: 19, title: "微型螺絲體系", link: "thread-worm", subs: [
          { n: "19.1", title: "微機械牙、手機精密小螺絲", link: "thread-worm" },
          { n: "19.2", title: "微型自攻螺絲", link: "thread-self-tap" } ] },
        { n: 20, title: "巨型重工螺絲", link: "hex-head", subs: [
          { n: "20.1", title: "風電、橋梁大螺栓", link: "field-wind-turbine" },
          { n: "20.2", title: "壓力容器特種螺柱", link: "mfg-hot-forge" } ] },
        { n: 21, title: "異型非標螺絲", link: "mfg-machining", subs: [
          { n: "21.1", title: "折彎螺絲、偏心螺絲", link: "mfg-machining" },
          { n: "21.2", title: "客製化多階段螺絲", link: "mfg-screw-machine" } ] },
        { n: 22, title: "複合功能螺絲", link: "drive-socket", subs: [
          { n: "22.1", title: "帶止動、帶定位銷螺絲", link: "lock-pin-cotter" },
          { n: "22.2", title: "導電、絕緣特種螺絲", link: "field-ev-busbar" } ] },
        { n: 23, title: "耐高溫螺絲", link: "matl-inconel", subs: [
          { n: "23.1", title: "耐熱合金材料", link: "matl-inconel" },
          { n: "23.2", title: "高溫環境鎖附特性", link: "lock-temperature" } ] },
        { n: 24, title: "耐腐蝕螺絲", link: "mat-sus316", subs: [
          { n: "24.1", title: "海洋腐蝕等級對應材料", link: "field-marine-corrosion" },
          { n: "24.2", title: "酸性環境選型", link: "myth-galvanic" } ] },
        { n: 25, title: "輕量化螺絲", link: "mat-alum", subs: [
          { n: "25.1", title: "鋁合金螺絲", link: "mat-alum" },
          { n: "25.2", title: "鈦合金螺絲", link: "mat-titan" } ] },
        { n: 26, title: "塑膠螺絲", link: "mat-plastic", subs: [
          { n: "26.1", title: "工程塑膠螺絲材質", link: "mat-plastic" },
          { n: "26.2", title: "使用限制與強度邊界", link: "myth-plastic-weak" } ] },
        { n: 27, title: "木螺絲專屬特性", link: "matl-wood-screw", subs: [
          { n: "27.1", title: "木牙設計邏輯", link: "matl-wood-screw" },
          { n: "27.2", title: "軟木、硬木選用差異", link: "field-wood-furniture" } ] },
        { n: 28, title: "板金自攻螺絲", link: "thread-self-tap", subs: [
          { n: "28.1", title: "尖尾自攻", link: "thread-self-tap" },
          { n: "28.2", title: "鑽尾自攻螺絲（Tek 螺絲）", link: "thread-self-tap" } ] },
        { n: 29, title: "螺絲公差體系", link: "qc-thread-ga", subs: [
          { n: "29.1", title: "螺紋公差帶", link: "qc-thread-ga" },
          { n: "29.2", title: "配合分類：間隙、過渡、過盈", link: "qc-cmm" } ] },
        { n: 30, title: "螺絲標記規則", link: "glos-grade", subs: [
          { n: "30.1", title: "標籤與頭部刻印含義", link: "tool-bolt-gauge" },
          { n: "30.2", title: "採購規格書寫範例", link: "choose-grade-read" } ] },
        { n: 31, title: "螺絲包裝與儲存", link: "indus-logistics-sku", subs: [
          { n: "31.1", title: "防鏽包裝規範", link: "indus-logistics-sku" },
          { n: "31.2", title: "倉儲環境要求", link: "indus-warehouse-ai" } ] },
        { n: 32, title: "螺絲標準組織", link: "hist-iso-unify", subs: [
          { n: "32.1", title: "ISO 國際標準", link: "iso-4014" },
          { n: "32.2", title: "ANSI、DIN、JIS 國家標準", link: "ansi-b18-2-1" } ] },
        { n: 33, title: "螺絲選型通用流程", link: "choose-m3-m4-m5", subs: [
          { n: "33.1", title: "負載、環境、材質評估", link: "choose-materials-map" },
          { n: "33.2", title: "驅動與安裝空間檢核", link: "choose-counterbore" } ] },
        { n: 34, title: "鎖附工藝禁忌", link: "myth-more-torque", subs: [
          { n: "34.1", title: "過扭力鎖付風險", link: "myth-overtorque-head" },
          { n: "34.2", title: "孔徑搭配錯誤問題", link: "tool-drill-tap-chart" } ] },
        { n: 35, title: "振動環境下螺絲設計", link: "phys-damping", subs: [
          { n: "35.1", title: "橫向振動鬆脫原理", link: "lock-vibration-truth" },
          { n: "35.2", title: "防鬆方案對比", link: "choose-anti-loosen-which" } ] },
        { n: 36, title: "螺絲與鉚釘、焊接對比", link: "field-rivet-plane", subs: [
          { n: "36.1", title: "可維修性差異", link: "field-rivet-plane" },
          { n: "36.2", title: "成本與強度取捨", link: "indus-fastener-cost" } ] },
        { n: 37, title: "3D 列印螺絲", link: "indus-3d-print", subs: [
          { n: "37.1", title: "3D 列印螺紋限制", link: "indus-3d-print" },
          { n: "37.2", title: "適用場景", link: "indus-3d-print" } ] },
        { n: 38, title: "螺絲量測儀器", link: "qc-cmm", subs: [
          { n: "38.1", title: "投影機、輪廓儀", link: "qc-cmm" },
          { n: "38.2", title: "扭力測試機", link: "qc-torque" } ] },
        { n: 39, title: "螺絲相關計算", link: "choose-k-factor", subs: [
          { n: "39.1", title: "拉伸應力計算", link: "phys-stress-area" },
          { n: "39.2", title: "疲勞壽命估算", link: "phys-fatigue-life" } ] },
        { n: 40, title: "常見螺絲術語詞彙", link: "glos-grade", subs: [
          { n: "40.1", title: "台灣業界慣用術語", link: "glos-coef" },
          { n: "40.2", title: "國際英文術語對照", link: "glos-coef" } ] }
      ]
    },
    {
      id: "p2", no: "貳", part: "第二篇", title: "螺絲世界發展史",
      en: "World History of the Screw", icon: "📜", range: "41–70",
      desc: "從古文明螺旋、中世紀與文藝復興，到標準化浪潮、產業轉移與未來技術路線的完整時間軸。",
      items: [
        { n: 41, title: "螺旋概念的起源：古文明螺旋機構", link: "hist-ancient-thread", subs: [
          { n: "41.1", title: "阿基米德螺旋揚水器", link: "hist-ancient-thread" },
          { n: "41.2", title: "古希臘螺旋壓榨機", link: "hist-ancient-thread" } ] },
        { n: 42, title: "中世紀螺旋應用", link: "hist-ancient-thread", subs: [
          { n: "42.1", title: "印刷機螺旋壓板", link: "hist-ancient-thread" },
          { n: "42.2", title: "鐘錶微調螺旋", link: "hist-lathe-thread" } ] },
        { n: 43, title: "文藝復興時期金屬螺絲誕生", link: "hist-leonardo-screw", subs: [
          { n: "43.1", title: "達文西螺旋加工草圖", link: "hist-leonardo-screw" },
          { n: "43.2", title: "早期車床手作螺絲", link: "hist-lathe-thread" } ] },
        { n: 44, title: "18 世紀工業革命前夕", link: "hist-lathe-thread", subs: [
          { n: "44.1", title: "火炮、槍械手工螺絲", link: "hist-lathe-thread" },
          { n: "44.2", title: "各廠螺紋互不通用", link: "hist-whitworth" } ] },
        { n: 45, title: "惠特沃斯標準（Whitworth）誕生", link: "hist-whitworth", subs: [
          { n: "45.1", title: "1841 英國螺紋標準", link: "hist-whitworth" },
          { n: "45.2", title: "第一套全球廣泛流傳螺紋規範", link: "hist-whitworth" } ] },
        { n: 46, title: "美國統一螺紋體系發展", link: "hist-unified-war", subs: [
          { n: "46.1", title: "UNC / UNF 建立背景", link: "hist-unified-war" },
          { n: "46.2", title: "美規與英規分歧", link: "hist-sae-inch" } ] },
        { n: 47, title: "米制螺紋 M 系列建立", link: "hist-iso-unify", subs: [
          { n: "47.1", title: "歐陸公制推進", link: "hist-iso-unify" },
          { n: "47.2", title: "ISO 公制成為主流", link: "hist-iso-unify" } ] },
        { n: 48, title: "螺絲加工機械演變", link: "hist-lathe-thread", subs: [
          { n: "48.1", title: "手搖車床螺紋切削", link: "hist-lathe-thread" },
          { n: "48.2", title: "滾牙機、冷鐓機發明", link: "hist-cold-heading-history" } ] },
        { n: 49, title: "一字槽驅動普及", link: "drive-slot", subs: [
          { n: "49.1", title: "一字螺絲大規模應用", link: "drive-slot" },
          { n: "49.2", title: "一字槽缺點暴露", link: "drive-slot" } ] },
        { n: 50, title: "十字螺絲（Phillips）誕生", link: "hist-phillips-30s", subs: [
          { n: "50.1", title: "1930 年代十字槽專利", link: "hist-phillips-30s" },
          { n: "50.2", title: "自動鎖附產線爆發", link: "hist-phillips-30s" } ] },
        { n: 51, title: "內六角螺絲發展", link: "drive-hex", subs: [
          { n: "51.1", title: "艾倫螺絲起源", link: "drive-hex" },
          { n: "51.2", title: "工業設備廣泛採用", link: "drive-hex" } ] },
        { n: 52, title: "梅花 Torx 驅動發展", link: "hist-torx-60s", subs: [
          { n: "52.1", title: "抗滑牙設計初衷", link: "hist-torx-60s" },
          { n: "52.2", title: "汽車、電子產業導入", link: "drive-torx" } ] },
        { n: 53, title: "二次大戰對螺絲產業的刺激", link: "hist-jis-ww2", subs: [
          { n: "53.1", title: "軍用高強度螺絲需求", link: "hist-unified-war" },
          { n: "53.2", title: "鈦合金、耐熱螺絲研發", link: "mat-titan" } ] },
        { n: 54, title: "戰後全球分工與螺絲產業轉移", link: "indus-taiwan-kingdom", subs: [
          { n: "54.1", title: "歐美高階研發", link: "indus-aero-export" },
          { n: "54.2", title: "亞洲緊固件製造興起", link: "indus-taiwan-kingdom" } ] },
        { n: 55, title: "台灣螺絲產業發展脈絡", link: "indus-taiwan-kingdom", subs: [
          { n: "55.1", title: "早期家庭式五金廠", link: "brand-samsung" },
          { n: "55.2", title: "中區螺絲產業聚落成型", link: "indus-taiwan-kingdom" } ] },
        { n: 56, title: "中國大陸螺絲產業成長", link: "indus-china-price", subs: [
          { n: "56.1", title: "基礎緊固件量產", link: "indus-china-price" },
          { n: "56.2", title: "高強度特種螺絲追趕", link: "indus-china-price" } ] },
        { n: 57, title: "日本精密螺絲發展路線", link: "hist-jis-ww2", subs: [
          { n: "57.1", title: "JIS 精密規格", link: "jis-b1111" },
          { n: "57.2", title: "微型電子螺絲技術", link: "thread-worm" } ] },
        { n: 58, title: "表面處理技術進化史", link: "fin-zinc-blue", subs: [
          { n: "58.1", title: "早期鍍鋅防鏽", link: "fin-zinc-blue" },
          { n: "58.2", title: "無鉻環保塗層發展", link: "matl-chromate-banned" } ] },
        { n: 59, title: "熱處理技術演進", link: "mfg-heat-treat", subs: [
          { n: "59.1", title: "早期簡易淬火", link: "mfg-heat-treat" },
          { n: "59.2", title: "連續式爐體控溫技術", link: "mfg-heat-treat" } ] },
        { n: 60, title: "防鬆技術演變", link: "lock-vibration-truth", subs: [
          { n: "60.1", title: "彈簧墊片傳統方案", link: "lock-washer-spring" },
          { n: "60.2", title: "膠鎖、牙底防鬆螺絲", link: "lock-adhesive" } ] },
        { n: 61, title: "螺絲自動化檢測歷史", link: "proc-inspection-stat", subs: [
          { n: "61.1", title: "人工分選", link: "proc-sorting-bowl" },
          { n: "61.2", title: "光學影像全檢機普及", link: "proc-inspection-stat" } ] },
        { n: 62, title: "微型螺絲發展（3C 浪潮）", link: "thread-worm", subs: [
          { n: "62.1", title: "筆記型電腦時代", link: "app-notebook" },
          { n: "62.2", title: "智慧手機微米級螺絲", link: "thread-worm" } ] },
        { n: 63, title: "新能源螺絲技術發展", link: "indus-ev-shift", subs: [
          { n: "63.1", title: "風電螺栓研發歷程", link: "field-wind-turbine" },
          { n: "63.2", title: "電動車電池螺絲", link: "app-ev" } ] },
        { n: 64, title: "航太螺絲進化", link: "app-aerospace", subs: [
          { n: "64.1", title: "飛機早期螺栓", link: "app-aerospace" },
          { n: "64.2", title: "太空低溫、真空特種螺絲", link: "field-space-bolt" } ] },
        { n: 65, title: "海洋工程螺絲發展", link: "field-marine-corrosion", subs: [
          { n: "65.1", title: "近海結構螺絲", link: "field-marine-corrosion" },
          { n: "65.2", title: "深海高壓耐蝕螺栓", link: "mat-sus316" } ] },
        { n: 66, title: "螺絲標準整合運動", link: "hist-iso-unify", subs: [
          { n: "66.1", title: "ISO 整合各國規格", link: "hist-iso-unify" },
          { n: "66.2", title: "舊標準逐步淘汰", link: "hist-din-iso" } ] },
        { n: 67, title: "環保法規衝擊螺絲產業", link: "indus-esg-plating", subs: [
          { n: "67.1", title: "RoHS、無鎘、無鉻要求", link: "matl-chromate-banned" },
          { n: "67.2", title: "低碳製造趨勢", link: "indus-recycled-steel" } ] },
        { n: 68, title: "智慧工廠與螺絲產業", link: "indus-digital-twins", subs: [
          { n: "68.1", title: "螺絲生產 MES 追溯", link: "proc-lot-trace" },
          { n: "68.2", title: "AI 外觀瑕疵檢測", link: "indus-warehouse-ai" } ] },
        { n: 69, title: "國際螺絲貿易史", link: "indus-tariff-trade", subs: [
          { n: "69.1", title: "緊固件反傾銷事件", link: "indus-tariff-trade" },
          { n: "69.2", title: "全球供應鏈重組", link: "indus-supply-chain" } ] },
        { n: 70, title: "螺絲未來技術路線", link: "indus-next-gen", subs: [
          { n: "70.1", title: "新材料、智慧感測螺絲", link: "trend-smart" },
          { n: "70.2", title: "可降解、回收型緊固件", link: "indus-recycled-steel" } ] }
      ]
    },
    {
      id: "p3", no: "叁", part: "第三篇", title: "螺絲產業與應用",
      en: "Screw Industry & Applications", icon: "🏭", range: "71–100",
      desc: "橫跨營建、交通、電子、能源、醫療與消費性產品的應用地圖，以及上下游產業鏈、品質認證與未來場景。",
      items: [
        { n: 71, title: "營建土木產業螺絲應用", link: "app-building", subs: [
          { n: "71.1", title: "鋼結構高強度螺栓", link: "astm-a325" },
          { n: "71.2", title: "輕鋼構、屋頂鑽尾螺絲", link: "thread-self-tap" } ] },
        { n: 72, title: "橋梁與公共工程", link: "field-bridge-preload", subs: [
          { n: "72.1", title: "預力螺栓、橋梁鉸接螺絲", link: "field-bridge-preload" },
          { n: "72.2", title: "抗震螺絲系統", link: "app-building" } ] },
        { n: 73, title: "家電產業螺絲", link: "mat-brass", subs: [
          { n: "73.1", title: "白電機殼自攻螺絲", link: "thread-self-tap" },
          { n: "73.2", title: "壓縮機高溫螺栓", link: "matl-inconel" } ] },
        { n: 74, title: "消費性電子產業", link: "app-notebook", subs: [
          { n: "74.1", title: "手機、平板微型螺絲", link: "app-notebook" },
          { n: "74.2", title: "伺服器、機殼螺絲", link: "app-server" } ] },
        { n: 75, title: "電腦與周邊", link: "app-pcb", subs: [
          { n: "75.1", title: "主機板銅柱螺絲", link: "app-pcb" },
          { n: "75.2", title: "散熱模組鎖附螺絲", link: "field-led-thermal" } ] },
        { n: 76, title: "汽車產業螺絲", link: "app-chassis", subs: [
          { n: "76.1", title: "底盤高強度螺栓", link: "app-chassis" },
          { n: "76.2", title: "車身板金、內裝螺絲", link: "app-engine" } ] },
        { n: 77, title: "電動車專用螺絲", link: "app-ev", subs: [
          { n: "77.1", title: "電池包防漏、絕緣螺絲", link: "app-ev" },
          { n: "77.2", title: "馬達、動力總成螺絲", link: "app-ev" } ] },
        { n: 78, title: "機車產業", link: "app-engine", subs: [
          { n: "78.1", title: "引擎高溫螺栓", link: "app-engine" },
          { n: "78.2", title: "車架、外殼防振螺絲", link: "lock-vibration-truth" } ] },
        { n: 79, title: "農業機械螺絲", link: "mat-carbon", subs: [
          { n: "79.1", title: "田間耐腐蝕螺絲", link: "mat-sus316" },
          { n: "79.2", title: "收割機耐磨螺絲", link: "mat-alloy" } ] },
        { n: 80, title: "工具機產業", link: "mfg-machining", subs: [
          { n: "80.1", title: "床身固定大螺栓", link: "hex-head" },
          { n: "80.2", title: "滑台精密調整螺絲", link: "thread-worm" } ] },
        { n: 81, title: "產業自動化設備", link: "indus-robot-assembly", subs: [
          { n: "81.1", title: "治具、模組螺絲", link: "proc-first-article" },
          { n: "81.2", title: "線性滑軌固定螺絲", link: "mfg-worm-grind" } ] },
        { n: 82, title: "航太工業", link: "app-aerospace", subs: [
          { n: "82.1", title: "機身輕量化鈦螺絲", link: "app-aerospace" },
          { n: "82.2", title: "發動機耐熱螺絲", link: "matl-inconel" } ] },
        { n: 83, title: "船舶與離岸風電", link: "field-marine-corrosion", subs: [
          { n: "83.1", title: "海上平台 A4 不鏽鋼螺栓", link: "mat-sus316" },
          { n: "83.2", title: "風機葉輪、塔架螺栓", link: "field-wind-turbine" } ] },
        { n: 84, title: "軌道交通", link: "field-bridge-preload", subs: [
          { n: "84.1", title: "高鐵車體螺栓", link: "app-chassis" },
          { n: "84.2", title: "軌道扣件螺絲", link: "app-building" } ] },
        { n: 85, title: "醫療設備螺絲", link: "app-medical", subs: [
          { n: "85.1", title: "手術器械不鏽鋼螺絲", link: "app-medical" },
          { n: "85.2", title: "植入醫材螺絲規範", link: "field-bone-screw" } ] },
        { n: 86, title: "光學儀器", link: "app-pcb", subs: [
          { n: "86.1", title: "鏡筒微調螺絲", link: "thread-worm" },
          { n: "86.2", title: "防震精密鎖附", link: "phys-damping" } ] },
        { n: 87, title: "傢俱產業螺絲", link: "app-furniture", subs: [
          { n: "87.1", title: "三合一螺絲、木牙螺絲", link: "field-furniture-cam" },
          { n: "87.2", title: "板式傢俱快拆螺絲", link: "app-furniture" } ] },
        { n: 88, title: "包裝與模具產業", link: "mfg-screw-machine", subs: [
          { n: "88.1", title: "塑膠射出模具螺絲", link: "mfg-machining" },
          { n: "88.2", title: "熱流道高溫螺絲", link: "matl-inconel" } ] },
        { n: 89, title: "水電空調產業", link: "thread-pipe", subs: [
          { n: "89.1", title: "風管鑽尾螺絲", link: "thread-self-tap" },
          { n: "89.2", title: "管路法蘭螺栓", link: "thread-pipe" } ] },
        { n: 90, title: "國防軍工領域", link: "app-aerospace", subs: [
          { n: "90.1", title: "武器裝備耐衝擊螺絲", link: "app-aerospace" },
          { n: "90.2", title: "雷達、電子戰設備螺絲", link: "app-pcb" } ] },
        { n: 91, title: "水族與海洋設備", link: "field-marine-corrosion", subs: [
          { n: "91.1", title: "海水級不鏽鋼螺絲", link: "mat-sus316" },
          { n: "91.2", title: "水下攝影器材螺絲", link: "mat-sus316" } ] },
        { n: 92, title: "運動器材產業", link: "field-bike-light", subs: [
          { n: "92.1", title: "自行車鈦螺絲", link: "field-bike-light" },
          { n: "92.2", title: "健身器材負載螺栓", link: "mat-carbon" } ] },
        { n: 93, title: "螺絲上游產業鏈", link: "indus-supply-chain", subs: [
          { n: "93.1", title: "線材、特殊合金原料", link: "indus-supply-chain" },
          { n: "93.2", title: "模具、滾牙板供應商", link: "mfg-rolling" } ] },
        { n: 94, title: "螺絲中游製造廠分類", link: "indus-taiwan-kingdom", subs: [
          { n: "94.1", title: "標準件量產廠", link: "brand-samsung" },
          { n: "94.2", title: "非標精密特種螺絲廠", link: "mfg-screw-machine" } ] },
        { n: 95, title: "螺絲下游通路體系", link: "indus-logistics-sku", subs: [
          { n: "95.1", title: "經銷商、五金連鎖", link: "brand-wurth" },
          { n: "95.2", title: "原廠直供 ODM / OEM", link: "brand-fabory" } ] },
        { n: 96, title: "螺絲產業品質認證", link: "indus-aero-export", subs: [
          { n: "96.1", title: "ISO 9001、IATF 16949", link: "indus-aero-export" },
          { n: "96.2", title: "航太 AS9100 認證", link: "app-aerospace" } ] },
        { n: 97, title: "螺絲產業成本結構", link: "indus-fastener-cost", subs: [
          { n: "97.1", title: "原料成本佔比", link: "indus-fastener-cost" },
          { n: "97.2", title: "表面處理、檢測費用", link: "indus-fastener-cost" } ] },
        { n: 98, title: "螺絲常見產業痛點", link: "proc-cmm-myth", subs: [
          { n: "98.1", title: "混料、尺寸偏移", link: "proc-lot-trace" },
          { n: "98.2", title: "鹽霧不良、批次差異", link: "proc-salt-spray-limit" } ] },
        { n: 99, title: "螺絲產業 ESG 與循環", link: "indus-esg-plating", subs: [
          { n: "99.1", title: "廢螺絲回收再冶煉", link: "indus-recycled-steel" },
          { n: "99.2", title: "低污染表面處理轉型", link: "indus-esg-plating" } ] },
        { n: 100, title: "螺絲產業未來應用場景", link: "indus-next-gen", subs: [
          { n: "100.1", title: "人形機器人微型緊固件", link: "indus-robot-assembly" },
          { n: "100.2", title: "太空基地長效螺絲系統", link: "field-space-bolt" } ] }
      ]
    }
  ]
};

/* 建置 TOC 條目索引（供檢索），並併入全站索引 */
const TOC_INDEX = (() => {
  const idx = [];
  TOC.parts.forEach(p => {
    p.items.forEach(it => {
      idx.push({ top: p.part + " · " + p.title, topId: p.id, group: "全站百科目錄", slug: it.link, name: p.no + "「" + it.n + "」" + it.title, desc: it.title, url: `pages/${it.link}.html`, toc: true });
      it.subs.forEach(s => {
        idx.push({ top: p.part + " · " + p.title, topId: p.id, group: "全站百科目錄", slug: s.link, name: "「" + s.n + "」" + s.title, desc: it.title, url: `pages/${s.link}.html`, toc: true });
      });
    });
  });
  return idx;
})();

/* 匯出（瀏覽器全域） */
window.SITE_CONFIG = SITE_CONFIG;
window.MEGA_MENU = MEGA_MENU;
window.SITE_INDEX = SITE_INDEX.concat(TOC_INDEX);
window.TOC = TOC;

})();
