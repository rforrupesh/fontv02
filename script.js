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

// ---------- Style Functions ----------
function toCursive(text) {
  const map = {
    a: "𝒶", b: "𝒷", c: "𝒸", d: "𝒹", e: "ℯ", f: "𝒻", g: "ℊ", h: "𝒽",
    i: "𝒾", j: "𝒿", k: "𝓀", l: "𝓁", m: "𝓂", n: "𝓃", o: "ℴ", p: "𝓅",
    q: "𝓆", r: "𝓇", s: "𝓈", t: "𝓉", u: "𝓊", v: "𝓋", w: "𝓌", x: "𝓍",
    y: "𝓎", z: "𝓏",
    A: "𝒜", B: "ℬ", C: "𝒞", D: "𝒟", E: "ℰ", F: "ℱ", G: "𝒢", H: "ℋ",
    I: "ℐ", J: "𝒥", K: "𝒦", L: "ℒ", M: "ℳ", N: "𝒩", O: "𝒪", P: "𝒫",
    Q: "𝒬", R: "ℛ", S: "𝒮", T: "𝒯", U: "𝒰", V: "𝒱", W: "𝒲", X: "𝒳",
    Y: "𝒴", Z: "𝒵"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toGothic(text) {
  const map = {
    a: "𝔞", b: "𝔟", c: "𝔠", d: "𝔡", e: "𝔢", f: "𝔣", g: "𝔤", h: "𝔥",
    i: "𝔦", j: "𝔧", k: "𝔨", l: "𝔩", m: "𝔪", n: "𝔫", o: "𝔬", p: "𝔭",
    q: "𝔮", r: "𝔯", s: "𝔰", t: "𝔱", u: "𝔲", v: "𝔳", w: "𝔴", x: "𝔵",
    y: "𝔶", z: "𝔷",
    A: "𝔄", B: "𝔅", C: "ℭ", D: "𝔇", E: "𝔈", F: "𝔉", G: "𝔊", H: "ℌ",
    I: "ℑ", J: "𝔍", K: "𝔎", L: "𝔏", M: "𝔐", N: "𝔑", O: "𝔒", P: "𝔓",
    Q: "𝔔", R: "ℜ", S: "𝔖", T: "𝔗", U: "𝔘", V: "𝔙", W: "𝔚", X: "𝔛",
    Y: "𝔜", Z: "ℨ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toCurlyWrap(text) {
  return text.split("").map(ch => `⊰${ch}⊱`).join("");
}

// ---------- Update Outputs ----------
function updateOutputs(text) {
  // Cursive
  const cursiveEl = document.getElementById("CursiveOutput");
  if (cursiveEl) {
    cursiveEl.textContent = text ? toCursive(text) : cursiveEl.dataset.default;
  }

  // Gothic
  const gothicEl = document.getElementById("GothicOutput");
  if (gothicEl) {
    gothicEl.textContent = text ? toGothic(text) : gothicEl.dataset.default;
  }

  // Curly Wrap
  const curlyEl = document.getElementById("CurlyOutput");
  if (curlyEl) {
    curlyEl.textContent = text ? toCurlyWrap(text) : curlyEl.dataset.default;
  }
}

// ---------- Input Handling ----------
function handleInputChange() {
  const input = document.getElementById("userInput");
  if (!input) return;

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
  if (input) input.value = "";
  deleteCookie("fontInput");
  updateOutputs("");
  const clearBtn = document.querySelector(".clear-btn");
  if (clearBtn) clearBtn.style.display = "none";
}

// ---------- Copy Handling ----------
function copyToClipboard(id) {
  const el = document.getElementById(id);
  if (!el) return;

  navigator.clipboard.writeText(el.textContent).then(() => {
    const note = document.getElementById("copyNotification");
    if (note) {
      note.textContent = "Copied!";
      note.style.display = "block";
      setTimeout(() => { note.style.display = "none"; }, 1500);
    }
  });
}

// Auto-inject SVG icons into all copy buttons
function addCopyIcons() {
  document.querySelectorAll(".copy-btn").forEach(btn => {
    if (!btn.innerHTML.trim()) {
      btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
             viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4
                   a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>`;
    }
  });
}

// ---------- On Page Load ----------
window.addEventListener("DOMContentLoaded", () => {
  const saved = getCookie("fontInput");
  const input = document.getElementById("userInput");

  if (input) {
    // Pages WITH input box
    if (saved) {
      input.value = saved;
      updateOutputs(saved);
      document.querySelector(".clear-btn").style.display = "inline";
    } else {
      updateOutputs("");
    }
  } else {
    // Pages WITHOUT input box (like Symbol Wrappers)
    if (saved) updateOutputs(saved);
  }

  addCopyIcons();
});
