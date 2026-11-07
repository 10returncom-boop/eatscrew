/* ==========================================================================
 * 精密螺絲百科 - 全站主程式 main.js
 * 主題切換 / MegaMenu 渲染 / 全站檢索 / Breadcrumb / Sidebar 聯動
 * ========================================================================== */

(function () {
  "use strict";

  /* ---------- 1. 主題切換 ---------- */
  const Theme = {
    KEY: "pse-theme",
    init() {
      const saved = localStorage.getItem(this.KEY);
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const theme = saved || (prefersDark ? "dark" : "light");
      this.apply(theme);
      window.addEventListener("DOMContentLoaded", () => {
        const btn = document.getElementById("themeToggle");
        if (btn) btn.addEventListener("click", () => this.toggle());
      });
    },
    apply(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem(this.KEY, theme);
      const btn = document.getElementById("themeToggle");
      if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
    },
    toggle() {
      const cur = document.documentElement.getAttribute("data-theme");
      this.apply(cur === "dark" ? "light" : "dark");
    }
  };
  Theme.init();

  /* ---------- 相對路徑助手 ---------- */
  const IN_PAGES = location.pathname.includes("/pages/");
  const PAGE_DIR = IN_PAGES ? "" : "pages/";
  const pageHref = (slug) => `${PAGE_DIR}${slug}.html`;

  /* ---------- 2. MegaMenu 渲染（既有 8 大分類） ---------- */
  function renderMegaMenu() {
    const nav = document.getElementById("mainNav");
    if (!nav || !window.MEGA_MENU) return;
    nav.innerHTML = MEGA_MENU
      .filter(top => top.id !== "trivia")
      .map(top => `
      <li class="nav-item">
        <a href="#" class="nav-link">${top.icon} ${top.label} ▾</a>
        <div class="mega-panel">
          ${top.groups.map(g => `
            <div class="mega-group">
              <div class="mega-group-title">${g.group}</div>
              ${g.items.map(it => `
                <a href="${pageHref(it.slug)}">${it.name}
                  <span class="desc">${it.desc}</span>
                </a>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </li>
    `).join("");
  }

  /* ---------- 2.1 全站百科目錄 MegaMenu（Header dropdown） ---------- */
  function renderTOCMega() {
    const nav = document.getElementById("mainNav");
    if (!nav || !window.TOC) return;
    const item = `
      <li class="nav-item has-toc">
        <a href="${pageHref("toc")}" class="nav-link">📑 百科目錄 ▾</a>
        <div class="toc-mega">
          ${window.TOC.parts.map(p => `
            <div class="toc-mega-col">
              <a class="toc-mega-part" href="${pageHref("toc")}#${p.id}">${p.no} ${p.part}・${p.title} <small>(${p.range})</small></a>
              <div class="toc-mega-list">
                ${p.items.map(it => `
                  <div class="toc-mega-item">
                    <a href="${pageHref(it.link)}" class="toc-mega-title"><b>${it.n}.</b> ${it.title}</a>
                    <span class="toc-mega-subs">${it.subs.map(s => `<a href="${pageHref(s.link)}">${s.n} ${s.title}</a>`).join(" · ")}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </li>`;
    nav.insertAdjacentHTML("afterbegin", item);
  }

  /* ---------- 2.3 主題知識區（首頁 4 張精選 + 查看全部連結） ---------- */
  function renderBlog() {
    const host = document.getElementById("blogSection");
    if (!host) return;
    const cat = (window.MEGA_MENU || []).find(t => t.id === "trivia");
    if (!cat) return;
    const groups = cat.groups;
    const total = groups.reduce((n, g) => n + g.items.length, 0);

    const thumbs = [
      "assets/hot_torx_hexalobular_screws.webp",
      "assets/hot_din912_socket_cap_showcase.webp",
      "assets/hot_grade_48_88_109_129_family.webp",
      "assets/stainless_316_marine_hex_bolts.webp"
    ];

    // 首頁只精選 4 張
    const featured = groups.slice(0, 2).flatMap(g => g.items.slice(0, 2));
    const cardsHTML = featured.map((it, i) => {
      const gName = groups.slice(0,2).find(g => g.items.includes(it)).group.split(/\s/)[0];
      const thumb = thumbs[i % thumbs.length];
      return `
        <a class="article-card" href="${pageHref(it.slug)}">
          <div class="article-card-img">
            <img src="${thumb}" alt="${it.name}">
          </div>
          <div class="article-card-body">
            <h3 class="article-card-title">${it.name}</h3>
            <div class="article-card-meta">
              <span class="ac-tag">${gName}</span>
              <span class="ac-date">2026-11-04</span>
              <span class="ac-readmore">閱讀全文 ▸</span>
            </div>
            <p class="article-card-desc">${it.desc}</p>
            <div class="article-card-hash">
              <span>#${gName}</span><span>#螺絲知識</span><span>#工業緊固件</span>
            </div>
          </div>
        </a>`;
    }).join("");

    // 判斷目前是首頁還是 kb.html 內頁
    const isKbPage = document.body.classList && document.body.classList.contains("is-kb");

    if (isKbPage) {
      // kb.html 內頁：渲染全部 groups 的完整列表
      const allHTML = groups.map(g => `
        <h2 style="font-size:var(--fs-md);margin:var(--sp-4) 0 var(--sp-2);border-left:4px solid var(--c-primary);padding-left:10px;">
          📂 ${g.group} <span style="color:var(--c-text-mute);font-weight:400;font-size:var(--fs-sm)">（${g.items.length} 篇）</span>
        </h2>
        <div class="card-grid" style="margin-bottom:var(--sp-3)">
          ${g.items.map(it => `
            <a class="card" href="${pageHref(it.slug)}">
              <div class="card-body">
                <h3 style="font-size:var(--fs-sm)">${it.name}</h3>
                <p>${it.desc}</p>
              </div>
            </a>`).join("")}
        </div>`).join("");
      host.innerHTML = allHTML;
    } else {
      // 首頁：4 張精選 + 查看全部
      host.innerHTML = `
        <section style="margin:var(--sp-5) 0;">
          <h2 style="font-size:var(--fs-lg);margin-bottom:var(--sp-3);border-left:4px solid var(--c-primary);padding-left:10px;">
            📚 主題知識區
          </h2>
          <p style="color:var(--c-text-mute);margin-bottom:var(--sp-3);font-size:var(--fs-sm)">
            共 ${total} 篇白話冷知識，${groups.length} 大主題
          </p>
          <div class="article-card-list">${cardsHTML}</div>
          <div style="text-align:center;margin-top:var(--sp-3)">
            <a href="pages/kb.html" class="btn" style="display:inline-block;padding:10px 24px;background:var(--c-primary);color:#fff;border-radius:6px;text-decoration:none;font-weight:600;">
              查看全部 ${total} 篇 ▸
            </a>
          </div>
        </section>`;
    }
  }

  /* ---------- 2.2 全站百科目錄 TOC 樹（Sidebar / 首頁 topdown） ---------- */
  function renderTOCBlock() {
    if (!window.TOC) return;
    const currentSlug = document.body.dataset.slug || "";
    const expandAll = document.body.classList && document.body.classList.contains("is-toc");

    const partHas = (p, slug) => expandAll || (slug && (p.items.some(it => it.link === slug) || p.items.some(it => it.subs.some(s => s.link === slug))));
    const itemHas = (it, slug) => expandAll || (slug && (it.link === slug || it.subs.some(s => s.link === slug)));

    const html = `
      <div class="toc-tree">
        ${window.TOC.parts.map(p => {
          const pOpen = partHas(p, currentSlug);
          return `
          <div class="toc-part" id="${p.id}">
            <div class="toc-part-head${pOpen ? " open" : ""}" role="button" tabindex="0">
              <span class="toc-arrow">▸</span>
              <a href="${pageHref("toc")}#${p.id}"><b>${p.no}</b> ${p.part}・${p.title} <small>(${p.range})</small></a>
            </div>
            <div class="toc-part-body${pOpen ? " open" : ""}">
              ${p.items.map(it => {
                const iOpen = itemHas(it, currentSlug);
                return `
                <div class="toc-item">
                  <div class="toc-item-head${iOpen ? " open" : ""}" role="button" tabindex="0">
                    <span class="toc-arrow">▸</span>
                    <a href="${pageHref(it.link)}" class="${it.link === currentSlug ? "current" : ""}">${it.n}. ${it.title}</a>
                  </div>
                  <div class="toc-item-body${iOpen ? " open" : ""}">
                    ${it.subs.map(s => `<a href="${pageHref(s.link)}" class="${s.link === currentSlug ? "current" : ""}">${s.n} ${s.title}</a>`).join("")}
                  </div>
                </div>`;
              }).join("")}
            </div>
          </div>`;
        }).join("")}
      </div>`;

    const section = document.getElementById("tocSection");
    if (section) {
      section.innerHTML = `<h2 class="toc-section-title">📑 全站百科目錄 <a class="toc-more" href="${pageHref("toc")}">完整目錄總頁 →</a></h2>${html}`;
    }

    const sb = document.querySelector(".sidebar");
    if (sb && !sb.querySelector("#tocSidebar")) {
      const wrap = document.createElement("div");
      wrap.id = "tocSidebar";
      wrap.innerHTML = `<h3>📑 全站百科目錄</h3>${html}<a class="toc-more" href="${pageHref("toc")}">查看完整目錄總頁 →</a>`;
      sb.insertBefore(wrap, sb.firstChild);
    }

    document.querySelectorAll(".toc-part-head, .toc-item-head").forEach(h => {
      h.addEventListener("click", (e) => {
        if (e.target.closest("a")) return;
        const body = h.nextElementSibling;
        if (!body) return;
        const isOpen = h.classList.toggle("open");
        body.classList.toggle("open", isOpen);
      });
    });
  }

  /* ---------- 3. Breadcrumb 渲染 ---------- */
  function renderBreadcrumb() {
    const bar = document.getElementById("breadcrumb");
    if (!bar || !window.SITE_INDEX) return;
    const slug = document.body.dataset.slug;
    if (!slug) {
      bar.innerHTML = `<div class="container"><div class="breadcrumb">
        <a href="../index.html">首頁</a><span class="sep">/</span>
        <span class="current">${SITE_CONFIG.name}</span>
      </div></div>`;
      return;
    }
    const item = SITE_INDEX.find(i => i.slug === slug);
    if (!item) return;
    bar.innerHTML = `<div class="container"><div class="breadcrumb">
      <a href="../index.html">首頁</a><span class="sep">/</span>
      <span>${item.top}</span><span class="sep">/</span>
      <span class="current">${item.name}</span>
    </div></div>`;
  }

  /* ---------- 4. Sidebar 渲染 ---------- */
  function renderSidebar() {
    const sb = document.getElementById("sidebarNav");
    if (!sb || !window.MEGA_MENU) return;
    const currentSlug = document.body.dataset.slug;
    sb.innerHTML = MEGA_MENU.map(top => `
      <div class="sidebar-group">
        <h3>${top.icon} ${top.label}</h3>
        <nav>
          ${top.groups.flatMap(g => g.items.map(it => `
            <a href="${it.slug}.html" class="${it.slug === currentSlug ? "active" : ""}">${it.name}</a>
          `)).join("")}
        </nav>
      </div>
    `).join("");
  }

  /* ---------- 5. 全站檢索 ---------- */
  function initSearch() {
    const box = document.getElementById("searchInput");
    const res = document.getElementById("searchResults");
    if (!box || !res || !window.SITE_INDEX) return;
    box.addEventListener("input", () => {
      const q = box.value.trim().toLowerCase();
      if (q.length < 2) { res.classList.remove("active"); res.innerHTML = ""; return; }
      const hits = SITE_INDEX.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.group.toLowerCase().includes(q)
      ).slice(0, 12);
      if (!hits.length) {
        res.innerHTML = `<a href="#"><div class="res-cat">無結果</div>找不到「${box.value}」</a>`;
      } else {
        res.innerHTML = hits.map(h => `
          <a href="${pageHref(h.slug)}">
            <div><strong>${h.name}</strong></div>
            <div class="res-cat">${h.top} · ${h.group}</div>
            <div style="font-size:12px;color:var(--c-text-mute)">${h.desc}</div>
          </a>
        `).join("");
      }
      res.classList.add("active");
    });
    document.addEventListener("click", e => {
      if (!e.target.closest(".search-box")) res.classList.remove("active");
    });
  }

  /* ---------- 6. Footer 渲染 ---------- */
  function renderFooter() {
    const f = document.getElementById("siteFooter");
    if (!f) return;
    const p = location.pathname.includes("/pages/") ? "" : "pages/";
    const home = location.pathname.includes("/pages/") ? "../index.html" : "index.html";
    f.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <h4>${SITE_CONFIG.name} <small style="color:var(--c-text-mute)">${SITE_CONFIG.ddc}</small></h4>
            <p style="font-size:var(--fs-sm);color:var(--c-text-mute)">${SITE_CONFIG.description}</p>
          </div>
          <div>
            <h4>螺絲類型</h4>
            <a href="${p}pan-head.html">盤頭螺絲</a>
            <a href="${p}csk-head.html">沉頭螺絲</a>
            <a href="${p}din-912.html">內六角杯頭</a>
            <a href="${p}drive-torx.html">梅花槽 Torx</a>
          </div>
          <div>
            <h4>材質表面</h4>
            <a href="${p}mat-sus304.html">SUS304 不鏽鋼</a>
            <a href="${p}mat-carbon.html">碳鋼螺栓</a>
            <a href="${p}fin-zinc-blue.html">藍白鋅</a>
            <a href="${p}fin-dacromet.html">達克羅</a>
          </div>
          <div>
            <h4>關於</h4>
            <a href="${home}">首頁</a>
            <a href="${p}toc.html">全站百科目錄</a>
            <a href="${p}about.html">關於本百科</a>
            <a href="${p}references.html">引用規範</a>
            <a href="${p}contact.html">聯絡編輯</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${SITE_CONFIG.name} · ${SITE_CONFIG.nameEn}</span>
          <span>版本 ${SITE_CONFIG.version} · ${SITE_CONFIG.updated} · 編輯 ${SITE_CONFIG.author}</span>
        </div>
      </div>`;
  }

  /* ---------- 6.5 手機漢堡選單 ---------- */
  function initMobileNav() {
    const tools = document.querySelector(".header-tools");
    if (!tools || document.getElementById("navToggle")) return;
    const btn = document.createElement("button");
    btn.className = "nav-toggle";
    btn.id = "navToggle";
    btn.setAttribute("aria-label", "開啟選單");
    btn.textContent = "☰";
    tools.insertBefore(btn, tools.firstChild);

    const overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    overlay.id = "navOverlay";
    document.body.appendChild(overlay);

    const close = () => {
      document.body.classList.remove("nav-open");
      btn.textContent = "☰";
    };
    btn.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      btn.textContent = open ? "✕" : "☰";
    });
    overlay.addEventListener("click", close);
    document.addEventListener("click", e => {
      if (e.target.closest("#mainNav a")) close();
    });
  }

  /* ---------- 啟動 ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderMegaMenu();
    renderTOCMega();
    renderBlog();
    renderBreadcrumb();
    renderSidebar();
    renderTOCBlock();
    initSearch();
    renderFooter();
    initMobileNav();
    // 統一 brand 名稱
    document.querySelectorAll("[data-site-name]").forEach(el => el.textContent = SITE_CONFIG.name);
  });
})();
