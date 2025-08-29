// ---------- Cookie Helpers ----------
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, value] = c.split("=");
    if (key === name) return decodeURIComponent(value);
  }
  return "";
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

// ---------- Transformations ----------
function toCursive(text) {
  const map = {
    A: '𝒜', B: 'ℬ', C: '𝒞', D: '𝒟', E: 'ℰ', F: 'ℱ', G: '𝒢', H: 'ℋ', I: 'ℐ', J: '𝒥',
    K: '𝒦', L: 'ℒ', M: 'ℳ', N: '𝒩', O: '𝒪', P: '𝒫', Q: '𝒬', R: 'ℛ', S: '𝒮', T: '𝒯',
    U: '𝒰', V: '𝒱', W: '𝒲', X: '𝒳', Y: '𝒴', Z: '𝒵',
    a: '𝒶', b: '𝒷', c: '𝒸', d: '𝒹', e: 'ℯ', f: '𝒻', g: 'ℊ', h: '𝒽', i: '𝒾', j: '𝒿',
    k: '𝓀', l: '𝓁', m: '𝓂', n: '𝓃', o: 'ℴ', p: '𝓅', q: '𝓆', r: '𝓇', s: '𝓈', t: '𝓉',
    u: '𝓊', v: '𝓋', w: '𝓌', x: '𝓍', y: '𝓎', z: '𝓏'
  };
  return [...text].map(c => map[c] || c).join('');
}

function toGothic(text) {
  const map = {
    A: '𝔄', B: '𝔅', C: 'ℭ', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊', H: 'ℌ', I: 'ℑ', J: '𝔍',
    K: '𝔎', L: '𝔏', M: '𝔐', N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: 'ℜ', S: '𝔖', T: '𝔗',
    U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: 'ℨ',
    a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧',
    k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱',
    u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷'
  };
  return [...text].map(c => map[c] || c).join('');
}

function toCurlyWrap(text) {
  return [...text].map(ch => `⊰${ch}⊱`).join("");
}

// ---------- Update Outputs ----------
function updateOutputs(text) {
  const cursiveEl = document.getElementById("CursiveOutput");
  if (cursiveEl) {
    cursiveEl.textContent = text ? toCursive(text) : cursiveEl.dataset.default;
  }

  const gothicEl = document.getElementById("GothicOutput");
  if (gothicEl) {
    gothicEl.textContent = text ? toGothic(text) : gothicEl.dataset.default;
  }

  const curlyEl = document.getElementById("CurlyOutput");
  if (curlyEl) {
    curlyEl.textContent = text ? toCurlyWrap(text) : curlyEl.dataset.default;
  }
}

// ---------- Input Handling ----------
function handleInputChange() {
  const input = document.getElementById("userInput");
  const value = input.value.trim();

  if (value) {
    setCookie("fontInput", value, 7);
    updateOutputs(value);
    document.querySelector(".clear-btn").style.display = "inline";
  } else {
    clearInput();
  }
}

function clearInput() {
  const input = document.getElementById("userInput");
  input.value = "";
  deleteCookie("fontInput");
  updateOutputs(""); 
  document.querySelector(".clear-btn").style.display = "none";
}

// ---------- Copy Button ----------
function copyToClipboard(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.textContent).then(() => {
    showCopyNotification("Copied!");
  });
}

function showCopyNotification(message) {
  const notification = document.getElementById("copyNotification");
  if (!notification) return;
  notification.innerText = message;
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

// ✅ Auto-add SVG icon to all copy buttons
document.addEventListener("DOMContentLoaded", () => {
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
         fill="currentColor" viewBox="0 0 24 24">
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 
               0-2 .9-2 2v16c0 1.1.9 2 2 2h11c1.1 0 
               2-.9 2-2V7c0-1.1-.9-2-2-2zm0 
               18H8V7h11v16z"/>
    </svg>
  `;
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.innerHTML = svgIcon;
  });
});

// ---------- On Page Load ----------
window.onload = function () {
  const saved = getCookie("fontInput");
  const input = document.getElementById("userInput");

  if (input) {
    if (saved) {
      input.value = saved;
      updateOutputs(saved);
      document.querySelector(".clear-btn").style.display = "inline";
    } else {
      updateOutputs("");
    }
  } else {
    updateOutputs(saved || "");
  }
};
