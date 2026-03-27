(function () {
  const tracks = [
    {
      id: "neon-tide",
      artist: "Mira Vale",
      title: "Neon Tide",
      coverLabel: "NT",
      palette: {
        accent: "#80f3ff",
        accentSoft: "#caeeff",
        glow: "rgba(128, 243, 255, 0.30)",
        glowStrong: "rgba(128, 243, 255, 0.56)",
        background:
          "radial-gradient(circle at 18% 12%, rgba(128, 243, 255, 0.38), transparent 24%), radial-gradient(circle at 82% 18%, rgba(249, 194, 255, 0.24), transparent 28%), linear-gradient(180deg, #08101a 0%, #102238 48%, #081017 100%)",
        cover:
          "linear-gradient(145deg, rgba(255,255,255,0.42), rgba(255,255,255,0.02)), linear-gradient(135deg, #8dceff 0%, #162a42 48%, #ffb9ed 100%)",
      },
    },
    {
      id: "amber-current",
      artist: "Golden Reef",
      title: "Amber Current",
      coverLabel: "AC",
      palette: {
        accent: "#ffd57a",
        accentSoft: "#ffe9b9",
        glow: "rgba(255, 213, 122, 0.26)",
        glowStrong: "rgba(255, 213, 122, 0.50)",
        background:
          "radial-gradient(circle at 18% 8%, rgba(255, 213, 122, 0.34), transparent 26%), radial-gradient(circle at 80% 14%, rgba(255, 143, 101, 0.28), transparent 26%), linear-gradient(180deg, #120d08 0%, #312111 46%, #0f0c08 100%)",
        cover:
          "linear-gradient(145deg, rgba(255,255,255,0.34), rgba(255,255,255,0.04)), linear-gradient(135deg, #ffd27f 0%, #7a4119 54%, #2f1b10 100%)",
      },
    },
    {
      id: "lagoon-signal",
      artist: "Blue Harbour",
      title: "Lagoon Signal",
      coverLabel: "LS",
      palette: {
        accent: "#8dffcf",
        accentSoft: "#d8ffe9",
        glow: "rgba(141, 255, 207, 0.30)",
        glowStrong: "rgba(141, 255, 207, 0.48)",
        background:
          "radial-gradient(circle at 15% 10%, rgba(141, 255, 207, 0.32), transparent 28%), radial-gradient(circle at 84% 18%, rgba(87, 206, 255, 0.22), transparent 26%), linear-gradient(180deg, #06110f 0%, #102d28 50%, #07110f 100%)",
        cover:
          "linear-gradient(145deg, rgba(255,255,255,0.36), rgba(255,255,255,0.03)), linear-gradient(135deg, #97ffd5 0%, #174439 50%, #0a1821 100%)",
      },
    },
    {
      id: "violet-pressure",
      artist: "Noor Static",
      title: "Violet Pressure",
      coverLabel: "VP",
      palette: {
        accent: "#d5b2ff",
        accentSoft: "#f0e1ff",
        glow: "rgba(213, 178, 255, 0.28)",
        glowStrong: "rgba(213, 178, 255, 0.50)",
        background:
          "radial-gradient(circle at 18% 12%, rgba(213, 178, 255, 0.34), transparent 26%), radial-gradient(circle at 86% 14%, rgba(255, 110, 186, 0.18), transparent 26%), linear-gradient(180deg, #0d0815 0%, #221636 48%, #0b0812 100%)",
        cover:
          "linear-gradient(145deg, rgba(255,255,255,0.34), rgba(255,255,255,0.03)), linear-gradient(135deg, #d6b6ff 0%, #42205c 52%, #161227 100%)",
      },
    },
    {
      id: "sunset-foam",
      artist: "Coral Union",
      title: "Sunset Foam",
      coverLabel: "SF",
      palette: {
        accent: "#ffab91",
        accentSoft: "#ffd8cc",
        glow: "rgba(255, 171, 145, 0.30)",
        glowStrong: "rgba(255, 171, 145, 0.50)",
        background:
          "radial-gradient(circle at 16% 10%, rgba(255, 171, 145, 0.34), transparent 26%), radial-gradient(circle at 82% 18%, rgba(255, 224, 166, 0.22), transparent 26%), linear-gradient(180deg, #140c0a 0%, #351a17 46%, #120b0b 100%)",
        cover:
          "linear-gradient(145deg, rgba(255,255,255,0.36), rgba(255,255,255,0.03)), linear-gradient(135deg, #ffc1a8 0%, #6d2d2f 50%, #291514 100%)",
      },
    },
  ];

  const scenes = [
    { id: "splash", title: "Загрузка" },
    { id: "home", title: "Главный" },
    { id: "playlist", title: "Playlist" },
    { id: "catch", title: "Catch" },
    { id: "news", title: "News" },
  ];

  const historyTracks = [
    tracks[1],
    tracks[2],
    tracks[3],
    tracks[4],
    tracks[0],
  ];

  const state = {
    activeScene: "home",
    activeTrackId: tracks[0].id,
    isPlaying: true,
    isFavorite: false,
    isDockOpen: false,
    confirmOpen: false,
    pendingRemovalId: null,
    catchIds: [tracks[0].id, tracks[2].id, tracks[4].id],
  };

  const sceneList = document.getElementById("scene-list");
  const trackList = document.getElementById("track-list");
  const screenLayer = document.getElementById("screen-layer");
  const navDock = document.getElementById("nav-dock");
  const deviceScreen = document.getElementById("device-screen");
  const dockToggle = document.getElementById("dock-toggle");
  const confirmSheet = document.getElementById("confirm-sheet");

  function getTrack(trackId) {
    return tracks.find(function (track) {
      return track.id === trackId;
    });
  }

  function getActiveTrack() {
    return getTrack(state.activeTrackId) || tracks[0];
  }

  function isInCatch(trackId) {
    return state.catchIds.includes(trackId);
  }

  function renderSceneList() {
    sceneList.innerHTML = scenes
      .map(function (scene, index) {
        const active = scene.id === state.activeScene ? "is-active" : "";
        return `
          <button class="scene-pill ${active}" data-scene="${scene.id}">
            <span class="scene-pill__index">0${index + 1}</span>
            <span>${scene.title}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderTrackList() {
    trackList.innerHTML = tracks
      .map(function (track) {
        const active = track.id === state.activeTrackId ? "is-active" : "";
        return `
          <button class="track-pill ${active}" data-track="${track.id}">
            <span class="track-pill__swatch" style="background:${track.palette.cover}"></span>
            <span>
              <strong>${track.title}</strong>
              <small>${track.artist}</small>
            </span>
          </button>
        `;
      })
      .join("");
  }

  function renderNavDock() {
    navDock.classList.toggle("is-open", state.isDockOpen);
    navDock.innerHTML = scenes
      .filter(function (scene) {
        return scene.id !== "splash";
      })
      .map(function (scene) {
        const active = scene.id === state.activeScene ? "is-active" : "";
        return `
          <button class="dock-item ${active}" data-scene="${scene.id}">
            ${scene.title}
          </button>
        `;
      })
      .join("");
  }

  function renderSplash() {
    return `
      <section class="screen screen--splash">
        <div class="splash-orb"></div>
        <div class="logo-panel">
          <img src="../../Inbox/RFlogo.jpg" alt="Radio Fish logo" class="logo-mark" />
        </div>
        <div class="splash-copy">
          <p class="eyebrow">Rare Fish Radio</p>
          <h2>Signals from deeper water</h2>
        </div>
      </section>
    `;
  }

  function renderHome(track) {
    const favoriteLabel = state.isFavorite ? "В улове" : "Добавить в улов";
    const playLabel = state.isPlaying ? "Stop" : "Play";
    const playClass = state.isPlaying ? "is-playing" : "";

    return `
      <section class="screen screen--home">
        <div class="hero-shell">
          <header class="hero-topbar">
            <div class="brand-mark">
              <img src="../../Inbox/RFlogo.jpg" alt="Radio Fish logo" class="brand-mark__logo" />
            </div>
            <button class="tiny-button" data-action="toggle-dock">Control</button>
          </header>

          <div class="cover-shell">
            <div class="cover-disc" style="background:${track.palette.cover}">
              <span>${track.coverLabel}</span>
            </div>
          </div>

          <div class="track-copy">
            <p class="track-copy__artist">${track.artist}</p>
            <h2>${track.title}</h2>
          </div>

          <div class="transport">
            <button class="favorite-chip ${state.isFavorite ? "is-active" : ""}" data-action="toggle-favorite">
              <span class="fish-icon">><(((('></span>
              <span>${favoriteLabel}</span>
            </button>

            <button class="play-wheel ${playClass}" data-action="toggle-play">
              <span class="play-wheel__inner">${playLabel}</span>
            </button>

            <button class="stream-chip" data-action="open-streaming">
              Open in Streaming
            </button>
          </div>

          <button class="settings-ridge" data-action="toggle-dock">
            Streams, site, preferred service
          </button>
        </div>
      </section>
    `;
  }

  function renderPlaylist(track) {
    return `
      <section class="screen screen--list">
        <header class="section-header">
          <p class="eyebrow">Playlist</p>
          <h2>Current signal and recent drift</h2>
        </header>

        <article class="current-track-card">
          <div class="current-track-card__art" style="background:${track.palette.cover}">
            <span>${track.coverLabel}</span>
          </div>
          <div>
            <p class="section-label">Now playing</p>
            <h3>${track.title}</h3>
            <p class="muted">${track.artist}</p>
          </div>
        </article>

        <section class="list-stack">
          ${historyTracks
            .map(function (item) {
              return `
                <article class="track-row">
                  <div class="track-row__art" style="background:${item.palette.cover}">
                    <span>${item.coverLabel}</span>
                  </div>
                  <div class="track-row__copy">
                    <h3>${item.title}</h3>
                    <p>${item.artist}</p>
                  </div>
                  <div class="track-row__actions">
                    <button class="mini-action" data-track="${item.id}" data-action="list-favorite">
                      ${isInCatch(item.id) ? "In Catch" : "Catch"}
                    </button>
                    <button class="mini-action" data-action="open-streaming">
                      Open
                    </button>
                  </div>
                </article>
              `;
            })
            .join("")}
        </section>
      </section>
    `;
  }

  function renderCatch() {
    const catchTracks = state.catchIds.map(getTrack).filter(Boolean);

    return `
      <section class="screen screen--list">
        <header class="section-header">
          <p class="eyebrow">Catch</p>
          <h2>The tracks you kept</h2>
        </header>

        <section class="list-stack">
          ${catchTracks
            .map(function (item) {
              return `
                <article class="track-row">
                  <div class="track-row__art" style="background:${item.palette.cover}">
                    <span>${item.coverLabel}</span>
                  </div>
                  <div class="track-row__copy">
                    <h3>${item.title}</h3>
                    <p>${item.artist}</p>
                  </div>
                  <div class="track-row__actions">
                    <button class="mini-action mini-action--danger" data-action="request-remove" data-track="${item.id}">
                      Remove
                    </button>
                    <button class="mini-action" data-action="open-streaming">
                      Open
                    </button>
                  </div>
                </article>
              `;
            })
            .join("")}
        </section>
      </section>
    `;
  }

  function renderNews() {
    return `
      <section class="screen screen--news">
        <header class="section-header">
          <p class="eyebrow">News</p>
          <h2>Broadcast notes, not a pasted feed</h2>
          <p class="muted">
            Первый концепт переосмысляет этот экран как редакционный слой
            радио, а не как сырой встраиваемый Telegram.
          </p>
        </header>

        <section class="news-stack">
          <article class="news-card news-card--feature">
            <p class="section-label">Editor note</p>
            <h3>Tonight's broadcast goes deeper after midnight</h3>
            <p>
              Пространство для анонсов, коротких редакторских заметок и важных
              обновлений эфира.
            </p>
          </article>

          <article class="news-card">
            <p class="section-label">Latest</p>
            <h3>Telegram can live here in a softer format</h3>
            <p>
              Вместо ощущения "чужой ленты" этот блок может быть стилизован как
              карточки заметок, выдержанные в общем характере приложения.
            </p>
          </article>

          <article class="news-card">
            <p class="section-label">Link out</p>
            <h3>Website and channel remain available</h3>
            <p>
              Важные внешние ссылки сохраняются, но не ломают цельность
              интерфейса.
            </p>
          </article>
        </section>
      </section>
    `;
  }

  function renderScreen() {
    const track = getActiveTrack();
    const templates = {
      splash: renderSplash(),
      home: renderHome(track),
      playlist: renderPlaylist(track),
      catch: renderCatch(),
      news: renderNews(),
    };

    screenLayer.innerHTML = templates[state.activeScene];
  }

  function applyPalette() {
    const track = getActiveTrack();
    deviceScreen.style.setProperty("--accent", track.palette.accent);
    deviceScreen.style.setProperty("--accent-soft", track.palette.accentSoft);
    deviceScreen.style.setProperty("--glow", track.palette.glow);
    deviceScreen.style.setProperty("--glow-strong", track.palette.glowStrong);
    deviceScreen.style.setProperty("--screen-background", track.palette.background);
  }

  function renderConfirm() {
    confirmSheet.classList.toggle("is-open", state.confirmOpen);
    confirmSheet.setAttribute("aria-hidden", state.confirmOpen ? "false" : "true");
  }

  function syncFavoriteFromTrack() {
    state.isFavorite = isInCatch(state.activeTrackId);
  }

  function render() {
    syncFavoriteFromTrack();
    applyPalette();
    renderSceneList();
    renderTrackList();
    renderNavDock();
    renderScreen();
    renderConfirm();
  }

  function toggleFavorite(trackId) {
    if (isInCatch(trackId)) {
      state.catchIds = state.catchIds.filter(function (id) {
        return id !== trackId;
      });
    } else {
      state.catchIds = [trackId].concat(state.catchIds);
    }
  }

  function setScene(sceneId) {
    state.activeScene = sceneId;
    state.isDockOpen = false;
    render();
  }

  document.addEventListener("click", function (event) {
    const sceneTarget = event.target.closest("[data-scene]");
    if (sceneTarget) {
      setScene(sceneTarget.dataset.scene);
      return;
    }

    const trackTarget = event.target.closest("[data-track]");
    if (trackTarget && trackTarget.dataset.action !== "request-remove") {
      state.activeTrackId = trackTarget.dataset.track;
      render();
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) {
      return;
    }

    const action = actionTarget.dataset.action;

    if (action === "toggle-play") {
      state.isPlaying = !state.isPlaying;
      render();
      return;
    }

    if (action === "toggle-favorite") {
      toggleFavorite(state.activeTrackId);
      render();
      return;
    }

    if (action === "list-favorite") {
      toggleFavorite(actionTarget.dataset.track);
      render();
      return;
    }

    if (action === "toggle-dock") {
      state.isDockOpen = !state.isDockOpen;
      renderNavDock();
      return;
    }

    if (action === "request-remove") {
      state.pendingRemovalId = actionTarget.dataset.track;
      state.confirmOpen = true;
      renderConfirm();
      return;
    }

    if (action === "close-confirm") {
      state.confirmOpen = false;
      state.pendingRemovalId = null;
      renderConfirm();
      return;
    }

    if (action === "confirm-remove" && state.pendingRemovalId) {
      state.catchIds = state.catchIds.filter(function (id) {
        return id !== state.pendingRemovalId;
      });
      state.pendingRemovalId = null;
      state.confirmOpen = false;
      render();
      return;
    }

    if (action === "open-streaming") {
      window.alert("Streaming action placeholder");
    }
  });

  dockToggle.addEventListener("click", function () {
    state.isDockOpen = !state.isDockOpen;
    renderNavDock();
  });

  render();
})();
