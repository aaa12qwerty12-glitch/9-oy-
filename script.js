/* =====================================================================
   REAL SURATLAR (rasmlar)
   ---------------------------------------------------------------------
   Har bir mahsulot uchun rasm manzilini shu yerga yozing.
   Ikki xil usul ishlaydi:
     1) O'z papkangizdagi fayl:   'images/p1.jpg'
     2) Internetdagi to'g'ridan-to'g'ri havola: 'https://.../rasm.jpg'
   Bo'sh qoldirilsa yoki rasm topilmasa — avtomatik chizma (SVG) ko'rinadi,
   ya'ni sayt hech qachon "sinmaydi".
   Maslahat: rasm o'lchami ~800x600, .jpg yoki .webp, 200 KB atrofida bo'lsin.
   ===================================================================== */
const PRODUCT_IMAGES = {
  p1:'images/iphone-15.webp',  p2:'images/iphone-15-pro.webp',  p3:'images/iphone-14.webp',
  p4:'images/galaxy-s24.webp',  p5:'images/galaxy-s24-ultra.webp',  p6:'images/galaxy-a55.webp',
  p7:'images/redmi-note-13-pro.webp',  p8:'images/xiaomi-14.webp',  p9:'images/poco-x6-pro.webp',
  p10:'images/ipad-10.webp',  p11:'images/ipad-air-11.webp',  p12:'images/galaxy-tab-a9.webp',
  p13:'images/airpods-4.webp',  p14:'images/airpods-pro-2.webp',  p15:'images/galaxy-buds-fe.webp',  p16:'images/redmi-buds-5.webp',
  p17:'images/silikon-gilof.webp',  p18:'images/himoya-oynasi-9d.webp',  p19:'images/charmli-gilof.webp',
  p20:'images/anker-20000.webp',  p21:'images/xiaomi-10000.webp',
  p22:'images/zaryadlovchi-20w.webp',  p23:'images/magsafe.webp',
  p24:'images/apple-watch-se.webp',
  b1:'',  b2:'',  b3:'',  b4:'',  b5:'',  b6:''
};
/* Butun bo'lim uchun zaxira rasm (mahsulotniki yo'q bo'lsa ishlatiladi)
   Barcha rasmlar — Unsplash'dan bepul litsenziyali (Unsplash License) suratlar. */
const IMG = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w||800}&q=80`;
const CAT_IMAGES = {
  'Smartfonlar':        IMG('1592750475338-74b7b21085ab'),
  'Planshetlar':        IMG('1544244015-0df4b3ffc6b0'),
  'Simsiz quloqchin':   IMG('1590658268037-6bf12165a8df'),
  'Aksessuarlar':       IMG('1601784551446-20c9e07cdbdb'),
  'Quvvat banki':       IMG('1609692814858-f7cd2f0afa4f'),
  'Zaryadlovchi':       IMG('1583863788434-e58a36330cf0'),
  'Smart soat':         IMG('1523275335684-37898b6baf30'),
  'Xotira karta':       IMG('1587033411391-5d9e51cce126'),
  'Tayyor to\'plam':    IMG('1592750475338-74b7b21085ab')
};
/* =====================================================================
   AVTOMATIK SURATLAR (SVG)
   Har bir telefon va to'plam uchun rasm shu yerda chiziladi — internet ham,
   fayl ham kerak emas. O'z (haqiqiy) rasmingiz bo'lsa, PRODUCT_IMAGES ga
   yozing: u avtomatik chizmadan ustun turadi.
   ===================================================================== */
const PHONE_STYLE = {
  p1: {c1:'#aecbe0', c2:'#7ea4c4', w1:'#5b8fd8', w2:'#a78bfa', cam:'ios2d', notch:'island'},
  p2: {c1:'#cfc8bd', c2:'#8f887e', w1:'#2b3a67', w2:'#c05a7a', cam:'ios3',  notch:'island'},
  p3: {c1:'#4a5058', c2:'#23272d', w1:'#4f46e5', w2:'#ec4899', cam:'ios2d', notch:'notch'},
  p4: {c1:'#d3cdea', c2:'#9b8fc9', w1:'#0ea5e9', w2:'#6366f1', cam:'s3',    notch:'hole'},
  p5: {c1:'#bcc0c7', c2:'#6f737c', w1:'#1e3a8a', w2:'#9333ea', cam:'s4',    notch:'hole'},
  p6: {c1:'#4a5aa0', c2:'#27315f', w1:'#06b6d4', w2:'#3b82f6', cam:'a3',    notch:'hole'},
  p7: {c1:'#7a5cc4', c2:'#41307f', w1:'#f97316', w2:'#db2777', cam:'v3',    notch:'hole'},
  p8: {c1:'#eceff3', c2:'#b9c2ce', w1:'#14b8a6', w2:'#3b82f6', cam:'sq3',   notch:'hole'},
  p9: {c1:'#ffd43b', c2:'#d9a400', w1:'#111827', w2:'#4b5563', cam:'v3',    notch:'hole'},
  p25:{c1:'#a6d8d3', c2:'#5eaaa3', w1:'#0ea5e9', w2:'#22c55e', cam:'ios2v', notch:'island'},
  p26:{c1:'#dcc0a0', c2:'#a98763', w1:'#7c3aed', w2:'#f97316', cam:'ios3',  notch:'island'},
  p27:{c1:'#f3e6aa', c2:'#d4be6a', w1:'#f59e0b', w2:'#ef4444', cam:'ios2d', notch:'island'},
  p28:{c1:'#f6d0d6', c2:'#e79fb0', w1:'#ec4899', w2:'#8b5cf6', cam:'ios2d', notch:'notch'},
  p29:{c1:'#c3e6f6', c2:'#7db6d8', w1:'#2563eb', w2:'#06b6d4', cam:'s3',    notch:'hole'},
  p30:{c1:'#b0b9c7', c2:'#5f6b7d', w1:'#0f172a', w2:'#7c3aed', cam:'s4',    notch:'hole'},
  p31:{c1:'#cdbff3', c2:'#8e7bd1', w1:'#10b981', w2:'#3b82f6', cam:'a3',    notch:'hole'},
  p32:{c1:'#4b5873', c2:'#272f45', w1:'#f43f5e', w2:'#f59e0b', cam:'a3',    notch:'hole'},
  p33:{c1:'#5d626c', c2:'#2b2e34', w1:'#0891b2', w2:'#1d4ed8', cam:'sq3',   notch:'hole'},
  p34:{c1:'#ad90f2', c2:'#6a4cc4', w1:'#ec4899', w2:'#f59e0b', cam:'v3',    notch:'hole'},
  p35:{c1:'#86d4a6', c2:'#3f9a69', w1:'#06b6d4', w2:'#6366f1', cam:'v2',    notch:'hole'},
  p36:{c1:'#c7cbd3', c2:'#7e848f', w1:'#f43f5e', w2:'#6366f1', cam:'sq3',   notch:'hole'},
  p37:{c1:'#9382ea', c2:'#4e3fb0', w1:'#14b8a6', w2:'#f59e0b', cam:'v3',    notch:'hole'},
  p38:{c1:'#f4cad2', c2:'#d98fa0', w1:'#f59e0b', w2:'#ec4899', cam:'bar2',  notch:'hole'},
  p39:{c1:'#35705e', c2:'#16433a', w1:'#10b981', w2:'#0ea5e9', cam:'op',    notch:'hole'}
};
const ACC_KIND = {p22:'charger', p17:'case', p19:'case', p18:'glass', p16:'buds', p15:'buds', p13:'buds', p14:'buds', p20:'bank', p21:'bank', p23:'puck', p24:'watch'};

const ART_W = 118, ART_H = 246;
function artLens(x, y, r){
  return `<circle cx="${x}" cy="${y}" r="${r + 3}" fill="#0a0b0e" opacity=".6"/>` +
    `<circle cx="${x}" cy="${y}" r="${r}" fill="#14171c" stroke="#9aa3b2" stroke-opacity=".6" stroke-width="1.6"/>` +
    `<circle cx="${x}" cy="${y}" r="${(r * 0.55).toFixed(1)}" fill="#1f2f4d"/>` +
    `<circle cx="${(x - r * 0.25).toFixed(1)}" cy="${(y - r * 0.28).toFixed(1)}" r="${(r * 0.17).toFixed(1)}" fill="#fff" opacity=".8"/>`;
}
function artCameras(kind){
  const X = -ART_W / 2, Y = -ART_H / 2;
  const plate = (x, y, w, h, rx, fill, op) => `<rect x="${X + x}" y="${Y + y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" fill-opacity="${op}" stroke="#fff" stroke-opacity=".28" stroke-width="1.4"/>`;
  const lens = (x, y, r) => artLens(X + x, Y + y, r);
  const flash = (x, y) => `<circle cx="${X + x}" cy="${Y + y}" r="3.2" fill="#ffe7a3" stroke="#fff" stroke-opacity=".5"/>`;
  switch(kind){
    case 'ios2d': return plate(9, 9, 56, 56, 15, '#fff', .16) + lens(26, 26, 10) + lens(48, 48, 10) + flash(50, 20);
    case 'ios2v': return plate(10, 10, 40, 78, 20, '#fff', .16) + lens(30, 30, 10) + lens(30, 66, 10) + flash(62, 22);
    case 'ios3':  return plate(9, 9, 62, 62, 16, '#fff', .16) + lens(26, 26, 9.5) + lens(26, 54, 9.5) + lens(52, 40, 9.5) + flash(54, 18);
    case 's3':    return lens(24, 32, 9) + lens(24, 62, 9) + lens(24, 92, 9) + flash(46, 30);
    case 's4':    return lens(24, 30, 8.5) + lens(24, 58, 8.5) + lens(24, 86, 8.5) + lens(24, 114, 8.5) + flash(46, 28);
    case 'a3':    return plate(10, 12, 30, 94, 15, '#0d0f12', .85) + lens(25, 30, 8) + lens(25, 59, 8) + lens(25, 88, 8) + flash(52, 28);
    case 'sq3':   return plate(9, 9, 66, 66, 17, '#0f1115', .9) + lens(28, 28, 12) + lens(28, 57, 8) + lens(55, 28, 8) + flash(56, 58);
    case 'v3':    return plate(9, 9, 46, 92, 20, '#0f1115', .9) + lens(32, 30, 10) + lens(32, 58, 8.5) + lens(32, 83, 6.5) + flash(68, 24);
    case 'v2':    return plate(9, 9, 42, 66, 18, '#0f1115', .9) + lens(30, 29, 9.5) + lens(30, 54, 9.5) + flash(64, 22);
    case 'bar2':  return `<rect x="${X}" y="${Y + 46}" width="${ART_W}" height="40" fill="#0e1115"/><rect x="${X}" y="${Y + 46}" width="${ART_W}" height="40" fill="none" stroke="#fff" stroke-opacity=".14"/>` + lens(34, 66, 11) + lens(68, 66, 11) + flash(94, 66);
    case 'op':    return `<circle cx="${X + 46}" cy="${Y + 48}" r="38" fill="#0f1217" stroke="#c9ced8" stroke-opacity=".55" stroke-width="2.2"/>` + lens(33, 35, 9.5) + lens(33, 62, 9.5) + lens(60, 48, 9.5) + flash(62, 72);
    default: return '';
  }
}
function artSideButtons(c){
  const X = -ART_W / 2, Y = -ART_H / 2;
  return `<rect x="${X + ART_W - 1.5}" y="${Y + 62}" width="3" height="34" rx="1.5" fill="${c}"/>` +
    `<rect x="${X - 1.5}" y="${Y + 54}" width="3" height="22" rx="1.5" fill="${c}"/>` +
    `<rect x="${X - 1.5}" y="${Y + 82}" width="3" height="22" rx="1.5" fill="${c}"/>`;
}
function artBack(st){
  const X = -ART_W / 2, Y = -ART_H / 2;
  return `<rect x="${X}" y="${Y}" width="${ART_W}" height="${ART_H}" rx="22" fill="url(#b)" stroke="${st.c2}" stroke-width="2"/>` +
    `<rect x="${X}" y="${Y}" width="${ART_W}" height="${ART_H}" rx="22" fill="url(#gl)"/>` +
    artCameras(st.cam) + artSideButtons(st.c2);
}
function artFront(st){
  const X = -ART_W / 2, Y = -ART_H / 2;
  let s = `<rect x="${X}" y="${Y}" width="${ART_W}" height="${ART_H}" rx="22" fill="#0b0c0f" stroke="${st.c2}" stroke-width="2.4"/>`;
  s += `<rect x="${X + 5}" y="${Y + 5}" width="${ART_W - 10}" height="${ART_H - 10}" rx="17.5" fill="url(#w)"/>`;
  s += `<circle cx="${X + 84}" cy="${Y + 196}" r="64" fill="#fff" opacity=".10"/><circle cx="${X + 20}" cy="${Y + 120}" r="44" fill="#000" opacity=".08"/>`;
  s += `<text x="0" y="${Y + 78}" text-anchor="middle" font-family="Helvetica,Arial,sans-serif" font-size="34" font-weight="300" fill="#fff">9:41</text>`;
  for(let r = 0; r < 2; r++){
    for(let c = 0; c < 4; c++){
      s += `<rect x="${X + 14 + c * 24}" y="${Y + 142 + r * 28}" width="18" height="18" rx="5.5" fill="#fff" opacity="${(r + c) % 3 === 0 ? .45 : .26}"/>`;
    }
  }
  s += `<rect x="${X + 10}" y="${Y + 204}" width="98" height="24" rx="12" fill="#fff" opacity=".18"/>`;
  s += `<rect x="-17" y="${Y + ART_H - 12}" width="34" height="3" rx="1.5" fill="#fff" opacity=".7"/>`;
  if(st.notch === 'island') s += `<rect x="-15" y="${Y + 11}" width="30" height="9" rx="4.5" fill="#000"/>`;
  else if(st.notch === 'notch') s += `<rect x="-23" y="${Y + 4}" width="46" height="13" rx="6.5" fill="#0b0c0f"/><rect x="-23" y="${Y + 4}" width="46" height="6" fill="#0b0c0f"/>`;
  else s += `<circle cx="0" cy="${Y + 14}" r="4.2" fill="#000" stroke="#1d2330" stroke-width="1.2"/>`;
  return s + artSideButtons(st.c2);
}
function artDefs(st){
  return `<defs>` +
    `<linearGradient id="b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${st.c1}"/><stop offset="1" stop-color="${st.c2}"/></linearGradient>` +
    `<linearGradient id="w" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${st.w1}"/><stop offset="1" stop-color="${st.w2}"/></linearGradient>` +
    `<linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient>` +
    `<filter id="sh" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="7"/></filter>` +
    `</defs>`;
}
function phoneArtSVG(st){
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 330">` + artDefs(st) +
    `<circle cx="214" cy="168" r="124" fill="${st.c1}" opacity=".16"/>` +
    `<circle cx="214" cy="168" r="98" fill="none" stroke="${st.c1}" stroke-opacity=".4" stroke-width="2"/>` +
    `<ellipse cx="216" cy="306" rx="116" ry="9" fill="#000" opacity=".3" filter="url(#sh)"/>` +
    `<g transform="translate(176 170) rotate(-7)">${artBack(st)}</g>` +
    `<g transform="translate(258 162) rotate(5)">${artFront(st)}</g>` +
    `</svg>`;
}

