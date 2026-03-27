(function () {
  const tracks = [
    {
      id: "tycho-awake",
      artist: "Tycho",
      title: "Awake",
      album: "Awake",
      year: "2014",
      cover: "./assets/tycho-awake.jpg",
      artLink: "https://music.apple.com/us/album/awake/793928184?i=793928278",
      palette: {
        accent: "#98d8ff",
        accentSoft: "#e7f5ff",
        surface: "rgba(224, 243, 255, 0.14)",
        backdrop:
          "radial-gradient(circle at 30% 12%, rgba(152, 216, 255, 0.38), transparent 24%), radial-gradient(circle at 78% 18%, rgba(255, 208, 124, 0.18), transparent 22%), linear-gradient(180deg, #f3f0ea 0%, #d6d7d8 36%, #7a8088 100%)",
      },
    },
    {
      id: "bonobo-kerala",
      artist: "Bonobo",
      title: "Kerala",
      album: "Migration",
      year: "2017",
      cover: "./assets/bonobo-kerala.jpg",
      artLink: "https://music.apple.com/us/album/kerala/1169245868?i=1169246072",
      palette: {
        accent: "#ffcc8c",
        accentSoft: "#fff2d8",
        surface: "rgba(255, 241, 214, 0.12)",
        backdrop:
          "radial-gradient(circle at 25% 10%, rgba(255, 204, 140, 0.34), transparent 22%), radial-gradient(circle at 82% 20%, rgba(134, 171, 255, 0.18), transparent 24%), linear-gradient(180deg, #f4eee6 0%, #d8c8b8 34%, #77706b 100%)",
      },
    },
    {
      id: "khruangbin-time-you-and-i",
      artist: "Khruangbin",
      title: "Time (You and I)",
      album: "Mordechai",
      year: "2020",
      cover: "./assets/khruangbin-time-you-and-i.jpg",
      artLink: "https://music.apple.com/us/album/time-you-and-i/1501585499?i=1501585505",
      palette: {
        accent: "#f58ec0",
        accentSoft: "#ffe7f1",
        surface: "rgba(255, 224, 236, 0.12)",
        backdrop:
          "radial-gradient(circle at 28% 12%, rgba(245, 142, 192, 0.36), transparent 24%), radial-gradient(circle at 78% 18%, rgba(255, 191, 110, 0.18), transparent 24%), linear-gradient(180deg, #f1ece8 0%, #d8c5bb 34%, #6d6562 100%)",
      },
    },
    {
      id: "tourist-elixir",
      artist: "Tourist",
      title: "Elixir",
      album: "Wild",
      year: "2019",
      cover: "./assets/tourist-elixir.jpg",
      artLink: "https://music.apple.com/us/album/elixir/1480919558?i=1480919573",
      palette: {
        accent: "#6cc6ff",
        accentSoft: "#e4f6ff",
        surface: "rgba(220, 243, 255, 0.12)",
        backdrop:
          "radial-gradient(circle at 28% 12%, rgba(108, 198, 255, 0.34), transparent 24%), radial-gradient(circle at 82% 18%, rgba(174, 255, 230, 0.16), transparent 24%), linear-gradient(180deg, #f0f3f1 0%, #ced5d7 34%, #717b82 100%)",
      },
    },
    {
      id: "dj-shadow-midnight",
      artist: "DJ Shadow",
      title: "Midnight In a Perfect World",
      album: "Endtroducing.....",
      year: "1996",
      cover: "./assets/dj-shadow-midnight.jpg",
      artLink: "https://music.apple.com/us/album/midnight-in-a-perfect-world/1660485817?i=1660486423",
      palette: {
        accent: "#caa1ff",
        accentSoft: "#f0e7ff",
        surface: "rgba(239, 232, 255, 0.12)",
        backdrop:
          "radial-gradient(circle at 24% 10%, rgba(202, 161, 255, 0.34), transparent 22%), radial-gradient(circle at 82% 18%, rgba(120, 164, 255, 0.16), transparent 24%), linear-gradient(180deg, #ecebef 0%, #cfcdd5 34%, #6f727d 100%)",
      },
    },
  ];

  const scenes = [
    { id: "splash", title: "Loading" },
    { id: "home", title: "Main" },
    { id: "playlist", title: "Playlist" },
    { id: "catch", title: "Catch" },
    { id: "news", title: "News" },
  ];

  const state = {
    scene: "home",
    trackId: "khruangbin-time-you-and-i",
    catchIds: ["khruangbin-time-you-and-i", "tycho-awake", "bonobo-kerala"],
    playing: true,
    sectionOpen: false,
    settingsOpen: false,
    confirmOpen: false,
    pendingRemoveId: null,
    streamType: "Hi-Fi",
    favoriteStreaming: "Apple Music",
  };

  const scenePicker = document.getElementById("scene-picker");
  const trackPicker = document.getElementById("track-picker");
  const screenRoot = document.getElementById("screen-root");
  const screenContent = document.getElementById("screen-content");
  const sectionSheet = document.getElementById("section-sheet");
  const settingsSheet = document.getElementById("settings-sheet");
  const confirmSheet = document.getElementById("confirm-sheet");
  const navToggle = document.getElementById("nav-toggle");

  function currentTrack() {
    return tracks.find(function (track) {
      return track.id === state.trackId;
    });
  }

  function inCatch(trackId) {
    return state.catchIds.includes(trackId);
  }

  function renderScenePicker() {
    scenePicker.innerHTML = scenes
      .map(function (scene) {
        const active = scene.id === state.scene ? "is-active" : "";
        return `
          <button class="picker ${active}" data-scene="${scene.id}">
            <span>${scene.title}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderTrackPicker() {
    trackPicker.innerHTML = tracks
      .map(function (track) {
        const active = track.id === state.trackId ? "is-active" : "";
        return `
          <button class="picker picker--track ${active}" data-track="${track.id}">
            <img src="${track.cover}" alt="${track.title} cover" />
            <span>
              <strong>${track.title}</strong>
              <small>${track.artist}</small>
            </span>
          </button>
        `;
      })
      .join("");
  }

  function renderSections() {
    sectionSheet.classList.toggle("is-open", state.sectionOpen);
    sectionSheet.innerHTML = scenes
      .filter(function (scene) {
        return scene.id !== "splash";
      })
      .map(function (scene) {
        const active = scene.id === state.scene ? "is-active" : "";
        return `
          <button class="section-link ${active}" data-scene="${scene.id}">
            ${scene.title}
          </button>
        `;
      })
      .join("");
  }

  function renderSettings() {
    const track = currentTrack();
    settingsSheet.classList.toggle("is-open", state.settingsOpen);
    settingsSheet.innerHTML = `
      <div class="settings-card">
        <div class="settings-head">
          <div>
            <p class="label">Playback</p>
            <h3>Settings</h3>
          </div>
          <button class="secondary-button" data-action="close-settings">Done</button>
        </div>

        <div class="settings-group">
          <p class="label">Audio stream</p>
          <div class="segmented">
            ${["Hi-Fi", "Light"].map(function (item) {
              const active = item === state.streamType ? "is-active" : "";
              return `<button class="segment ${active}" data-stream="${item}">${item}</button>`;
            }).join("")}
          </div>
        </div>

        <div class="settings-group">
          <p class="label">Preferred streaming</p>
          <div class="segmented segmented--wide">
            ${["Apple Music", "Spotify", "YouTube Music"].map(function (item) {
              const active = item === state.favoriteStreaming ? "is-active" : "";
              return `<button class="segment ${active}" data-service="${item}">${item}</button>`;
            }).join("")}
          </div>
        </div>

        <a class="text-link" href="${track.artLink}" target="_blank" rel="noreferrer">
          Open current track
        </a>
        <a class="text-link" href="https://radiofish.fm" target="_blank" rel="noreferrer">
          Radio website
        </a>
      </div>
    `;
  }

  function renderConfirm() {
    confirmSheet.classList.toggle("is-open", state.confirmOpen);
  }

  function renderSplash(track) {
    return `
      <section class="screen screen--splash">
        <img class="splash-logo" src="./assets/RFlogo.jpg" alt="Rare Fish logo" />
        <div class="splash-cover-wrap">
          <img class="splash-cover" src="${track.cover}" alt="${track.title} cover" />
        </div>
        <div class="splash-copy">
          <p class="label">Rare Fish</p>
          <h2>Calibrating the next signal</h2>
        </div>
      </section>
    `;
  }

  function renderHome(track) {
    const fishLabel = inCatch(track.id) ? "In Catch" : "Catch";
    const playLabel = state.playing ? "Stop" : "Play";

    return `
      <section class="screen screen--home">
        <div class="hero-card">
          <div class="hero-header">
            <img class="hero-logo" src="./assets/RFlogo.jpg" alt="Rare Fish logo" />
            <button class="icon-button" data-action="open-settings">Settings</button>
          </div>

          <div class="art-stage">
            <div class="art-shadow"></div>
            <img class="artwork" src="${track.cover}" alt="${track.title} cover" />
          </div>

          <div class="track-meta">
            <p>${track.artist}</p>
            <h2>${track.title}</h2>
            <small>${track.album} · ${track.year}</small>
          </div>

          <div class="transport">
            <button class="small-pill" data-action="toggle-catch">${fishLabel}</button>
            <button class="play-button" data-action="toggle-play">${playLabel}</button>
            <a class="small-pill" href="${track.artLink}" target="_blank" rel="noreferrer">
              Open in ${state.favoriteStreaming}
            </a>
          </div>
        </div>
      </section>
    `;
  }

  function renderPlaylist(track) {
    const list = [track].concat(
      tracks.filter(function (item) {
        return item.id !== track.id;
      })
    );

    return `
      <section class="screen">
        <div class="section-header">
          <p class="label">Playlist</p>
          <h2>Current track and recent history</h2>
        </div>

        <article class="current-card">
          <img src="${track.cover}" alt="${track.title} cover" />
          <div>
            <p class="label">Now playing</p>
            <h3>${track.title}</h3>
            <p class="muted">${track.artist}</p>
          </div>
        </article>

        <div class="list">
          ${list.slice(1).map(function (item) {
            const catchLabel = inCatch(item.id) ? "In Catch" : "Catch";
            return `
              <article class="row">
                <img src="${item.cover}" alt="${item.title} cover" />
                <div class="row__copy">
                  <h3>${item.title}</h3>
                  <p>${item.artist}</p>
                </div>
                <div class="row__actions">
                  <button class="mini-button" data-action="toggle-catch-track" data-track="${item.id}">
                    ${catchLabel}
                  </button>
                  <a class="mini-button" href="${item.artLink}" target="_blank" rel="noreferrer">
                    Open
                  </a>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderCatch() {
    const saved = tracks.filter(function (track) {
      return inCatch(track.id);
    });

    return `
      <section class="screen">
        <div class="section-header">
          <p class="label">Catch</p>
          <h2>Saved tracks</h2>
        </div>

        <div class="list">
          ${saved.map(function (item) {
            return `
              <article class="row">
                <img src="${item.cover}" alt="${item.title} cover" />
                <div class="row__copy">
                  <h3>${item.title}</h3>
                  <p>${item.artist}</p>
                </div>
                <div class="row__actions">
                  <button class="mini-button mini-button--danger" data-action="request-remove" data-track="${item.id}">
                    Remove
                  </button>
                  <a class="mini-button" href="${item.artLink}" target="_blank" rel="noreferrer">
                    Open
                  </a>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderNews() {
    return `
      <section class="screen">
        <div class="section-header">
          <p class="label">News</p>
          <h2>Editorial layer for the station</h2>
          <p class="muted">
            Вместо грубого встраивания Telegram этот экран подает новости как
            часть бренда и атмосферы радио.
          </p>
        </div>

        <div class="news-grid">
          <article class="news-card news-card--large">
            <p class="label">Broadcast note</p>
            <h3>Tonight the signal stays slower and deeper</h3>
            <p>
              Пространство для анонсов эфира, особых программ и заметок редакции.
            </p>
          </article>
          <article class="news-card">
            <p class="label">Telegram</p>
            <h3>Channel, but translated into the product language</h3>
            <p>
              Здесь можно аккуратно показывать свежие посты, не ломая цельность
              интерфейса.
            </p>
          </article>
          <article class="news-card">
            <p class="label">Link</p>
            <h3>Website and archive</h3>
            <p>
              Внешние ссылки остаются доступными, но не выглядят чужеродно.
            </p>
          </article>
        </div>
      </section>
    `;
  }

  function renderScreen() {
    const track = currentTrack();
    const map = {
      splash: renderSplash(track),
      home: renderHome(track),
      playlist: renderPlaylist(track),
      catch: renderCatch(),
      news: renderNews(),
    };
    screenContent.innerHTML = map[state.scene];
  }

  function applyTheme() {
    const track = currentTrack();
    screenRoot.style.setProperty("--accent", track.palette.accent);
    screenRoot.style.setProperty("--accent-soft", track.palette.accentSoft);
    screenRoot.style.setProperty("--surface", track.palette.surface);
    screenRoot.style.setProperty("--backdrop", track.palette.backdrop);
  }

  function render() {
    applyTheme();
    renderScenePicker();
    renderTrackPicker();
    renderSections();
    renderSettings();
    renderConfirm();
    renderScreen();
  }

  document.addEventListener("click", function (event) {
    const sceneTarget = event.target.closest("[data-scene]");
    if (sceneTarget) {
      state.scene = sceneTarget.dataset.scene;
      state.sectionOpen = false;
      render();
      return;
    }

    const trackTarget = event.target.closest("[data-track]");
    if (trackTarget) {
      state.trackId = trackTarget.dataset.track;
      render();
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) {
      return;
    }

    const action = actionTarget.dataset.action;

    if (action === "toggle-play") {
      state.playing = !state.playing;
      render();
      return;
    }

    if (action === "open-settings") {
      state.settingsOpen = true;
      render();
      return;
    }

    if (action === "close-settings") {
      state.settingsOpen = false;
      render();
      return;
    }

    if (action === "toggle-catch") {
      if (inCatch(state.trackId)) {
        state.catchIds = state.catchIds.filter(function (id) {
          return id !== state.trackId;
        });
      } else {
        state.catchIds = [state.trackId].concat(state.catchIds);
      }
      render();
      return;
    }

    if (action === "toggle-catch-track") {
      const id = actionTarget.dataset.track;
      if (inCatch(id)) {
        state.catchIds = state.catchIds.filter(function (item) {
          return item !== id;
        });
      } else {
        state.catchIds = [id].concat(state.catchIds);
      }
      render();
      return;
    }

    if (action === "request-remove") {
      state.pendingRemoveId = actionTarget.dataset.track;
      state.confirmOpen = true;
      renderConfirm();
      return;
    }

    if (action === "close-confirm") {
      state.pendingRemoveId = null;
      state.confirmOpen = false;
      renderConfirm();
      return;
    }

    if (action === "confirm-remove" && state.pendingRemoveId) {
      state.catchIds = state.catchIds.filter(function (id) {
        return id !== state.pendingRemoveId;
      });
      state.pendingRemoveId = null;
      state.confirmOpen = false;
      render();
    }
  });

  document.addEventListener("click", function (event) {
    const streamTarget = event.target.closest("[data-stream]");
    if (streamTarget) {
      state.streamType = streamTarget.dataset.stream;
      renderSettings();
      return;
    }

    const serviceTarget = event.target.closest("[data-service]");
    if (serviceTarget) {
      state.favoriteStreaming = serviceTarget.dataset.service;
      render();
    }
  });

  navToggle.addEventListener("click", function () {
    state.sectionOpen = !state.sectionOpen;
    renderSections();
  });

  render();
})();
