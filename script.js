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
// Old English (Mathematical Fraktur)
function toOldEnglish(text) {
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

function toDoubleStruck(text) {
  const map = {
    a: "𝕒", b: "𝕓", c: "𝕔", d: "𝕕", e: "𝕖", f: "𝕗", g: "𝕘", h: "𝕙",
    i: "𝕚", j: "𝕛", k: "𝕜", l: "𝕝", m: "𝕞", n: "𝕟", o: "𝕠", p: "𝕡",
    q: "𝕢", r: "𝕣", s: "𝕤", t: "𝕥", u: "𝕦", v: "𝕧", w: "𝕨", x: "𝕩",
    y: "𝕪", z: "𝕫",
    A: "𝔸", B: "𝔹", C: "ℂ", D: "𝔻", E: "𝔼", F: "𝔽", G: "𝔾", H: "ℍ",
    I: "𝕀", J: "𝕁", K: "𝕂", L: "𝕃", M: "𝕄", N: "ℕ", O: "𝕆", P: "ℙ",
    Q: "ℚ", R: "ℝ", S: "𝕊", T: "𝕋", U: "𝕌", V: "𝕍", W: "𝕎", X: "𝕏",
    Y: "𝕐", Z: "ℤ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}


function toSmallCaps(text) {
  const map = {
    a: "ᴀ", b: "ʙ", c: "ᴄ", d: "ᴅ", e: "ᴇ", f: "ғ", g: "ɢ", h: "ʜ",
    i: "ɪ", j: "ᴊ", k: "ᴋ", l: "ʟ", m: "ᴍ", n: "ɴ", o: "ᴏ", p: "ᴘ",
    q: "ǫ", r: "ʀ", s: "s", t: "ᴛ", u: "ᴜ", v: "ᴠ", w: "ᴡ", x: "x",
    y: "ʏ", z: "ᴢ",
    A: "ᴀ", B: "ʙ", C: "ᴄ", D: "ᴅ", E: "ᴇ", F: "ғ", G: "ɢ", H: "ʜ",
    I: "ɪ", J: "ᴊ", K: "ᴋ", L: "ʟ", M: "ᴍ", N: "ɴ", O: "ᴏ", P: "ᴘ",
    Q: "ǫ", R: "ʀ", S: "s", T: "ᴛ", U: "ᴜ", V: "ᴠ", W: "ᴡ", X: "x",
    Y: "ʏ", Z: "ᴢ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toBubble(text) {
  const map = {
    a:"ⓐ", b:"ⓑ", c:"ⓒ", d:"ⓓ", e:"ⓔ", f:"ⓕ", g:"ⓖ", h:"ⓗ",
    i:"ⓘ", j:"ⓙ", k:"ⓚ", l:"ⓛ", m:"ⓜ", n:"ⓝ", o:"ⓞ", p:"ⓟ",
    q:"ⓠ", r:"ⓡ", s:"ⓢ", t:"ⓣ", u:"ⓤ", v:"ⓥ", w:"ⓦ", x:"ⓧ",
    y:"ⓨ", z:"ⓩ",
    A:"Ⓐ", B:"Ⓑ", C:"Ⓒ", D:"Ⓓ", E:"Ⓔ", F:"Ⓕ", G:"Ⓖ", H:"Ⓗ",
    I:"Ⓘ", J:"Ⓙ", K:"Ⓚ", L:"Ⓛ", M:"Ⓜ", N:"Ⓝ", O:"Ⓞ", P:"Ⓟ",
    Q:"Ⓠ", R:"Ⓡ", S:"Ⓢ", T:"Ⓣ", U:"Ⓤ", V:"Ⓥ", W:"Ⓦ", X:"Ⓧ",
    Y:"Ⓨ", Z:"Ⓩ",
   
    "0":"⓪", "1":"①", "2":"②", "3":"③", "4":"④",
    "5":"⑤", "6":"⑥", "7":"⑦", "8":"⑧", "9":"⑨"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

function toCurrency(text) {
  const map = {
    a:"₳", b:"฿", c:"₵", d:"Đ", e:"Ɇ", f:"₣", g:"₲", h:"Ⱨ",
    i:"ł", j:"J", k:"₭", l:"Ⱡ", m:"₥", n:"₦", o:"Ø", p:"₱",
    q:"Q", r:"Ɽ", s:"₴", t:"₮", u:"Ʉ", v:"V", w:"₩", x:"Ӿ",
    y:"Ɏ", z:"Ⱬ",
    A:"₳", B:"฿", C:"₵", D:"Đ", E:"Ɇ", F:"₣", G:"₲", H:"Ⱨ",
    I:"ł", J:"J", K:"₭", L:"Ⱡ", M:"₥", N:"₦", O:"Ø", P:"₱",
    Q:"Q", R:"Ɽ", S:"₴", T:"₮", U:"Ʉ", V:"V", W:"₩", X:"Ӿ",
    Y:"Ɏ", Z:"Ⱬ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toFantasy(text) {
  const map = {
    a:"ꪖ", b:"ꪉ", c:"ᨶ", d:"ᦔ", e:"ꫀ", f:"ᠻ", g:"ᦋ", h:"ꫝ",
    i:"ỉ", j:"᧒", k:"ƙ", l:"ꪶ", m:"ꪑ", n:"᭢", o:"ꪮ", p:"ᩏ",
    q:"ᧁ", r:"ꪹ", s:"క", t:"ᡶ", u:"ꪊ", v:"ꪜ", w:"᭙", x:"᥊",
    y:"ꪗ", z:"ɀ",
    A:"ꪖ", B:"ꪉ", C:"ᨶ", D:"ᦔ", E:"ꫀ", F:"ᠻ", G:"ᦋ", H:"ꫝ",
    I:"ỉ", J:"᧒", K:"ƙ", L:"ꪶ", M:"ꪑ", N:"᭢", O:"ꪮ", P:"ᩏ",
    Q:"ᧁ", R:"ꪹ", S:"క", T:"ᡶ", U:"ꪊ", V:"ꪜ", W:"᭙", X:"᥊",
    Y:"ꪗ", Z:"ɀ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toRusify(text) {
  const map = {
    a:"а", b:"б", c:"c", d:"д", e:"ё", f:"f", g:"g", h:"н",
    i:"ї", j:"j", k:"к", l:"г", m:"ѫ", n:"п", o:"ѳ", p:"p",
    q:"ф", r:"я", s:"$", t:"т", u:"ц", v:"ѵ", w:"щ", x:"ж",
    y:"ч", z:"з",
    A:"А", B:"Б", C:"C", D:"Д", E:"Є", F:"F", G:"G", H:"H",
    I:"Ї", J:"J", K:"К", L:"Г", M:"Ѫ", N:"Й", O:"Ѳ", P:"P",
    Q:"Ф", R:"Я", S:"$", T:"T", U:"Ц", V:"Ѵ", W:"Ш", X:"Ж",
    Y:"Ч", Z:"З"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toMonospace(text) {
  const map = {
    a:"𝚊", b:"𝚋", c:"𝚌", d:"𝚍", e:"𝚎", f:"𝚏", g:"𝚐", h:"𝚑",
    i:"𝚒", j:"𝚓", k:"𝚔", l:"𝚕", m:"𝚖", n:"𝚗", o:"𝚘", p:"𝚙",
    q:"𝚚", r:"𝚛", s:"𝚜", t:"𝚝", u:"𝚞", v:"𝚟", w:"𝚠", x:"𝚡",
    y:"𝚢", z:"𝚣",
    A:"𝙰", B:"𝙱", C:"𝙲", D:"𝙳", E:"𝙴", F:"𝙵", G:"𝙶", H:"𝙷",
    I:"𝙸", J:"𝙹", K:"𝙺", L:"𝙻", M:"𝙼", N:"𝙽", O:"𝙾", P:"𝙿",
    Q:"𝚀", R:"𝚁", S:"𝚂", T:"𝚃", U:"𝚄", V:"𝚅", W:"𝚆", X:"𝚇",
    Y:"𝚈", Z:"𝚉"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toSquare(text) {
  const map = {
    A:"🄰", B:"🄱", C:"🄲", D:"🄳", E:"🄴", F:"🄵", G:"🄶", H:"🄷",
    I:"🄸", J:"🄹", K:"🄺", L:"🄻", M:"🄼", N:"🄽", O:"🄾", P:"🄿",
    Q:"🅀", R:"🅁", S:"🅂", T:"🅃", U:"🅄", V:"🅅", W:"🅆", X:"🅇",
    Y:"🅈", Z:"🅉",
    a:"🄰", b:"🄱", c:"🄲", d:"🄳", e:"🄴", f:"🄵", g:"🄶", h:"🄷",
    i:"🄸", j:"🄹", k:"🄺", l:"🄻", m:"🄼", n:"🄽", o:"🄾", p:"🄿",
    q:"🅀", r:"🅁", s:"🅂", t:"🅃", u:"🅄", v:"🅅", w:"🅆", x:"🅇",
    y:"🅈", z:"🅉"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toInfinite(text) {
  return text.split("").map(ch => {
    if (/[a-zA-Z]/.test(ch)) {
      return ch + "͚"; // add combining underline
    }
    return ch;
  }).join(" ");
}
function toCrypticItalic(text) {
  const map = {
    a: "𐌀", b: "𐌁", c: "𐌂", d: "𐌃", e: "𐌄", f: "𐌅", g: "Ᏽ", h: "𐋅",
    i: "𐌉", j: "Ꮭ", k: "𐌊", l: "𐌋", m: "𐌌", n: "𐌍", o: "Ꝋ", p: "𐌐",
    q: "𐌒", r: "𐌓", s: "𐌔", t: "𐌕", u: "𐌵", v: "ᕓ", w: "Ꮤ", x: "𐋄",
    y: "𐌙", z: "Ɀ",

    A: "𐌀", B: "𐌁", C: "𐌂", D: "𐌃", E: "𐌄", F: "𐌅", G: "Ᏽ", H: "𐋅",
    I: "𐌉", J: "Ꮭ", K: "𐌊", L: "𐌋", M: "𐌌", N: "𐌍", O: "Ꝋ", P: "𐌐",
    Q: "𐌒", R: "𐌓", S: "𐌔", T: "𐌕", U: "𐌵", V: "ᕓ", W: "Ꮤ", X: "𐋄",
    Y: "𐌙", Z: "Ɀ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toParenthesis(text) {
  const map = {
    a: "⒜", b: "⒝", c: "⒞", d: "⒟", e: "⒠", f: "⒡", g: "⒢", h: "⒣",
    i: "⒤", j: "⒥", k: "⒦", l: "⒧", m: "⒨", n: "⒩", o: "⒪", p: "⒫",
    q: "⒬", r: "⒭", s: "⒮", t: "⒯", u: "⒰", v: "⒱", w: "⒲", x: "⒳",
    y: "⒴", z: "⒵",

    A: "⒜", B: "⒝", C: "⒞", D: "⒟", E: "⒠", F: "⒡", G: "⒢", H: "⒣",
    I: "⒤", J: "⒥", K: "⒦", L: "⒧", M: "⒨", N: "⒩", O: "⒪", P: "⒫",
    Q: "⒬", R: "⒭", S: "⒮", T: "⒯", U: "⒰", V: "⒱", W: "⒲", X: "⒳",
    Y: "⒴", Z: "⒵"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toJapanese(text) {
  const map = {
    a: "卂", b: "乃", c: "匚", d: "ᗪ", e: "乇", f: "千", g: "Ꮆ", h: "卄",
    i: "丨", j: "ﾌ", k: "Ҝ", l: "ㄥ", m: "爪", n: "几", o: "ㄖ", p: "卩",
    q: "Ɋ", r: "尺", s: "丂", t: "ㄒ", u: "ㄩ", v: "ᐯ", w: "山", x: "乂",
    y: "ㄚ", z: "乙",

    A: "卂", B: "乃", C: "匚", D: "ᗪ", E: "乇", F: "千", G: "Ꮆ", H: "卄",
    I: "丨", J: "ﾌ", K: "Ҝ", L: "ㄥ", M: "爪", N: "几", O: "ㄖ", P: "卩",
    Q: "Ɋ", R: "尺", S: "丂", T: "ㄒ", U: "ㄩ", V: "ᐯ", W: "山", X: "乂",
    Y: "ㄚ", Z: "乙"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
// Love Emojis Inverted Style
function toLoveInverted(text) {
  const map = {
    a: "ɐ", b: "q", c: "ɔ", d: "p", e: "ǝ", f: "ɟ", g: "ƃ", h: "ɥ",
    i: "ı", j: "ɾ", k: "ʞ", l: "ן", m: "ɯ", n: "u", o: "o", p: "d",
    q: "b", r: "ɹ", s: "s", t: "ʇ", u: "n", v: "ʌ", w: "ʍ", x: "x",
    y: "ʎ", z: "z",

    A: "∀", B: "ᗺ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "Ⅎ", G: "⅁", H: "H",
    I: "I", J: "ſ", K: "ꓘ", L: "˥", M: "W", N: "N", O: "O", P: "Ԁ",
    Q: "ტ", R: "ᴚ", S: "S", T: "⊥", U: "∩", V: "Λ", W: "M", X: "X",
    Y: "⅄", Z: "Z"
  };

  return "😍💞💘 " + text.split("").map(ch => map[ch] || ch).join("") + " 💔💏💖";
}
function toFraktur(text) {
  const map = {
    a: "𝖆", b: "𝖇", c: "𝖈", d: "𝖉", e: "𝖊", f: "𝖋", g: "𝖌", h: "𝖍",
    i: "𝖎", j: "𝖏", k: "𝖐", l: "𝖑", m: "𝖒", n: "𝖓", o: "𝖔", p: "𝖕",
    q: "𝖖", r: "𝖗", s: "𝖘", t: "𝖙", u: "𝖚", v: "𝖛", w: "𝖜", x: "𝖝",
    y: "𝖞", z: "𝖟",

    A: "𝕬", B: "𝕭", C: "𝕮", D: "𝕯", E: "𝕰", F: "𝕱", G: "𝕲", H: "𝕳",
    I: "𝕴", J: "𝕵", K: "𝕶", L: "𝕷", M: "𝕸", N: "𝕹", O: "𝕺", P: "𝕻",
    Q: "𝕼", R: "𝕽", S: "𝕾", T: "𝕿", U: "𝖀", V: "𝖁", W: "𝖂", X: "𝖃",
    Y: "𝖄", Z: "𝖅"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
function toWide(text) {
  const map = {
    a: "ａ", b: "ｂ", c: "ｃ", d: "ｄ", e: "ｅ", f: "ｆ", g: "ｇ", h: "ｈ",
    i: "ｉ", j: "ｊ", k: "ｋ", l: "ｌ", m: "ｍ", n: "ｎ", o: "ｏ", p: "ｐ",
    q: "ｑ", r: "ｒ", s: "ｓ", t: "ｔ", u: "ｕ", v: "ｖ", w: "ｗ", x: "ｘ",
    y: "ｙ", z: "ｚ",

    A: "Ａ", B: "Ｂ", C: "Ｃ", D: "Ｄ", E: "Ｅ", F: "Ｆ", G: "Ｇ", H: "Ｈ",
    I: "Ｉ", J: "Ｊ", K: "Ｋ", L: "Ｌ", M: "Ｍ", N: "Ｎ", O: "Ｏ", P: "Ｐ",
    Q: "Ｑ", R: "Ｒ", S: "Ｓ", T: "Ｔ", U: "Ｕ", V: "Ｖ", W: "Ｗ", X: "Ｘ",
    Y: "Ｙ", Z: "Ｚ"
  };
  return text.split("").map(ch => map[ch] || ch).join(" ");
}
function toSkyBlue(text) {
  const map = {
    a: "🇦", b: "🇧", c: "🇨", d: "🇩", e: "🇪", f: "🇫", g: "🇬", h: "🇭",
    i: "🇮", j: "🇯", k: "🇰", l: "🇱", m: "🇲", n: "🇳", o: "🇴", p: "🇵",
    q: "🇶", r: "🇷", s: "🇸", t: "🇹", u: "🇺", v: "🇻", w: "🇼", x: "🇽",
    y: "🇾", z: "🇿",

    A: "🇦", B: "🇧", C: "🇨", D: "🇩", E: "🇪", F: "🇫", G: "🇬", H: "🇭",
    I: "🇮", J: "🇯", K: "🇰", L: "🇱", M: "🇲", N: "🇳", O: "🇴", P: "🇵",
    Q: "🇶", R: "🇷", S: "🇸", T: "🇹", U: "🇺", V: "🇻", W: "🇼", X: "🇽",
    Y: "🇾", Z: "🇿"
  };
  return text.split("").map(ch => map[ch] || ch).join(" ");
}
// Inverted Squares (Negative Squared Latin Capital Letters)
function toInvertedSquares(text) {
  const map = {
    A:"🅰", B:"🅱", C:"🅲", D:"🅳", E:"🅴", F:"🅵", G:"🅶", H:"🅷",
    I:"🅸", J:"🅹", K:"🅺", L:"🅻", M:"🅼", N:"🅽", O:"🅾", P:"🅿",
    Q:"🆀", R:"🆁", S:"🆂", T:"🆃", U:"🆄", V:"🆅", W:"🆆", X:"🆇",
    Y:"🆈", Z:"🆉",
    a:"🅰", b:"🅱", c:"🅲", d:"🅳", e:"🅴", f:"🅵", g:"🅶", h:"🅷",
    i:"🅸", j:"🅹", k:"🅺", l:"🅻", m:"🅼", n:"🅽", o:"🅾", p:"🅿",
    q:"🆀", r:"🆁", s:"🆂", t:"🆃", u:"🆄", v:"🆅", w:"🆆", x:"🆇",
    y:"🆈", z:"🆉"
  };
  return text.split("").map(ch => map[ch] || ch).join(" ");
}
// Luni Tools Style
function toLuniTools(text) {
  const map = {
    A: "Ƹ", B: "ᙠ", C: "Ɔ", D: "ᗡ", E: "Ǝ", F: "ꟻ", G: "Ꭾ", H: "H",
    I: "I", J: "Ⴑ", K: "⋊", L: "⅃", M: "M", N: "Ͷ", O: "O", P: "ꟼ",
    Q: "Ọ", R: "Я", S: "Ꙅ", T: "T", U: "U", V: "V", W: "W", X: "X",
    Y: "Y", Z: "ƹ",

    a: "ɒ", b: "d", c: "ɔ", d: "b", e: "ɘ", f: "Ꮈ", g: "ǫ", h: "ʜ",
    i: "i", j: "ꞁ", k: "ʞ", l: "|", m: "m", n: "ᴎ", o: "o", p: "q",
    q: "p", r: "ɿ", s: "ꙅ", t: "ƚ", u: "u", v: "v", w: "w", x: "x",
    y: "ʏ", z: "ƹ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Mystic Style
function toMystic(text) {
  const map = {
    a: "á", b: "ḃ", c: "ć", d: "ď", e: "é", f: "ḟ", g: "ǵ", h: "ḣ",
    i: "í", j: "ĵ", k: "ḱ", l: "ĺ", m: "ḿ", n: "ń", o: "ó", p: "ṕ",
    q: "ɋ", r: "ŕ", s: "ś", t: "ṫ", u: "ú", v: "ṽ", w: "ẃ", x: "ẋ",
    y: "ý", z: "ź",
    A: "Á", B: "Ḃ", C: "Ć", D: "Ď", E: "É", F: "Ḟ", G: "Ǵ", H: "Ḣ",
    I: "Í", J: "Ĵ", K: "Ḱ", L: "Ĺ", M: "Ḿ", N: "Ń", O: "Ó", P: "Ṕ",
    Q: "Ɋ", R: "Ŕ", S: "Ś", T: "Ṫ", U: "Ú", V: "Ṽ", W: "Ẃ", X: "Ẋ",
    Y: "Ý", Z: "Ź"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Crystal Style
function toCrystal(text) {
  const map = {
    a: "ä", b: "ƀ", c: "ç", d: "đ", e: "ë", f: "ƒ", g: "ģ", h: "ħ",
    i: "ï", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ñ", o: "ö", p: "ṗ",
    q: "ʠ", r: "ř", s: "ş", t: "ť", u: "ü", v: "ṿ", w: "ẅ", x: "ẍ",
    y: "ÿ", z: "ž",
    A: "Ä", B: "Ƀ", C: "Ç", D: "Đ", E: "Ë", F: "Ƒ", G: "Ģ", H: "Ħ",
    I: "Ï", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ñ", O: "Ö", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Ş", T: "Ť", U: "Ü", V: "Ṿ", W: "Ẅ", X: "Ẍ",
    Y: "Ÿ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Arcane Style
function toArcane(text) {
  const map = {
    a: "â", b: "ƀ", c: "ĉ", d: "ḓ", e: "ê", f: "ϝ", g: "ĝ", h: "ḧ",
    i: "î", j: "ʝ", k: "ḳ", l: "ļ", m: "ṃ", n: "ñ", o: "ô", p: "ᵱ",
    q: "ʠ", r: "ŗ", s: "ŝ", t: "ṯ", u: "û", v: "ѵ", w: "ŵ", x: "ẋ",
    y: "ŷ", z: "ẑ",
    A: "Â", B: "Ƀ", C: "Ĉ", D: "Ḓ", E: "Ê", F: "Ƒ", G: "Ĝ", H: "Ḧ",
    I: "Î", J: "Ĵ", K: "Ḳ", L: "Ļ", M: "Ṃ", N: "Ñ", O: "Ô", P: "Ṕ",
    Q: "Ɋ", R: "Ŗ", S: "Ŝ", T: "Ṯ", U: "Û", V: "Ѵ", W: "Ŵ", X: "Ẋ",
    Y: "Ŷ", Z: "Ẑ"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Shadow Style
function toShadow(text) {
  const map = {
    a: "à", b: "ƀ", c: "ċ", d: "đ", e: "è", f: "ḟ", g: "ġ", h: "ḥ",
    i: "ì", j: "ĵ", k: "ḵ", l: "ļ", m: "ṁ", n: "ǹ", o: "ò", p: "ṕ",
    q: "ʠ", r: "ȑ", s: "ş", t: "ț", u: "ù", v: "ṿ", w: "ẁ", x: "ẋ",
    y: "ỳ", z: "ż",
    A: "À", B: "Ƀ", C: "Ċ", D: "Đ", E: "È", F: "Ḟ", G: "Ġ", H: "Ḥ",
    I: "Ì", J: "Ĵ", K: "Ḵ", L: "Ļ", M: "Ṁ", N: "Ǹ", O: "Ò", P: "Ṕ",
    Q: "Ɋ", R: "Ȑ", S: "Ş", T: "Ț", U: "Ù", V: "Ṿ", W: "Ẁ", X: "Ẋ",
    Y: "Ỳ", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Solar Style
function toSolar(text) {
  const map = {
    a: "ā", b: "ƀ", c: "č", d: "ď", e: "ē", f: "ḟ", g: "ğ", h: "ĥ",
    i: "ī", j: "ĵ", k: "ķ", l: "ĺ", m: "ṁ", n: "ņ", o: "ō", p: "ṗ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ū", v: "ṿ", w: "ŵ", x: "ẋ",
    y: "ȳ", z: "ž",
    A: "Ā", B: "Ƀ", C: "Č", D: "Ď", E: "Ē", F: "Ḟ", G: "Ğ", H: "Ĥ",
    I: "Ī", J: "Ĵ", K: "Ķ", L: "Ĺ", M: "Ṁ", N: "Ņ", O: "Ō", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ū", V: "Ṿ", W: "Ŵ", X: "Ẋ",
    Y: "Ȳ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Ember Style
function toEmber(text) {
  const map = {
    a: "ã", b: "ƀ", c: "ç", d: "ď", e: "ẽ", f: "ƒ", g: "ģ", h: "ħ",
    i: "ĩ", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ñ", o: "õ", p: "ṕ",
    q: "ɋ", r: "ř", s: "ş", t: "ţ", u: "ũ", v: "ṽ", w: "ŵ", x: "ẋ",
    y: "ỹ", z: "ž",
    A: "Ã", B: "Ƀ", C: "Ç", D: "Ď", E: "Ẽ", F: "Ƒ", G: "Ģ", H: "Ħ",
    I: "Ĩ", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ñ", O: "Õ", P: "Ṕ",
    Q: "Ɋ", R: "Ř", S: "Ş", T: "Ţ", U: "Ũ", V: "Ṽ", W: "Ŵ", X: "Ẋ",
    Y: "Ỹ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Frost Style
function toFrost(text) {
  const map = {
    a: "å", b: "ƀ", c: "ç", d: "đ", e: "ë", f: "ḟ", g: "ģ", h: "ḧ",
    i: "ï", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ñ", o: "ö", p: "ṗ",
    q: "ʠ", r: "ř", s: "ş", t: "ť", u: "ü", v: "ṿ", w: "ẅ", x: "ẍ",
    y: "ÿ", z: "ž",
    A: "Å", B: "Ƀ", C: "Ç", D: "Đ", E: "Ë", F: "Ḟ", G: "Ģ", H: "Ḧ",
    I: "Ï", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ñ", O: "Ö", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Ş", T: "Ť", U: "Ü", V: "Ṿ", W: "Ẅ", X: "Ẍ",
    Y: "Ÿ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Storm Style
function toStorm(text) {
  const map = {
    a: "ǎ", b: "ƀ", c: "č", d: "ď", e: "ě", f: "ƒ", g: "ǧ", h: "ȟ",
    i: "ǐ", j: "ĵ", k: "ǩ", l: "ľ", m: "ṁ", n: "ň", o: "ǒ", p: "ṕ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ǔ", v: "ṿ", w: "ŵ", x: "ẋ",
    y: "ý", z: "ž",
    A: "Ǎ", B: "Ƀ", C: "Č", D: "Ď", E: "Ě", F: "Ƒ", G: "Ǧ", H: "Ȟ",
    I: "Ǐ", J: "Ĵ", K: "Ǩ", L: "Ľ", M: "Ṁ", N: "Ň", O: "Ǒ", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ŵ", X: "Ẋ",
    Y: "Ý", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Lunar Style
function toLunar(text) {
  const map = {
    a: "ă", b: "ƀ", c: "ĉ", d: "ď", e: "ĕ", f: "ƒ", g: "ğ", h: "ḩ",
    i: "ĭ", j: "ĵ", k: "ķ", l: "ĺ", m: "ṁ", n: "ň", o: "ŏ", p: "ṕ",
    q: "ɋ", r: "ř", s: "ŝ", t: "ť", u: "ŭ", v: "ṿ", w: "ŵ", x: "ẋ",
    y: "ŷ", z: "ž",
    A: "Ă", B: "Ƀ", C: "Ĉ", D: "Ď", E: "Ĕ", F: "Ƒ", G: "Ğ", H: "Ḩ",
    I: "Ĭ", J: "Ĵ", K: "Ķ", L: "Ĺ", M: "Ṁ", N: "Ň", O: "Ŏ", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Ŝ", T: "Ť", U: "Ŭ", V: "Ṿ", W: "Ŵ", X: "Ẋ",
    Y: "Ŷ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Cosmic Style
function toCosmic(text) {
  const map = {
    a: "ȧ", b: "ƀ", c: "ċ", d: "ď", e: "ė", f: "ƒ", g: "ġ", h: "ḧ",
    i: "ı", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ṅ", o: "ȯ", p: "ṕ",
    q: "ɋ", r: "ŕ", s: "ś", t: "ṫ", u: "ŭ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ẏ", z: "ż",
    A: "Ȧ", B: "Ƀ", C: "Ċ", D: "Ď", E: "Ė", F: "Ƒ", G: "Ġ", H: "Ḧ",
    I: "İ", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ṅ", O: "Ȯ", P: "Ṗ",
    Q: "Ɋ", R: "Ŕ", S: "Ś", T: "Ṫ", U: "Ŭ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ẏ", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Rune Style
function toRune(text) {
  const map = {
    a: "ấ", b: "ƀ", c: "č", d: "ď", e: "ế", f: "ƒ", g: "ǧ", h: "ḫ",
    i: "ǐ", j: "ĵ", k: "ḱ", l: "ľ", m: "ṃ", n: "ň", o: "ố", p: "ṗ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ǔ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ý", z: "ž",
    A: "Ấ", B: "Ƀ", C: "Č", D: "Ď", E: "Ế", F: "Ƒ", G: "Ǧ", H: "Ḫ",
    I: "Ǐ", J: "Ĵ", K: "Ḱ", L: "Ľ", M: "Ṃ", N: "Ň", O: "Ố", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ý", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Infernal Style
function toInfernal(text) {
  const map = {
    a: "ầ", b: "ƀ", c: "ç", d: "ḓ", e: "ề", f: "ƒ", g: "ģ", h: "ḥ",
    i: "ǐ", j: "ĵ", k: "ḳ", l: "ļ", m: "ṃ", n: "ǹ", o: "ồ", p: "ṕ",
    q: "ʠ", r: "ȓ", s: "ş", t: "ț", u: "ǜ", v: "ṿ", w: "ẅ", x: "ẍ",
    y: "ỳ", z: "ž",
    A: "Ầ", B: "Ƀ", C: "Ç", D: "Ḓ", E: "Ề", F: "Ƒ", G: "Ģ", H: "Ḥ",
    I: "Ǐ", J: "Ĵ", K: "Ḳ", L: "Ļ", M: "Ṃ", N: "Ǹ", O: "Ồ", P: "Ṕ",
    Q: "Ɋ", R: "Ȓ", S: "Ş", T: "Ț", U: "Ǜ", V: "Ṿ", W: "Ẅ", X: "Ẍ",
    Y: "Ỳ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}
// Zalgo Style
function toZalgo(text) {
  const map = {
    a: "a҉͖̟̜̞̂̃̑̽͢͢͠͡", b: "b҉͙̺̻̥̅̎͋̕͜͝͡͞͠", 
    c: "c̷̶҉̵̢͚̣̻̲̬͑̑͛͐̀͜͝͡͝͠", d: "d҉̴̷̧̢̛̖͔̤ͯ̔̑̄͢͡͠", 
    e: "e̵̡̫̫͍͕̎ͭ̐͟͟͝͞", f: "f҉̴̥͎̰̰̒͌͛͐ͧ̕͜͝͡͞", 
    g: "g̷̵̸̡̼̱͎͎̞ͤͬ̅͢͟͞", h: "h̷̶̘̘̬ͭ̏͞͡", 
    i: "i҉̧̯̤̙͔̑ͧ̅̔ͦ́͜͟͝͠", j: "ǰ̸̶̭͓͓̀̈́͜ͅ", 
    k: "k҉̴̶̬͈̫̹͖̾̎ͭ́̍̐͜͝͠", l: "l̶҉̰͚͖͕̍̈́̅͗̏̇͢͝", 
    m: "m̴̵҉̸̲̗̰̼͗͌̃̇͟͠͞͠", n: "n̸͐̈́͟͟͝", 
    o: "o҉̢̡̲͇̌͗̀͢͝", p: "p̷̸̷̨͙͙͇ͨ̌ͣ͋͟͠", 
    q: "q҉̧͚̰̾͋͢͝͡", r: "r҉̵҉̛̠̩̥̋ͦ̆͆͟͞͡͞͠", 
    s: "s҉̝̭̦͚̑ͯ̌͡", t: "t҉̷҉̢͖͔̹͛̌͊͘͜͠͡͡", 
    u: "u̶͖̖͆̊̈́͡͡", v: "v҉̨̊͢͠͠", 
    w: "w҉̢̡̹̮͌̄ͦ͜͞͠͞", x: "x҉̣ͫͧ̕͘͜", 
    y: "ȳ̸̵̩̜͔͍̔́͟͡", z: "z̷҉̲ͥ͆̿̆ͭ͞",

    A: "A҉҉̦̣̤͔̟̩̋̿̏ͦ̈́̍͟͠", B: "B̵̴҉̞̠̘̩͍́͊͗͠͠͠͠ͱ", 
    C: "C҉͓̟͇̼͕̻ͭ͌ͩ̒͘͡͞͠", D: "D҉̣͍̓̎͗", 
    E: "E҉̰̰͎̆͞", F: "F̶̵͖͚̯̮̤̫̿̆͌͋͡͡", 
    G: "G̸҉̜̜̱̄ͩ͆͝͞", H: "H̴̶̵҉̨̡̛̼͎̫͓̒́̔ͩ͠͞͞", 
    I: "I҉̡̯̺̜̅́͋̃͢", J: "J̴̵҉̣͖̃̉̓́", 
    K: "K҉̿ͭ͘͜", L: "L̴҉̴͙͖̞̳̜ͣͧ̑̑͞͠͞͠", 
    M: "M̶̶҉̳͈̺͠͠ͅ", N: "N̵҉̾͟͞͡", 
    O: "O̷̵҉̢̭͚̜̠ͫͣ͐͠͞͝", P: "P҉̷̧̥͚̣̉̓̕͠͞͠͝ͅ", 
    Q: "Q̵̴̢͕̬̒̅̊͜͠͠͡", R: "R̴҉̷̨̖̮̉͑ͯ̑̋͟͠", 
    S: "Ṡ̷̢̫̞̻͈͋͛̓̅͜͠͠͠", T: "T҉̘͙͖̠̓ͦ͑̄͞", 
    U: "U̵̶̸̹̮̹̲̻͙̎ͪͣͦ͡͞͡͡", V: "V̶̝̐̀͝", 
    W: "W̵̶̸̻̼͉̱̄͗ͭ͠", X: "X̵̶҉̠͉͓̝̾ͅ", 
    Y: "Y̵̡̬͖̠̋ͫ̌ͤ̚͞͞", Z: "Z҉͆͢͠͠"
  };

  return text.split("").map(ch => map[ch] || ch).join("");
}

// Aurora Style
function toAurora(text) {
  const map = {
    a: "ắ", b: "ƀ", c: "č", d: "ď", e: "ḗ", f: "ƒ", g: "ǧ", h: "ḫ",
    i: "ǐ", j: "ĵ", k: "ḱ", l: "ľ", m: "ṃ", n: "ǹ", o: "ǒ", p: "ṕ",
    q: "ɋ", r: "ř", s: "š", t: "ť", u: "ǔ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ý", z: "ž",
    A: "Ắ", B: "Ƀ", C: "Č", D: "Ď", E: "Ḗ", F: "Ƒ", G: "Ǧ", H: "Ḫ",
    I: "Ǐ", J: "Ĵ", K: "Ḱ", L: "Ľ", M: "Ṃ", N: "Ǹ", O: "Ǒ", P: "Ṕ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ý", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Twilight Style
function toTwilight(text) {
  const map = {
    a: "ằ", b: "ƀ", c: "ċ", d: "ď", e: "ḕ", f: "ƒ", g: "ġ", h: "ḥ",
    i: "ǐ", j: "ĵ", k: "ḳ", l: "ļ", m: "ṃ", n: "ǹ", o: "ǒ", p: "ṕ",
    q: "ʠ", r: "ȑ", s: "ş", t: "ť", u: "ǔ", v: "ṿ", w: "ẇ", x: "ẋ",
    y: "ỳ", z: "ż",
    A: "Ằ", B: "Ƀ", C: "Ċ", D: "Ď", E: "Ḕ", F: "Ƒ", G: "Ġ", H: "Ḥ",
    I: "Ǐ", J: "Ĵ", K: "Ḳ", L: "Ļ", M: "Ṃ", N: "Ǹ", O: "Ǒ", P: "Ṕ",
    Q: "Ɋ", R: "Ȑ", S: "Ş", T: "Ť", U: "Ǔ", V: "Ṿ", W: "Ẇ", X: "Ẋ",
    Y: "Ỳ", Z: "Ż"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Ethereal Style
function toEthereal(text) {
  const map = {
    a: "ǡ", b: "ƀ", c: "č", d: "ď", e: "ḝ", f: "ƒ", g: "ǥ", h: "ħ",
    i: "ȋ", j: "ĵ", k: "ķ", l: "ŀ", m: "ṁ", n: "ń", o: "ǫ", p: "ṗ",
    q: "ɋ", r: "ř", s: "š", t: "ṯ", u: "ǖ", v: "ṿ", w: "ẅ", x: "ẋ",
    y: "ẏ", z: "ž",
    A: "Ǡ", B: "Ƀ", C: "Č", D: "Ď", E: "Ḝ", F: "Ƒ", G: "Ǥ", H: "Ħ",
    I: "Ȋ", J: "Ĵ", K: "Ķ", L: "Ł", M: "Ṁ", N: "Ń", O: "Ǫ", P: "Ṗ",
    Q: "Ɋ", R: "Ř", S: "Š", T: "Ṯ", U: "Ǖ", V: "Ṿ", W: "Ẅ", X: "Ẋ",
    Y: "Ẏ", Z: "Ž"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Fancy Style 1
function toFancy1(text) {
  const map = {
    a: "λ", b: "𐒈", c: "𐒨", d: "Ꮷ", e: "𐒢", f: "Ӻ", g: "Ⳓ", h: "𐒅",
    i: "Ꭵ", j: "Ꮽ", k: "Ꮵ", l: "Ꮣ", m: "𐒄", n: "𐒐", o: "𐒀", p: "Ꮅ",
    q: "𐒉", r: "Ⲅ", s: "Ꮄ", t: "Ꮏ", u: "𐒜", v: "Ꮙ", w: "Ꮚ", x: "𐒎",
    y: "𐒍", z: "೩",

    A: "λ", B: "𐒈", C: "𐒨", D: "Ꮷ", E: "𐒢", F: "Ӻ", G: "Ⳓ", H: "𐒅",
    I: "Ꭵ", J: "Ꮽ", K: "Ꮵ", L: "Ꮣ", M: "𐒄", N: "𐒐", O: "𐒀", P: "Ꮅ",
    Q: "𐒉", R: "Ⲅ", S: "Ꮄ", T: "Ꮏ", U: "𐒜", V: "Ꮙ", W: "Ꮚ", X: "𐒎",
    Y: "𐒍", Z: "೩"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

// Hearts Style
function toHearts(text) {
  const map = {
    a: "a♥", b: "b♥", c: "c♥", d: "d♥", e: "e♥", f: "f♥", g: "g♥", h: "h♥",
    i: "i♥", j: "j♥", k: "k♥", l: "l♥", m: "m♥", n: "n♥", o: "o♥", p: "p♥",
    q: "q♥", r: "r♥", s: "s♥", t: "t♥", u: "u♥", v: "v♥", w: "w♥", x: "x♥",
    y: "y♥", z: "z♥",

    A: "A♥", B: "B♥", C: "C♥", D: "D♥", E: "E♥", F: "F♥", G: "G♥", H: "H♥",
    I: "I♥", J: "J♥", K: "K♥", L: "L♥", M: "M♥", N: "N♥", O: "O♥", P: "P♥",
    Q: "Q♥", R: "R♥", S: "S♥", T: "T♥", U: "U♥", V: "V♥", W: "W♥", X: "X♥",
    Y: "Y♥", Z: "Z♥"
  };
  return text.split("").map(ch => map[ch] || ch).join("");
}

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

  const doubleEl = document.getElementById("DoubleOutput");
  if (doubleEl) {
    doubleEl.textContent = text ? toDoubleStruck(text) : "𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜";
  }
  // Small Caps
const smallCapsEl = document.getElementById("SmallCapsOutput");
if (smallCapsEl) {
  smallCapsEl.textContent = text ? toSmallCaps(text) : "Sᴍᴀʟʟ Cᴀᴘs";
}

const bubbleEl = document.getElementById("BubbleOutput");
if (bubbleEl) {
  bubbleEl.textContent = text ? toBubble(text) : "Ⓑⓤⓑⓑⓛⓔ";
}

const currencyEl = document.getElementById("CurrencyOutput");
if (currencyEl) {
  currencyEl.textContent = text ? toCurrency(text) : "₵ɄⱤⱤɆ₦₵Ɏ";
}
const fantasyEl = document.getElementById("FantasyOutput");
if (fantasyEl) {
  fantasyEl.textContent = text ? toFantasy(text) : "ꪙꫀꪹᨶꪊꪗ";
}
const rusifyEl = document.getElementById("RusifyOutput");
if (rusifyEl) {
  rusifyEl.textContent = text ? toRusify(text) : "Яцѕіfу";
}
const monoEl = document.getElementById("MonospaceOutput");
if (monoEl) {
  monoEl.textContent = text ? toMonospace(text) : "𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎";
}
const squareEl = document.getElementById("SquareOutput");
if (squareEl) {
  squareEl.textContent = text ? toSquare(text) : "🅂🅀🅄🄰🅁🄴";
}
const infiniteEl = document.getElementById("InfiniteOutput");
if (infiniteEl) {
  infiniteEl.textContent = text ? toInfinite(text) : toInfinite("Infinite");
}
const crypticEl = document.getElementById("CrypticOutput");
if (crypticEl) {
  crypticEl.textContent = text ? toCrypticItalic(text) : toCrypticItalic("Cryptic Italic");
}

const parenthesisEl = document.getElementById("ParenthesisOutput");
if (parenthesisEl) {
  parenthesisEl.textContent = text ? toParenthesis(text) : toParenthesis("Parenthesis");
}
const japaneseEl = document.getElementById("JapaneseOutput");
if (japaneseEl) {
  japaneseEl.textContent = text ? toJapanese(text) : toJapanese("Japanese");
}
const loveInvEl = document.getElementById("LoveInvertedOutput");
if (loveInvEl) {
  loveInvEl.textContent = text ? toLoveInverted(text) : toLoveInverted("Love Inverted");
}
const frakturEl = document.getElementById("FrakturOutput");
if (frakturEl) {
  frakturEl.textContent = text ? toFraktur(text) : toFraktur("Fraktur");
}
const wideEl = document.getElementById("WideOutput");
if (wideEl) {
  wideEl.textContent = text ? toWide(text) : toWide("Wide");
}
const skyBlueEl = document.getElementById("SkyBlueOutput");
if (skyBlueEl) {
  skyBlueEl.textContent = text ? toSkyBlue(text) : toSkyBlue("Sky Blue");
}

// Inverted Squares
const invertedSquaresEl = document.getElementById("InvertedSquaresOutput");
if (invertedSquaresEl) {
  invertedSquaresEl.textContent = text ? toInvertedSquares(text) : toInvertedSquares("Inverted");
}
// Luni Tools
const luniEl = document.getElementById("LuniToolsOutput");
if (luniEl) {
  luniEl.textContent = text ? toLuniTools(text) : toLuniTools("Luni Tools");
}
  // Old English
const oldEnglishEl = document.getElementById("OldEnglishOutput");
if (oldEnglishEl) {
  oldEnglishEl.textContent = text ? toOldEnglish(text) : toOldEnglish("Old English");
}
// Mystic
const mysticEl = document.getElementById("MysticOutput");
if (mysticEl) {
  mysticEl.textContent = text ? toMystic(text) : toMystic("Mystic");
}

// Crystal
const crystalEl = document.getElementById("CrystalOutput");
if (crystalEl) {
  crystalEl.textContent = text ? toCrystal(text) : toCrystal("Crystal");
}

// Arcane
const arcaneEl = document.getElementById("ArcaneOutput");
if (arcaneEl) {
  arcaneEl.textContent = text ? toArcane(text) : toArcane("Arcane");
}

// Shadow
const shadowEl = document.getElementById("ShadowOutput");
if (shadowEl) {
  shadowEl.textContent = text ? toShadow(text) : toShadow("Shadow");
}

// Solar
const solarEl = document.getElementById("SolarOutput");
if (solarEl) {
  solarEl.textContent = text ? toSolar(text) : toSolar("Solar");
}

// Ember
const emberEl = document.getElementById("EmberOutput");
if (emberEl) {
  emberEl.textContent = text ? toEmber(text) : toEmber("Ember");
}

// Frost
const frostEl = document.getElementById("FrostOutput");
if (frostEl) {
  frostEl.textContent = text ? toFrost(text) : toFrost("Frost");
}

// Storm
const stormEl = document.getElementById("StormOutput");
if (stormEl) {
  stormEl.textContent = text ? toStorm(text) : toStorm("Storm");
}

// Lunar
const lunarEl = document.getElementById("LunarOutput");
if (lunarEl) {
  lunarEl.textContent = text ? toLunar(text) : toLunar("Lunar");
}

// Cosmic
const cosmicEl = document.getElementById("CosmicOutput");
if (cosmicEl) {
  cosmicEl.textContent = text ? toCosmic(text) : toCosmic("Cosmic");
}

// Rune
const runeEl = document.getElementById("RuneOutput");
if (runeEl) {
  runeEl.textContent = text ? toRune(text) : toRune("Rune");
}

// Infernal
const infernalEl = document.getElementById("InfernalOutput");
if (infernalEl) {
  infernalEl.textContent = text ? toInfernal(text) : toInfernal("Infernal");
}

// Aurora
const auroraEl = document.getElementById("AuroraOutput");
if (auroraEl) {
  auroraEl.textContent = text ? toAurora(text) : toAurora("Aurora");
}

// Twilight
const twilightEl = document.getElementById("TwilightOutput");
if (twilightEl) {
  twilightEl.textContent = text ? toTwilight(text) : toTwilight("Twilight");
}

// Ethereal
const etherealEl = document.getElementById("EtherealOutput");
if (etherealEl) {
  etherealEl.textContent = text ? toEthereal(text) : toEthereal("Ethereal");
}
// Hearts Style
const heartsEl = document.getElementById("HeartsOutput");
if (heartsEl) {
  heartsEl.textContent = text ? toHearts(text) : toHearts("Hearts");
}

// Zalgo
const zalgoEl = document.getElementById("ZalgoOutput");
if (zalgoEl) {
  zalgoEl.textContent = text ? toZalgo(text) : toZalgo("Zalgo");
}

// Fancy Style 1
const fancy1El = document.getElementById("Fancy1Output");
if (fancy1El) {
  fancy1El.textContent = text ? toFancy1(text) : toFancy1("Fancy 1");
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
// ---------- Copy Handling ----------
function copyToClipboard(id) {
  const el = document.getElementById(id);
  if (!el) return;

  // Get the styled text content directly from the element
  const styledText = el.textContent;

  navigator.clipboard.writeText(styledText).then(() => {
    const note = document.getElementById("copyNotification");
    if (note) {
      // Update the notification text with the actual styled text
      note.textContent = styledText + " Copied!";
      note.style.display = "block";
      setTimeout(() => {
        note.style.display = "none";
      }, 1500);
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

  window.addEventListener("scroll", () => {
    const searchBox = document.getElementById("searchSection");
    if (window.scrollY > 30) {
      searchBox.classList.add("shrink");
    } else {
      searchBox.classList.remove("shrink");
    }
  });

  /* Add to your existing JavaScript file */

/**
 * Checks if the navigation tabs are overflowing and shows/hides scroll buttons.
 */
function checkTabOverflow() {
  const tabNav = document.getElementById("tabNav");
  const scrollLeftBtn = document.getElementById("scrollLeftBtn");
  const scrollRightBtn = document.getElementById("scrollRightBtn");
  const tabWrapper = document.querySelector(".tab-wrapper");

  if (!tabNav || !scrollLeftBtn || !scrollRightBtn || !tabWrapper) return;

  const isOverflowing = tabNav.scrollWidth > tabNav.clientWidth;

  if (isOverflowing) {
    tabWrapper.classList.add("has-buttons");
    scrollRightBtn.classList.add("show");
  } else {
    tabWrapper.classList.remove("has-buttons");
    scrollLeftBtn.classList.remove("show");
    scrollRightBtn.classList.remove("show");
  }

  // Update button visibility based on scroll position
  if (isOverflowing) {
    // Hide left button if at the start
    if (tabNav.scrollLeft === 0) {
      scrollLeftBtn.classList.remove("show");
    } else {
      scrollLeftBtn.classList.add("show");
    }

    // Hide right button if at the end
    if (tabNav.scrollLeft + tabNav.clientWidth >= tabNav.scrollWidth - 1) { // -1 for a small buffer
      scrollRightBtn.classList.remove("show");
    } else {
      scrollRightBtn.classList.add("show");
    }
  }
}

/**
 * Scrolls the tab navigation left or right.
 * @param {string} direction - "left" or "right"
 */
function scrollTabs(direction) {
  const tabNav = document.getElementById("tabNav");
  const scrollAmount = tabNav.clientWidth / 2; // Scroll half a viewport
  if (direction === "left") {
    tabNav.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else if (direction === "right") {
    tabNav.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

// Add event listeners
window.addEventListener("resize", checkTabOverflow);
window.addEventListener("DOMContentLoaded", () => {
  // Existing DOMContentLoaded logic
  // ... (your existing code) ...
  
  // Add new logic for buttons
  checkTabOverflow();
  const tabNav = document.getElementById("tabNav");
  const scrollLeftBtn = document.getElementById("scrollLeftBtn");
  const scrollRightBtn = document.getElementById("scrollRightBtn");

  if (tabNav) {
    tabNav.addEventListener("scroll", checkTabOverflow);
  }
  
  if (scrollLeftBtn) {
    scrollLeftBtn.addEventListener("click", () => scrollTabs("left"));
  }
  
  if (scrollRightBtn) {
    scrollRightBtn.addEventListener("click", () => scrollTabs("right"));
  }
});



// navbar, backtotop
 const backToTopBtn = document.getElementById('backToTopBtn');

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex';
      } else {
        backToTopBtn.style.display = 'none';
      }
    };

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }


  


    // Elements
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');
    const menuToggleBtn = document.getElementById('menuToggle');
    const stickyInputWrap = document.getElementById('stickyInputWrap');
    const dropdowns = navMenu.querySelectorAll('.dropdown > .dropdown-toggle');

    // Open/Close menu (mobile)
    menuToggleBtn.addEventListener('click', function() {
      const isOpen = navMenu.classList.contains('open');
      if (!isOpen) {
        navMenu.classList.add('open');
        navOverlay.classList.add('active');
        menuToggleBtn.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        navMenu.classList.remove('open');
        navOverlay.classList.remove('active');
        menuToggleBtn.classList.remove('open');
        document.body.style.overflow = '';
        navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
      }
    });

    navOverlay.addEventListener('click', function() {
      navMenu.classList.remove('open');
      navOverlay.classList.remove('active');
      menuToggleBtn.classList.remove('open');
      document.body.style.overflow = '';
      navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
    });

    // Close menu on outside click (for mobile)
    document.addEventListener('mousedown', function(e) {
      if (window.innerWidth < 900 && navMenu.classList.contains('open')) {
        if (!navMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
          navMenu.classList.remove('open');
          navOverlay.classList.remove('active');
          menuToggleBtn.classList.remove('open');
          document.body.style.overflow = '';
          navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
        }
      }
    });

    // Dropdown toggle
    dropdowns.forEach(drop => {
      drop.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        const isOpen = parent.classList.contains('open');
        navMenu.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('open'));
        if (!isOpen) parent.classList.add('open');
      });
    });

    // Close dropdowns when clicking outside (desktop)
    document.addEventListener('mousedown', function(e) {
      if (window.innerWidth >= 900) {
        navMenu.querySelectorAll('.dropdown').forEach(dd => {
          if (!dd.contains(e.target)) dd.classList.remove('open');
        });
      }
    });

    // Ensure sticky input is always below nav and dropdown
    function adjustStickyInput() {
      let offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'));
      // Only add dropdown height on mobile (where dropdown pushes content)
      if (window.innerWidth < 900) {
        const openDropdown = navMenu.querySelector('.dropdown.open .dropdown-content');
        if (openDropdown) {
          offset += openDropdown.offsetHeight;
        }
      }
      stickyInputWrap.style.top = offset + 'px';
    }
    navMenu.addEventListener('transitionend', adjustStickyInput);
    window.addEventListener('resize', adjustStickyInput);
    navMenu.addEventListener('click', adjustStickyInput);
    adjustStickyInput();
