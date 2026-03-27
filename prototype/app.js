(function () {

  /* ── Icons ─────────────────────────────────────────── */
  var I = {
    play:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5.14L19 12 7 18.86V5.14z"/></svg>',
    pause:    '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="5" height="16" rx="1.5"/><rect x="14" y="4" width="5" height="16" rx="1.5"/></svg>',
    fish:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12C3 7.8 6.8 4 11 4c2.5 0 5 1.8 6 5l4-3v12l-4-3c-1 3.2-3.5 5-6 5C6.8 20 3 16.2 3 12z"/><circle cx="8.5" cy="10.5" r="1.2" fill="currentColor" stroke="none"/></svg>',
    fishFill: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 12C3 7.8 6.8 4 11 4c2.5 0 5 1.8 6 5l4-3v12l-4-3c-1 3.2-3.5 5-6 5C6.8 20 3 16.2 3 12z"/><circle cx="8.5" cy="10.5" r="1.2" fill="rgba(0,0,0,0.5)" stroke="none"/></svg>',
    ext:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 4H5a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5"/><path d="M15 2h7v7M22 2L12 12"/></svg>',
    del:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>',
    tabMain:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="16" r="3"/><path d="M6 12a8 8 0 0112 0M2 8a14 14 0 0120 0"/></svg>',
    tabList:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
    tabCatch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12C3 7.8 6.8 4 11 4c2.5 0 5 1.8 6 5l4-3v12l-4-3c-1 3.2-3.5 5-6 5C6.8 20 3 16.2 3 12z"/></svg>',
    tabNews:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></svg>',
    gear:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>',
  };

  /* ── Logo path ─────────────────────────────────────── */
  var LOGO = './Inbox/RF_White.png';

  /* ── Track data ────────────────────────────────────── */
  var TRACKS = [
    {
      id: 'tycho',
      title: 'Awake',
      artist: 'Tycho',
      cover: './assets/reference-tracks/tycho-awake.jpg',
      accent: '#e07850',
      accentDim: 'rgba(224,120,80,0.15)',
      accentRgb: '224,120,80',
      deviceBg: '#461a0c',
    },
    {
      id: 'bonobo',
      title: 'Kerala',
      artist: 'Bonobo',
      cover: './assets/reference-tracks/bonobo-kerala.jpg',
      accent: '#38c89a',
      accentDim: 'rgba(56,200,154,0.15)',
      accentRgb: '56,200,154',
      deviceBg: '#052e1e',
    },
    {
      id: 'khruangbin',
      title: 'Time (You and I)',
      artist: 'Khruangbin',
      cover: './assets/reference-tracks/khruangbin-time-you-and-i.jpg',
      accent: '#d4a030',
      accentDim: 'rgba(212,160,48,0.15)',
      accentRgb: '212,160,48',
      deviceBg: '#3d2a08',
    },
    {
      id: 'tourist',
      title: 'Elixir',
      artist: 'Tourist',
      cover: './assets/reference-tracks/tourist-elixir.jpg',
      accent: '#8468ec',
      accentDim: 'rgba(132,104,236,0.15)',
      accentRgb: '132,104,236',
      deviceBg: '#170c3c',
    },
    {
      id: 'djshadow',
      title: 'Midnight in a Perfect World',
      artist: 'DJ Shadow',
      cover: './assets/reference-tracks/dj-shadow-midnight.jpg',
      accent: '#5088d0',
      accentDim: 'rgba(80,136,208,0.15)',
      accentRgb: '80,136,208',
      deviceBg: '#081224',
    },
    {
      id: 'kolibri',
      title: 'Жанна',
      artist: 'Колибри',
      cover: './assets/reference-tracks/kolibri.jpg',
      accent: '#a08060',
      accentDim: 'rgba(160,128,96,0.15)',
      accentRgb: '160,128,96',
      deviceBg: '#1d140c',
    },
    {
      id: 'nom',
      title: 'Хрюки Спасут Мир',
      artist: 'НОМ',
      cover: './assets/reference-tracks/nom-album.jpg',
      accent: '#a0c040',
      accentDim: 'rgba(160,192,64,0.15)',
      accentRgb: '160,192,64',
      deviceBg: '#182008',
    },
    {
      id: 'televizor',
      title: 'Твой Папа',
      artist: 'Телевизор',
      cover: './assets/reference-tracks/televizor-album.jpg',
      accent: '#6090c8',
      accentDim: 'rgba(96,144,200,0.15)',
      accentRgb: '96,144,200',
      deviceBg: '#081020',
    },
    {
      id: 'fatherofpeace',
      title: 'Sun Rider',
      artist: 'Father of Peace',
      cover: './assets/reference-tracks/Father of peace.jpg',
      accent: '#d09040',
      accentDim: 'rgba(208,144,64,0.15)',
      accentRgb: '208,144,64',
      deviceBg: '#251404',
    },
    {
      id: 'hexcut',
      title: 'Signal Drift',
      artist: 'Hexcut',
      cover: './assets/reference-tracks/hexcut-album.jpg',
      accent: '#8060d0',
      accentDim: 'rgba(128,96,208,0.15)',
      accentRgb: '128,96,208',
      deviceBg: '#100824',
    },
  ];

  /* ── Concept data ──────────────────────────────────── */
  var CONCEPTS = [
    { id: 'a', letter: 'A', name: 'Фулл',      desc: 'Обложка — весь экран' },
    { id: 'b', letter: 'B', name: 'Вертикаль', desc: 'Кнопки в колонке справа' },
    { id: 'd', letter: 'D', name: 'Среда',     desc: 'Обложка размытым фоном' },
    { id: 'g', letter: 'G', name: 'Ретро',     desc: 'Кнопки слева, рамка частоты' },
    { id: 'g2',letter: 'G2',name: 'Ретро-2',  desc: 'Обложка справа, кнопки снизу-слева' },
    { id: 'h', letter: 'H', name: 'Квадрат',   desc: 'Обложка без отступов' },
    { id: 'i', letter: 'I', name: 'Круг',      desc: 'Круглая обложка, дисплей' },
  ];

  /* ── Screens ───────────────────────────────────────── */
  var SCREENS = [
    { id: 'main',     label: 'Эфир',    icon: 'tabMain'  },
  ];

  /* ── State ─────────────────────────────────────────── */
  var state = {
    concept:       'a',
    trackIndex:    0,
    screen:        'main',
    isPlaying:     false,
    favorites:     { tycho: true, tourist: true },
    deleteConfirm: null,
  };

  /* ── Apply accent CSS vars ─────────────────────────── */
  function applyColors(track) {
    var ps = document.getElementById('phone-screen').style;
    ps.setProperty('--accent',     track.accent);
    ps.setProperty('--accent-dim', track.accentDim);
    ps.setProperty('--accent-rgb', track.accentRgb);
  }

  /* ── Nav dots HTML helper ──────────────────────────── */
  function navDots(extraClass) {
    var cls = extraClass || '';
    return '<div class="nav-dots ' + cls + '">' +
      SCREENS.map(function(s) {
        return '<button class="ndot' + (state.screen === s.id ? ' is-active' : '') + '" data-screen="' + s.id + '"></button>';
      }).join('') +
    '</div>';
  }

  /* ── Render sidebar ────────────────────────────────── */
  function renderSidebar() {
    document.getElementById('concept-list').innerHTML = CONCEPTS.map(function(c) {
      return '<button class="concept-btn' + (state.concept === c.id ? ' is-active' : '') + '" data-concept="' + c.id + '">' +
        '<span class="concept-btn__badge">' + c.letter + '</span>' +
        '<span><span class="concept-btn__name">' + c.name + '</span>' +
        '<span class="concept-btn__desc">' + c.desc + '</span></span>' +
        '</button>';
    }).join('');

    document.getElementById('track-list').innerHTML = TRACKS.map(function(t, i) {
      return '<button class="track-btn' + (state.trackIndex === i ? ' is-active' : '') + '" data-track="' + i + '">' +
        '<img class="track-btn__cover" src="' + t.cover + '" alt="" />' +
        '<span><span class="track-btn__title">' + t.title + '</span>' +
        '<span class="track-btn__artist">' + t.artist + '</span></span>' +
        '</button>';
    }).join('');

    var sl = document.getElementById('screen-list');
    if (sl) sl.innerHTML = '';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT A — ФУЛЛ
     ════════════════════════════════════════════════════ */
  function renderConceptA(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-a screen-enter">' +
      '<img class="screen-a__cover-bg" src="' + t.cover + '" alt="" />' +
      '<div class="screen-a__top-grad"></div>' +
      '<div class="screen-a__bot-grad"></div>' +
      '<div class="screen-a__ui">' +
        '<div class="screen-a__header">' +
          '<img class="screen-a__logo" src="' + LOGO + '" alt="Редкие Рыбы" />' +
          '<span class="screen-a__live"><span class="live-dot" style="color:rgba(255,255,255,0.7)"></span>LIVE</span>' +
        '</div>' +
        '<div class="screen-a__spacer"></div>' +
        '<div class="screen-a__artist">' + t.artist + '</div>' +
        '<div class="screen-a__title">' + t.title + '</div>' +
        '<div class="screen-a__ctrls">' +
          '<button class="screen-a__play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
          '<button class="screen-a__action' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
          '<button class="screen-a__action" data-action="stream">' + I.ext + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT B — ВЕРТИКАЛЬ
     ════════════════════════════════════════════════════ */
  function renderConceptB(t) {
    var fav = state.favorites[t.id];
    var navItems = SCREENS.map(function(s) {
      return '<button class="screen-b__nav-item' + (state.screen === s.id ? ' is-active' : '') + '" data-screen="' + s.id + '">' +
        s.label +
        '</button>';
    }).join('');

    return '<div class="screen-b screen-enter">' +
      '<div class="screen-b__left">' +
        '<img class="screen-b__cover" src="' + t.cover + '" alt="" />' +
        '<div class="screen-b__left-grad"></div>' +
        '<div class="screen-b__left-info">' +
          '<div class="screen-b__track-artist">' + t.artist + '</div>' +
          '<div class="screen-b__track-title">' + t.title + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="screen-b__right">' +
        '<img class="screen-b__logo" src="' + LOGO + '" alt="RF" />' +
        '<div class="screen-b__live"><span class="live-dot" style="color:rgba(255,255,255,0.45)"></span>LIVE</div>' +
        '<div class="screen-b__divider"></div>' +
        '<button class="screen-b__play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
        '<button class="screen-b__action' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
        '<button class="screen-b__action" data-action="stream">' + I.ext + '</button>' +
        '<div class="screen-b__spacer"></div>' +
        '<div class="screen-b__divider"></div>' +
        '<div class="screen-b__nav">' + navItems + '</div>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT C — РАДИО
     ════════════════════════════════════════════════════ */
  function renderConceptC(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-c screen-enter" style="background:' + t.deviceBg + '">' +
      '<div class="screen-c__inner">' +
        '<div class="screen-c__header">' +
          '<img class="screen-c__logo" src="' + LOGO + '" alt="Редкие Рыбы" />' +
          '<span class="screen-c__live"><span class="live-dot" style="color:rgba(255,255,255,0.6)"></span>LIVE</span>' +
        '</div>' +
        '<img class="screen-c__cover" src="' + t.cover + '" alt="" />' +
        '<div class="screen-c__track">' +
          '<div class="screen-c__title">' + t.title + '</div>' +
          '<div class="screen-c__artist">' + t.artist + '</div>' +
        '</div>' +
        '<div class="screen-c__spacer"></div>' +
        '<div class="screen-c__ctrls">' +
          '<button class="screen-c__action' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
          '<button class="screen-c__play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
          '<button class="screen-c__action" data-action="stream">' + I.ext + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT D — СРЕДА (первый вариант, blurred bg)
     ════════════════════════════════════════════════════ */
  function renderConceptD(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-d screen-enter">' +
      '<div class="screen-d__bg" style="background-image:url(' + t.cover + ')"></div>' +
      '<div class="screen-d__gradient"></div>' +
      '<div class="screen-d__content">' +
        '<div class="screen-d__header">' +
          '<img class="screen-d__logo" src="' + LOGO + '" alt="RF" />' +
          '<span class="screen-d__live"><span class="live-dot" style="color:rgba(255,255,255,0.7)"></span>LIVE</span>' +
        '</div>' +
        '<div class="screen-d__spacer"></div>' +
        '<div class="screen-d__cover-wrap">' +
          '<img class="screen-d__cover" src="' + t.cover + '" alt="" />' +
        '</div>' +
        '<div class="screen-d__artist">' + t.artist + '</div>' +
        '<div class="screen-d__title">' + t.title + '</div>' +
        '<div class="screen-d__ctrls">' +
          '<button class="screen-d__play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
          '<button class="screen-d__action' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
          '<button class="screen-d__action" data-action="stream">' + I.ext + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT E — УСТРОЙСТВО (первый вариант, TE-style)
     ════════════════════════════════════════════════════ */
  function renderConceptE(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-e screen-enter">' +
      '<div class="screen-e__header">' +
        '<img class="screen-e__logo" src="' + LOGO + '" alt="RF" />' +
        '<span class="screen-e__signal"><span class="live-dot" style="color:var(--accent)"></span>ON AIR</span>' +
      '</div>' +
      '<div class="screen-e__body">' +
        '<div class="screen-e__cover-frame">' +
          '<img class="screen-e__cover" src="' + t.cover + '" alt="" />' +
        '</div>' +
        '<div class="screen-e__meta">' +
          '<div class="screen-e__title">' + t.title + '</div>' +
          '<div class="screen-e__artist">' + t.artist + '</div>' +
        '</div>' +
        '<div class="screen-e__progress"><div class="screen-e__progress-fill"></div></div>' +
      '</div>' +
      '<div class="screen-e__controls">' +
        '<button class="screen-e__play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
        '<button class="screen-e__action' + (fav ? ' is-active' : '') + '" data-action="fav">' +
          (fav ? I.fishFill : I.fish) + '<span>Поймать</span>' +
        '</button>' +
        '<button class="screen-e__action" data-action="stream">' + I.ext + '<span>Стрим</span></button>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT F — ВИТРИНА (первый вариант, B&O-style)
     ════════════════════════════════════════════════════ */
  function renderConceptF(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-f screen-enter">' +
      '<div class="screen-f__header">' +
        '<span class="screen-f__station">Редкие Рыбы</span>' +
        '<span class="screen-f__onair"><span class="live-dot" style="color:var(--accent)"></span>LIVE</span>' +
      '</div>' +
      '<div class="screen-f__mid">' +
        '<img class="screen-f__cover" src="' + t.cover + '" alt="" />' +
        '<div class="screen-f__track">' +
          '<div class="screen-f__title">' + t.title + '</div>' +
          '<div class="screen-f__artist">' + t.artist + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="screen-f__bottom">' +
        '<div class="screen-f__line"></div>' +
        '<div class="screen-f__ctrls">' +
          '<button class="screen-f__action' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
          '<button class="screen-f__play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
          '<button class="screen-f__action" data-action="stream">' + I.ext + '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT G — РЕТРО
     Left column: retro buttons. Right: cover flush edge.
     Bottom: frequency display with track name.
     ════════════════════════════════════════════════════ */
  function renderConceptG(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-g screen-enter">' +
      '<div class="screen-g__top">' +
        '<div class="screen-g__left">' +
          '<img class="screen-g__logo" src="' + LOGO + '" alt="RF" />' +
          '<div class="screen-g__btns">' +
            '<button class="screen-g__btn" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
            '<button class="screen-g__btn' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
            '<button class="screen-g__btn" data-action="stream">' + I.ext + '</button>' +
          '</div>' +
          '<span class="screen-g__station">FM</span>' +
        '</div>' +
        '<div class="screen-g__right">' +
          '<img class="screen-g__cover" src="' + t.cover + '" alt="" />' +
        '</div>' +
      '</div>' +
      '<div class="screen-g__display">' +
        '<div class="screen-g__display-frame">' +
          '<div class="screen-g__track-name">' + t.title + '</div>' +
          '<div class="screen-g__track-artist">' + t.artist + '</div>' +
        '</div>' +
      '</div>' +
      navDots() +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT G2 — РЕТРО-2
     Square cover pinned to right edge, buttons left, name frame bottom.
     ════════════════════════════════════════════════════ */
  function renderConceptG2(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-g2 screen-enter">' +
      '<img class="screen-g2__logo" src="' + LOGO + '" alt="RF" />' +
      '<img class="screen-g2__cover" src="' + t.cover + '" alt="" />' +
      '<div class="screen-g2__bottom">' +
        '<div class="screen-g2__btns">' +
          '<button class="screen-g__btn" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
          '<button class="screen-g__btn' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
          '<button class="screen-g__btn" data-action="stream">' + I.ext + '</button>' +
        '</div>' +
        '<div class="screen-g2__frame">' +
          '<div class="screen-g__track-name">' + t.title + '</div>' +
          '<div class="screen-g__track-artist">' + t.artist + '</div>' +
        '</div>' +
      '</div>' +
      navDots() +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT H — КВАДРАТ
     Logo, then cover full-width no margins, info + buttons.
     ════════════════════════════════════════════════════ */
  function renderConceptH(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-h screen-enter" style="background:' + t.deviceBg + '">' +
      '<div class="screen-h__header">' +
        '<img class="screen-h__logo" src="' + LOGO + '" alt="RF" />' +
        '<span class="screen-h__live"><span class="live-dot" style="color:var(--accent)"></span>LIVE</span>' +
      '</div>' +
      '<img class="screen-h__cover" src="' + t.cover + '" alt="" />' +
      '<div class="screen-h__info">' +
        '<div class="screen-h__title">' + t.title + '</div>' +
        '<div class="screen-h__artist">' + t.artist + '</div>' +
      '</div>' +
      '<div class="screen-h__ctrls">' +
        '<button class="screen-h__action' + (fav ? ' is-active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
        '<button class="screen-h__play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
        '<button class="screen-h__action" data-action="stream">' + I.ext + '</button>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT I — КРУГ
     Circular cover, display frame, 2×2 buttons with space.
     ════════════════════════════════════════════════════ */
  function renderConceptI(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-i screen-enter" style="background:' + t.deviceBg + '">' +
      '<div class="screen-i__header">' +
        '<span class="screen-i__station">Редкие Рыбы</span>' +
        '<span class="screen-i__live"><span class="live-dot" style="color:var(--accent)"></span>LIVE</span>' +
      '</div>' +
      '<div class="screen-i__circle">' +
        '<img class="screen-i__cover" src="' + t.cover + '" alt="" />' +
      '</div>' +
      '<div class="screen-i__display">' +
        '<div class="screen-i__disp-title">' + t.title + '</div>' +
        '<div class="screen-i__disp-artist">' + t.artist + '</div>' +
      '</div>' +
      '<div class="screen-i__grid">' +
        '<button class="screen-i__btn screen-i__btn--play" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '</button>' +
        '<button class="screen-i__btn' + (fav ? ' screen-i__btn--active' : '') + '" data-action="fav">' + (fav ? I.fishFill : I.fish) + '</button>' +
        '<button class="screen-i__btn" data-action="stream">' + I.ext + '</button>' +
        '<button class="screen-i__btn" data-action="settings">' + I.gear + '</button>' +
      '</div>' +
    '</div>';
  }

  /* ════════════════════════════════════════════════════
     CONCEPT J — ДИНАМИКИ
     Two CSS speakers, cover art, title, nav.
     ════════════════════════════════════════════════════ */
  function renderConceptJ(t) {
    var fav = state.favorites[t.id];
    return '<div class="screen-j screen-enter">' +
      /* Top panel — dark control strip */
      '<div class="screen-j__panel">' +
        '<img class="screen-j__logo" src="' + LOGO + '" alt="RF" />' +
        '<div class="screen-j__panel-controls">' +
          '<button class="screen-j__panel-btn" data-action="fav">' + (fav ? I.fishFill : I.fish) + '<span class="screen-j__panel-label">' + (fav ? 'saved' : 'catch') + '</span></button>' +
          '<button class="screen-j__panel-btn" data-action="play">' + (state.isPlaying ? I.pause : I.play) + '<span class="screen-j__panel-label">' + (state.isPlaying ? 'stop' : 'play') + '</span></button>' +
          '<button class="screen-j__panel-btn" data-action="stream">' + I.ext + '<span class="screen-j__panel-label">stream</span></button>' +
          '<button class="screen-j__panel-btn" data-action="settings">' + I.gear + '<span class="screen-j__panel-label">tune</span></button>' +
        '</div>' +
      '</div>' +
      /* Colored body */
      '<div class="screen-j__body" style="background:' + t.accent + '">' +
        '<div class="screen-j__speakers">' +
          '<img class="screen-j__speaker" src="./Inbox/speaker.png" alt="" />' +
          '<img class="screen-j__speaker" src="./Inbox/speaker.png" alt="" />' +
        '</div>' +
        '<img class="screen-j__cover" src="' + t.cover + '" alt="" />' +
      '</div>' +
      /* Bottom strip — track info */
      '<div class="screen-j__bottom">' +
        '<div class="screen-j__title">' + t.title + '</div>' +
        '<div class="screen-j__artist">' + t.artist + '</div>' +
      '</div>' +
      navDots() +
    '</div>';
  }

  function renderMain() {
    var t = TRACKS[state.trackIndex];
    if (state.concept === 'a') return renderConceptA(t);
    if (state.concept === 'b') return renderConceptB(t);
    if (state.concept === 'c') return renderConceptC(t);
    if (state.concept === 'd') return renderConceptD(t);
    if (state.concept === 'e') return renderConceptE(t);
    if (state.concept === 'f') return renderConceptF(t);
    if (state.concept === 'g') return renderConceptG(t);
    if (state.concept === 'g2') return renderConceptG2(t);
    if (state.concept === 'h') return renderConceptH(t);
    if (state.concept === 'i') return renderConceptI(t);
    return renderConceptJ(t);
  }

  /* ── Playlist ──────────────────────────────────────── */
  function renderPlaylist() {
    var current = TRACKS[state.trackIndex];
    var history = TRACKS.filter(function(t) { return t.id !== current.id; });

    function trackRow(t, isCurrent) {
      var fav = state.favorites[t.id];
      return '<div class="plist-track' + (isCurrent ? ' plist-track--current' : '') + '">' +
        '<img class="plist-cover" src="' + t.cover + '" alt="" />' +
        '<div class="plist-info">' +
          '<div class="plist-title">' + t.title + '</div>' +
          '<div class="plist-artist">' + t.artist + '</div>' +
        '</div>' +
        '<div class="plist-actions">' +
          '<button class="icon-btn' + (fav ? ' is-active' : '') + '" data-action="fav-track" data-track-id="' + t.id + '">' + (fav ? I.fishFill : I.fish) + '</button>' +
          '<button class="icon-btn" data-action="stream">' + I.ext + '</button>' +
        '</div>' +
      '</div>';
    }

    return '<div class="sec-screen screen-enter">' +
      '<div class="sec-content">' +
        '<div class="sec-head">' +
          '<div class="sec-head__label">Эфир</div>' +
          '<div class="sec-head__title">Треки</div>' +
        '</div>' +
        '<div class="plist-section-label">Сейчас</div>' +
        trackRow(current, true) +
        '<div class="plist-section-label">Ранее</div>' +
        history.map(function(t) { return trackRow(t, false); }).join('') +
      '</div>' +
      '<div class="sec-nav">' + navDots('ndot--accent') + '</div>' +
    '</div>';
  }

  /* ── Catch ─────────────────────────────────────────── */
  function renderCatch() {
    var saved = TRACKS.filter(function(t) { return state.favorites[t.id]; });

    var items = saved.length === 0
      ? '<div class="catch-empty">Пока ничего не поймано</div>'
      : saved.map(function(t) {
          return '<div class="catch-item">' +
            '<img class="catch-cover" src="' + t.cover + '" alt="" />' +
            '<div class="catch-info">' +
              '<div class="catch-title">' + t.title + '</div>' +
              '<div class="catch-artist">' + t.artist + '</div>' +
            '</div>' +
            '<div class="catch-actions">' +
              '<button class="icon-btn" data-action="stream">' + I.ext + '</button>' +
              '<button class="icon-btn-del" data-action="confirm-del" data-track-id="' + t.id + '">' + I.del + '</button>' +
            '</div>' +
          '</div>';
        }).join('');

    var overlay = '';
    if (state.deleteConfirm) {
      var dt = TRACKS.find(function(x) { return x.id === state.deleteConfirm; });
      overlay = '<div class="confirm-overlay">' +
        '<div class="confirm-sheet">' +
          '<div class="confirm-title">Убрать из поймано?</div>' +
          '<div class="confirm-text">' + dt.title + ' · ' + dt.artist + ' исчезнет из коллекции.</div>' +
          '<div class="confirm-btns">' +
            '<button class="btn-remove" data-action="do-del" data-track-id="' + dt.id + '">Убрать</button>' +
            '<button class="btn-cancel" data-action="cancel-del">Оставить</button>' +
          '</div>' +
        '</div>' +
      '</div>';
    }

    return '<div class="sec-screen screen-enter" style="position:relative">' +
      '<div class="sec-content">' +
        '<div class="sec-head">' +
          '<div class="sec-head__label">Коллекция</div>' +
          '<div class="sec-head__title">Поймано</div>' +
        '</div>' +
        '<div class="catch-list">' + items + '</div>' +
      '</div>' +
      '<div class="sec-nav">' + navDots('ndot--accent') + '</div>' +
      overlay +
    '</div>';
  }

  /* ── News ──────────────────────────────────────────── */
  function renderNews() {
    var posts = [
      { date: '26 мар', text: 'Новый ночной эфир каждую пятницу в 23:00. Тёмная электроника, редкие находки, долгие сеты без перебивок.' },
      { date: '24 мар', text: 'В этот уикенд в ротации: Tourist, Rival Consoles, Objekt. Специальная подборка под весеннее настроение.' },
      { date: '21 мар', text: 'Добавили высокое качество аудио — 320 kbps и FLAC. Переключение в настройках потока.' },
      { date: '18 мар', text: 'Salt Signal — новая дневная программа по будням с 13:00. Редкие треки, спокойный темп, никакой воды.' },
      { date: '14 мар', text: 'Архив эфиров за февраль доступен в разделе Треки. Сохраняйте и слушайте офлайн.' },
    ];

    return '<div class="sec-screen screen-enter">' +
      '<div class="sec-content">' +
        '<div class="sec-head">' +
          '<div class="sec-head__label">Редкие Рыбы</div>' +
          '<div class="sec-head__title">Новости</div>' +
        '</div>' +
        '<div class="news-list">' +
          posts.map(function(p) {
            return '<div class="news-item">' +
              '<div class="news-meta">Редкие Рыбы · ' + p.date + '</div>' +
              '<div class="news-text">' + p.text + '</div>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>' +
      '<div class="sec-nav">' + navDots('ndot--accent') + '</div>' +
    '</div>';
  }

  /* ── Main render ───────────────────────────────────── */
  function render() {
    var track = TRACKS[state.trackIndex];
    applyColors(track);
    renderSidebar();

    var html;
    switch (state.screen) {
      case 'main':     html = renderMain();     break;
      default:         html = renderMain();
    }
    document.getElementById('content-area').innerHTML = html;
  }

  /* ── Events ────────────────────────────────────────── */
  document.addEventListener('click', function(e) {

    var cBtn = e.target.closest('[data-concept]');
    if (cBtn) { state.concept = cBtn.dataset.concept; render(); return; }

    var tBtn = e.target.closest('[data-track]');
    if (tBtn) { state.trackIndex = parseInt(tBtn.dataset.track, 10); render(); return; }

    var sBtn = e.target.closest('[data-screen]');
    if (sBtn) { state.screen = sBtn.dataset.screen; state.deleteConfirm = null; render(); return; }

    var bgBtn = e.target.closest('[data-bg]');
    if (bgBtn) {
      document.body.classList.toggle('bg-light', bgBtn.dataset.bg === 'light');
      document.querySelectorAll('.bg-btn').forEach(function(b) {
        b.classList.toggle('is-active', b === bgBtn);
      });
      return;
    }

    var aBtn = e.target.closest('[data-action]');
    if (!aBtn) return;

    switch (aBtn.dataset.action) {
      case 'play':
        state.isPlaying = !state.isPlaying;
        render();
        break;
      case 'fav':
        var t0 = TRACKS[state.trackIndex];
        state.favorites[t0.id] = !state.favorites[t0.id];
        render();
        break;
      case 'fav-track':
        state.favorites[aBtn.dataset.trackId] = !state.favorites[aBtn.dataset.trackId];
        render();
        break;
      case 'confirm-del':
        state.deleteConfirm = aBtn.dataset.trackId;
        render();
        break;
      case 'do-del':
        state.favorites[aBtn.dataset.trackId] = false;
        state.deleteConfirm = null;
        render();
        break;
      case 'cancel-del':
        state.deleteConfirm = null;
        render();
        break;
    }
  });

  /* ── Init ──────────────────────────────────────────── */
  render();

})();