/* aksessuarlar (markazi 0,0 nuqtada, ~60x60 ichida) */
function artAcc(kind, st){
  switch(kind){
    case 'charger': return `<rect x="-16" y="-14" width="32" height="28" rx="7" fill="#f4f5f7" stroke="#c9ced8" stroke-width="1.6"/><rect x="-8" y="-23" width="5" height="9" rx="1.5" fill="#9aa1ad"/><rect x="3" y="-23" width="5" height="9" rx="1.5" fill="#9aa1ad"/><rect x="-7" y="6" width="14" height="4" rx="2" fill="#dfe3ea"/>`;
    case 'case':    return `<rect x="-17" y="-30" width="34" height="60" rx="10" fill="${st.c1}" stroke="${st.c2}" stroke-width="2"/><rect x="-12" y="-25" width="19" height="19" rx="6" fill="#0f1115" opacity=".85"/><circle cx="-5" cy="-18" r="4" fill="#1f2f4d"/>`;
    case 'glass':   return `<rect x="-16" y="-29" width="32" height="58" rx="8" fill="#bfe6ff" fill-opacity=".35" stroke="#7cc0ec" stroke-width="1.8"/><path d="M-9 -10 L9 -26 M-9 6 L9 -10" stroke="#fff" stroke-opacity=".85" stroke-width="2.4" stroke-linecap="round"/>`;
    case 'buds':    return `<rect x="-21" y="-4" width="42" height="28" rx="13" fill="#f4f5f7" stroke="#c9ced8" stroke-width="1.6"/><path d="M-21 8 H21" stroke="#c9ced8" stroke-width="1.4"/><ellipse cx="-8" cy="-14" rx="4.6" ry="9" fill="#fff" stroke="#c9ced8" stroke-width="1.4"/><ellipse cx="8" cy="-14" rx="4.6" ry="9" fill="#fff" stroke="#c9ced8" stroke-width="1.4"/>`;
    case 'bank':    return `<rect x="-15" y="-27" width="30" height="54" rx="8" fill="#2c313b" stroke="#444b58" stroke-width="1.6"/><circle cx="-7" cy="-16" r="2.4" fill="#2DD4BF"/><circle cx="0" cy="-16" r="2.4" fill="#2DD4BF"/><circle cx="7" cy="-16" r="2.4" fill="#2DD4BF" opacity=".4"/><rect x="-8" y="2" width="16" height="3" rx="1.5" fill="#fff" opacity=".35"/><rect x="-8" y="9" width="10" height="3" rx="1.5" fill="#fff" opacity=".2"/>`;
    case 'watch':   return `<rect x="-9" y="-31" width="18" height="62" rx="5" fill="${st.c1}" stroke="${st.c2}" stroke-width="1.6"/><rect x="-16" y="-17" width="32" height="36" rx="10" fill="#14161a" stroke="#9aa3b2" stroke-width="1.6"/><rect x="-12.5" y="-13.5" width="25" height="29" rx="7.5" fill="#1f2f4d"/><rect x="16" y="-6" width="3" height="9" rx="1.5" fill="#9aa3b2"/><rect x="-6" y="-4" width="12" height="3" rx="1.5" fill="#fff" opacity=".7"/>`;
    case 'puck':    return `<circle cx="0" cy="0" r="17" fill="#f4f5f7" stroke="#c9ced8" stroke-width="1.6"/><circle cx="0" cy="0" r="8" fill="none" stroke="#c9ced8" stroke-width="1.6"/><path d="M0 17 C0 30, 18 24, 20 33" fill="none" stroke="#c9ced8" stroke-width="3" stroke-linecap="round"/>`;
    default: return '';
  }
}
function bundleArtSVG(def){
  const st = PHONE_STYLE[def.phone];
  if(!st) return '';
  const kinds = [];
  def.acc.forEach(id => { const k = ACC_KIND[id]; if(k && !kinds.includes(k)) kinds.push(k); });
  const slots = [[266, 62], [344, 62], [266, 156], [344, 156]];
  const accs = kinds.slice(0, 4).map((k, i) => `<g transform="translate(${slots[i][0]} ${slots[i][1]})">${artAcc(k, st)}</g>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 220">` + artDefs(st) +
    `<circle cx="132" cy="112" r="102" fill="${st.c1}" opacity=".16"/>` +
    `<rect x="224" y="18" width="176" height="184" rx="26" fill="${st.c2}" opacity=".10" stroke="${st.c1}" stroke-opacity=".5" stroke-width="1.4" stroke-dasharray="5 5"/>` +
    `<ellipse cx="132" cy="206" rx="86" ry="6" fill="#000" opacity=".28" filter="url(#sh)"/>` +
    `<g transform="translate(104 112) rotate(-8) scale(.58)">${artBack(st)}</g>` +
    `<g transform="translate(166 108) rotate(5) scale(.58)">${artFront(st)}</g>` +
    accs + `</svg>`;
}
const ART_CACHE = {};
function artOf(id){
  if(ART_CACHE[id] !== undefined) return ART_CACHE[id];
  let svg = '';
  if(PHONE_STYLE[id]) svg = phoneArtSVG(PHONE_STYLE[id]);
  else if(typeof BUNDLE_ART !== 'undefined' && BUNDLE_ART[id]) svg = bundleArtSVG(BUNDLE_ART[id]);
  ART_CACHE[id] = svg ? 'data:image/svg+xml;utf8,' + encodeURIComponent(svg) : '';
  return ART_CACHE[id];
}

function photoOf(id, cat){ return (PRODUCT_IMAGES[id] || artOf(id) || CAT_IMAGES[cat] || '').trim(); }
function visualHTML(id, cat, symbol){
  const url = photoOf(id, cat);
  const isArt = url.startsWith('data:image/svg');
  const local = url.startsWith('images/');
  const cls = isArt ? ' prod-img-art' : (local ? ' prod-img-cut' : '');
  const img = url ? `<img class="prod-img${cls}" src="${url}" alt="" loading="lazy" data-id="${id}" data-cat="${cat}" onerror="imgFail(this)">` : '';
  return `<div class="pv${url ? '' : ' img-fail'}">${img}<svg class="prod-photo"><use href="#${symbol}"/></svg></div>`;
}

/* rasm topilmasa: 1) avtomatik chizma  2) bo'lim surati  3) zaxira belgi */
function imgFail(img){
  const art = artOf(img.dataset.id);
  if(art && !img.dataset.art && img.getAttribute('src') !== art){
    img.dataset.art = '1';
    img.classList.remove('prod-img-cut');
    img.classList.add('prod-img-art');
    img.src = art;
    return;
  }
  const fb = CAT_IMAGES[img.dataset.cat];
  if(fb && !img.dataset.fb && img.getAttribute('src') !== fb){
    img.dataset.fb = '1';
    img.classList.remove('prod-img-cut', 'prod-img-art');
    img.src = fb;
    return;
  }
  const pv = img.closest('.pv');
  if(pv) pv.classList.add('img-fail');
  img.remove();
}

/* ---------------- data ---------------- */
const CAT_ICON = {
  'Smartfonlar':'i-phone','Planshetlar':'i-tablet','Simsiz quloqchin':'i-headset','Aksessuarlar':'i-cover',
  'Quvvat banki':'i-battery','Zaryadlovchi':'i-plug','Smart soat':'i-watch','Xotira karta':'i-storage',
  'Tayyor to\'plam':'i-phone'
};
const CAT_PHOTO = {
  'Smartfonlar':'photo-phone','Planshetlar':'photo-monitor','Simsiz quloqchin':'photo-headset','Aksessuarlar':'photo-case',
  'Quvvat banki':'photo-psu','Zaryadlovchi':'photo-psu','Smart soat':'photo-cooler','Xotira karta':'photo-storage',
  'Tayyor to\'plam':'photo-phone'
};
const PRODUCTS = [
  {id:'p1', name:'iPhone 15 128GB', cat:'Smartfonlar', price:11900000},
  {id:'p2', name:'iPhone 15 Pro 256GB', cat:'Smartfonlar', price:17500000},
  {id:'p3', name:'iPhone 14 128GB', cat:'Smartfonlar', price:9800000},
  {id:'p4', name:'Samsung Galaxy S24 256GB', cat:'Smartfonlar', price:12400000},
  {id:'p5', name:'Samsung Galaxy S24 Ultra 512GB', cat:'Smartfonlar', price:18900000},
  {id:'p6', name:'Samsung Galaxy A55 128GB', cat:'Smartfonlar', price:5200000},
  {id:'p7', name:'Xiaomi Redmi Note 13 Pro', cat:'Smartfonlar', price:3600000},
  {id:'p8', name:'Xiaomi 14 256GB', cat:'Smartfonlar', price:8900000},
  {id:'p9', name:'Xiaomi Poco X6 Pro', cat:'Smartfonlar', price:4100000},
  {id:'p25', name:'iPhone 16 128GB', cat:'Smartfonlar', price:13900000},
  {id:'p26', name:'iPhone 16 Pro 256GB', cat:'Smartfonlar', price:19900000},
  {id:'p27', name:'iPhone 15 Plus 128GB', cat:'Smartfonlar', price:12700000},
  {id:'p28', name:'iPhone 13 128GB', cat:'Smartfonlar', price:7900000},
  {id:'p29', name:'Samsung Galaxy S25 256GB', cat:'Smartfonlar', price:13500000},
  {id:'p30', name:'Samsung Galaxy S25 Ultra 512GB', cat:'Smartfonlar', price:21500000},
  {id:'p31', name:'Samsung Galaxy A35 128GB', cat:'Smartfonlar', price:3900000},
  {id:'p32', name:'Samsung Galaxy A15 128GB', cat:'Smartfonlar', price:2100000},
  {id:'p33', name:'Xiaomi 14T Pro 512GB', cat:'Smartfonlar', price:8700000},
  {id:'p34', name:'Xiaomi Redmi Note 14 Pro 5G 256GB', cat:'Smartfonlar', price:3900000},
  {id:'p35', name:'Xiaomi Redmi 13C 128GB', cat:'Smartfonlar', price:1450000},
  {id:'p36', name:'Xiaomi Poco F6 256GB', cat:'Smartfonlar', price:5300000},
  {id:'p37', name:'Xiaomi Poco M6 Pro 256GB', cat:'Smartfonlar', price:2700000},
  {id:'p38', name:'Google Pixel 9 128GB', cat:'Smartfonlar', price:10900000},
  {id:'p39', name:'OnePlus 12 256GB', cat:'Smartfonlar', price:9500000},
  {id:'p10', name:'iPad 10.9" 64GB', cat:'Planshetlar', price:6900000},
  {id:'p11', name:'iPad Air 11" 128GB', cat:'Planshetlar', price:10800000},
  {id:'p12', name:'Samsung Galaxy Tab A9', cat:'Planshetlar', price:2600000},
  {id:'p13', name:'AirPods 4', cat:'Simsiz quloqchin', price:1850000},
  {id:'p14', name:'AirPods Pro 2', cat:'Simsiz quloqchin', price:3400000},
  {id:'p15', name:'Samsung Galaxy Buds FE', cat:'Simsiz quloqchin', price:1250000},
  {id:'p16', name:'Xiaomi Redmi Buds 5', cat:'Simsiz quloqchin', price:420000},
  {id:'p17', name:'Silikon g\'ilof (universal)', cat:'Aksessuarlar', price:95000},
  {id:'p18', name:'Himoya oynasi 9D', cat:'Aksessuarlar', price:45000},
  {id:'p19', name:'Charmli g\'ilof', cat:'Aksessuarlar', price:160000},
  {id:'p20', name:'Anker 20000mAh quvvat banki', cat:'Quvvat banki', price:480000},
  {id:'p21', name:'Xiaomi 10000mAh quvvat banki', cat:'Quvvat banki', price:250000},
  {id:'p22', name:'20W tezkor zaryadlovchi', cat:'Zaryadlovchi', price:180000},
  {id:'p23', name:'Simsiz zaryadlovchi (MagSafe)', cat:'Zaryadlovchi', price:340000},
  {id:'p24', name:'Apple Watch SE', cat:'Smart soat', price:3900000},
];
const BUILDS = [
  {id:'b1', tag:'Byudjet variant', name:'Start Line', featured:false, price:3600000, img:'photo-phone',
    specs:[['Model','Xiaomi Redmi Note 13 Pro'],['Xotira','256 GB'],['Ekran','120Hz AMOLED'],['Kamera','200 MP']]},
  {id:'b2', tag:'Kundalik foydalanish', name:'Everyday Line', featured:false, price:5200000, img:'photo-phone',
    specs:[['Model','Samsung Galaxy A55'],['Xotira','128 GB'],['Batareya','5000 mAh'],['Kamera','50 MP']]},
  {id:'b3', tag:"Fleshka to'plami — iPhone", name:'iPhone Lite', featured:false, price:9800000, img:'photo-phone',
    specs:[['Model','iPhone 14'],['Xotira','128 GB'],['Ekran','6.1" Super Retina'],['G\'ilof','Sovg\'a sifatida']]},
  {id:'b4', tag:'Tavsiya etiladi — Flagman', name:'Pro Line', featured:true, price:17500000, img:'photo-phone',
    specs:[['Model','iPhone 15 Pro'],['Xotira','256 GB'],['Kamera','48 MP Pro'],['Aksessuar','20W quvvatlovchi + g\'ilof']]},
  {id:'b5', tag:'Kamera va foto uchun', name:'Camera Line', featured:false, price:18900000, img:'photo-phone',
    specs:[['Model','Samsung Galaxy S24 Ultra'],['Xotira','512 GB'],['Kamera','200 MP'],['S Pen','Mavjud']]},
  {id:'b6', tag:'To\'liq to\'plam — telefon + soat + quloqchin', name:'Ultimate Set', featured:false, price:23500000, img:'photo-phone',
    specs:[['Telefon','iPhone 15 Pro'],['Soat','Apple Watch SE'],['Quloqchin','AirPods Pro 2'],['Kafolat',"1 yil rasmiy"]]},
];

/* ---------------- yangi 15 ta telefon to'plami (telefon + aksessuarlar) ---------------- */
const ACC_SHORT = {p22:'20W zaryad', p17:"silikon g'ilof", p19:"charm g'ilof", p18:'9D oyna', p16:'Redmi Buds 5', p15:'Buds FE', p13:'AirPods 4', p14:'AirPods Pro 2', p20:'Anker 20000', p21:'Xiaomi 10000', p23:'MagSafe', p24:'Apple Watch SE'};
const BUNDLE_DEFS = [
  {id:'b7',  phone:'p25', acc:['p22','p17','p18'], name:'iPhone 16 Set',          tag:"Yangi avlod iPhone + himoya to'plami"},
  {id:'b8',  phone:'p26', acc:['p14','p23','p19'], name:'iPhone 16 Pro Set',      tag:"Flagman iPhone + AirPods Pro + MagSafe"},
  {id:'b9',  phone:'p27', acc:['p22','p19'],       name:'iPhone 15 Plus Set',     tag:"Katta ekranli iPhone + zaryad + g'ilof"},
  {id:'b10', phone:'p28', acc:['p22','p17','p18'], name:'iPhone 13 Set',          tag:"Hamyonbop iPhone + himoya to'plami"},
  {id:'b11', phone:'p29', acc:['p15','p22','p17'], name:'Galaxy S25 Set',         tag:"Yangi Galaxy + quloqchin + zaryad"},
  {id:'b12', phone:'p30', acc:['p15','p20','p22'], name:'Galaxy S25 Ultra Set',   tag:"Ultra + quvvat banki + quloqchin"},
  {id:'b13', phone:'p31', acc:['p22','p17','p18'], name:'Galaxy A35 Set',         tag:"Kundalik Galaxy + himoya to'plami"},
  {id:'b14', phone:'p32', acc:['p22','p18','p17'], name:'Galaxy A15 Set',         tag:"Eng hamyonbop Galaxy + himoya"},
  {id:'b15', phone:'p33', acc:['p16','p22','p17'], name:'Xiaomi 14T Pro Set',     tag:"Leica kamerali telefon + quloqchin"},
  {id:'b16', phone:'p34', acc:['p22','p18','p16'], name:'Redmi Note 14 Pro Set',  tag:"200 MP telefon + himoya + quloqchin"},
  {id:'b17', phone:'p35', acc:['p18','p17'],       name:'Redmi 13C Set',          tag:"Eng arzon to'plam: telefon + himoya"},
  {id:'b18', phone:'p36', acc:['p21','p16','p18'], name:'Poco F6 Set',            tag:"O'yin to'plami: telefon + quvvat banki"},
  {id:'b19', phone:'p37', acc:['p22','p17','p18'], name:'Poco M6 Pro Set',        tag:"Telefon + zaryad + himoya"},
  {id:'b20', phone:'p38', acc:['p22','p19','p18'], name:'Pixel 9 Set',            tag:"Toza Android + zaryad + g'ilof"},
  {id:'b21', phone:'p39', acc:['p20','p22','p17'], name:'OnePlus 12 Set',         tag:"Tezkor zaryad + quvvat banki + g'ilof"}
];
/* to'plam suratlari uchun: qaysi telefon va qaysi aksessuarlar chiziladi */
const BUNDLE_ART = {
  b1:{phone:'p7', acc:['p22']},
  b2:{phone:'p6', acc:['p22','p17']},
  b3:{phone:'p3', acc:['p17']},
  b4:{phone:'p2', acc:['p22','p19']},
  b5:{phone:'p5', acc:['p20']},
  b6:{phone:'p2', acc:['p24','p14']}
};
BUNDLE_DEFS.forEach(d => {
  const ph = PRODUCTS.find(p => p.id === d.phone);
  const accSum = d.acc.reduce((s, id) => s + PRODUCTS.find(p => p.id === id).price, 0);
  const save = Math.round(accSum * 0.15 / 10000) * 10000;
  const storage = ph.name.match(/(\d+)\s?GB$/);
  BUILDS.push({
    id: d.id, tag: d.tag, name: d.name, featured: false, price: ph.price + accSum - save, img: 'photo-phone',
    specs: [
      ['Telefon', ph.name.replace(/\s?\d+GB$/, '')],
      ['Xotira', storage ? storage[1] + ' GB' : '—'],
      ['Aksessuar', d.acc.map(id => ACC_SHORT[id]).join(' + ')],
      ['Tejash', String(save).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + " so'm"]
    ]
  });
  BUNDLE_ART[d.id] = {phone: d.phone, acc: d.acc};
});

/* ---------------- mahsulot tafsilotlari (modal) ---------------- */
const PRODUCT_INFO = {
  p1:{desc:"Dynamic Island, USB-C va 48 MP asosiy kamerali yangilangan iPhone. Kundalik foydalanish uchun ishonchli va tezkor tanlov.",
    specs:[["Ekran","6.1 dyuym Super Retina XDR OLED"],["Protsessor","Apple A16 Bionic"],["Operativ xotira","6 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","48 MP + 12 MP ultra keng"],["Old kamera","12 MP"],["Port","USB-C"],["Tizim","iOS 17"]]},
  p2:{desc:"Titan korpusli flagman. 120 Hz ProMotion ekran, 3x optik zoom va professional video imkoniyatlari.",
    specs:[["Ekran","6.1 dyuym Super Retina XDR OLED, 120 Hz"],["Protsessor","Apple A17 Pro"],["Operativ xotira","8 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","48 MP + 12 MP 3x tele + 12 MP ultra keng"],["Old kamera","12 MP"],["Korpus","Titan"],["Port","USB-C (USB 3)"],["Tizim","iOS 17"]]},
  p3:{desc:"Ishonchli va hamyonbop iPhone: yorqin OLED ekran, ikki kamerali tizim va uzoq muddatli yangilanishlar.",
    specs:[["Ekran","6.1 dyuym Super Retina XDR OLED"],["Protsessor","Apple A15 Bionic"],["Operativ xotira","6 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","12 MP + 12 MP ultra keng"],["Old kamera","12 MP"],["Port","Lightning"],["Tizim","iOS 16"]]},
  p4:{desc:"Ixcham flagman: yorqin 120 Hz ekran, kuchli protsessor va Galaxy AI imkoniyatlari.",
    specs:[["Ekran","6.2 dyuym Dynamic AMOLED 2X, 120 Hz"],["Protsessor","Exynos 2400 / Snapdragon 8 Gen 3 (hududga qarab)"],["Operativ xotira","8 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","50 MP + 12 MP ultra keng + 10 MP 3x tele"],["Old kamera","12 MP"],["Batareya","4000 mAh, 25W tezkor zaryad"],["Tizim","Android 14, One UI 6.1"]]},
  p5:{desc:"Samsungning eng kuchli smartfoni: titan korpus, S Pen, 200 MP kamera va katta QHD+ ekran.",
    specs:[["Ekran","6.8 dyuym QHD+ Dynamic AMOLED 2X, 120 Hz"],["Protsessor","Snapdragon 8 Gen 3 for Galaxy"],["Operativ xotira","12 GB"],["Doimiy xotira","512 GB"],["Asosiy kamera","200 MP + 50 MP 5x tele + 10 MP 3x tele + 12 MP ultra keng"],["Old kamera","12 MP"],["Batareya","5000 mAh, 45W tezkor zaryad"],["S Pen","Mavjud"],["Tizim","Android 14, One UI 6.1"]]},
  p6:{desc:"O'rta segmentning eng yaxshilaridan biri: Super AMOLED ekran, sig'imli batareya va yaxshi kamera.",
    specs:[["Ekran","6.6 dyuym Super AMOLED, 120 Hz"],["Protsessor","Exynos 1480"],["Operativ xotira","8 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","50 MP + 12 MP ultra keng + 5 MP makro"],["Old kamera","32 MP"],["Batareya","5000 mAh, 25W tezkor zaryad"],["Tizim","Android 14, One UI 6.1"]]},
  p7:{desc:"Narxiga nisbatan juda kuchli: 200 MP kamera, 120 Hz AMOLED ekran va tezkor zaryad.",
    specs:[["Ekran","6.67 dyuym AMOLED, 120 Hz"],["Protsessor","Helio G99-Ultra (4G) / Snapdragon 7s Gen 2 (5G)"],["Doimiy xotira","256 GB"],["Asosiy kamera","200 MP"],["Old kamera","16 MP"],["Batareya","5100 mAh, 67W tezkor zaryad"],["Tizim","Android 13, MIUI 14 / HyperOS"]]},
  p8:{desc:"Leica kamerali ixcham flagman: Snapdragon 8 Gen 3, juda tez zaryad va premium sifat.",
    specs:[["Ekran","6.36 dyuym LTPO AMOLED, 120 Hz"],["Protsessor","Snapdragon 8 Gen 3"],["Operativ xotira","12 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","Leica 50 MP uch kamerali tizim"],["Old kamera","32 MP"],["Batareya","4610 mAh, 90W simli / 50W simsiz zaryad"],["Tizim","Android 14, HyperOS"]]},
  p9:{desc:"O'yinlar va kundalik ishlar uchun: kuchli Dimensity protsessor, silliq AMOLED ekran va tezkor zaryad.",
    specs:[["Ekran","6.67 dyuym AMOLED, 120 Hz"],["Protsessor","Dimensity 8300-Ultra"],["Doimiy xotira","256 GB"],["Asosiy kamera","64 MP (OIS) + 8 MP ultra keng + 2 MP makro"],["Old kamera","16 MP"],["Batareya","5000 mAh, 67W tezkor zaryad"],["Tizim","Android 14, HyperOS"]]},
  p10:{desc:"O'qish, kino va kundalik ishlar uchun yorqin planshet. USB-C portli yangi dizayn.",
    specs:[["Ekran","10.9 dyuym Liquid Retina"],["Protsessor","Apple A14 Bionic"],["Doimiy xotira","64 GB"],["Asosiy kamera","12 MP"],["Old kamera","12 MP (landshaft joylashuvda)"],["Port","USB-C"],["Tizim","iPadOS"]]},
  p11:{desc:"Yengil va kuchli planshet: M2 chip, Liquid Retina ekran va Apple Pencil Pro qo'llab-quvvatlashi.",
    specs:[["Ekran","11 dyuym Liquid Retina"],["Protsessor","Apple M2"],["Doimiy xotira","128 GB"],["Asosiy kamera","12 MP"],["Old kamera","12 MP"],["Port","USB-C"],["Qalam","Apple Pencil Pro"],["Tizim","iPadOS"]]},
  p12:{desc:"Oila uchun hamyonbop planshet: kitob o'qish, video ko'rish va bolalar uchun qulay.",
    specs:[["Ekran","8.7 dyuym LCD"],["Protsessor","Helio G99"],["Operativ xotira","4 GB"],["Doimiy xotira","64 GB"],["Asosiy kamera","8 MP"],["Old kamera","2 MP"],["Batareya","5100 mAh"],["Tizim","Android"]]},
  p13:{desc:"Yangi dizayndagi AirPods: qulay o'tirish, aniq tovush va iPhone bilan bir zumda ulanish.",
    specs:[["Chip","Apple H2"],["Ulanish","Bluetooth"],["Zaryad porti","USB-C"],["Ish vaqti","5 soatgacha (g'ilof bilan 30 soatgacha)"],["Himoya","IP54 (quloqchin va g'ilof)"]]},
  p14:{desc:"Faol shovqin bekor qilish, Adaptive Audio va sifatli tovush. Eng yaxshi simsiz quloqchinlardan biri.",
    specs:[["Chip","Apple H2"],["Shovqin bekor qilish","Faol (ANC) + Shaffoflik rejimi"],["Ulanish","Bluetooth"],["Ish vaqti","6 soatgacha (g'ilof bilan 30 soatgacha)"],["Zaryad","USB-C / MagSafe"],["Himoya","IP54"]]},
  p15:{desc:"Samsung telefonlari bilan mukammal ishlaydi: shovqin bekor qilish va qulay shakl.",
    specs:[["Shovqin bekor qilish","Faol (ANC)"],["Ulanish","Bluetooth 5.2"],["Ish vaqti","6 soatgacha (g'ilof bilan 21 soatgacha)"],["Himoya","IPX2"]]},
  p16:{desc:"Hamyonbop narxda shovqin bekor qilish va uzoq ishlash vaqtiga ega quloqchin.",
    specs:[["Shovqin bekor qilish","Faol (ANC), 46 dB gacha"],["Ulanish","Bluetooth 5.3"],["Ish vaqti","10 soatgacha (g'ilof bilan 40 soatgacha)"],["Dinamik","12.4 mm"]]},
  p17:{desc:"Telefonni tushish va tirnalishdan himoya qiladigan yumshoq, yengil silikon g'ilof.",
    specs:[["Material","Silikon"],["Turi","Universal"],["Himoya","Zarbadan va tirnalishdan"]]},
  p18:{desc:"Ekranni tirnalish va zarbalardan asraydigan mustahkam 9D himoya oynasi.",
    specs:[["Turi","Himoya oynasi 9D"],["Qoplama","Barmoq izini kamaytiradi"],["Qattiqlik","9H"]]},
  p19:{desc:"Klassik va hashamatli ko'rinishdagi charmli g'ilof. Telefonni ishonchli himoya qiladi.",
    specs:[["Material","Charm"],["Himoya","Zarbadan va tirnalishdan"],["Uslub","Klassik"]]},
  p20:{desc:"Telefonni bir necha marta to'liq zaryadlaydigan katta sig'imli quvvat banki.",
    specs:[["Sig'im","20000 mAh"],["Port","USB-C, USB-A"],["Tezkor zaryad","Power Delivery"],["Brend","Anker"]]},
  p21:{desc:"Yengil va ixcham quvvat banki. Sayohat va kundalik foydalanish uchun qulay.",
    specs:[["Sig'im","10000 mAh"],["Port","USB-C, USB-A"],["Tezkor zaryad","18W gacha"],["Brend","Xiaomi"]]},
  p22:{desc:"Telefonni tez zaryadlaydigan ixcham 20W zaryadlovchi adapter.",
    specs:[["Quvvat","20W"],["Port","USB-C"],["Texnologiya","Power Delivery (tezkor zaryad)"]]},
  p23:{desc:"Kabelsiz qulaylik: telefonni qo'yib qo'ysangiz bas, zaryadlanaveradi. MagSafe bilan magnit orqali mahkam ushlanadi.",
    specs:[["Turi","Simsiz zaryadlovchi"],["Standart","MagSafe"],["Quvvat","15W gacha"],["Ulanish","USB-C"]]},
  p24:{desc:"Salomatlik, faollik va bildirishnomalarni kuzatuvchi aqlli soat. iPhone bilan to'liq mos.",
    specs:[["Chip","Apple S8"],["Ekran","Retina LTPO OLED"],["Ish vaqti","18 soatgacha"],["Suvga chidamlilik","50 metrgacha"],["Sensorlar","Yurak urishi, tushish va avariya aniqlash"],["Mos","iPhone (iOS)"]]}
};

/* ---------------- yangi qo'shilgan 15 ta telefon: tafsilotlar ---------------- */
Object.assign(PRODUCT_INFO, {
  p25:{desc:"Camera Control tugmasi, kuchli A18 chipi va yangi vertikal kamera bloki bilan yangi avlod iPhone.",
    specs:[["Ekran","6.1 dyuym Super Retina XDR OLED"],["Protsessor","Apple A18"],["Operativ xotira","8 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","48 MP Fusion + 12 MP ultra keng"],["Old kamera","12 MP"],["Port","USB-C"],["Tizim","iOS 18"]]},
  p26:{desc:"Titan korpus, 120 Hz ProMotion ekran, 5x tele kamera va professional video imkoniyatlari.",
    specs:[["Ekran","6.3 dyuym Super Retina XDR OLED, 120 Hz"],["Protsessor","Apple A18 Pro"],["Operativ xotira","8 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","48 MP Fusion + 48 MP ultra keng + 12 MP 5x tele"],["Old kamera","12 MP"],["Korpus","Titan"],["Port","USB-C (USB 3)"],["Tizim","iOS 18"]]},
  p27:{desc:"Katta ekran va uzoq ishlaydigan batareya: iPhone 15 ning kattaroq varianti.",
    specs:[["Ekran","6.7 dyuym Super Retina XDR OLED"],["Protsessor","Apple A16 Bionic"],["Operativ xotira","6 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","48 MP + 12 MP ultra keng"],["Old kamera","12 MP"],["Port","USB-C"],["Tizim","iOS 17"]]},
  p28:{desc:"Hamyonbop narxdagi ishonchli iPhone: yorqin OLED ekran va ikki kamerali tizim.",
    specs:[["Ekran","6.1 dyuym Super Retina XDR OLED"],["Protsessor","Apple A15 Bionic"],["Operativ xotira","4 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","12 MP + 12 MP ultra keng"],["Old kamera","12 MP"],["Port","Lightning"],["Tizim","iOS 15"]]},
  p29:{desc:"Ixcham va tezkor flagman: yorqin 120 Hz ekran, eng yangi Snapdragon chipi va Galaxy AI.",
    specs:[["Ekran","6.2 dyuym Dynamic AMOLED 2X, 120 Hz"],["Protsessor","Snapdragon 8 Elite for Galaxy"],["Operativ xotira","12 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","50 MP + 12 MP ultra keng + 10 MP 3x tele"],["Old kamera","12 MP"],["Batareya","4000 mAh, 25W tezkor zaryad"],["Tizim","Android 15, One UI 7"]]},
  p30:{desc:"Samsungning eng kuchli smartfoni: titan korpus, S Pen, 200 MP kamera va katta QHD+ ekran.",
    specs:[["Ekran","6.9 dyuym QHD+ Dynamic AMOLED 2X, 120 Hz"],["Protsessor","Snapdragon 8 Elite for Galaxy"],["Operativ xotira","12 GB"],["Doimiy xotira","512 GB"],["Asosiy kamera","200 MP + 50 MP 5x tele + 10 MP 3x tele + 50 MP ultra keng"],["Old kamera","12 MP"],["Batareya","5000 mAh, 45W tezkor zaryad"],["S Pen","Mavjud"],["Tizim","Android 15, One UI 7"]]},
  p31:{desc:"Hamyonbop narxda Super AMOLED ekran, sig'imli batareya va ishonchli kamera.",
    specs:[["Ekran","6.6 dyuym Super AMOLED, 120 Hz"],["Protsessor","Exynos 1380"],["Operativ xotira","8 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","50 MP + 8 MP ultra keng + 5 MP makro"],["Old kamera","13 MP"],["Batareya","5000 mAh, 25W tezkor zaryad"],["Tizim","Android 14, One UI 6.1"]]},
  p32:{desc:"Eng hamyonbop Galaxy: Super AMOLED ekran va kun bo'yi yetadigan sig'imli batareya.",
    specs:[["Ekran","6.5 dyuym Super AMOLED, 90 Hz"],["Protsessor","MediaTek Helio G99"],["Operativ xotira","4 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","50 MP + 5 MP ultra keng + 2 MP makro"],["Old kamera","13 MP"],["Batareya","5000 mAh, 25W tezkor zaryad"],["Tizim","Android 14, One UI 6"]]},
  p33:{desc:"Leica kamerali kuchli smartfon: 144 Hz ekran va 120W juda tezkor zaryad.",
    specs:[["Ekran","6.67 dyuym AMOLED, 144 Hz"],["Protsessor","Dimensity 9300+"],["Operativ xotira","12 GB"],["Doimiy xotira","512 GB"],["Asosiy kamera","Leica 50 MP + 50 MP 2.6x tele + 12 MP ultra keng"],["Old kamera","32 MP"],["Batareya","5000 mAh, 120W tezkor zaryad"],["Tizim","Android 14, HyperOS"]]},
  p34:{desc:"200 MP kamera, yorqin AMOLED ekran va tezkor zaryad — o'rta narx segmentida kuchli tanlov.",
    specs:[["Ekran","6.67 dyuym AMOLED, 120 Hz"],["Protsessor","Dimensity 7300-Ultra"],["Operativ xotira","8 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","200 MP + 8 MP ultra keng + 2 MP makro"],["Old kamera","20 MP"],["Batareya","5110 mAh, 45W tezkor zaryad"],["Tizim","Android 14, HyperOS"]]},
  p35:{desc:"Eng arzon variantlardan biri: katta ekran, sig'imli batareya va kundalik ishlar uchun yetarli.",
    specs:[["Ekran","6.74 dyuym LCD, 90 Hz"],["Protsessor","MediaTek Helio G85"],["Operativ xotira","4 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","50 MP + 2 MP"],["Old kamera","5 MP"],["Batareya","5000 mAh, 18W zaryad"],["Tizim","Android 13, MIUI 14"]]},
  p36:{desc:"O'yin uchun yaratilgan: Snapdragon 8s Gen 3, 120 Hz AMOLED ekran va 90W tezkor zaryad.",
    specs:[["Ekran","6.67 dyuym AMOLED, 120 Hz"],["Protsessor","Snapdragon 8s Gen 3"],["Operativ xotira","8 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","50 MP (OIS) + 8 MP ultra keng"],["Old kamera","20 MP"],["Batareya","5000 mAh, 90W tezkor zaryad"],["Tizim","Android 14, HyperOS"]]},
  p37:{desc:"Narxiga nisbatan juda yaxshi: AMOLED ekran, OIS kamera va 67W tezkor zaryad.",
    specs:[["Ekran","6.67 dyuym AMOLED, 120 Hz"],["Protsessor","MediaTek Helio G99-Ultra"],["Operativ xotira","8 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","64 MP (OIS) + 8 MP ultra keng"],["Old kamera","16 MP"],["Batareya","5000 mAh, 67W tezkor zaryad"],["Tizim","Android 14, HyperOS"]]},
  p38:{desc:"Google AI imkoniyatlari, toza Android va uzoq muddatli yangilanishlar bilan flagman.",
    specs:[["Ekran","6.3 dyuym Actua OLED, 120 Hz"],["Protsessor","Google Tensor G4"],["Operativ xotira","12 GB"],["Doimiy xotira","128 GB"],["Asosiy kamera","50 MP + 48 MP ultra keng"],["Old kamera","10.5 MP"],["Batareya","4700 mAh, 27W tezkor zaryad"],["Tizim","Android 14 (7 yillik yangilanish)"]]},
  p39:{desc:"Flagman tezligi, Hasselblad kamera va 100W juda tezkor zaryad — yirik batareya bilan.",
    specs:[["Ekran","6.82 dyuym LTPO AMOLED QHD+, 120 Hz"],["Protsessor","Snapdragon 8 Gen 3"],["Operativ xotira","12 GB"],["Doimiy xotira","256 GB"],["Asosiy kamera","Hasselblad 50 MP + 64 MP 3x tele + 48 MP ultra keng"],["Old kamera","32 MP"],["Batareya","5400 mAh, 100W simli / 50W simsiz zaryad"],["Tizim","Android 14, OxygenOS 14"]]}
});

function openProduct(id, ev){
  if(ev && ev.target.closest('button, a, input, textarea')) return;
  const it = catalogItemInfo(id);
  if(!it) return;
  const info = PRODUCT_INFO[id];
  const build = BUILDS.find(b => b.id === id);
  const specs = info ? info.specs : (build ? build.specs : []);
  const desc = info ? info.desc : (build ? build.tag : '');
  const photo = build ? (build.img || 'photo-phone') : (CAT_PHOTO[it.cat] || 'photo-phone');
  const fav = isFavorite(id);
  document.getElementById('pdBody').innerHTML = `
    <div class="pd-visual">${visualHTML(id, it.cat, photo)}</div>
    <div class="pd-info">
      <div class="pd-cat">${it.cat}</div>
      <h2 id="pdTitle">${it.name}</h2>
      ${desc ? `<p class="pd-desc">${desc}</p>` : ''}
      <div class="pd-price mono">${fmt(it.price)}</div>
      ${specs.length ? `<h3 class="pd-sub">${t('pd_specs')}</h3>
      <ul class="pd-specs">${specs.map(([k,v]) => `<li><span>${k}</span><b>${v}</b></li>`).join('')}</ul>` : ''}
      <p class="pd-note">${t('pd_note')}</p>
      <div class="pd-actions">
        <button class="btn btn-primary" onclick="pdAdd('${id}')">${t('add_build')}</button>
        <button class="btn btn-ghost pd-fav ${fav ? 'active' : ''}" onclick="pdFav('${id}', this)" title="${t('fav_add')}"><svg class="ic"><use href="#i-heart"/></svg></button>
      </div>
    </div>`;
  const pd = document.getElementById('pd');
  pd.classList.add('open');
  pd.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const card = pd.querySelector('.pd-card');
  if(card) card.scrollTop = 0;
  const closeBtn = pd.querySelector('.pd-close');
  if(closeBtn) closeBtn.focus({preventScroll:true});
}
function closeProduct(){
  const pd = document.getElementById('pd');
  if(!pd || !pd.classList.contains('open')) return;
  pd.classList.remove('open');
  pd.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
function pdAdd(id){
  const it = catalogItemInfo(id);
  if(!it) return;
  addToCart(it.id, it.name, it.cat, it.price);
  closeProduct();
}
function pdFav(id, btn){
  toggleFavorite(id, null);
  const nowFav = isFavorite(id);
  btn.classList.toggle('active', nowFav);
  document.querySelectorAll('.heart-btn').forEach(h => {
    if((h.getAttribute('onclick') || '').includes("'" + id + "'")) h.classList.toggle('active', nowFav);
  });
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeProduct(); });

/* ---------------- state ---------------- */
function loadJSON(key, fallback){ try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } }
function saveJSON(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

let cart = loadJSON('phonex_cart', []);
let favorites = loadJSON('phonex_favorites', []);
let auth = loadJSON('phonex_auth', null);
let users = loadJSON('phonex_users', []);
let orders = loadJSON('phonex_orders', []);
let balance = loadJSON('phonex_balance', 0);
let txs = loadJSON('phonex_txs', []);

/* ---------------- i18n + sozlamalar ---------------- */
const I18N = {
  uz:{
    search_ph:"Mahsulot qidirish...", g_main:"ASOSIY", g_info:"MA'LUMOT", g_account:"HISOB",
    nav_home:"Bosh sahifa", nav_catalog:"Katalog", nav_builds:"To'plamlar", nav_cart:"Savat",
    nav_fav:"Sevimlilar",
    nav_contact:"Aloqa", nav_profile:"Profil", nav_settings:"Sozlamalar",
    hero_kicker:"Smartfon va aksessuarlar ulgurji va chakana savdosi",
    hero_h1:"Har bir tanlov ishonchli telefondan boshlanadi",
    hero_p:"iPhone'dan tortib aksessuarlargacha — biz Toshkentda original smartfonlarni tanlaymiz, tekshiramiz va tezkor yetkazib beramiz.",
    cta_catalog:"Katalogni ko'rish", cta_builds:"Tayyor to'plamlar",
    st_clients:"mamnun mijoz", st_orders:"yetkazilgan buyurtma", st_warranty:"telefonlarga kafolat", st_support:"texnik yordam javobi",
    sec_cats:"Bo'limlar", sec_why:"Nega PHONEX",
    why1t:"Original mahsulotlar", why1p:"Rasmiy distribyutorlar orqali, kafolat kartasi bilan.",
    why2t:"Tez yetkazib berish", why2p:"Toshkentda 24 soat, viloyatlarga 2–3 kun.",
    why3t:"Sozlab beramiz", why3p:"SIM, dastur va profilingizni ishga tushirib topshiramiz.",
    why4t:"Kafolat xizmati", why4p:"3 yilgacha kafolat, o'z servis markazimiz.",
    cat_h1:"Katalog", cat_p:"Kerakli telefon yoki aksessuarni tanlab, savatga qo'shing.",
    bld_h1:"Tayyor to'plamlar", bld_p:"Ehtiyojingizga qarab tanlangan, telefon + aksessuar to'plamlari.",
    cart_h1:"Savat", con_h1:"Aloqa",
    con_p:"Savollaringiz bormi? Yozing — 24 soat ichida javob beramiz, yoki to'g'ridan-to'g'ri qo'ng'iroq qiling.",
    f_name:"Ism", f_name_ph:"Ismingiz", f_surname:"Familiya", f_surname_ph:"Familiyangiz", f_phone:"Telefon raqam", f_msg:"Xabar", f_msg_ph:"Savolingiz yoki so'rovingiz...",
    f_send:"Xabar yuborish", c_name:"Ism", c_phone:"Telefon", c_addr:"Manzil", c_addr_v:"Toshkent sh., Yashnobod tumani",
    c_hours:"Ish vaqti", c_hours_v:"Har kuni 9:00–19:00",
    foot_rights:"© 2026 PHONEX. Barcha huquqlar himoyalangan.",
    ai_title:"PHONEX AI yordamchi", ai_ph:"Savolingizni yozing...", ai_send:"Yuborish",
    set_h1:"Sozlamalar", set_p:"Ko'rinish, til va qulaylik sozlamalari. Tanlovlaringiz shu brauzerda saqlanadi.",
    set_appearance:"Ko'rinish", set_theme:"Mavzu (Dark mode)", set_theme_d:"Yorug', qorong'i yoki tizim sozlamasiga mos.",
    set_light:"Yorug'", set_dark:"Qorong'i", set_system:"Tizim",
    set_mono:"Oq-qora rejim", set_mono_d:"Saytdagi barcha ranglar oq-qora (monoxrom) ko'rinishga o'tadi.",
    set_contrast:"Yuqori kontrast", set_contrast_d:"Matn va chegaralarni yanada aniqroq qiladi.",
    set_motion:"Animatsiyalarni kamaytirish", set_motion_d:"Harakat va o'tishlarni o'chiradi.",
    set_langsec:"Til", set_lang:"Interfeys tili", set_lang_d:"Sayt matnlari tanlangan tilga o'tadi.",
    set_data:"Ma'lumotlar", set_reset:"Sozlamalarni tiklash", set_reset_d:"Mavzu, til va boshqa tanlovlar boshlang'ich holatga qaytadi.",
    set_reset_btn:"Tiklash", set_clear:"Savat va tarixni tozalash", set_clear_d:"Savatdagi mahsulotlar va buyurtmalar tarixi o'chiriladi.",
    set_clear_btn:"Tozalash",
    currency:"so'm", filter_all:"Hammasi", found:"{n} ta mahsulot topildi", add:"Savatga", add_build:"Savatga qo'shish",
    cart_empty:"Savatingiz hozircha bo'sh.", go_catalog:"Katalogga o'tish",
    th_product:"Mahsulot", th_price:"Narx", th_qty:"Soni", th_total:"Jami", remove:"O'chirish",
    items:"Mahsulotlar ({n})", delivery:"Yetkazib berish", free:"Bepul", total:"Jami",
    checkout:"Buyurtmani rasmiylashtirish", added_toast:'"{name}" savatga qo\'shildi',
    order_toast:"Buyurtma qabul qilindi — {id} · {sum}", login_first:"Buyurtma berish uchun avval profilga kiring.",
    prof_h1:"Profil", prof_logout:"Chiqish", my_orders:"Buyurtmalarim", no_orders:"Hali buyurtma yo'q.",
    st_processing:"Qabul qilindi", st_shipping:"Yetkazilmoqda", st_delivered:"Yetkazildi", st_cancelled:"Bekor qilindi",
    tier_vip:"VIP mijoz", tier_basic:"Oddiy mijoz",
    login_h1:"Profilga kirish", login_p:"Buyurtma berish va tarixni ko'rish uchun ma'lumotlaringizni kiriting.",
    login_btn:"Kirish", proto_note:"Bu — prototip login: parol talab qilinmaydi, faqat shu brauzerda saqlanadi.",
    w_welcome:"Xush kelibsiz!", w_create:"Hisob yarating",
    w_sub_login:"Davom etish uchun PHONEX hisobingizga kiring.",
    w_sub_reg:"Buyurtma berish va tarixni ko'rish uchun bir necha soniya kifoya.",
    w_remember:"Meni eslab qolish", w_login_btn:"Hisobga kirish", w_reg_btn:"Ro'yxatdan o'tish",
    w_no_acc:"Hisobingiz yo'qmi?", w_has_acc:"Hisobingiz bormi?", w_reg_link:"Ro'yxatdan o'tish", w_login_link:"Kirish",
    w_skip:"Ro'yxatdan o'tmasdan davom etish →", w_note:"Parol talab qilinmaydi — ma'lumot shu brauzerda saqlanadi.",
    w_hi:"Xush kelibsiz, {name}!", w_orders_n:"Sizda {n} ta buyurtma mavjud.", w_logged:"Hisobingizga muvaffaqiyatli kirdingiz.",
    w_to_catalog:"Katalogga o'tish", w_to_builds:"Konfiguratsiyalarni ko'rish",
    err_fill:"Iltimos, ism, familiya va telefon raqamni kiriting.", err_all:"Iltimos, barcha maydonlarni to'ldiring.",
    err_phone:"Iltimos, telefon raqamingizni kiriting.", err_not_found:"Bu raqam bilan hisob topilmadi. Avval ro'yxatdan o'ting.",
    fav_h1:"Sevimlilar", fav_p:"Yoqtirgan mahsulotlaringiz shu yerda saqlanadi — birortasini savatga o'tkazish uchun tugmani bosing.",
    fav_empty:"Sevimlilar ro'yxati hozircha bo'sh.", fav_added:"Sevimlilarga qo'shildi", fav_removed:"Sevimlilardan olib tashlandi",
    fav_add:"Sevimlilarga qo'shish", fav_remove:"Sevimlilardan olib tashlash", fav_move_btn:"Savatga o'tkazish",
    sent:"Xabaringiz yuborildi — tez orada bog'lanamiz!",
    guest:"Mehmon", guest_sub:"Kirish / ro'yxatdan o'tish", logout_done:"Hisobdan chiqdingiz.",
    reset_done:"Sozlamalar tiklandi.", cleared:"Savat va buyurtmalar tarixi tozalandi.",
    nav_balance:"Balans", bal_h1:"Balans", bal_p:"Hisobingizni to'ldiring va buyurtmalarni bir bosishda to'lang.",
    bal_current:"Joriy balans", bal_lastcard:"Karta", bal_topup:"Balansni to'ldirish", bal_sum:"Summa (so'm)",
    bal_btn:"To'ldirish", bal_history:"Amaliyotlar tarixi", bal_empty:"Hali amaliyot yo'q.",
    bal_demo_d:"Haqiqiy pul yechilmaydi — kiritilgan summa shunchaki balansga qo'shiladi va brauzeringizda saqlanadi.",
    bal_in:"Balans to'ldirildi", bal_out:"Buyurtma to'lovi", bal_ok:"Balansga {sum} qo'shildi",
    bal_err_sum:"To'ldirish summasini kiriting.", bal_min:"Eng kam summa: {sum}",
    pm_card:"Karta orqali", pm_card_d:"Uzcard · Humo · Visa · Mastercard", pm_balance:"Balansdan",
    pm_low:"Balansda mablag' yetarli emas. Yetishmayapti: {sum}", pm_paid_bal:"Balansdan to'landi",
    co_pay_bal:"Balansdan {sum} to'lash",
    co_h1:"Buyurtmani rasmiylashtirish", co_p:"Uch qadam: yetkazib berish, to'lov, tasdiqlash.",
    co_s1:"Yetkazib berish", co_s2:"To'lov", co_s3:"Tayyor",
    co_recv:"Qabul qiluvchi", co_deliv:"Yetkazib berish usuli",
    co_courier:"Kuryer", co_courier_d:"Toshkent bo'ylab 24 soat · bepul",
    co_pickup:"Do'kondan olib ketish", co_pickup_d:"Yashnobod · bugundan boshlab",
    co_addr:"Manzil", co_addr_ph:"Ko'cha, uy, xonadon", co_note:"Izoh (ixtiyoriy)", co_note_ph:"Qo'shimcha ma'lumot...",
    co_back_cart:"Savatga qaytish", co_next:"Davom etish", co_back:"Orqaga",
    co_demo_t:"Demo rejim", co_demo_d:"Bu sayt hali backendsiz ishlaydi: haqiqiy pul yechilmaydi va karta ma'lumotlari hech qayerga yuborilmaydi — hammasi faqat brauzeringizda qoladi.",
    co_cardnum:"Karta raqami", co_holder:"Karta egasi", co_exp:"Amal muddati",
    co_sms_t:"SMS kodni kiriting", co_sms_d:"Demo rejimda istalgan 6 xonali kod qabul qilinadi (masalan 111111).",
    co_pay:"{sum} to'lash", co_paying:"To'lov amalga oshirilmoqda", co_confirm:"Tasdiqlash",
    co_ok_t:"To'lov muvaffaqiyatli o'tdi", co_ok_d:"Buyurtmangiz qabul qilindi. Menejerimiz tez orada bog'lanadi.",
    co_my_orders:"Buyurtmalarim", co_summary:"Buyurtma tarkibi", co_amount:"To'lov summasi",
    co_amount_d:"Demo: summani o'zgartirsangiz ham to'lov o'tadi.",
    co_err_name:"Ism va telefon raqamni kiriting.", co_err_addr:"Yetkazib berish manzilini kiriting.",
    co_err_card:"Karta raqami noto'g'ri — 16 xonali raqam kiriting.", co_err_holder:"Karta egasining ismini kiriting.",
    co_err_exp:"Amal muddati noto'g'ri (MM/YY).", co_err_cvv:"CVV kodi noto'g'ri.",
    co_err_code:"6 xonali SMS kodni kiriting.", co_err_sum:"To'lov summasi noto'g'ri.",
    co_sms_sent:"Tasdiqlash kodi yuborildi (demo).", co_empty:"Savat bo'sh — avval mahsulot tanlang.",
    co_r_order:"Buyurtma", co_r_date:"Sana", co_r_card:"Karta", co_r_method:"Usul", co_r_paid:"To'landi",
    theme_short:"Mavzu", lang_name:"O'zbek",
    pd_specs:"Texnik xususiyatlari", pd_note:"Xususiyatlar modelga va hududga qarab farq qilishi mumkin. Aniq ma'lumot uchun menejerimizga murojaat qiling.", pd_close:"Yopish", nav_ai:"AI Yordamchi", av_choose:"Profil rasmini tanlang", av_upload:"Rasm yuklash", av_change:"Rasmni o'zgartirish", av_remove:"Rasmni o'chirish", av_saved:"Profil rasmi saqlandi.", av_removed:"Profil rasmi o'chirildi.", av_err_type:"Faqat rasm faylini tanlang.", av_err_size:"Rasm hajmi 10 MB dan oshmasin.", av_err_read:"Rasmni o'qib bo'lmadi. Boshqa rasm tanlang."
  },
  ru:{
    search_ph:"Поиск товара...", g_main:"ОСНОВНОЕ", g_info:"ИНФОРМАЦИЯ", g_account:"АККАУНТ",
    nav_home:"Главная", nav_catalog:"Каталог", nav_builds:"Наборы", nav_cart:"Корзина",
    nav_fav:"Избранное",
    nav_contact:"Контакты", nav_profile:"Профиль", nav_settings:"Настройки",
    hero_kicker:"Оптовая и розничная продажа смартфонов и аксессуаров",
    hero_h1:"Каждый выбор начинается с надёжного телефона",
    hero_p:"От iPhone до аксессуаров — мы подбираем и быстро доставляем оригинальные смартфоны в Ташкенте.",
    cta_catalog:"Смотреть каталог", cta_builds:"Готовые наборы",
    st_clients:"довольных клиентов", st_orders:"доставленных заказов", st_warranty:"гарантия на телефоны", st_support:"ответ техподдержки",
    sec_cats:"Категории", sec_why:"Почему PHONEX",
    why1t:"Оригинальная продукция", why1p:"Через официальных дистрибьюторов, с гарантийным талоном.",
    why2t:"Быстрая доставка", why2p:"По Ташкенту за 24 часа, по регионам 2–3 дня.",
    why3t:"Настройка телефона", why3p:"Устанавливаем SIM и настраиваем профиль перед выдачей.",
    why4t:"Гарантийный сервис", why4p:"Гарантия до 3 лет, собственный сервисный центр.",
    cat_h1:"Каталог", cat_p:"Выбирайте нужный телефон или аксессуар и добавляйте в корзину.",
    bld_h1:"Готовые наборы", bld_p:"Наборы «телефон + аксессуары», подобранные под ваши задачи.",
    cart_h1:"Корзина", con_h1:"Контакты",
    con_p:"Есть вопросы? Напишите — ответим в течение 24 часов, или позвоните напрямую.",
    f_name:"Имя", f_name_ph:"Ваше имя", f_surname:"Фамилия", f_surname_ph:"Ваша фамилия", f_phone:"Номер телефона", f_msg:"Сообщение", f_msg_ph:"Ваш вопрос или запрос...",
    f_send:"Отправить сообщение", c_name:"Имя", c_phone:"Телефон", c_addr:"Адрес", c_addr_v:"г. Ташкент, Яшнабадский район",
    c_hours:"Время работы", c_hours_v:"Ежедневно 9:00–19:00",
    foot_rights:"© 2026 PHONEX. Все права защищены.",
    ai_title:"AI-помощник PHONEX", ai_ph:"Напишите свой вопрос...", ai_send:"Отправить",
    set_h1:"Настройки", set_p:"Внешний вид, язык и удобство. Выбор сохраняется в этом браузере.",
    set_appearance:"Внешний вид", set_theme:"Тема (Dark mode)", set_theme_d:"Светлая, тёмная или как в системе.",
    set_light:"Светлая", set_dark:"Тёмная", set_system:"Система",
    set_mono:"Чёрно-белый режим", set_mono_d:"Все цвета сайта становятся монохромными.",
    set_contrast:"Высокая контрастность", set_contrast_d:"Делает текст и границы чётче.",
    set_motion:"Меньше анимации", set_motion_d:"Отключает движение и переходы.",
    set_langsec:"Язык", set_lang:"Язык интерфейса", set_lang_d:"Тексты сайта переключатся на выбранный язык.",
    set_data:"Данные", set_reset:"Сбросить настройки", set_reset_d:"Тема, язык и другие параметры вернутся к исходным.",
    set_reset_btn:"Сбросить", set_clear:"Очистить корзину и историю", set_clear_d:"Товары в корзине и история заказов будут удалены.",
    set_clear_btn:"Очистить",
    currency:"сум", filter_all:"Все", found:"Найдено товаров: {n}", add:"В корзину", add_build:"Добавить в корзину",
    cart_empty:"Ваша корзина пока пуста.", go_catalog:"Перейти в каталог",
    th_product:"Товар", th_price:"Цена", th_qty:"Кол-во", th_total:"Сумма", remove:"Удалить",
    items:"Товары ({n})", delivery:"Доставка", free:"Бесплатно", total:"Итого",
    checkout:"Оформить заказ", added_toast:'"{name}" добавлен в корзину',
    order_toast:"Заказ принят — {id} · {sum}", login_first:"Сначала войдите в профиль, чтобы оформить заказ.",
    prof_h1:"Профиль", prof_logout:"Выйти", my_orders:"Мои заказы", no_orders:"Заказов пока нет.",
    st_processing:"Принят", st_shipping:"В пути", st_delivered:"Доставлен", st_cancelled:"Отменён",
    tier_vip:"VIP клиент", tier_basic:"Обычный клиент",
    login_h1:"Вход в профиль", login_p:"Введите данные, чтобы оформлять заказы и видеть историю.",
    login_btn:"Войти", proto_note:"Это прототип входа: пароль не нужен, данные хранятся в браузере.",
    w_welcome:"Добро пожаловать!", w_create:"Создайте аккаунт",
    w_sub_login:"Войдите в аккаунт PHONEX, чтобы продолжить.",
    w_sub_reg:"Несколько секунд — и вы сможете оформлять заказы.",
    w_remember:"Запомнить меня", w_login_btn:"Войти в аккаунт", w_reg_btn:"Зарегистрироваться",
    w_no_acc:"Нет аккаунта?", w_has_acc:"Уже есть аккаунт?", w_reg_link:"Регистрация", w_login_link:"Войти",
    w_skip:"Продолжить без регистрации →", w_note:"Пароль не требуется — данные хранятся в этом браузере.",
    w_hi:"Добро пожаловать, {name}!", w_orders_n:"У вас {n} заказ(ов).", w_logged:"Вы успешно вошли в аккаунт.",
    w_to_catalog:"Перейти в каталог", w_to_builds:"Посмотреть сборки",
    err_fill:"Пожалуйста, введите имя, фамилию и номер телефона.", err_all:"Пожалуйста, заполните все поля.",
    err_phone:"Пожалуйста, введите номер телефона.", err_not_found:"Аккаунт с этим номером не найден. Сначала зарегистрируйтесь.",
    fav_h1:"Избранное", fav_p:"Здесь хранятся понравившиеся товары — нажмите кнопку, чтобы перенести товар в корзину.",
    fav_empty:"Список избранного пока пуст.", fav_added:"Добавлено в избранное", fav_removed:"Удалено из избранного",
    fav_add:"В избранное", fav_remove:"Убрать из избранного", fav_move_btn:"В корзину",
    sent:"Сообщение отправлено — скоро свяжемся!",
    guest:"Гость", guest_sub:"Вход / регистрация", logout_done:"Вы вышли из аккаунта.",
    reset_done:"Настройки сброшены.", cleared:"Корзина и история заказов очищены.",
    nav_balance:"Баланс", bal_h1:"Баланс", bal_p:"Пополните счёт и оплачивайте заказы в один клик.",
    bal_current:"Текущий баланс", bal_lastcard:"Карта", bal_topup:"Пополнение баланса", bal_sum:"Сумма (сум)",
    bal_btn:"Пополнить", bal_history:"История операций", bal_empty:"Операций пока нет.",
    bal_demo_d:"Реальные деньги не списываются — указанная сумма просто добавляется к балансу и хранится в браузере.",
    bal_in:"Пополнение баланса", bal_out:"Оплата заказа", bal_ok:"Баланс пополнен на {sum}",
    bal_err_sum:"Введите сумму пополнения.", bal_min:"Минимальная сумма: {sum}",
    pm_card:"Картой", pm_card_d:"Uzcard · Humo · Visa · Mastercard", pm_balance:"С баланса",
    pm_low:"Недостаточно средств. Не хватает: {sum}", pm_paid_bal:"Оплачено с баланса",
    co_pay_bal:"Оплатить с баланса {sum}",
    co_h1:"Оформление заказа", co_p:"Три шага: доставка, оплата, подтверждение.",
    co_s1:"Доставка", co_s2:"Оплата", co_s3:"Готово",
    co_recv:"Получатель", co_deliv:"Способ доставки",
    co_courier:"Курьер", co_courier_d:"По Ташкенту за 24 часа · бесплатно",
    co_pickup:"Самовывоз", co_pickup_d:"Яшнабад · с сегодняшнего дня",
    co_addr:"Адрес", co_addr_ph:"Улица, дом, квартира", co_note:"Комментарий (необязательно)", co_note_ph:"Дополнительная информация...",
    co_back_cart:"Вернуться в корзину", co_next:"Продолжить", co_back:"Назад",
    co_demo_t:"Демо-режим", co_demo_d:"Сайт работает без бэкенда: реальные деньги не списываются, данные карты никуда не отправляются — всё остаётся в вашем браузере.",
    co_cardnum:"Номер карты", co_holder:"Держатель карты", co_exp:"Срок действия",
    co_sms_t:"Введите код из SMS", co_sms_d:"В демо-режиме подойдёт любой 6-значный код (например 111111).",
    co_pay:"Оплатить {sum}", co_paying:"Идёт оплата", co_confirm:"Подтвердить",
    co_ok_t:"Оплата прошла успешно", co_ok_d:"Заказ принят. Наш менеджер скоро свяжется с вами.",
    co_my_orders:"Мои заказы", co_summary:"Состав заказа", co_amount:"Сумма оплаты",
    co_amount_d:"Демо: оплата пройдёт с любой суммой.",
    co_err_name:"Введите имя и номер телефона.", co_err_addr:"Введите адрес доставки.",
    co_err_card:"Неверный номер карты — введите 16 цифр.", co_err_holder:"Укажите держателя карты.",
    co_err_exp:"Неверный срок действия (ММ/ГГ).", co_err_cvv:"Неверный CVV.",
    co_err_code:"Введите 6-значный код.", co_err_sum:"Неверная сумма оплаты.",
    co_sms_sent:"Код подтверждения отправлен (демо).", co_empty:"Корзина пуста — сначала выберите товар.",
    co_r_order:"Заказ", co_r_date:"Дата", co_r_card:"Карта", co_r_method:"Способ", co_r_paid:"Оплачено",
    theme_short:"Тема", lang_name:"Русский",
    pd_specs:"Характеристики", pd_note:"Характеристики могут отличаться в зависимости от модели и региона. Уточняйте у менеджера.", pd_close:"Закрыть", nav_ai:"AI-помощник", av_choose:"Выберите фото профиля", av_upload:"Загрузить фото", av_change:"Изменить фото", av_remove:"Удалить фото", av_saved:"Фото профиля сохранено.", av_removed:"Фото профиля удалено.", av_err_type:"Выберите файл изображения.", av_err_size:"Размер фото не более 10 МБ.", av_err_read:"Не удалось прочитать фото. Выберите другое."
  },
  en:{
    search_ph:"Search products...", g_main:"MAIN", g_info:"INFO", g_account:"ACCOUNT",
    nav_home:"Dashboard", nav_catalog:"Catalog", nav_builds:"Sets", nav_cart:"Cart",
    nav_fav:"Favorites",
    nav_contact:"Contact", nav_profile:"Profile", nav_settings:"Settings",
    hero_kicker:"Wholesale and retail of smartphones and accessories",
    hero_h1:"Every choice starts with the right phone",
    hero_p:"From iPhones to accessories — we select and quickly deliver genuine smartphones across Tashkent.",
    cta_catalog:"Browse catalog", cta_builds:"Ready-made sets",
    st_clients:"happy customers", st_orders:"orders delivered", st_warranty:"phone warranty", st_support:"support response",
    sec_cats:"Categories", sec_why:"Why PHONEX",
    why1t:"Genuine products", why1p:"Through official distributors, with a warranty card.",
    why2t:"Fast delivery", why2p:"24 hours in Tashkent, 2–3 days to the regions.",
    why3t:"Ready to use", why3p:"We set up your SIM and profile before handover.",
    why4t:"Warranty service", why4p:"Up to 3 years warranty, our own service center.",
    cat_h1:"Catalog", cat_p:"Pick the phone or accessory you need and add it to your cart.",
    bld_h1:"Ready-made sets", bld_p:"Phone + accessory sets picked for your needs.",
    cart_h1:"Cart", con_h1:"Contact",
    con_p:"Questions? Write to us — we reply within 24 hours, or just call us directly.",
    f_name:"Name", f_name_ph:"Your name", f_surname:"Surname", f_surname_ph:"Your surname", f_phone:"Phone number", f_msg:"Message", f_msg_ph:"Your question or request...",
    f_send:"Send message", c_name:"Name", c_phone:"Phone", c_addr:"Address", c_addr_v:"Tashkent, Yashnabad district",
    c_hours:"Working hours", c_hours_v:"Daily 9:00–19:00",
    foot_rights:"© 2026 PHONEX. All rights reserved.",
    ai_title:"PHONEX AI assistant", ai_ph:"Type your question...", ai_send:"Send",
    set_h1:"Settings", set_p:"Appearance, language and comfort options. Your choices are saved in this browser.",
    set_appearance:"Appearance", set_theme:"Theme (Dark mode)", set_theme_d:"Light, dark, or follow your system.",
    set_light:"Light", set_dark:"Dark", set_system:"System",
    set_mono:"Black & white mode", set_mono_d:"Turns every color on the site monochrome.",
    set_contrast:"High contrast", set_contrast_d:"Makes text and borders sharper.",
    set_motion:"Reduce motion", set_motion_d:"Disables animations and transitions.",
    set_langsec:"Language", set_lang:"Interface language", set_lang_d:"Site text switches to the chosen language.",
    set_data:"Data", set_reset:"Reset settings", set_reset_d:"Theme, language and other choices return to defaults.",
    set_reset_btn:"Reset", set_clear:"Clear cart and history", set_clear_d:"Cart items and order history will be deleted.",
    set_clear_btn:"Clear",
    currency:"UZS", filter_all:"All", found:"{n} products found", add:"Add", add_build:"Add to cart",
    cart_empty:"Your cart is empty for now.", go_catalog:"Go to catalog",
    th_product:"Product", th_price:"Price", th_qty:"Qty", th_total:"Total", remove:"Remove",
    items:"Items ({n})", delivery:"Delivery", free:"Free", total:"Total",
    checkout:"Place order", added_toast:'"{name}" added to cart',
    order_toast:"Order placed — {id} · {sum}", login_first:"Sign in to your profile first to place an order.",
    prof_h1:"Profile", prof_logout:"Sign out", my_orders:"My orders", no_orders:"No orders yet.",
    st_processing:"Processing", st_shipping:"Shipping", st_delivered:"Delivered", st_cancelled:"Cancelled",
    tier_vip:"VIP customer", tier_basic:"Regular customer",
    login_h1:"Sign in", login_p:"Enter your details to place orders and see your history.",
    login_btn:"Sign in", proto_note:"This is a prototype login: no password needed, stored in this browser only.",
    w_welcome:"Welcome!", w_create:"Create an account",
    w_sub_login:"Sign in to your PHONEX account to continue.",
    w_sub_reg:"A few seconds is all it takes to start ordering.",
    w_remember:"Remember me", w_login_btn:"Sign in", w_reg_btn:"Sign up",
    w_no_acc:"No account yet?", w_has_acc:"Already have an account?", w_reg_link:"Sign up", w_login_link:"Sign in",
    w_skip:"Continue without signing up →", w_note:"No password required — data stays in this browser.",
    w_hi:"Welcome, {name}!", w_orders_n:"You have {n} order(s).", w_logged:"You are signed in.",
    w_to_catalog:"Go to catalog", w_to_builds:"See builds",
    err_fill:"Please enter your name, surname and phone number.", err_all:"Please fill in all fields.",
    err_phone:"Please enter your phone number.", err_not_found:"No account found with this number. Please sign up first.",
    fav_h1:"Favorites", fav_p:"Products you've liked are saved here — tap the button to move one to your cart.",
    fav_empty:"Your favorites list is empty.", fav_added:"Added to favorites", fav_removed:"Removed from favorites",
    fav_add:"Add to favorites", fav_remove:"Remove from favorites", fav_move_btn:"Move to cart",
    sent:"Your message was sent — we'll be in touch soon!",
    guest:"Guest", guest_sub:"Sign in / sign up", logout_done:"You have signed out.",
    reset_done:"Settings restored.", cleared:"Cart and order history cleared.",
    nav_balance:"Balance", bal_h1:"Balance", bal_p:"Top up your account and pay for orders in one click.",
    bal_current:"Current balance", bal_lastcard:"Card", bal_topup:"Top up balance", bal_sum:"Amount (UZS)",
    bal_btn:"Top up", bal_history:"Transaction history", bal_empty:"No transactions yet.",
    bal_demo_d:"No real money is charged — the amount you enter is simply added to the balance and stored in your browser.",
    bal_in:"Balance top-up", bal_out:"Order payment", bal_ok:"{sum} added to your balance",
    bal_err_sum:"Enter the top-up amount.", bal_min:"Minimum amount: {sum}",
    pm_card:"By card", pm_card_d:"Uzcard · Humo · Visa · Mastercard", pm_balance:"From balance",
    pm_low:"Not enough funds. Missing: {sum}", pm_paid_bal:"Paid from balance",
    co_pay_bal:"Pay {sum} from balance",
    co_h1:"Checkout", co_p:"Three steps: delivery, payment, confirmation.",
    co_s1:"Delivery", co_s2:"Payment", co_s3:"Done",
    co_recv:"Recipient", co_deliv:"Delivery method",
    co_courier:"Courier", co_courier_d:"24 hours across Tashkent · free",
    co_pickup:"Store pickup", co_pickup_d:"Yashnabad · from today",
    co_addr:"Address", co_addr_ph:"Street, building, apartment", co_note:"Note (optional)", co_note_ph:"Anything else we should know...",
    co_back_cart:"Back to cart", co_next:"Continue", co_back:"Back",
    co_demo_t:"Demo mode", co_demo_d:"This site runs without a backend: no real money is charged and card details are never sent anywhere — everything stays in your browser.",
    co_cardnum:"Card number", co_holder:"Cardholder", co_exp:"Expiry",
    co_sms_t:"Enter the SMS code", co_sms_d:"In demo mode any 6-digit code works (e.g. 111111).",
    co_pay:"Pay {sum}", co_paying:"Processing payment", co_confirm:"Confirm",
    co_ok_t:"Payment successful", co_ok_d:"Your order is accepted. Our manager will contact you shortly.",
    co_my_orders:"My orders", co_summary:"Order summary", co_amount:"Payment amount",
    co_amount_d:"Demo: the payment goes through with any amount.",
    co_err_name:"Enter your name and phone number.", co_err_addr:"Enter the delivery address.",
    co_err_card:"Invalid card number — enter 16 digits.", co_err_holder:"Enter the cardholder name.",
    co_err_exp:"Invalid expiry date (MM/YY).", co_err_cvv:"Invalid CVV.",
    co_err_code:"Enter the 6-digit code.", co_err_sum:"Invalid payment amount.",
    co_sms_sent:"Confirmation code sent (demo).", co_empty:"Your cart is empty — pick a product first.",
    co_r_order:"Order", co_r_date:"Date", co_r_card:"Card", co_r_method:"Method", co_r_paid:"Paid",
    theme_short:"Theme", lang_name:"English",
    pd_specs:"Specifications", pd_note:"Specifications may vary by model and region. Ask our manager for details.", pd_close:"Close", nav_ai:"AI assistant", av_choose:"Choose a profile picture", av_upload:"Upload photo", av_change:"Change photo", av_remove:"Remove photo", av_saved:"Profile photo saved.", av_removed:"Profile photo removed.", av_err_type:"Please choose an image file.", av_err_size:"Photo must be under 10 MB.", av_err_read:"Couldn't read that photo. Try another one."
  }
};
const LOCALE = {uz:'uz-UZ', ru:'ru-RU', en:'en-US'};
const DEFAULT_PREFS = {theme:'system', lang:'uz', mono:false, contrast:false, motion:false};
let prefs = Object.assign({}, DEFAULT_PREFS, loadJSON('phonex_prefs', {}));

function t(key, vars){
  let s = (I18N[prefs.lang] && I18N[prefs.lang][key]) || I18N.uz[key] || key;
  if(vars) for(const k in vars) s = s.split('{'+k+'}').join(vars[k]);
  return s;
}
function savePrefs(){ saveJSON('phonex_prefs', prefs); }

function applyTheme(){
  const root = document.documentElement;
  if(prefs.theme === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', prefs.theme);
  root.classList.toggle('mono', !!prefs.mono);
  root.classList.toggle('hicontrast', !!prefs.contrast);
  root.classList.toggle('no-motion', !!prefs.motion);
  const dark = effectiveDark();
  document.querySelectorAll('#quickTheme use, #topTheme use').forEach(q => q.setAttribute('href', dark ? '#i-sun' : '#i-moon'));
}
function effectiveDark(){
  if(prefs.theme === 'dark') return true;
  if(prefs.theme === 'light') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function setTheme(mode){ prefs.theme = mode; savePrefs(); applyTheme(); syncSettingsUI(); }
function toggleTheme(){ setTheme(effectiveDark() ? 'light' : 'dark'); }

function applyI18n(){
  document.documentElement.lang = prefs.lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  const ql = document.querySelector('#quickLang .qlang');
  if(ql) ql.textContent = prefs.lang.toUpperCase();
}
function setLang(l){
  prefs.lang = l; savePrefs();
  applyI18n();
  renderFilters(); renderProducts(); renderHomeCats(); renderBuilds();
  renderSidebarUser(); syncSettingsUI(); updateBalanceBadge();
  if(document.getElementById('balValue')) renderBalance();
  const cur = document.querySelector('.page.active');
  const p = cur ? cur.dataset.page : null;
  if(p === 'savat') renderCart();
  if(p === 'sevimlilar') renderFavorites();
  if(p === 'profil') renderProfile();
  if(p === 'welcome') renderWelcome();
}
function cycleLang(){
  const order = ['uz','ru','en'];
  setLang(order[(order.indexOf(prefs.lang) + 1) % order.length]);
}

function syncSettingsUI(){
  document.querySelectorAll('#themeSeg .seg-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.themeOpt === prefs.theme));
  document.querySelectorAll('#langSeg .seg-btn').forEach(b =>
    b.classList.toggle('active', b.dataset.langOpt === prefs.lang));
  [['monoSwitch','mono'],['contrastSwitch','contrast'],['motionSwitch','motion']].forEach(([id,key]) => {
    const el = document.getElementById(id);
    if(el){ el.classList.toggle('on', !!prefs[key]); el.setAttribute('aria-checked', !!prefs[key]); }
  });
}
function bindSettings(){
  document.querySelectorAll('#themeSeg .seg-btn').forEach(b =>
    b.addEventListener('click', () => setTheme(b.dataset.themeOpt)));
  document.querySelectorAll('#langSeg .seg-btn').forEach(b =>
    b.addEventListener('click', () => setLang(b.dataset.langOpt)));
  [['monoSwitch','mono'],['contrastSwitch','contrast'],['motionSwitch','motion']].forEach(([id,key]) => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('click', () => { prefs[key] = !prefs[key]; savePrefs(); applyTheme(); syncSettingsUI(); });
  });
  const qt = document.getElementById('quickTheme');
  if(qt) qt.addEventListener('click', toggleTheme);
  const tt = document.getElementById('topTheme');
  if(tt) tt.addEventListener('click', toggleTheme);
  const qlb = document.getElementById('quickLang');
  if(qlb) qlb.addEventListener('click', cycleLang);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if(prefs.theme === 'system') applyTheme(); });
}
function resetSettings(){
  prefs = Object.assign({}, DEFAULT_PREFS);
  savePrefs(); applyTheme(); setLang(prefs.lang);
  toast(t('reset_done'));
}
function clearData(){
  cart = []; orders = [];
  saveJSON('phonex_cart', cart); saveJSON('phonex_orders', orders);
  updateCartBadge();
  toast(t('cleared'));
}

/* ---------------- sidebar ---------------- */
function renderSidebarUser(){
  const el = document.getElementById('sbUser');
  if(!el) return;
  if(auth){
    const initial = (auth.name || '?').trim().charAt(0).toUpperCase();
    el.innerHTML = `
      <div class="sb-ava" onclick="go('profil')" style="cursor:pointer;">${avatarInner(auth)}</div>
      <div class="sb-user-info" onclick="go('profil')"><b>${auth.name}${auth.surname ? ' ' + auth.surname : ''}</b><span>${auth.phone}</span></div>
      <button class="sb-icon-btn" onclick="logout()" title="${t('prof_logout')}"><svg class="ic"><use href="#i-logout"/></svg></button>`;
  }else{
    el.innerHTML = `
      <div class="sb-ava"><svg class="ic" style="width:17px;height:17px;"><use href="#i-user"/></svg></div>
      <div class="sb-user-info" onclick="go('profil')"><b>${t('guest')}</b><span>${t('guest_sub')}</span></div>`;
  }
}
function toggleSidebar(open){
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sbOverlay');
  const isOpen = open === undefined ? !sb.classList.contains('open') : open;
  sb.classList.toggle('open', isOpen);
  ov.classList.toggle('show', isOpen);
}
function bindSidebar(){
  document.getElementById('menuBtn').addEventListener('click', () => toggleSidebar());
  document.getElementById('sbOverlay').addEventListener('click', () => toggleSidebar(false));
  document.addEventListener('keydown', e => { if(e.key === 'Escape') toggleSidebar(false); });
}


function fmt(n){ return n.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') + ' ' + t('currency'); }

/* ---------------- reveal / counters ---------------- */
function playReveal(container){
  if(!container) return;
  const els = container.querySelectorAll('.reveal');
  els.forEach(el => el.classList.remove('show'));
  void container.offsetWidth;
  els.forEach(el => el.classList.add('show'));
}
let statsAnimated = false;
function animateStats(){
  if(statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('#page-home .stat b[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 900;
    const start = performance.now();
    function frame(now){
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = val.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') + suffix;
      if(p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ---------------- toasts ---------------- */
function toast(msg, type){
  const host = document.getElementById('toastHost');
  const t = document.createElement('div');
  t.className = 'toast' + (type === 'error' ? ' error' : '');
  t.textContent = msg;
  host.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => {
    t.classList.remove('show');
    setTimeout(() => t.remove(), 350);
  }, 3200);
}

/* ---------------- router ---------------- */
function go(page){
  document.querySelectorAll('.page').forEach(p => {
    const match = p.dataset.page === page;
    p.classList.toggle('active', match);
    if(!match) p.classList.remove('show');
  });
  document.querySelectorAll('.navlink').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  document.body.classList.toggle('welcome-active', page === 'welcome');
  toggleSidebar(false);
  window.scrollTo({top:0, behavior:'instant'});
  if(page === 'savat') renderCart();
  if(page === 'sevimlilar') renderFavorites();
  if(page === 'profil') renderProfile();
  if(page === 'welcome') renderWelcome();
  if(page === 'sozlamalar') syncSettingsUI();
  if(page === 'tolov') openCheckout();
  if(page === 'balans') renderBalance();
  location.hash = page;
  const activeEl = document.getElementById('page-' + page);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    activeEl.classList.add('show');
    playReveal(activeEl);
    if(page === 'home') animateStats();
  }));
}
window.addEventListener('hashchange', () => {
  const p = location.hash.replace('#','') || 'welcome';
  if(['welcome','home','katalog','builds','savat','sevimlilar','profil','aloqa','sozlamalar','tolov','balans'].includes(p)) go(p);
});


/* ---------------- search ---------------- */
let searchTerm = '';
function onSearch(v){ searchTerm = v.trim().toLowerCase(); renderProducts(); }

/* ---------------- cart ---------------- */
function cartCount(){ return cart.reduce((s,i)=>s+i.qty,0); }
function updateCartBadge(){
  const n = cartCount();
  ['cartCount','cartCountM','cartCountBB','cartCountTop'].forEach(id => { const el = document.getElementById(id); if(el) el.textContent = n; });
}

function addToCart(id, name, cat, price){
  const existing = cart.find(i => i.id === id);
  if(existing) existing.qty += 1;
  else cart.push({id, name, cat, price, qty:1});
  saveJSON('phonex_cart', cart);
  updateCartBadge();
  const badge = document.getElementById('cartCount');
  badge.classList.remove('pop'); void badge.offsetWidth; badge.classList.add('pop');
  toast(t('added_toast', {name}));
}
function changeQty(id, delta){
  const item = cart.find(i => i.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
  saveJSON('phonex_cart', cart);
  updateCartBadge();
  renderCart();
}
function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  saveJSON('phonex_cart', cart);
  updateCartBadge();
  renderCart();
}

/* ---------------- sevimlilar (favorites / like) ---------------- */
function isFavorite(id){ return favorites.includes(id); }
function updateFavBadge(){
  ['favCount','favCountTop'].forEach(id => { const el = document.getElementById(id); if(el) el.textContent = favorites.length; });
}
function catalogItemInfo(id){
  const p = PRODUCTS.find(x => x.id === id);
  if(p) return {id: p.id, name: p.name, cat: p.cat, price: p.price};
  const b = BUILDS.find(x => x.id === id);
  if(b) return {id: b.id, name: b.name, cat: "Tayyor to'plam", price: b.price};
  return null;
}
function toggleFavorite(id, btn){
  const i = favorites.indexOf(id);
  const nowFav = i < 0;
  if(nowFav) favorites.unshift(id); else favorites.splice(i, 1);
  saveJSON('phonex_favorites', favorites);
  updateFavBadge();
  if(btn){
    btn.classList.toggle('active', nowFav);
    btn.title = nowFav ? t('fav_remove') : t('fav_add');
    btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop');
  }
  toast(nowFav ? t('fav_added') : t('fav_removed'));
  if(document.getElementById('page-sevimlilar').classList.contains('active')) renderFavorites();
}
function moveFavToCart(id){
  addById(id);
  const i = favorites.indexOf(id);
  if(i >= 0){ favorites.splice(i, 1); saveJSON('phonex_favorites', favorites); updateFavBadge(); }
  go('savat');
}
function renderFavorites(){
  const el = document.getElementById('favContent');
  if(!el) return;
  const items = favorites.map(catalogItemInfo).filter(Boolean);
  if(items.length === 0){
    el.innerHTML = `<div class="empty-state"><div class="glyph">🤍</div><p>${t('fav_empty')}</p>
      <button class="btn btn-primary" onclick="go('katalog')" style="margin-top:12px;">${t('go_catalog')}</button></div>`;
    return;
  }
  el.innerHTML = `<div class="prod-grid">${items.map((it,i) => `
    <div class="prod-card reveal" style="animation-delay:${Math.min(i*0.035,0.4)}s;" tabindex="0" role="button" onclick="openProduct('${it.id}', event)" onkeydown="if(event.key==='Enter'&&event.target===this)openProduct('${it.id}')">
      <button class="heart-btn active" onclick="toggleFavorite('${it.id}', this)" title="${t('fav_remove')}"><svg class="ic"><use href="#i-heart"/></svg></button>
      <div class="prod-visual">${visualHTML(it.id, it.cat, CAT_PHOTO[it.cat] || 'photo-phone')}</div>
      <div class="prod-cat-tag">${it.cat}</div>
      <div class="prod-name">${it.name}</div>
      <div class="prod-foot">
        <div class="prod-price mono">${fmt(it.price)}</div>
        <button class="btn btn-primary add-btn" onclick="moveFavToCart('${it.id}')">${t('fav_move_btn')}</button>
      </div>
    </div>`).join('')}</div>`;
  playReveal(el);
}

function renderCart(){
  const el = document.getElementById('cartContent');
  if(cart.length === 0){
    el.innerHTML = `<div class="empty-state"><div class="glyph">🛒</div><p>${t('cart_empty')}</p>
      <button class="btn btn-primary" onclick="go('katalog')" style="margin-top:12px;">${t('go_catalog')}</button></div>`;
    return;
  }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  el.innerHTML = `
    <table class="cart-table">
      <thead><tr><th>${t('th_product')}</th><th>${t('th_price')}</th><th>${t('th_qty')}</th><th>${t('th_total')}</th><th></th></tr></thead>
      <tbody>
        ${cart.map(i => `
          <tr>
            <td><div class="cart-item-name">${i.name}</div><div class="cart-item-cat">${i.cat}</div></td>
            <td class="mono">${fmt(i.price)}</td>
            <td><div class="stepper">
              <button onclick="changeQty('${i.id}',-1)">−</button>
              <span>${i.qty}</span>
              <button onclick="changeQty('${i.id}',1)">+</button>
            </div></td>
            <td class="mono">${fmt(i.price*i.qty)}</td>
            <td><button class="remove-link" onclick="removeFromCart('${i.id}')">${t('remove')}</button></td>
          </tr>`).join('')}
      </tbody>
    </table>
    <div class="cart-summary">
      <div class="row"><span>${t('items', {n: cartCount()})}</span><span class="mono">${fmt(total)}</span></div>
      <div class="row"><span>${t('delivery')}</span><span>${t('free')}</span></div>
      <div class="row total"><span>${t('total')}</span><span class="mono">${fmt(total)}</span></div>
      <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:16px;" onclick="go('tolov')">${t('checkout')}</button>
    </div>`;
}

function checkout(){
  if(cart.length === 0) return;
  if(!auth){
    toast(t('login_first'), 'error');
    go('profil');
    return;
  }
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const order = {
    id: 'BX-' + Math.random().toString(36).slice(2,8).toUpperCase(),
    items: cart.map(i => ({name:i.name, qty:i.qty, price:i.price})),
    total,
    date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ'),
    buyer: auth.phone
  };
  orders.unshift(order);
  saveJSON('phonex_orders', orders);
  cart = [];
  saveJSON('phonex_cart', cart);
  updateCartBadge();
  toast(t('order_toast', {id: order.id, sum: fmt(total)}));
  go('profil');
}

/* ---------------- catalog render ---------------- */
let activeFilter = 'Hammasi';
function renderFilters(){
  const cats = ['Hammasi', ...new Set(PRODUCTS.map(p=>p.cat))];
  document.getElementById('filters').innerHTML = cats.map(c =>
    `<button class="chip ${c===activeFilter?'active':''}" onclick="setFilter('${c}')">${c==='Hammasi'?t('filter_all'):c}</button>`).join('');
}
function setFilter(c){ activeFilter = c; renderFilters(); renderProducts(); }
function renderProducts(){
  let list = activeFilter === 'Hammasi' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===activeFilter);
  if(searchTerm) list = list.filter(p => p.name.toLowerCase().includes(searchTerm) || p.cat.toLowerCase().includes(searchTerm));
  document.getElementById('resultCount').textContent = t('found', {n: list.length});
  document.getElementById('prodList').innerHTML = list.map((p,i) => `
    <div class="prod-card reveal" style="animation-delay:${Math.min(i*0.035,0.4)}s;" tabindex="0" role="button" onclick="openProduct('${p.id}', event)" onkeydown="if(event.key==='Enter'&&event.target===this)openProduct('${p.id}')">
      <button class="heart-btn ${isFavorite(p.id) ? 'active' : ''}" onclick="toggleFavorite('${p.id}', this)" title="${isFavorite(p.id) ? t('fav_remove') : t('fav_add')}"><svg class="ic"><use href="#i-heart"/></svg></button>
      <div class="prod-visual">${visualHTML(p.id, p.cat, CAT_PHOTO[p.cat] || 'photo-phone')}</div>
      <div class="prod-cat-tag">${p.cat}</div>
      <div class="prod-name">${p.name}</div>
      <div class="prod-foot">
        <div class="prod-price mono">${fmt(p.price)}</div>
        <button class="btn btn-ghost add-btn" onclick="addById('${p.id}')">${t('add')}</button>
      </div>
    </div>`).join('');
  playReveal(document.getElementById('prodList'));
}

function renderHomeCats(){
  const cats = [...new Set(PRODUCTS.map(p=>p.cat))];
  document.getElementById('homeCats').innerHTML = cats.map((c,i) => `
    <button class="home-cat reveal" style="animation-delay:${i*0.04}s;" onclick="setFilter('${c}');go('katalog');">
      ${CAT_IMAGES[c] ? `<span class="hc-img"><img src="${CAT_IMAGES[c]}" alt="" loading="lazy" onerror="this.parentNode.remove()"></span>` : ''}
      <span class="hc-label"><svg class="ic"><use href="#${CAT_ICON[c] || 'i-cpu'}"/></svg><span>${c}</span></span>
    </button>`).join('');
}
function renderHeroPhotos(){
  const el = document.getElementById('heroPhotos');
  if(!el) return;
  const tiles = [{cat:'Smartfonlar', cls:'hp-main'}, {cat:'Simsiz quloqchin', cls:''}, {cat:'Smart soat', cls:''}];
  el.innerHTML = tiles.map(x => `
    <button class="hp ${x.cls}" onclick="setFilter('${x.cat}');go('katalog');" aria-label="${x.cat}">
      <img src="${CAT_IMAGES[x.cat]}" alt="" onerror="this.parentNode.classList.add('img-fail');this.remove();">
      <span class="hp-cap">${x.cat}</span>
    </button>`).join('');
}

function renderBuilds(){
  document.getElementById('buildList').innerHTML = BUILDS.map((b,i) => `
    <div class="build reveal ${b.featured?'featured':''}" style="animation-delay:${i*0.06}s;" tabindex="0" role="button" onclick="openProduct('${b.id}', event)" onkeydown="if(event.key==='Enter'&&event.target===this)openProduct('${b.id}')">
      <button class="heart-btn ${isFavorite(b.id) ? 'active' : ''}" onclick="toggleFavorite('${b.id}', this)" title="${isFavorite(b.id) ? t('fav_remove') : t('fav_add')}"><svg class="ic"><use href="#i-heart"/></svg></button>
      <div class="build-visual">${visualHTML(b.id, "Tayyor to'plam", b.img || 'photo-phone')}</div>
      <div class="build-tag">${b.tag}</div>
      <h3>${b.name}</h3>
      <ul class="spec-list">${b.specs.map(([k,v])=>`<li>${k} <b>${v}</b></li>`).join('')}</ul>
      <div class="build-price">${fmt(b.price)}</div>
      <button class="btn ${b.featured?'btn-primary':'btn-ghost'}" onclick="addById('${b.id}')">${t('add_build')}</button>
    </div>`).join('');
  playReveal(document.getElementById('buildList'));
}

/* ---------------- profile / login ---------------- */
let profileAuthMode = 'login';
function setProfileAuthMode(m){
  profileAuthMode = m;
  renderProfile();
}
function renderProfile(){
  const el = document.getElementById('profilContent');
  renderSidebarUser();
  if(!auth){
    const isLogin = profileAuthMode === 'login';
    el.innerHTML = `
      <div class="auth-shell">
        <div class="section-head"><h1>${isLogin ? t('login_h1') : t('w_create')}</h1><p>${isLogin ? t('login_p') : t('w_sub_reg')}</p></div>
        ${isLogin ? '' : `<div class="co-2col">
          <div class="field"><label for="authName">${t('f_name')}</label><input id="authName" placeholder="${t('f_name_ph')}"></div>
          <div class="field"><label for="authSurname">${t('f_surname')}</label><input id="authSurname" placeholder="${t('f_surname_ph')}"></div>
        </div>`}
        <div class="field"><label for="authPhone">${t('f_phone')}</label><input id="authPhone" placeholder="+998 90 000 00 00"></div>
        <button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="${isLogin ? 'loginProfile()' : 'registerProfile()'}">${isLogin ? t('login_btn') : t('w_reg_btn')}</button>
        <p class="welcome-switch" style="margin-top:16px;">${isLogin ? t('w_no_acc') : t('w_has_acc')}<button onclick="setProfileAuthMode('${isLogin ? 'register' : 'login'}')">${isLogin ? t('w_reg_link') : t('w_login_link')}</button></p>
        <p style="font-size:12.5px;color:var(--fg-muted);margin-top:12px;">${t('proto_note')}</p>
      </div>`;
    return;
  }
  const myOrders = orders.filter(o => o.buyer === auth.phone);
  const spent = myOrders.reduce((s,o)=>s+o.total,0);
  const isVip = myOrders.length >= 3 || spent >= 5000000;
  el.innerHTML = `
    <div class="section-head"><h1>${t('prof_h1')}</h1></div>
    <div class="profile-card">
      <div class="profile-cover">${CAT_IMAGES['Smartfonlar'] ? `<img src="${CAT_IMAGES['Smartfonlar']}" alt="" onerror="this.remove()">` : ''}</div>
      <div class="profile-head">
        <div class="pa-wrap">
          <button class="profile-avatar ${auth.avatar ? 'has-img' : ''}" onclick="pickAvatar()" title="${auth.avatar ? t('av_change') : t('av_upload')}" aria-label="${t('av_upload')}">${avatarInner(auth, true)}</button>
          <button class="pa-cam" onclick="pickAvatar()" aria-label="${t('av_upload')}"><svg class="ic"><use href="#i-camera"/></svg></button>
        </div>
        <div class="profile-who">
          <b>${auth.name} ${auth.surname || ''} <span class="tier-badge ${isVip ? 'tier-vip' : 'tier-basic'}">${isVip ? t('tier_vip') : t('tier_basic')}</span></b>
          <span>${auth.phone}</span>
        </div>
      </div>
      <div class="av-picker">
        <div class="av-picker-title">${t('av_choose')}</div>
        <div class="av-presets">
          ${AV_PRESETS.map((src, i) => `<button class="av-preset ${auth.avatar === src ? 'active' : ''}" onclick="pickPreset(${i})" aria-label="${i + 1}"><img src="${src}" alt=""></button>`).join('')}
          <button class="av-preset av-upload" onclick="pickAvatar()" title="${t('av_upload')}" aria-label="${t('av_upload')}"><svg class="ic"><use href="#i-camera"/></svg></button>
        </div>
        ${auth.avatar ? `<button class="pa-link danger" onclick="removeAvatar()">${t('av_remove')}</button>` : ''}
      </div>
      <div class="profile-row"><span>${t('f_name')}</span><span>${auth.name}</span></div>
      <div class="profile-row"><span>${t('f_surname')}</span><span>${auth.surname || ''}</span></div>
      <div class="profile-row"><span>${t('f_phone')}</span><span>${auth.phone}</span></div>
      <button class="btn btn-ghost" style="margin-top:16px;" onclick="logout()">${t('prof_logout')}</button>
    </div>
    <h2 style="font-size:20px;margin-bottom:16px;">${t('my_orders')}</h2>
    ${myOrders.length === 0 ? `<p style="color:var(--fg-muted);">${t('no_orders')}</p>` :
      myOrders.map(o => `
        <div class="order-card">
          <div class="order-head"><b>${o.id}</b><span class="order-status status-${o.status||'processing'}">${t('st_' + (o.status||'processing'))}</span></div>
          <div class="order-items">${o.items.map(i=>`${i.name} × ${i.qty}`).join(', ')}</div>
          <div style="margin-top:8px;font-family:'Space Grotesk',sans-serif;">${fmt(o.total)}</div>
          <div style="color:var(--fg-muted);font-size:12.5px;margin-top:4px;">${o.date}</div>
        </div>`).join('')}
  `;
}
/* ---------------- shared auth helpers (login = phone only, register = full form) ---------------- */
function findUserByPhone(phone){
  return users.find(u => u.phone === phone);
}
function saveUser(user){
  const i = users.findIndex(u => u.phone === user.phone);
  if(i >= 0) users[i] = user; else users.unshift(user);
  saveJSON('phonex_users', users);
}
function doLogin(phone){
  const found = findUserByPhone(phone);
  if(!found) return false;
  auth = found;
  saveJSON('phonex_auth', auth);
  return true;
}
function doRegister(name, surname, phone){
  const user = {name, surname, phone};
  const prev = findUserByPhone(phone);
  if(prev && prev.avatar) user.avatar = prev.avatar;
  saveUser(user);
  auth = user;
  saveJSON('phonex_auth', auth);
}
function authSubmit(prefix, mode){
  const phone = document.getElementById(prefix + 'Phone').value.trim();
  if(mode === 'login'){
    if(!phone){ toast(t('err_phone'), 'error'); return false; }
    if(!doLogin(phone)){ toast(t('err_not_found'), 'error'); return false; }
  }else{
    const name = document.getElementById(prefix + 'Name').value.trim();
    const surname = document.getElementById(prefix + 'Surname').value.trim();
    if(!name || !surname || !phone){ toast(t('err_fill'), 'error'); return false; }
    doRegister(name, surname, phone);
  }
  renderSidebarUser();
  return true;
}
function loginProfile(){
  if(!authSubmit('auth', 'login')) return;
  toast(t('w_hi', {name: auth.name}));
  renderProfile();
}
function registerProfile(){
  if(!authSubmit('auth', 'register')) return;
  toast(t('w_hi', {name: auth.name}));
  renderProfile();
}
function logout(){
  auth = null;
  saveJSON('phonex_auth', null);

  
  balance = 0;
  txs = [];
  lastCard = '';
  saveBalance();
  saveJSON('phonex_lastcard', '');

  coPaid = null;
  payMethod = 'card';
  ['balNum','balExp','balCvv','balSum','cardNum','cardHolder','cardExp','cardCvv','smsCode'].forEach(id => {
    const e = document.getElementById(id);
    if(e) e.value = '';
  });
  const balCardEl = document.getElementById('balCard');
  if(balCardEl) balCardEl.removeAttribute('data-brand');
  const payCardEl = document.getElementById('payCard');
  if(payCardEl) payCardEl.removeAttribute('data-brand');

  renderSidebarUser();
  updateBalanceBadge();
  toast(t('logout_done'));

  /* keyingi safar sahifaga kirganda avval login (raqam bilan) ko'rsatilsin */
  welcomeMode = 'login';
  profileAuthMode = 'login';

  /* birinchi — registratsiya (welcome) joyiga darhol qaytarish */
  go('welcome');
}

/* ---------------- welcome / registration ---------------- */
let welcomeMode = 'login';
function dialSVG(locked){
  let ticks = '';
  const n = 28;
  for(let i=0;i<n;i++){
    const a = (360/n)*i;
    ticks += `<line class="tick" x1="100" y1="10" x2="100" y2="${i%7===0?20:16}" transform="rotate(${a} 100 100)"/>`;
  }
  const lock = locked
    ? `<path class="lock" d="M88 98 v-10 a12 12 0 0 1 24 0 v10" stroke-width="4" stroke-linecap="round"/>
       <rect class="lock" x="80" y="98" width="40" height="32" rx="5" stroke-width="4"/>
       <circle class="lock-dot" cx="100" cy="112" r="3.4"/>`
    : `<path class="lock" d="M88 98 v-13 a12 12 0 0 1 22 -7" stroke-width="4" stroke-linecap="round"/>
       <rect class="lock" x="80" y="98" width="40" height="32" rx="5" stroke-width="4"/>
       <circle class="lock-dot" cx="100" cy="112" r="3.4"/>`;
  return `<svg class="wv2-dial-svg" viewBox="0 0 200 200" aria-hidden="true">
    <g class="ring-spin"><circle class="ring" cx="100" cy="100" r="86"/>${ticks}</g>
    <circle class="hub" cx="100" cy="100" r="52"/>
    ${lock}
  </svg>`;
}
function setWelcomeMode(m){
  welcomeMode = m;
  renderWelcome();
}
function renderWelcome(){
  const el = document.getElementById('welcomeAuthArea');
  if(!auth){
    const isLogin = welcomeMode === 'login';
    el.innerHTML = `
      <div class="wv2-dial-col">${dialSVG(true)}</div>
      <div class="wv2-form-col">
        <div class="wv2-brand"><span class="g">PHONE</span>X</div>
        <p class="wv2-sub">${isLogin ? t('w_sub_login') : t('w_sub_reg')}</p>
        <div class="wv2-tabs">
          <button class="wv2-tab ${isLogin ? 'active' : ''}" onclick="setWelcomeMode('login')">${t('w_login_link')}</button>
          <button class="wv2-tab ${!isLogin ? 'active' : ''}" onclick="setWelcomeMode('register')">${t('w_reg_link')}</button>
        </div>
        ${isLogin ? '' : `<div class="wv2-2col">
          <div class="wv2-field"><label for="welcomeName">${t('f_name')}</label><input id="welcomeName" placeholder="${t('f_name_ph')}"></div>
          <div class="wv2-field"><label for="welcomeSurname">${t('f_surname')}</label><input id="welcomeSurname" placeholder="${t('f_surname_ph')}"></div>
        </div>`}
        <div class="wv2-field"><label for="welcomePhone">${t('f_phone')}</label><input id="welcomePhone" placeholder="+998 90 000 00 00"></div>
        <label class="wv2-remember"><input type="checkbox" checked> ${t('w_remember')}</label>
        <button class="wv2-submit" onclick="${isLogin ? 'loginFromWelcome()' : 'registerFromWelcome()'}">${isLogin ? t('w_login_btn') : t('w_reg_btn')}</button>
        <button class="wv2-skip" onclick="go('home')">${t('w_skip')}</button>
        <p class="wv2-note">${t('w_note')}</p>
        <div class="wv2-prefs">
          <button onclick="toggleTheme()"><svg class="ic"><use href="#i-moon"/></svg><span>${t('theme_short')}</span></button>
          <button onclick="cycleLang()"><svg class="ic"><use href="#i-globe"/></svg><span>${I18N[prefs.lang].lang_name}</span></button>
        </div>
      </div>
    `;
  }else{
    const myOrders = orders.filter(o => o.buyer === auth.phone);
    el.innerHTML = `
      <div class="wv2-dial-col">${dialSVG(false)}</div>
      <div class="wv2-form-col">
        <div class="wv2-brand"><span class="g">PHONE</span>X</div>
        <p class="wv2-sub" style="margin-bottom:22px;">${t('w_hi', {name: auth.name})} ${myOrders.length > 0 ? t('w_orders_n', {n: myOrders.length}) : t('w_logged')}</p>
        <button class="wv2-submit" onclick="go('katalog')">${t('w_to_catalog')}</button>
        <button class="wv2-ghost" onclick="go('builds')">${t('w_to_builds')}</button>
      </div>
    `;
  }
}
function registerFromWelcome(){
  if(!authSubmit('welcome', 'register')) return;
  toast(t('w_hi', {name: auth.name}));
  go('home');
}
function loginFromWelcome(){
  const phone = document.getElementById('welcomePhone').value.trim();
  if(!phone){ toast(t('err_phone'), 'error'); return; }
  if(!doLogin(phone)){
    toast(t('err_not_found'), 'error');
    welcomeMode = 'register';
    renderWelcome();
    const ph = document.getElementById('welcomePhone');
    if(ph) ph.value = phone;
    return;
  }
  renderSidebarUser();
  toast(t('w_hi', {name: auth.name}));
  go('home');
}

/* ---------------- contact page ---------------- */
let inquiries = loadJSON('phonex_inquiries', []);
function submitContact(){
  const name = document.getElementById('cName').value.trim();
  const phone = document.getElementById('cPhone').value.trim();
  const msg = document.getElementById('cMsg').value.trim();
  if(!name || !phone || !msg){ toast(t('err_all'), 'error'); return; }
  inquiries.unshift({name, phone, msg, date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')});
  saveJSON('phonex_inquiries', inquiries);
  document.getElementById('cName').value = '';
  document.getElementById('cPhone').value = '';
  document.getElementById('cMsg').value = '';
  toast(t('sent'));
}

/* ---------------- AI assistant (local, no backend needed) ---------------- */
const CAT_KEYWORDS = {
  'Smartfonlar': ['smartfon','telefon','iphone','samsung','xiaomi','galaxy','poco','redmi'],
  'Planshetlar': ['planshet','tablet','ipad'],
  'Simsiz quloqchin': ['quloqchin','airpods','buds','naushnik','garnitura'],
  'Aksessuarlar': ['gilof','g\'ilof','oyna','himoya oyna','aksessuar','chexol'],
  'Quvvat banki': ['quvvat bank','powerbank','power bank'],
  'Zaryadlovchi': ['zaryadlovchi','zaryad','charger','kabel'],
  'Smart soat': ['soat','watch','smart soat']
};
function detectCategory(t){
  for(const [cat, kws] of Object.entries(CAT_KEYWORDS)){
    if(kws.some(kw => t.includes(kw))) return cat;
  }
  return null;
}
function parseBudget(t){
  let m = t.match(/(\d+[.,]?\d*)\s*(mln|million|milion)/i);
  if(m) return Math.round(parseFloat(m[1].replace(',','.')) * 1000000);
  m = t.match(/(\d+[.,]?\d*)\s*(ming|k)\b/i);
  if(m) return Math.round(parseFloat(m[1].replace(',','.')) * 1000);
  m = t.match(/(\d{6,})/);
  if(m) return parseInt(m[1],10);
  return null;
}
function esc(s){ return String(s).replace(/'/g,"\\'").replace(/"/g,'&quot;'); }
function chipHTML(chips){
  if(!chips || !chips.length) return '';
  return `<div class="ai-chips">${chips.map(c=>`<button class="ai-chip" onclick="${c.action}">${c.label}</button>`).join('')}</div>`;
}
function fmtShort(n){ return (n/1000000).toFixed(n%1000000===0?0:1) + " mln so'm"; }

/* ---------------- AI yordamchi: telefonlar bo'yicha bilim bazasi ---------------- */
function aiNorm(s){ return String(s).toLowerCase().replace(/[ʻʼ’‘`´]/g, "'").replace(/\s+/g, ' ').trim(); }
function aiShort(n, max){ max = max || 24; return n.length > max ? n.slice(0, max) + '…' : n; }
function addById(id){ const it = catalogItemInfo(id); if(it) addToCart(it.id, it.name, it.cat, it.price); }

const PRODUCT_ALIASES = [
  ['p2', ['iphone 15 pro', '15 pro']], ['p1', ['iphone 15']], ['p3', ['iphone 14']],
  ['p5', ['s24 ultra']], ['p4', ['galaxy s24', 's24']], ['p6', ['a55']],
  ['p7', ['note 13', 'redmi note']], ['p8', ['xiaomi 14']], ['p9', ['poco', 'x6 pro']],
  ['p11', ['ipad air']], ['p10', ['ipad 10', 'ipad 10.9']], ['p12', ['tab a9', 'galaxy tab']],
  ['p14', ['airpods pro']], ['p13', ['airpods 4']], ['p15', ['buds fe']], ['p16', ['redmi buds', 'buds 5']],
  ['p24', ['apple watch', 'watch se']], ['p20', ['anker']], ['p21', ['xiaomi 10000', '10000 mah', '10000mah']],
  ['p23', ['magsafe']], ['p22', ['20w']], ['p17', ['silikon']], ['p18', ['himoya oyna', ' 9d']], ['p19', ['charmli']],
  ['p26', ['iphone 16 pro']], ['p25', ['iphone 16']], ['p27', ['iphone 15 plus']], ['p28', ['iphone 13']],
  ['p30', ['s25 ultra']], ['p29', ['galaxy s25', 's25']], ['p31', ['a35']], ['p32', ['a15']],
  ['p33', ['14t pro', 'xiaomi 14t', '14t']], ['p34', ['note 14', 'redmi note 14']], ['p35', ['redmi 13c', '13c']],
  ['p36', ['poco f6']], ['p37', ['m6 pro', 'poco m6']], ['p38', ['pixel 9', 'pixel']], ['p39', ['oneplus 12', 'oneplus', 'one plus']]
];
function aiFindProducts(q){
  const entries = [];
  PRODUCT_ALIASES.forEach(([id, list]) => list.forEach(a => entries.push([a, id])));
  entries.sort((x, y) => y[0].length - x[0].length);
  const found = [];
  let rest = ' ' + q + ' ';
  entries.forEach(([a, id]) => {
    if(rest.includes(a)){ if(!found.includes(id)) found.push(id); rest = rest.split(a).join(' '); }
  });
  if(/\bipad\b/.test(q) && !found.includes('p10') && !found.includes('p11')) found.push('p10', 'p11');
  if(/airpods/.test(q) && !found.includes('p13') && !found.includes('p14')) found.push('p13', 'p14');
  if(/\bbuds\b/.test(q) && !found.includes('p15') && !found.includes('p16')) found.push('p15', 'p16');
  return found;
}
function aiBrands(q){
  const b = [];
  if(/iphone|apple|ayfon/.test(q)) b.push('apple');
  if(/samsung|galaxy|samsyung/.test(q)) b.push('samsung');
  if(/xiaomi|redmi|poco/.test(q)) b.push('xiaomi');
  if(/google|pixel/.test(q)) b.push('google');
  if(/oneplus|one plus/.test(q)) b.push('oneplus');
  return b;
}
const BRAND_PHONES = {apple:['p1','p2','p3','p25','p26','p27','p28'], samsung:['p4','p5','p6','p29','p30','p31','p32'], xiaomi:['p7','p8','p9','p33','p34','p35','p36','p37'], google:['p38'], oneplus:['p39']};
const BRAND_INFO = {
  apple:{name:"iPhone (Apple)", note:"iOS tizimi, uzoq yillar yangilanishlar, kamera va video sifati barqaror; narxi yuqoriroq."},
  samsung:{name:"Samsung Galaxy", note:"yorqin AMOLED ekranlar, Android'da ko'p imkoniyat, Ultra modelda S Pen."},
  xiaomi:{name:"Xiaomi / Redmi / Poco", note:"narxiga nisbatan eng kuchli xususiyatlar, juda tezkor zaryad."},
  google:{name:"Google Pixel", note:"toza Android, kuchli kamera dasturi va uzoq muddatli yangilanishlar."},
  oneplus:{name:"OnePlus", note:"flagman tezligi, Hasselblad kamera va juda tezkor zaryad."}
};

function specRows(id, re){
  const info = PRODUCT_INFO[id];
  return info ? info.specs.filter(([k]) => re.test(k)) : [];
}
function specOf(id, re){ const r = specRows(id, re)[0]; return r ? r[1] : ''; }
function aiBrief(id){
  const info = PRODUCT_INFO[id];
  if(!info) return '';
  const keys = [/^Ekran/i, /Protsessor|Chip/i, /Doimiy xotira/i, /Asosiy kamera/i, /Batareya|Ish vaqti/i];
  return keys.map(re => { const r = info.specs.find(([k]) => re.test(k)); return r ? `• ${r[0]}: ${r[1]}` : null; }).filter(Boolean).join('\n');
}
function aiProductCard(id){
  const it = catalogItemInfo(id), info = PRODUCT_INFO[id];
  return `${it.name} — ${fmt(it.price)}.\n${info ? info.desc : ''}\n${aiBrief(id)}`.trim();
}
function aiAddChip(id, label){
  const it = catalogItemInfo(id);
  return {label: label || ('+ ' + aiShort(it.name, 22)), action: `aiAdd('${id}')`};
}
function aiInfoChip(id){ return {label: 'Batafsil', action: `openProduct('${id}');toggleAI(false);`}; }
function aiAsk(label, text){ return {label, action: `sendAIText('${esc(text || label)}')`}; }

const AI_ATTRS = [
  {re: /(kamera|megapiksel|\bmp\b|selfi)/, label: /kamera/i, name: 'kamerasi'},
  {re: /(batareya|akkumulyator|\bmah\b|zaryad|quvvat)/, label: /Batareya|Ish vaqti|Zaryad/i, name: 'batareyasi'},
  {re: /(ekran|display|\bhz\b|dyuym|oled)/, label: /Ekran/i, name: 'ekrani'},
  {re: /(protsessor|chip\b|processor|tezlik|snapdragon|bionic)/, label: /Protsessor|Chip/i, name: 'protsessori'},
  {re: /(xotira|\bram\b|\bgb\b|hotira)/, label: /xotira/i, name: 'xotirasi'},
  {re: /(tizim|android|\bios\b)/, label: /Tizim/i, name: 'tizimi'},
  {re: /(\bport\b|usb|lightning|type-c)/, label: /Port|Zaryad porti/i, name: 'porti'}
];

const AI_FAQ = [
  {re: /(yetkaz|dostavka|kuryer|olib ket|qachon keladi|necha kunda)/,
   text: "Toshkent bo'ylab kuryer 24 soat ichida, bepul yetkazib beradi. Viloyatlarga 2–3 kun ketadi. Xohlasangiz, Yashnobod tumanidagi do'kondan o'zingiz ham olib ketishingiz mumkin."},
  {re: /(kafolat|garantiya|servis)/,
   text: "Mahsulotlar rasmiy distribyutorlar orqali, kafolat kartasi bilan sotiladi. Saytimizda 3 yilgacha kafolat va o'z servis markazimiz borligi ko'rsatilgan; aniq muddat mahsulotga qarab farq qilishi mumkin — buyurtmadan oldin menejerimizdan so'rang: +998 97 983 50 70."},
  {re: /(to'lov|tolov|to'lash|tolash|qanday to'la|uzcard|humo|naqd pul)/,
   text: "Buyurtma bosqichida Uzcard, Humo, Visa yoki Mastercard kartasi orqali, shuningdek profil balansidan to'lash mumkin. Balansni \"Balans\" sahifasida to'ldirasiz."},
  {re: /(kredit|muddatli|rassrochka|bo'lib to'la)/,
   text: "Muddatli to'lov haqida saytda ma'lumot yo'q. Iltimos, menejerimiz bilan bog'laning: +998 97 983 50 70."},
  {re: /(original|qalbaki|asl mi|asilmi|haqiqiymi)/,
   text: "Barcha mahsulotlar rasmiy distribyutorlar orqali olinadi va kafolat kartasi bilan beriladi."},
  {re: /(qaytar|almashtir|vozvrat)/,
   text: "Qaytarish va almashtirish shartlari buyurtmaga qarab farq qilishi mumkin. Aniq ma'lumotni menejerimiz beradi: +998 97 983 50 70."},
  {re: /(omborda|mavjudmi|stokda|qolganmi|ranglari|rangi|ranglar)/,
   text: "Ranglar va omborda qoldiq tez-tez o'zgarib turadi, shuning uchun aniq ma'lumotni buyurtmadan oldin menejerimizdan so'rang: +998 97 983 50 70."}
];

const AI_CUE = /(nima|anglat|degani|nimaga kerak|qanday|farqi|kerakmi|yetarlimi|qancha|necha|bormi|tushuntir|nimasi)/;
function aiConcepts(){
  const hzList = PRODUCTS.filter(p => p.cat === 'Smartfonlar' && /1[2-4]0 Hz/.test(specOf(p.id, /^Ekran/i))).map(p => p.name.replace(/ \d+GB$/, ''));
  const hz120 = hzList.slice(0, 9).join(', ') + (hzList.length > 9 ? ' va boshqalar' : '');
  return [
    {re: /(\bamoled|\boled|\blcd|\bips\b)/,
     text: "AMOLED/OLED ekranda har bir piksel o'zi yonadi: ranglar yorqin, qora rang chuqur va quvvat tejaladi. LCD (IPS) arzonroq, lekin qora rang kamroq chuqur ko'rinadi. Katalogimizdagi smartfonlarning deyarli hammasida OLED yoki AMOLED ekran bor (eng arzon Redmi 13C kabi modellarda LCD)."},
    {re: /(\bhz\b|hertz|yangilanish chastota|silliq)/,
     text: `Hz — ekran sekundiga necha marta yangilanishi. 60 Hz oddiy, 120 Hz esa ancha silliq: skroll va o'yinlar yumshoq ko'rinadi. 120 Hz ekranli telefonlar: ${hz120}.`},
    {re: /(\bram\b|operativ)/,
     text: "RAM (operativ xotira) ochiq ilovalar qanchalik tez ishlashiga ta'sir qiladi. Kundalik ishlar uchun 6–8 GB yetarli, og'ir o'yinlar va ko'p vazifa uchun 8–12 GB qulay."},
    {re: /(necha gb|qancha xotira|doimiy xotira|xotira hajmi|xotira yetarli|128 gb|256 gb|512 gb)/,
     text: "Doimiy xotira rasm, video va ilovalar uchun. 128 GB ko'pchilik uchun yetarli; ko'p video/foto olsangiz yoki o'yinlar o'rnatsangiz 256 GB va undan ko'pini oling."},
    {re: /(\bmah\b|batareya sig'im|batareya qancha)/,
     text: "mAh — batareya sig'imi. 5000 mAh atrofidagi telefonlar odatda bir kun va undan ko'proq ishlaydi, lekin bu ekran va foydalanishga bog'liq. Eng sig'imlilari: Galaxy S24 Ultra, Galaxy A55, Poco X6 Pro va Redmi Note 13 Pro (5000+ mAh)."},
    {re: /(tezkor zaryad|zaryad tezligi|vatt|\bw\b zaryad|fast charg)/,
     text: "Vatt (W) qancha yuqori bo'lsa, zaryad shuncha tez. Lekin telefon ham, zaryadlovchi ham shu quvvatni qo'llab-quvvatlashi kerak. Katalogimizda: Xiaomi 14 — 90W, Redmi Note 13 Pro va Poco X6 Pro — 67W, Galaxy S24 Ultra — 45W.",
     chips: [aiAddChip('p22', '+ 20W zaryadlovchi')]},
    {re: /(magsafe)/,
     text: "MagSafe — iPhone orqasiga magnit bilan yopishadigan simsiz zaryad tizimi. Katalogimizda MagSafe zaryadlovchi bor.",
     chips: [aiAddChip('p23', '+ MagSafe zaryadlovchi')]},
    {re: /(usb-c|usb c|type-c|typec|lightning)/,
     text: "iPhone 15 va iPhone 15 Pro USB-C portli, iPhone 14 esa Lightning portli. Samsung va Xiaomi telefonlarida USB-C."},
    {re: /(\bnfc\b|\besim\b|e-sim|\b5g\b)/,
     text: "NFC, eSIM va 5G imkoniyatlari model va hududga qarab farq qilishi mumkin. Aniq modelda borligini menejerimizdan so'rang: +998 97 983 50 70."},
    {re: /(\bios\b|android)/,
     text: "iOS (iPhone) sodda va barqaror, yangilanishlar uzoq yillar keladi. Android (Samsung, Xiaomi) esa tanlov va sozlamalar ko'p, narxlar keng diapazonda. Qaysi biri qulayligi o'zingizning odatingizga bog'liq."}
  ];
}

const AI_USE = [
  {re: /(kamera|foto|surat|video|tasvir|selfi)/, intro: "Kamerasi eng kuchli telefonlar", ids: ['p30', 'p26', 'p5', 'p2', 'p33', 'p38', 'p39', 'p8'], spec: /Asosiy kamera/i},
  {re: /(o'yin|oyin|pubg|game|gaming|geym|tez ishlaydigan|kuchli)/, intro: "O'yin va og'ir ilovalar uchun eng kuchli telefonlar", ids: ['p26', 'p30', 'p36', 'p33', 'p39', 'p2', 'p5', 'p9'], spec: /Protsessor/i},
  {re: /(batareya|uzoq ishlaydigan|akkumulyator)/, intro: "Batareyasi eng sig'imli telefonlar", ids: ['p39', 'p34', 'p7', 'p30', 'p36', 'p9', 'p6'], spec: /Batareya/i},
  {re: /(talaba|maktab|o'quvchi|bola|farzand)/, intro: "Talaba va o'quvchilar uchun hamyonbop, ishonchli variantlar", ids: ['p35', 'p32', 'p37', 'p31', 'p7', 'p6'], spec: /Ekran/i}
];

function aiListReply(intro, ids, specRe, budget){
  let list = ids.filter(id => PRODUCT_INFO[id] || catalogItemInfo(id));
  if(budget) list = list.filter(id => catalogItemInfo(id).price <= budget);
  if(!list.length){
    const cheapest = PRODUCTS.filter(p => p.cat === 'Smartfonlar').sort((a, b) => a.price - b.price)[0];
    return {
      text: `${fmtShort(budget)} budjetga bu toifada mos telefon topilmadi. Eng arzon smartfonimiz — ${cheapest.name}, narxi ${fmt(cheapest.price)}.`,
      chips: [aiAddChip(cheapest.id), aiInfoChip(cheapest.id)]
    };
  }
  list = list.slice(0, 4);
  const lines = list.map(id => {
    const it = catalogItemInfo(id);
    const reason = specRe ? specOf(id, specRe) : '';
    return `• ${it.name} — ${fmt(it.price)}${reason ? ' (' + aiShort(reason, 52) + ')' : ''}`;
  });
  return {
    text: `${intro}${budget ? ' (' + fmtShort(budget) + 'gacha)' : ''}:\n${lines.join('\n')}`,
    chips: [...list.slice(0, 3).map(id => aiAddChip(id)), {label: "Katalogda ko'rish →", action: "setFilter('Smartfonlar');go('katalog');toggleAI(false);"}]
  };
}

function aiBrandSummary(brands){
  return brands.map(b => {
    const ids = BRAND_PHONES[b];
    const prices = ids.map(id => catalogItemInfo(id).price);
    const lo = Math.min(...prices), hi = Math.max(...prices);
    return `• ${BRAND_INFO[b].name} (${(lo / 1e6).toFixed(1)} – ${(hi / 1e6).toFixed(1)} mln so'm): ${BRAND_INFO[b].note}`;
  }).join('\n');
}

function generateReply(raw){
  const q = aiNorm(raw);
  const budget = parseBudget(q);
  const cat = detectCategory(q);
  const compareCue = /(farq|solishtir|taqqosla|qaysi biri|qaysi yaxshi|yaxshiroq|\bvs\b|\byoki\b)/.test(q);
  const wantsBuild = /(to'plam|tayyor)/.test(q);
  const wantsCheapest = /(eng arzon|arzonrog|arzoni|arzon)/.test(q);
  const wantsPricey = /(eng qimmat|qimmat|flagman|eng kuchli|eng yaxshi)/.test(q);
  const askStyle = /(tavsiya|maslahat|qaysi telefon|qaysi smartfon|nima olay|nimani olay|yaxshi telefon|tanlashga yordam)/.test(q);
  const howChoose = /(qanday tanlay|qanday tanlash|nimaga qarab|tanlash bo'yicha)/.test(q);
  const isGreeting = /^(salom|assalom|hi|hello|hey|xayrli)/.test(q);
  const isThanks = /(rahmat|raxmat|tashakkur)/.test(q);
  const wantsContact = /(telefon raqam|raqamingiz|nomeringiz|manzil|qayerda|qayerdasiz|bog'lan|boglan|ish vaqti|aloqa|lokatsiya|adres|soat nechada)/.test(q);

  if(isThanks) return {text: "Arzimaydi! Yana savol bo'lsa, bemalol yozavering 🙂", chips: []};

  if(wantsContact){
    return {
      text: "Biz bilan bog'lanish: ☎ +998 97 983 50 70 · Toshkent, Yashnobod tumani · Ish vaqti: har kuni 9:00–19:00. To'liq ma'lumot va xabar yuborish uchun \"Aloqa\" sahifasiga o'ting.",
      chips: [{label: "Aloqa sahifasi →", action: "go('aloqa');toggleAI(false);"}]
    };
  }

  // do'kon bo'yicha savollar (yetkazish, kafolat, to'lov ...)
  for(const f of AI_FAQ){
    if(f.re.test(q)) return {text: f.text, chips: f.chips || [{label: "Aloqa sahifasi →", action: "go('aloqa');toggleAI(false);"}]};
  }

  // aniq mahsulot(lar) haqida
  const found = aiFindProducts(q);
  if(found.length >= 2){
    const ids = found.slice(0, 3);
    const blocks = ids.map(id => `${catalogItemInfo(id).name} — ${fmt(catalogItemInfo(id).price)}\n${aiBrief(id)}`.trim());
    const sorted = ids.slice().sort((a, b) => catalogItemInfo(a).price - catalogItemInfo(b).price);
    const diff = catalogItemInfo(sorted[sorted.length - 1]).price - catalogItemInfo(sorted[0]).price;
    return {
      text: `Solishtirma:\n\n${blocks.join('\n\n')}\n\nEng arzoni — ${catalogItemInfo(sorted[0]).name} (eng qimmatidan ${fmt(diff)} arzon).`,
      chips: [...ids.map(id => aiAddChip(id)), aiInfoChip(ids[0])]
    };
  }
  if(found.length === 1){
    const id = found[0], it = catalogItemInfo(id), info = PRODUCT_INFO[id];
    const chips = [aiAddChip(id, "Savatga qo'shish"), aiInfoChip(id)];
    if(/(narx|necha pul|necha so'm|necha sum|qancha turadi|qancha)/.test(q) && !AI_ATTRS.some(a => a.re.test(q))){
      return {text: `${it.name} narxi — ${fmt(it.price)}.`, chips};
    }
    const attrs = AI_ATTRS.filter(a => a.re.test(q));
    if(attrs.length && info){
      const lines = [];
      attrs.forEach(a => specRows(id, a.label).forEach(([k, v]) => lines.push(`• ${k}: ${v}`)));
      if(lines.length) return {text: `${it.name} — ${attrs.map(a => a.name).join(' va ')}:\n${lines.join('\n')}`, chips};
    }
    return {text: aiProductCard(id), chips};
  }

  // brendlar
  const brands = aiBrands(q);
  if(brands.length >= 2){
    return {
      text: `Brendlar farqi (katalogimiz bo'yicha):\n${aiBrandSummary(brands)}\n\nByudjet va ehtiyojingizni ayting — mos modelni tanlab beraman.`,
      chips: brands.map(b => aiAsk(BRAND_INFO[b].name.split(' ')[0] + ' modellari', BRAND_INFO[b].name.split(' ')[0] + ' telefonlari'))
    };
  }
  if(brands.length === 1 && (!cat || cat === 'Smartfonlar')){
    const b = brands[0];
    const use = AI_USE.find(u => u.re.test(q));
    if(use){
      const own = use.ids.filter(id => BRAND_PHONES[b].includes(id));
      const ids = own.length ? own : BRAND_PHONES[b];
      return aiListReply(`${BRAND_INFO[b].name} ichida — ${use.intro.charAt(0).toLowerCase() + use.intro.slice(1)}`, ids, use.spec, budget);
    }
    let ids = BRAND_PHONES[b].slice().sort((x, y) => catalogItemInfo(x).price - catalogItemInfo(y).price);
    if(budget) ids = ids.filter(id => catalogItemInfo(id).price <= budget);
    if(ids.length){
      return {
        text: `${BRAND_INFO[b].name} smartfonlari:\n${ids.slice(0, 6).map(id => `• ${catalogItemInfo(id).name} — ${fmt(catalogItemInfo(id).price)}`).join('\n')}${ids.length > 6 ? '\n… va boshqalar (katalogda)' : ''}\n\n${BRAND_INFO[b].note}`,
        chips: [...ids.slice(0, 3).map(id => aiAddChip(id)), ...ids.slice(0, 1).map(id => aiInfoChip(id))]
      };
    }
  }

  // tushunchalar (OLED, RAM, mAh ...)
  if(AI_CUE.test(q)){
    for(const c of aiConcepts()){
      if(c.re.test(q)) return {text: c.text, chips: c.chips || []};
    }
  }

  // telefon tanlash bo'yicha umumiy maslahat
  if(howChoose){
    return {
      text: "Telefon tanlashda quyidagilarga qarang:\n1) Budjet — avval summani belgilab oling.\n2) Kamera — foto/video muhim bo'lsa Galaxy S24 Ultra, iPhone 15 Pro yoki Xiaomi 14.\n3) Xotira — 128 GB ko'pchilikka yetadi, ko'p video olsangiz 256 GB+.\n4) Batareya — 5000 mAh atrofi kun bo'yi yetadi.\n5) Tizim — oddiylik va uzoq yangilanish uchun iPhone, tanlov va narx uchun Android.\nBudjet va maqsadingizni ayting, aniq variant topib beraman.",
      chips: [aiAsk("Kamera uchun", "Kamerasi eng yaxshi telefon"), aiAsk("O'yin uchun", "O'yin uchun qaysi telefon yaxshi?"), aiAsk("Arzon variant", "Eng arzon telefon")]
    };
  }

  // maqsadga qarab tavsiya (kamera, o'yin, batareya, talaba)
  if(!cat || cat === 'Smartfonlar'){
    for(const u of AI_USE){
      if(u.re.test(q)) return aiListReply(u.intro, u.ids, u.spec, budget);
    }
  }

  // kategoriya (+ byudjet)
  if(cat){
    let list = PRODUCTS.filter(p => p.cat === cat);
    if(budget) list = list.filter(p => p.price <= budget);
    const plainPhones = cat === 'Smartfonlar' && !budget && !wantsCheapest && !wantsPricey;
    if(plainPhones || askStyle){
      if(cat === 'Smartfonlar'){
        return {
          text: "Menga budjetingizni va nima uchun kerakligini (kamera, o'yin, kundalik) ayting — mos variantni topib beraman. Hozircha mashhur tanlovlar:\n• Byudjet — Xiaomi Redmi Note 13 Pro (" + fmt(catalogItemInfo('p7').price) + ")\n• O'rta — Samsung Galaxy A55 (" + fmt(catalogItemInfo('p6').price) + ")\n• Premium — iPhone 15 Pro (" + fmt(catalogItemInfo('p2').price) + ")",
          chips: [aiAddChip('p7'), aiAddChip('p6'), aiAddChip('p2'), aiAsk("Kamera uchun", "Kamerasi eng yaxshi telefon"), aiAsk("O'yin uchun", "O'yin uchun qaysi telefon yaxshi?")]
        };
      }
    }
    if(wantsCheapest) list.sort((a, b) => a.price - b.price);
    else if(wantsPricey || budget) list.sort((a, b) => b.price - a.price);
    else list.sort((a, b) => a.price - b.price);
    if(!list.length){
      return {
        text: `${cat} bo'yicha${budget ? ' shu budjetga mos' : ''} mahsulot topilmadi. Katalogda boshqa variantlarni ko'rib chiqing.`,
        chips: [{label: `${cat} — katalogda ko'rish →`, action: `setFilter('${cat}');go('katalog');toggleAI(false);`}]
      };
    }
    const top = list.slice(0, 3);
    const intro = wantsCheapest ? `Eng arzon ${cat} variantlari:` : (wantsPricey ? `Eng kuchli ${cat} variantlari:` : (budget ? `${fmtShort(budget)}gacha ${cat} bo'yicha eng yaxshilari:` : `${cat} bo'yicha tavsiyalarim:`));
    return {
      text: `${intro}\n${top.map(p => `• ${p.name} — ${fmt(p.price)}`).join('\n')}`,
      chips: [...top.map(p => aiAddChip(p.id)), {label: "Hammasini ko'rish →", action: `setFilter('${cat}');go('katalog');toggleAI(false);`}]
    };
  }

  // faqat byudjet aytilgan
  if(budget && !wantsBuild){
    const phones = PRODUCTS.filter(p => p.cat === 'Smartfonlar' && p.price <= budget).sort((a, b) => b.price - a.price).slice(0, 3);
    if(phones.length){
      return {
        text: `${fmtShort(budget)}gacha eng yaxshi smartfonlar:\n${phones.map(p => `• ${p.name} — ${fmt(p.price)}`).join('\n')}`,
        chips: [...phones.map(p => aiAddChip(p.id)), {label: "To'plamlarni ko'rish →", action: "go('builds');toggleAI(false);"}]
      };
    }
    const cheapest = PRODUCTS.filter(p => p.cat === 'Smartfonlar').sort((a, b) => a.price - b.price)[0];
    return {
      text: `${fmtShort(budget)} budjetga smartfon topilmadi. Eng arzon smartfonimiz — ${cheapest.name}, narxi ${fmt(cheapest.price)}.`,
      chips: [aiAddChip(cheapest.id), aiInfoChip(cheapest.id)]
    };
  }

  // tayyor to'plamlar
  if(wantsBuild){
    let pool = BUILDS.slice();
    if(budget) pool = pool.filter(b => b.price <= budget);
    if(!pool.length) pool = BUILDS.slice().sort((a, b) => a.price - b.price).slice(0, 1);
    pool.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || a.price - b.price);
    const top = pool.slice(0, 3);
    return {
      text: `Tayyor to'plamlardan tavsiyalarim:\n${top.map(b => `• ${b.name} (${b.tag}) — ${fmt(b.price)}`).join('\n')}`,
      chips: [...top.map(b => aiAddChip(b.id, '+ ' + b.name)), {label: "Barchasini ko'rish →", action: "go('builds');toggleAI(false);"}]
    };
  }

  if(isGreeting){
    return {
      text: "Salom! Men PHONEX'ning AI yordamchisiman. Telefonlar haqida so'rashingiz mumkin: narx, kamera, batareya, solishtirish yoki budjetga mos variant.",
      chips: AI_QUICK.slice(0, 4).map(x => aiAsk(x))
    };
  }
  if(askStyle){
    return {
      text: "Menga budjetingizni va nima uchun kerakligini (kamera, o'yin, kundalik) ayting — mos telefonni topib beraman.",
      chips: AI_QUICK.slice(0, 4).map(x => aiAsk(x))
    };
  }

  return {
    text: "To'liq tushunmadim 🙂 Telefon nomini (masalan \"iPhone 15 kamerasi\"), budjetingizni (\"10 million so'm\") yoki maqsadingizni (\"o'yin uchun\") ayting. Yetkazib berish, kafolat va to'lov haqida ham so'rashingiz mumkin.",
    chips: AI_QUICK.slice(0, 4).map(x => aiAsk(x))
  };
}

const AI_QUICK = [
  "Kamerasi eng yaxshi telefon",
  "iPhone 15 va Galaxy S24 farqi",
  "10 million so'mgacha smartfon",
  "O'yin uchun qaysi telefon yaxshi?",
  "Yetkazib berish qanday?"
];
function aiSay(text, chips){
  const body = document.getElementById('aiBody');
  body.insertAdjacentHTML('beforeend', '<div class="ai-msg bot"></div>');
  body.lastElementChild.textContent = text;
  if(chips && chips.length) body.insertAdjacentHTML('beforeend', `<div class="ai-msg bot" style="padding:0;background:none;border:none;">${chipHTML(chips)}</div>`);
  body.scrollTop = body.scrollHeight;
}
function aiAdd(id){
  const it = catalogItemInfo(id);
  if(!it) return;
  addToCart(it.id, it.name, it.cat, it.price);
  aiSay(`"${it.name}" savatga qo'shildi. Savatda ${cartCount()} ta mahsulot bor.`, [
    {label: "Savatni ochish →", action: "go('savat');toggleAI(false);"},
    aiAsk("Yana tanlash", "Yana telefon tavsiya qiling")
  ]);
}
function sendAIText(text){
  const input = document.getElementById('aiInput');
  input.value = text;
  sendAI();
}

function toggleAI(open){
  const panel = document.getElementById('aiPanel');
  const isOpen = open === undefined ? !panel.classList.contains('open') : !!open;
  panel.classList.toggle('open', isOpen);
  panel.setAttribute('aria-hidden', String(!isOpen));
  const bd = document.getElementById('aiBackdrop'); if(bd) bd.classList.toggle('show', isOpen);
  const fab = document.getElementById('aiFab'); if(fab) fab.classList.toggle('away', isOpen);
  if(isOpen && window.matchMedia('(min-width:861px)').matches){
    setTimeout(() => { const i = document.getElementById('aiInput'); if(i) i.focus({preventScroll:true}); }, 340);
  }
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') toggleAI(false); });
document.getElementById('aiFab').addEventListener('click', () => toggleAI(!document.getElementById('aiPanel').classList.contains('open')));

function revealText(el, text, onDone){
  const words = text.split(' ');
  let i = 0;
  el.textContent = '';
  const timer = setInterval(() => {
    el.textContent += (i ? ' ' : '') + words[i];
    i++;
    const body = document.getElementById('aiBody');
    body.scrollTop = body.scrollHeight;
    if(i >= words.length){ clearInterval(timer); if(onDone) onDone(); }
  }, 22);
}

function sendAI(){
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if(!text) return;
  const body = document.getElementById('aiBody');
  body.insertAdjacentHTML('beforeend', `<div class="ai-msg user"></div>`);
  body.lastElementChild.textContent = text;
  input.value = '';
  body.scrollTop = body.scrollHeight;

  body.insertAdjacentHTML('beforeend', `<div class="ai-msg bot typing" id="aiPending"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>`);
  body.scrollTop = body.scrollHeight;
  const pending = document.getElementById('aiPending');

  const delay = 380 + Math.min(700, text.length * 12);
  setTimeout(() => {
    const {text: answer, chips} = generateReply(text);
    pending.classList.remove('typing');
    pending.removeAttribute('id');
    revealText(pending, answer, () => {
      if(chips && chips.length) pending.insertAdjacentHTML('afterend', `<div class="ai-msg bot" style="padding:0;background:none;border:none;">${chipHTML(chips)}</div>`);
      body.scrollTop = body.scrollHeight;
    });
  }, delay);
}



/* ---------------- balans (demo hamyon) ---------------- */
const QUICK_SUMS = [100000, 500000, 1000000, 5000000];
const MIN_TOPUP = 10000;
let lastCard = loadJSON('phonex_lastcard', '');

function saveBalance(){ saveJSON('phonex_balance', balance); saveJSON('phonex_txs', txs); }
function updateBalanceBadge(){
  const el = document.getElementById('sbBalance');
  if(el) el.textContent = Math.round(balance).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ');
  const pm = document.getElementById('pmBalanceInfo');
  if(pm) pm.textContent = fmt(balance);
}
function addTx(type, sum, label){
  txs.unshift({type, sum, label, date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')});
  txs = txs.slice(0, 30);
}
function onBalSumInput(el){
  const d = el.value.replace(/\D/g,'');
  el.value = d ? parseInt(d,10).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') : '';
  document.querySelectorAll('.bal-chip').forEach(c => c.classList.toggle('active', +c.dataset.sum === (parseInt(d,10) || 0)));
}
function pickSum(n){
  const el = document.getElementById('balSum');
  el.value = n.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ');
  document.querySelectorAll('.bal-chip').forEach(c => c.classList.toggle('active', +c.dataset.sum === n));
}
function renderBalance(){
  const v = document.getElementById('balValue');
  if(!v) return;
  v.textContent = fmt(balance);
  document.getElementById('balHolder').textContent = auth ? (((auth.name || '') + ' ' + (auth.surname || '')).trim()).toUpperCase() : t('guest').toUpperCase();
  document.getElementById('balLastCard').textContent = lastCard ? '•••• ' + lastCard : '•••• ••••';
  document.getElementById('balBtnText').textContent = t('bal_btn');
  document.getElementById('balQuick').innerHTML = QUICK_SUMS.map(n =>
    `<button class="bal-chip" data-sum="${n}" onclick="pickSum(${n})">+ ${n.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')}</button>`).join('');

  const box = document.getElementById('balTx');
  box.innerHTML = txs.length === 0 ? `<div class="bal-empty">${t('bal_empty')}</div>` :
    txs.map(x => `
      <div class="bal-tx ${x.type}">
        <div class="bal-tx-ic"><svg class="ic"><use href="#${x.type === 'in' ? 'i-plus' : 'i-cart'}"/></svg></div>
        <div class="bal-tx-txt"><b>${x.label}</b><span>${x.date}</span></div>
        <div class="bal-tx-sum">${x.type === 'in' ? '+' : '−'}${Math.round(x.sum).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')}</div>
      </div>`).join('');
  updateBalanceBadge();
}
function animateBalance(from, to){
  const el = document.getElementById('balValue');
  const start = performance.now(), dur = 700;
  (function frame(now){
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(Math.round(from + (to - from) * eased));
    if(p < 1) requestAnimationFrame(frame);
  })(performance.now());
}
function topUp(){
  const sum = parseInt(val('balSum').replace(/\D/g,''), 10) || 0;
  const num = val('balNum').replace(/\s/g,'');
  if(sum <= 0){ toast(t('bal_err_sum'), 'error'); return; }
  if(sum < MIN_TOPUP){ toast(t('bal_min', {sum: fmt(MIN_TOPUP)}), 'error'); return; }
  if(num.length !== 16 || (/^(4|5[1-5]|2[2-7])/.test(num) && !luhn(num))){ toast(t('co_err_card'), 'error'); return; }
  const exp = val('balExp'), m = +exp.slice(0,2), y = +exp.slice(3,5), now = new Date();
  if(!/^\d{2}\/\d{2}$/.test(exp) || m < 1 || m > 12 ||
     2000 + y < now.getFullYear() || (2000 + y === now.getFullYear() && m < now.getMonth() + 1)){ toast(t('co_err_exp'), 'error'); return; }
  if(val('balCvv').length < 3){ toast(t('co_err_cvv'), 'error'); return; }

  const btn = document.getElementById('balBtn');
  btn.classList.add('loading');
  setTimeout(() => {
    btn.classList.remove('loading');
    const before = balance;
    balance += sum;
    lastCard = num.slice(-4);
    saveJSON('phonex_lastcard', lastCard);
    addTx('in', sum, t('bal_in'));
    saveBalance();
    ['balSum','balNum','balExp','balCvv'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('balCard').setAttribute('data-brand', cardBrand(num));
    renderBalance();
    animateBalance(before, balance);
    toast(t('bal_ok', {sum: fmt(sum)}));
  }, 1300);
}
function bindBalance(){
  const num = document.getElementById('balNum'), exp = document.getElementById('balExp'), cvv = document.getElementById('balCvv');
  if(!num) return;
  num.addEventListener('input', () => {
    const d = num.value.replace(/\D/g,'').slice(0,16);
    num.value = d.replace(/(.{4})/g,'$1 ').trim();
    document.getElementById('balCard').setAttribute('data-brand', cardBrand(d));
  });
  exp.addEventListener('input', () => {
    let d = exp.value.replace(/\D/g,'').slice(0,4);
    if(d.length >= 3) d = d.slice(0,2) + '/' + d.slice(2);
    exp.value = d;
  });
  cvv.addEventListener('input', () => { cvv.value = cvv.value.replace(/\D/g,'').slice(0,4); });
}

/* ---------------- to'lov / checkout (demo, backendsiz) ---------------- */
let coStepNum = 1, coDeliv = 'courier', coPaid = null, payMethod = 'card';

function openCheckout(){
  if(cart.length === 0 && !coPaid){ toast(t('co_empty'), 'error'); go('katalog'); return; }
  if(coPaid){ coStep(3); renderCoSide(); return; }
  if(auth){
    const n = document.getElementById('coName'), p = document.getElementById('coPhone');
    if(n && !n.value) n.value = auth.surname ? (auth.name + ' ' + auth.surname) : auth.name;
    if(p && !p.value) p.value = auth.phone;
  }
  coStep(1);
  renderCoSide();
}
function coStep(n){
  if(n === 2 && !validateDelivery()) return;
  coStepNum = n;
  [1,2,3].forEach(i => document.getElementById('coPane'+i).classList.toggle('active', i === n));
  document.querySelectorAll('.co-step').forEach(el => {
    const i = +el.dataset.step;
    el.classList.toggle('active', i === n);
    el.classList.toggle('done', i < n);
  });
  document.querySelectorAll('.co-line').forEach((el, idx) => {
    el.classList.toggle('filled', idx + 1 < n);
  });
  const side = document.getElementById('coSide');
  if(side) side.style.display = n === 3 ? 'none' : '';
  if(n === 2) updatePayBtn();
  window.scrollTo({top:0, behavior:'smooth'});
}
function validateDelivery(){
  const name = val('coName'), phone = val('coPhone');
  if(!name || !phone){ toast(t('co_err_name'), 'error'); return false; }
  if(coDeliv === 'courier' && !val('coAddr')){ toast(t('co_err_addr'), 'error'); return false; }
  return true;
}
function val(id){ const e = document.getElementById(id); return e ? e.value.trim() : ''; }

function cartTotal(){ return cart.reduce((s,i) => s + i.price * i.qty, 0); }
function coAmount(){
  const el = document.getElementById('coAmount');
  const n = el ? parseInt(el.value.replace(/\D/g,''), 10) : cartTotal();
  return isNaN(n) ? 0 : n;
}
function renderCoSide(){
  const el = document.getElementById('coSide');
  if(!el) return;
  const total = cartTotal();
  el.innerHTML = `
    <h3>${t('co_summary')}</h3>
    ${cart.map(i => `<div class="co-line-item"><span>${i.name} × ${i.qty}</span><b class="mono">${fmt(i.price*i.qty)}</b></div>`).join('')}
    <div class="co-line-item co-sum"><span>${t('delivery')}</span><b>${t('free')}</b></div>
    <div class="co-line-item"><span>${t('total')}</span><b class="mono">${fmt(total)}</b></div>
    <div class="co-amount">
      <label>${t('co_amount')}</label>
      <input id="coAmount" inputmode="numeric" value="${total.toLocaleString(LOCALE[prefs.lang] || 'uz-UZ')}" oninput="onAmountInput(this)">
      <small>${t('co_amount_d')}</small>
    </div>`;
  updatePayBtn();
}
function onAmountInput(el){
  const digits = el.value.replace(/\D/g,'');
  el.value = digits ? parseInt(digits,10).toLocaleString(LOCALE[prefs.lang] || 'uz-UZ') : '';
  updatePayBtn();
}
function updatePayBtn(){
  const b = document.getElementById('payBtnText');
  if(!b) return;
  if(payMethod === 'balance') b.textContent = t('co_pay_bal', {sum: fmt(coAmount())});
  else b.textContent = smsOpen ? t('co_confirm') : t('co_pay', {sum: fmt(coAmount())});
  updateBalanceBadge();
}

/* --- karta maydonlari --- */
function cardBrand(num){
  if(/^8600|^5614/.test(num)) return 'uzcard';
  if(/^9860/.test(num)) return 'humo';
  if(/^4/.test(num)) return 'visa';
  if(/^5[1-5]|^2[2-7]/.test(num)) return 'mastercard';
  return '';
}
const BRAND_LABEL = {uzcard:'UZCARD', humo:'HUMO', visa:'VISA', mastercard:'MASTERCARD'};
function luhn(num){
  let sum = 0, alt = false;
  for(let i = num.length - 1; i >= 0; i--){
    let d = +num[i];
    if(alt){ d *= 2; if(d > 9) d -= 9; }
    sum += d; alt = !alt;
  }
  return sum % 10 === 0;
}
function bindCard(){
  const num = document.getElementById('cardNum'),
        exp = document.getElementById('cardExp'),
        cvv = document.getElementById('cardCvv'),
        holder = document.getElementById('cardHolder'),
        card = document.getElementById('payCard');
  if(!num) return;

  num.addEventListener('input', () => {
    const d = num.value.replace(/\D/g,'').slice(0,16);
    num.value = d.replace(/(.{4})/g,'$1 ').trim();
    const shown = (d + '••••••••••••••••').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
    document.getElementById('payNum').textContent = shown;
    const br = cardBrand(d);
    card.setAttribute('data-brand', br);
    document.getElementById('payBrand').textContent = BRAND_LABEL[br] || 'CARD';
  });
  exp.addEventListener('input', () => {
    let d = exp.value.replace(/\D/g,'').slice(0,4);
    if(d.length >= 3) d = d.slice(0,2) + '/' + d.slice(2);
    exp.value = d;
    document.getElementById('payExp').textContent = d || '••/••';
  });
  cvv.addEventListener('input', () => {
    cvv.value = cvv.value.replace(/\D/g,'').slice(0,4);
    document.getElementById('payCvv').textContent = cvv.value.replace(/./g,'•') || '•••';
  });
  cvv.addEventListener('focus', () => card.classList.add('flipped'));
  cvv.addEventListener('blur', () => card.classList.remove('flipped'));
  holder.addEventListener('input', () => {
    holder.value = holder.value.toUpperCase();
    document.getElementById('payHolder').textContent = holder.value || 'ISM FAMILIYA';
  });
  document.querySelectorAll('.co-opt[data-deliv]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.co-opt[data-deliv]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    coDeliv = b.dataset.deliv;
    document.getElementById('coAddrField').style.display = coDeliv === 'courier' ? '' : 'none';
  }));
  document.querySelectorAll('.co-opt[data-pm]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.co-opt[data-pm]').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    payMethod = b.dataset.pm;
    smsOpen = false;
    document.getElementById('coSms').classList.remove('show');
    document.getElementById('cardZone').classList.toggle('hidden', payMethod === 'balance');
    updatePayBtn();
  }));
}

let smsOpen = false;
function payNow(){
  const btn = document.getElementById('payBtn');
  const num = val('cardNum').replace(/\s/g,'');

  if(payMethod === 'balance'){
    const amount = coAmount();
    if(amount <= 0){ toast(t('co_err_sum'), 'error'); return; }
    if(balance < amount){ toast(t('pm_low', {sum: fmt(amount - balance)}), 'error'); return; }
    btn.classList.add('loading');
    setTimeout(() => {
      btn.classList.remove('loading');
      balance -= amount;
      addTx('out', amount, t('bal_out'));
      saveBalance();
      updateBalanceBadge();
      finishOrder('');
    }, 1200);
    return;
  }

  if(!smsOpen){
    if(num.length !== 16 || (/^(4|5[1-5]|2[2-7])/.test(num) && !luhn(num))){ toast(t('co_err_card'), 'error'); return; }
    if(val('cardHolder').length < 3){ toast(t('co_err_holder'), 'error'); return; }
    const exp = val('cardExp');
    const m = +exp.slice(0,2), y = +exp.slice(3,5);
    if(!/^\d{2}\/\d{2}$/.test(exp) || m < 1 || m > 12){ toast(t('co_err_exp'), 'error'); return; }
    const now = new Date();
    if(2000 + y < now.getFullYear() || (2000 + y === now.getFullYear() && m < now.getMonth() + 1)){ toast(t('co_err_exp'), 'error'); return; }
    if(val('cardCvv').length < 3){ toast(t('co_err_cvv'), 'error'); return; }
    if(coAmount() <= 0){ toast(t('co_err_sum'), 'error'); return; }

    btn.classList.add('loading');
    setTimeout(() => {
      btn.classList.remove('loading');
      smsOpen = true;
      document.getElementById('coSms').classList.add('show');
      document.getElementById('smsCode').focus();
      updatePayBtn();
      toast(t('co_sms_sent'));
    }, 1400);
    return;
  }

  const code = val('smsCode').replace(/\D/g,'');
  if(code.length !== 6){ toast(t('co_err_code'), 'error'); return; }
  btn.classList.add('loading');
  setTimeout(() => { btn.classList.remove('loading'); finishOrder(num); }, 1500);
}

function finishOrder(num){
  const amount = coAmount();
  const order = {
    id: 'BX-' + Math.random().toString(36).slice(2,8).toUpperCase(),
    items: cart.map(i => ({name:i.name, qty:i.qty, price:i.price})),
    total: amount,
    date: new Date().toLocaleString(LOCALE[prefs.lang] || 'uz-UZ'),
    buyer: val('coPhone'),
    card: num ? '•••• ' + num.slice(-4) : t('pm_balance'),
    brand: num ? (BRAND_LABEL[cardBrand(num)] || 'CARD') : 'PHONEX WALLET',
    deliv: coDeliv,
    addr: val('coAddr'),
    status: 'processing'
  };
  orders.unshift(order);
  saveJSON('phonex_orders', orders);
  cart = []; saveJSON('phonex_cart', cart);
  updateCartBadge();
  coPaid = order;

  document.getElementById('coReceipt').innerHTML = `
    <div class="r"><span>${t('co_r_order')}</span><b>${order.id}</b></div>
    <div class="r"><span>${t('co_r_date')}</span><b>${order.date}</b></div>
    <div class="r"><span>${t('co_r_card')}</span><b>${payMethod === 'balance' ? t('pm_paid_bal') : order.brand + ' ' + order.card}</b></div>
    <div class="r"><span>${t('co_r_method')}</span><b>${coDeliv === 'courier' ? t('co_courier') : t('co_pickup')}</b></div>
    <div class="r big"><span>${t('co_r_paid')}</span><b class="mono">${fmt(amount)}</b></div>`;

  // maydonlarni tozalash
  ['cardNum','cardExp','cardCvv','cardHolder','smsCode'].forEach(id => { const e = document.getElementById(id); if(e) e.value = ''; });
  document.getElementById('payNum').textContent = '•••• •••• •••• ••••';
  document.getElementById('payExp').textContent = '••/••';
  document.getElementById('payHolder').textContent = 'ISM FAMILIYA';
  document.getElementById('coSms').classList.remove('show');
  smsOpen = false;
  coStep(3);
  renderCoSide();
  setTimeout(() => { coPaid = null; }, 100);
}

(function(){
  const body = document.getElementById('aiBody');
  if(!body) return;
  body.insertAdjacentHTML('beforeend', `<div class="ai-msg bot" style="padding:0;background:none;border:none;">${chipHTML(AI_QUICK.map(x => aiAsk(x)))}</div>`);
})();

/* ---------------- profil rasmi (yuklash / almashtirish / o'chirish) ---------------- */
function avatarInner(user, big){
  if(user && user.avatar) return `<img src="${user.avatar}" alt="">`;
  if(big) return `<svg class="av-default" viewBox="0 0 96 96" aria-hidden="true"><circle cx="48" cy="38" r="17"/><path d="M14 94c2-21 16-31 34-31s32 10 34 31z"/></svg>`;
  return ((user && user.name) || '?').trim().charAt(0).toUpperCase();
}
const AV_COLORS = [['#FF8A65','#E8543C'],['#2DD4BF','#0F9D8C'],['#8C87FF','#5B54E6'],['#F5D061','#E0A526'],['#F0776C','#C2413A'],['#4CC98A','#2E9E5B'],['#60A5FA','#2563EB'],['#F472B6','#DB2777']];
const AV_SHAPES = [
  b => `<circle cx='48' cy='38' r='17' fill='#fff'/><path d='M14 94c2-21 16-31 34-31s32 10 34 31z' fill='#fff'/>`,
  b => `<rect x='24' y='32' width='48' height='40' rx='11' fill='#fff'/><circle cx='38' cy='50' r='5.5' fill='${b}'/><circle cx='58' cy='50' r='5.5' fill='${b}'/><rect x='38' y='61' width='20' height='4' rx='2' fill='${b}'/><rect x='46' y='20' width='4' height='12' fill='#fff'/><circle cx='48' cy='18' r='5' fill='#fff'/>`,
  b => `<path d='M24 46 L26 20 L44 34Z M72 46 L70 20 L52 34Z' fill='#fff'/><circle cx='48' cy='54' r='25' fill='#fff'/><circle cx='39' cy='50' r='4' fill='${b}'/><circle cx='57' cy='50' r='4' fill='${b}'/><path d='M44 60 L48 64 L52 60Z' fill='${b}'/>`,
  b => `<rect x='31' y='15' width='34' height='66' rx='9' fill='#fff'/><rect x='35' y='22' width='26' height='46' rx='3' fill='${b}' opacity='.35'/><circle cx='48' cy='74' r='3' fill='${b}'/>`,
  b => `<circle cx='48' cy='48' r='29' fill='#fff'/><rect x='30' y='41' width='15' height='9' rx='4' fill='${b}'/><rect x='51' y='41' width='15' height='9' rx='4' fill='${b}'/><path d='M36 60 Q48 72 60 60' stroke='${b}' stroke-width='4' fill='none' stroke-linecap='round'/>`,
  b => `<circle cx='28' cy='28' r='10' fill='#fff'/><circle cx='68' cy='28' r='10' fill='#fff'/><circle cx='48' cy='52' r='26' fill='#fff'/><circle cx='39' cy='48' r='3.5' fill='${b}'/><circle cx='57' cy='48' r='3.5' fill='${b}'/><circle cx='48' cy='58' r='3.5' fill='${b}'/>`,
  b => `<path d='M54 12 L28 52 H45 L40 84 L69 40 H52Z' fill='#fff'/>`,
  b => `<path d='M48 12 L58 36 L84 38 L64 55 L71 82 L48 68 L25 82 L32 55 L12 38 L38 36Z' fill='#fff'/>`
];
const AV_PRESETS = AV_COLORS.map(([a, b], i) => {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${a}'/><stop offset='1' stop-color='${b}'/></linearGradient></defs><rect width='96' height='96' fill='url(#g)'/>${AV_SHAPES[i](b)}</svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
});
function pickPreset(i){
  if(!auth || !AV_PRESETS[i]) return;
  setAvatar(AV_PRESETS[i], 'av_saved');
}
function pickAvatar(){
  if(!auth){ toast(t('login_first'), 'error'); return; }
  const inp = document.getElementById('avatarInput');
  if(inp) inp.click();
}
function onAvatarFile(input){
  const file = input.files && input.files[0];
  input.value = '';
  if(!file || !auth) return;
  if(!/^image\//.test(file.type)){ toast(t('av_err_type'), 'error'); return; }
  if(file.size > 10 * 1024 * 1024){ toast(t('av_err_size'), 'error'); return; }
  const reader = new FileReader();
  reader.onerror = () => toast(t('av_err_read'), 'error');
  reader.onload = () => {
    const img = new Image();
    img.onerror = () => toast(t('av_err_read'), 'error');
    img.onload = () => {
      const S = 256;
      const c = document.createElement('canvas');
      c.width = c.height = S;
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, S, S);
      const side = Math.min(img.width, img.height);
      ctx.drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, S, S);
      setAvatar(c.toDataURL('image/jpeg', 0.88), 'av_saved');
    };
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}
function setAvatar(dataUrl, msgKey){
  if(!auth) return;
  if(dataUrl) auth.avatar = dataUrl; else delete auth.avatar;
  saveUser(auth);
  saveJSON('phonex_auth', auth);
  renderProfile();
  toast(t(msgKey));
}
function removeAvatar(){ setAvatar('', 'av_removed'); }

/* ---------------- init ---------------- */
applyTheme();
applyI18n();
bindSettings();
bindSidebar();
bindCard();
bindBalance();
syncSettingsUI();
renderFilters();
renderProducts();
renderHomeCats();
renderHeroPhotos();
renderBuilds();
updateCartBadge();
updateFavBadge();
updateBalanceBadge();
renderSidebarUser();
go(location.hash.replace('#','') || 'welcome');
