/* script.js — unified, robust version
   - Uses localStorage (preferred) + cookie fallback
   - Reads input if present on page, else reads saved value
   - Updates only elements present on page (no errors)
   - Exposes setUserInput() if you want to set value programmatically
*/

/* ---------- storage helpers (localStorage preferred, cookie fallback) ---------- */
function saveUserValue(val) {
  try {
    if (val === '' || val === null || typeof val === 'undefined') {
      localStorage.removeItem('userInput');
    } else {
      localStorage.setItem('userInput', val);
    }
  } catch (e) {
    // localStorage might throw in some contexts — ignore
  }
  // cookie fallback (path=/ so all pages on site can read it)
  if (val === '' || val === null || typeof val === 'undefined') {
    document.cookie = 'userInput=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
  } else {
    const d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000)); // 1 year
    document.cookie = 'userInput=' + encodeURIComponent(val) + ';expires=' + d.toUTCString() + ';path=/;';
  }
}
function readUserValue() {
  try {
    const v = localStorage.getItem('userInput');
    if (v) return v;
  } catch (e) {}
  // cookie fallback
  const match = document.cookie.match(new RegExp('(^| )userInput=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : '';
}
function clearUserValue() {
  saveUserValue('');
}

/* ---------- converters ---------- */
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
  return [...text].map(c => c === ' ' ? ' ' : `⊰${c}⊱`).join('');
}

/* ---------- mapping of output id -> converter ---------- */
const styleMap = {
  CursiveOutput: toCursive,
  GothicOutput: toGothic,
  CurlyOutput: toCurlyWrap
};

/* ---------- main updater ---------- */
function getActiveInputOrSaved() {
  const inputEl = document.getElementById('userInput');
  if (inputEl) {
    const val = (inputEl.value || '').trim();
    if (val !== '') return {source: 'input', text: val};
    return {source: 'input-empty', text: ''};
  }
  const saved = readUserValue();
  if (saved) return {source: 'saved', text: saved};
  return {source: 'none', text: ''};
}
function updateText() {
  const src = getActiveInputOrSaved();

  // Manage storage: if user typed in input -> save. If input empty -> clear.
  if (src.source === 'input') {
    saveUserValue(src.text);
  } else if (src.source === 'input-empty') {
    clearUserValue();
  }

  // For each known style element, update only if present
  Object.keys(styleMap).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    const defaultText = (el.dataset && el.dataset.default) ? el.dataset.default : el.textContent || '';
    const textToShow = (src.text && src.text.length) ? styleMap[id](src.text) : defaultText;
    el.textContent = textToShow;
  });
}

/* ---------- input handling (if input exists) ---------- */
function attachInputHandlers() {
  const input = document.getElementById('userInput');
  if (!input) return;
  // on every input update, update preview & storage
  input.addEventListener('input', updateText);
  // on Enter, blur (optional)
  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') input.blur();
  });
  // on blur ensure storage is set/cleared
  input.addEventListener('blur', updateText);

  // show/hide clear button if present
  const clearBtn = document.querySelector('.clear-btn');
  if (clearBtn) {
    clearBtn.addEventListener('click', function() {
      input.value = '';
      updateText();
      if (clearBtn) clearBtn.style.display = 'none';
    });
    // initial display
    clearBtn.style.display = input.value.trim() ? 'block' : 'none';
  }
}

/* ---------- copy (with fallback) ---------- */
function fallbackCopy(text) {
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.focus(); ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return true;
  } catch (e) {
    return false;
  }
}
function copyToClipboard(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const txt = el.textContent || '';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(txt).then(() => showCopyNotification('Copied: ' + txt))
      .catch(() => { fallbackCopy(txt) ? showCopyNotification('Copied: ' + txt) : showCopyNotification('Copy failed'); });
  } else {
    fallbackCopy(txt) ? showCopyNotification('Copied: ' + txt) : showCopyNotification('Copy failed');
  }
}

/* ---------- tiny transient notification ---------- */
function showCopyNotification(message) {
  const el = document.getElementById('copyNotification');
  if (el) {
    el.textContent = message;
    el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 1800);
    return;
  }
  // fallback toast
  const n = document.createElement('div');
  n.textContent = message;
  Object.assign(n.style, {
    position: 'fixed', bottom: '20px', left: '20px',
    background: '#222', color: '#fff', padding: '8px 12px', borderRadius: '6px', zIndex: 9999
  });
  document.body.appendChild(n);
  setTimeout(() => n.remove(), 1800);
}

/* ---------- active tab highlighting ---------- */
function highlightActiveTab() {
  document.querySelectorAll('.tab-link').forEach(link => {
    try {
      const linkUrl = new URL(link.href, location.href);
      const cur = new URL(location.href);
      if (linkUrl.pathname === cur.pathname || cur.href.indexOf(linkUrl.href) === 0 || cur.href.indexOf(link.getAttribute('href')) !== -1) {
        link.classList.add('active'); link.setAttribute('aria-current','page');
      } else {
        link.classList.remove('active'); link.removeAttribute('aria-current');
      }
    } catch (e) {
      // fallback
      if (location.href.includes(link.getAttribute('href'))) link.classList.add('active'); else link.classList.remove('active');
    }
  });
}

/* ---------- DOM ready ---------- */
document.addEventListener('DOMContentLoaded', function() {
  // add copy svg icons (if .copy-btn exist)
  const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px;"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
  document.querySelectorAll('.copy-btn').forEach(btn => {
    if (!btn.querySelector('svg')) btn.insertAdjacentHTML('afterbegin', svgIcon);
  });

  // attach input handlers (if input present)
  attachInputHandlers();

  // highlight nav tab based on URL
  highlightActiveTab();

  // initial render: if there is an input it will be used, otherwise saved value will be used
  // if user typed on Home (input present) updateText will have saved value live; other pages will read saved value on load
  updateText();
});

/* expose for inline onclicks and programmatic calls */
window.copyToClipboard = copyToClipboard;
window.setUserInput = function(newText) { // programmatic setter
  const input = document.getElementById('userInput');
  if (input) {
    input.value = newText || '';
    updateText();
  } else {
    // if no input on this page, just save and update elements on this page
    if (newText && newText.trim() !== '') saveUserValue(newText.trim());
    else clearUserValue();
    updateText();
  }
};
