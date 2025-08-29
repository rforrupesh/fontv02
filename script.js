/* script.js - fixed & robust version */

// ---------- Cookie Helpers ----------
function setCookie(name, value, days = 7) {
  // Only delete cookie if value is empty string or null/undefined
  if (value === '' || value === null || typeof value === 'undefined') {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    return;
  }
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  if (!document.cookie) return "";
  const parts = document.cookie.split('; ').filter(Boolean);
  for (let part of parts) {
    const eq = part.indexOf('=');
    if (eq === -1) continue;
    const key = part.substring(0, eq);
    const val = part.substring(eq + 1);
    if (key === name) return decodeURIComponent(val);
  }
  return "";
}

// ---------- Font Converters ----------
function toCursive(text) {
  const map = {
    A:'𝒜',B:'ℬ',C:'𝒞',D:'𝒟',E:'ℰ',F:'ℱ',G:'𝒢',H:'ℋ',I:'ℐ',J:'𝒥',
    K:'𝒦',L:'ℒ',M:'ℳ',N:'𝒩',O:'𝒪',P:'𝒫',Q:'𝒬',R:'ℛ',S:'𝒮',T:'𝒯',
    U:'𝒰',V:'𝒱',W:'𝒲',X:'𝒳',Y:'𝒴',Z:'𝒵',
    a:'𝒶',b:'𝒷',c:'𝒸',d:'𝒹',e:'ℯ',f:'𝒻',g:'ℊ',h:'𝒽',i:'𝒾',j:'𝒿',
    k:'𝓀',l:'𝓁',m:'𝓂',n:'𝓃',o:'ℴ',p:'𝓅',q:'𝓆',r:'𝓇',s:'𝓈',t:'𝓉',
    u:'𝓊',v:'𝓋',w:'𝓌',x:'𝓍',y:'𝓎',z:'𝓏'
  };
  return [...text].map(c => map[c] || c).join('');
}

function toGothic(text) {
  const map = {
    A:'𝔄',B:'𝔅',C:'ℭ',D:'𝔇',E:'𝔈',F:'𝔉',G:'𝔊',H:'ℌ',I:'ℑ',J:'𝔍',
    K:'𝔎',L:'𝔏',M:'𝔐',N:'𝔑',O:'𝔒',P:'𝔓',Q:'𝔔',R:'ℜ',S:'𝔖',T:'𝔗',
    U:'𝔘',V:'𝔙',W:'𝔚',X:'𝔛',Y:'𝔜',Z:'ℨ',
    a:'𝔞',b:'𝔟',c:'𝔠',d:'𝔡',e:'𝔢',f:'𝔣',g:'𝔤',h:'𝔥',i:'𝔦',j:'𝔧',
    k:'𝔨',l:'𝔩',m:'𝔪',n:'𝔫',o:'𝔬',p:'𝔭',q:'𝔮',r:'𝔯',s:'𝔰',t:'𝔱',
    u:'𝔲',v:'𝔳',w:'𝔴',x:'𝔵',y:'𝔶',z:'𝔷'
  };
  return [...text].map(c => map[c] || c).join('');
}

function toCurlyWrap(text) {
  // Wrap each visible character with ⊰ and ⊱; preserve spaces
  return [...text].map(c => c === ' ' ? ' ' : `⊰${c}⊱`).join('');
}

// ---------- Mapping element IDs -> converter ----------
const styleMap = {
  CursiveOutput: toCursive,
  GothicOutput: toGothic,
  CurlyOutput: toCurlyWrap
};

