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
/**
 * Updates the styled output elements.
 * If text is provided, it applies the style to the text.
 * If text is empty, it shows the default styled words.
 */
function updateOutputs(text) {
  // Cursive
  const cursiveEl = document.getElementById("CursiveOutput");
  if (cursiveEl) {
    cursiveEl.textContent = text ? toCursive(text) : "𝒞𝓊𝓇𝓈𝒾𝓋ℯ";
  }

  // Gothic
  const gothicEl = document.getElementById("GothicOutput");
  if (gothicEl) {
    gothicEl.textContent = text ? toGothic(text) : "𝔊𝔬𝔱𝔥𝔦𝔠";
  }

  // Curly Wrap
  const curlyEl = document.getElementById("CurlyOutput");
  if (curlyEl) {
    curlyEl.textContent = text ? toCurlyWrap(text) : "⊰C⊱⊰u⊱⊰r⊱⊰l⊱⊰y⊱ ⊰W⊱⊰r⊱⊰a⊱⊰p⊱";
  }
}

// ---------- Input Handling ----------
/**
 * Handles the input event on the text field.
 * Updates styles based on user input or placeholder text.
 */
function handleInputChange() {
  const input = document.getElementById("userInput");
  if (!input) return;

  const value = input.value; // No trim here, to allow spaces
  const clearBtn = document.querySelector(".clear-btn");

  if (value) {
    // If there is text in the input, style it
    setCookie("fontInput", value, 7);
    updateOutputs(value);
    if (clearBtn) clearBtn.style.display = "inline";
  } else {
    // If input is empty, revert to styling the placeholder
    deleteCookie("fontInput");
    const placeholderText = input.getAttribute("placeholder");

    if (placeholderText && placeholderText !== "Type something...") {
      // It's a custom placeholder, so style it
      updateOutputs(placeholderText);
    } else {
      // It's the default placeholder, show default styled text
      updateOutputs("");
    }
    if (clearBtn) clearBtn.style.display = "none";
  }
}

/**
 * Clears the input field and resets the view.
 */
function clearInput() {
  const input = document.getElementById("userInput");
  if (input) {
    input.value = "";
  }
  // Trigger the input change handler to reset the state correctly
  handleInputChange();
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
/**
 * Initializes the page state when the content is loaded.
 * It checks for saved cookies or custom placeholders to set the initial text style.
 */
window.addEventListener("DOMContentLoaded", () => {
  const saved = getCookie("fontInput");
  const input = document.getElementById("userInput");
  const clearBtn = document.querySelector(".clear-btn");

  if (input) {
    // This logic runs for pages that have the main input box
    if (saved) {
      // If a cookie exists, prioritize it
      input.value = saved;
      updateOutputs(saved);
      if (clearBtn) clearBtn.style.display = "inline";
    } else {
      // If no cookie, check the placeholder
      const placeholderText = input.getAttribute("placeholder");
      if (placeholderText && placeholderText !== "Type something...") {
        // Style the custom placeholder text
        updateOutputs(placeholderText);
      } else {
        // Show default styled text
        updateOutputs("");
      }
      if (clearBtn) clearBtn.style.display = "none";
    }
  } else {
    // This is a fallback for pages without an input box
    if (saved) {
      updateOutputs(saved);
    }
  }

  addCopyIcons();
});
