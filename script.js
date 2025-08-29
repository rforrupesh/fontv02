/* ---------- Cookie Helpers ---------- */
function setCookie(name, value, days = 7) {
  if (!value) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    return;
  }
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
}
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : "";
}

/* ---------- Font Converters ---------- */
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
  return [...text].map(c => c === " " ? " " : `⊰${c}⊱`).join('');
}

/* ---------- Update Output (Sync Across Pages) ---------- */
function updateText() {
  const saved = getCookie("userInput");
  const text = saved || null;

  // Helper to update if element exists
  function updateElement(id, converter) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text ? converter(text) : el.dataset.default;
    }
  }

  updateElement("CursiveOutput", toCursive);
  updateElement("GothicOutput", toGothic);
  updateElement("CurlyOutput", toCurlyWrap);
}

/* ---------- Input Setter (only if some page still uses input) ---------- */
function setUserInput(newText) {
  setCookie("userInput", newText);
  updateText();
}

/* ---------- On Load ---------- */
document.addEventListener("DOMContentLoaded", function () {
  // Add SVG icon to all copy buttons
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
   stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"
   style="vertical-align:middle;margin-right:6px;">
   <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
   <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
  document.querySelectorAll('.copy-btn').forEach(btn => {
    if (!btn.querySelector('svg')) btn.insertAdjacentHTML('afterbegin', svgIcon);
  });

  updateText();
});