// ---------- Update Output ----------
function updateText() {
  const inputField = document.getElementById("userInput");
  if (!inputField) return; // nothing to do if input not present (defensive)
  const input = inputField.value.trim();

  // Save cookie only if not empty, clear if empty
  if (input !== "") {
    setCookie("userInput", input);
  } else {
    setCookie("userInput", ""); // deletes cookie
  }

  // For each known output element, only update if it exists on the page
  for (const id in styleMap) {
    const el = document.getElementById(id);
    if (!el) continue; // skip missing elements (prevents errors on pages without all outputs)
    const defaultText = (el.dataset && el.dataset.default) ? el.dataset.default : el.textContent || '';
    try {
      el.textContent = (input !== "") ? styleMap[id](input) : defaultText;
    } catch (err) {
      // fallback: if converter fails, put raw input or default
      el.textContent = (input !== "") ? input : defaultText;
      console.warn("Converter error for", id, err);
    }
  }
}

/* ---------- Input Handling ---------- */
function handleInputChange() {
  const input = document.getElementById("userInput");
  const clearBtn = document.querySelector(".clear-btn");
  if (clearBtn && input) {
    clearBtn.style.display = input.value.trim() !== "" ? "block" : "none";
  }
  updateText();
}

function clearInput() {
  const input = document.getElementById("userInput");
  if (!input) return;
  input.value = "";
  const clearBtn = document.querySelector(".clear-btn");
  if (clearBtn) clearBtn.style.display = "none";
  updateText();
}

/* ---------- Copy to Clipboard (with fallback) ---------- */
function copyToClipboard(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent || "";

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyNotification("Copied: " + text);
    }).catch(err => {
      // fallback if permission denied
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }

  function fallbackCopy(t) {
    try {
      const ta = document.createElement("textarea");
      ta.value = t;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showCopyNotification("Copied: " + t);
    } catch (e) {
      showCopyNotification("Copy failed");
      console.warn("Copy fallback failed", e);
    }
  }
}

function showCopyNotification(message) {
  const notification = document.getElementById("copyNotification");
  if (!notification) {
    // create a quick transient notification if the element is missing
    const n = document.createElement("div");
    n.textContent = message;
    n.style.position = "fixed";
    n.style.bottom = "20px";
    n.style.left = "20px";
    n.style.background = "#222";
    n.style.color = "#fff";
    n.style.padding = "8px 12px";
    n.style.borderRadius = "6px";
    n.style.zIndex = 9999;
    document.body.appendChild(n);
    setTimeout(() => n.remove(), 2000);
    return;
  }
  notification.textContent = message;
  notification.style.display = "block";
  setTimeout(() => { notification.style.display = "none"; }, 2000);
}

/* ---------- Active Tab Highlighting (works on gh-pages or file://) ---------- */
function highlightActiveTab() {
  document.querySelectorAll(".tab-link").forEach(link => {
    try {
      const linkUrl = new URL(link.href, location.href);
      const cur = new URL(location.href);
      // Exact pathname match OR current URL contains the link href
      if (linkUrl.pathname === cur.pathname || cur.href.indexOf(linkUrl.href) === 0 || cur.href.indexOf(link.getAttribute("href")) !== -1) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.removeAttribute("aria-current");
      }
    } catch (e) {
      // fallback: simple includes check
      if (location.href.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

/* ---------- DOM Ready ---------- */
document.addEventListener("DOMContentLoaded", function() {
  // Add copy SVG icon to all .copy-btn if not present
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
   stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"
   style="vertical-align:middle;margin-right:6px;">
   <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
   <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;

  document.querySelectorAll('.copy-btn').forEach(btn => {
    if (!btn.querySelector('svg')) btn.insertAdjacentHTML('afterbegin', svgIcon);
  });

  // Prefill input if cookie exists
  const inputField = document.getElementById("userInput");
  if (inputField) {
    const saved = getCookie("userInput");
    if (saved) inputField.value = saved;
    const clearBtn = document.querySelector(".clear-btn");
    if (clearBtn) clearBtn.style.display = inputField.value.trim() !== "" ? "block" : "none";
  }

  // Highlight current tab
  highlightActiveTab();

  // Initial render
  updateText();
});

/* expose functions to global scope (so inline onclicks keep working) */
window.handleInputChange = handleInputChange;
window.clearInput = clearInput;
window.copyToClipboard = copyToClipboard;
window.updateText = updateText;
