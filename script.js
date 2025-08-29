<script>
/* ---------- Storage Helpers ---------- */
function saveUserInput(value) {
  if (value && value.trim() !== "") {
    localStorage.setItem("userInput", value.trim());
  } else {
    localStorage.removeItem("userInput");
  }
}

function loadUserInput() {
  return localStorage.getItem("userInput") || "";
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
  return [...text].map(c=>map[c]||c).join('');
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
  return [...text].map(c=>map[c]||c).join('');
}
function toCurlyWrap(text) {
  return [...text].map(c => c === " " ? " " : `⊰${c}⊱`).join('');
}

/* ---------- Update Outputs ---------- */
function updateText() {
  const inputBox = document.getElementById("userInput"); // only on homepage
  const input = inputBox ? inputBox.value.trim() : loadUserInput();

  if (inputBox) saveUserInput(input);

  const text = input || null;

  // Cursive (homepage only)
  const cursiveEl = document.getElementById("CursiveOutput");
  if (cursiveEl) {
    cursiveEl.textContent = text ? toCursive(text) : cursiveEl.dataset.default;
  }

  // Gothic (homepage only)
  const gothicEl = document.getElementById("GothicOutput");
  if (gothicEl) {
    gothicEl.textContent = text ? toGothic(text) : gothicEl.dataset.default;
  }

  // Curly (symbol-wrappers page only)
  const curlyEl = document.getElementById("CurlyOutput");
  if (curlyEl) {
    curlyEl.textContent = text ? toCurlyWrap(text) : curlyEl.dataset.default;
  }
}

/* ---------- Input handling ---------- */
function handleInputChange() { updateText(); }
function clearInput() {
  const inputBox = document.getElementById("userInput");
  if (inputBox) inputBox.value = "";
  saveUserInput("");
  updateText();
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", function() {
  const inputBox = document.getElementById("userInput");
  if (inputBox) {
    const saved = loadUserInput();
    if (saved) inputBox.value = saved;
  }
  updateText();
});
</script>
