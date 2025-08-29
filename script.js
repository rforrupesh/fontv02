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
  const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const cursive = "𝒜𝐵𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵" +
                  "𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏";
  return [...text].map(ch => {
    let i = normal.indexOf(ch);
    return i > -1 ? cursive[i] : ch;
  }).join("");
}

function toGothic(text) {
  const normal = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const gothic = "𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ" +
                 "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷";
  return [...text].map(ch => {
    let i = normal.indexOf(ch);
    return i > -1 ? gothic[i] : ch;
  }).join("");
}

function toCurlyWrap(text) {
  return [...text].map(ch => `⊰${ch}⊱`).join("");
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
  updateOutputs(""); // reset all to default
  document.querySelector(".clear-btn").style.display = "none";
}

// ---------- Copy Button ----------
function copyToClipboard(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.textContent).then(() => {
    const note = document.getElementById("copyNotification");
    note.textContent = "Copied!";
    note.style.display = "block";
    setTimeout(() => (note.style.display = "none"), 1200);
  });
}

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
    // no input box (future support) -> still update outputs
    updateOutputs(saved || "");
  }
};
