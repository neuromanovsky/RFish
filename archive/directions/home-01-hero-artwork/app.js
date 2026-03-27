(function () {
  const tracks = [
    {
      id: "tycho-awake",
      artist: "Tycho",
      title: "Awake",
      album: "Awake",
      cover: "./assets/tycho-awake.jpg",
      serviceLabel: "Apple Music",
      serviceLink: "https://music.apple.com/us/album/awake/793928184?i=793928278",
      theme: {
        background:
          "radial-gradient(circle at 50% 12%, rgba(182, 225, 255, 0.92), transparent 24%), linear-gradient(180deg, #edf1f3 0%, #ced8df 38%, #7e8893 100%)",
        tint: "#8fd1ff",
        surface: "rgba(243, 250, 255, 0.54)",
      },
    },
    {
      id: "bonobo-kerala",
      artist: "Bonobo",
      title: "Kerala",
      album: "Migration",
      cover: "./assets/bonobo-kerala.jpg",
      serviceLabel: "Apple Music",
      serviceLink: "https://music.apple.com/us/album/kerala/1169245868?i=1169246072",
      theme: {
        background:
          "radial-gradient(circle at 50% 12%, rgba(255, 220, 169, 0.92), transparent 24%), linear-gradient(180deg, #f3efe9 0%, #dfd2c5 38%, #8d8178 100%)",
        tint: "#ffc98d",
        surface: "rgba(255, 248, 240, 0.52)",
      },
    },
    {
      id: "khruangbin-time-you-and-i",
      artist: "Khruangbin",
      title: "Time (You and I)",
      album: "Mordechai",
      cover: "./assets/khruangbin-time-you-and-i.jpg",
      serviceLabel: "Apple Music",
      serviceLink: "https://music.apple.com/us/album/time-you-and-i/1501585499?i=1501585505",
      theme: {
        background:
          "radial-gradient(circle at 50% 12%, rgba(255, 184, 214, 0.9), transparent 24%), linear-gradient(180deg, #f5f0ec 0%, #e3d3cb 38%, #91857f 100%)",
        tint: "#ef93b8",
        surface: "rgba(255, 244, 247, 0.52)",
      },
    },
    {
      id: "tourist-elixir",
      artist: "Tourist",
      title: "Elixir",
      album: "Wild",
      cover: "./assets/tourist-elixir.jpg",
      serviceLabel: "Apple Music",
      serviceLink: "https://music.apple.com/us/album/elixir/1480919558?i=1480919573",
      theme: {
        background:
          "radial-gradient(circle at 50% 12%, rgba(182, 230, 255, 0.9), transparent 24%), linear-gradient(180deg, #eff2f2 0%, #d8dfe2 38%, #879096 100%)",
        tint: "#8ed4ff",
        surface: "rgba(244, 251, 255, 0.52)",
      },
    },
    {
      id: "dj-shadow-midnight",
      artist: "DJ Shadow",
      title: "Midnight In a Perfect World",
      album: "Endtroducing.....",
      cover: "./assets/dj-shadow-midnight.jpg",
      serviceLabel: "Apple Music",
      serviceLink: "https://music.apple.com/us/album/midnight-in-a-perfect-world/1660485817?i=1660486423",
      theme: {
        background:
          "radial-gradient(circle at 50% 12%, rgba(212, 196, 255, 0.88), transparent 24%), linear-gradient(180deg, #efedf3 0%, #ddd9e4 38%, #888491 100%)",
        tint: "#c5aff7",
        surface: "rgba(248, 245, 255, 0.52)",
      },
    },
  ];

  const state = {
    trackId: "khruangbin-time-you-and-i",
    isPlaying: true,
    isSaved: false,
  };

  const appScreen = document.getElementById("app-screen");
  const playerView = document.getElementById("player-view");
  const trackSwitcher = document.getElementById("track-switcher");

  function currentTrack() {
    return tracks.find(function (track) {
      return track.id === state.trackId;
    });
  }

  function renderSwitcher() {
    trackSwitcher.innerHTML = tracks
      .map(function (track) {
        const active = track.id === state.trackId ? "is-active" : "";
        return `
          <button class="track-chip ${active}" type="button" data-track="${track.id}">
            <img src="${track.cover}" alt="${track.title} cover" />
            <span>${track.title}</span>
          </button>
        `;
      })
      .join("");
  }

  function renderPlayer() {
    const track = currentTrack();

    appScreen.style.setProperty("--screen-background", track.theme.background);
    appScreen.style.setProperty("--screen-tint", track.theme.tint);
    appScreen.style.setProperty("--screen-surface", track.theme.surface);

    playerView.innerHTML = `
      <div class="hero-art">
        <img class="hero-art__image" src="${track.cover}" alt="${track.title} cover" />
        <div class="hero-art__shade"></div>
      </div>

      <section class="bottom-panel">
        <div class="meta">
          <p class="meta__time">18:47</p>
          <h1>${track.title}</h1>
          <p class="meta__artist">${track.artist}</p>
        </div>

        <div class="progress-block">
          <div class="progress-bar">
            <span class="progress-bar__fill"></span>
          </div>
          <div class="progress-labels">
            <span>0:04</span>
            <span>-18:47</span>
          </div>
        </div>

        <div class="controls">
          <button class="icon-action" type="button" aria-label="Previous">
            ↺
          </button>

          <button class="play-button" type="button" data-action="toggle-play" aria-label="${state.isPlaying ? "Stop" : "Play"}">
            <span class="play-button__core">${state.isPlaying ? "■" : "▶"}</span>
          </button>

          <button class="icon-action" type="button" data-action="toggle-save" aria-label="${state.isSaved ? "Saved" : "Catch"}">
            ${state.isSaved ? "★" : "☆"}
          </button>
        </div>

        <a class="primary-link" href="${track.serviceLink}" target="_blank" rel="noreferrer">
          Open in ${track.serviceLabel}
        </a>
      </section>
    `;
  }

  function render() {
    renderPlayer();
    renderSwitcher();
  }

  document.addEventListener("click", function (event) {
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

    if (actionTarget.dataset.action === "toggle-play") {
      state.isPlaying = !state.isPlaying;
      renderPlayer();
      return;
    }

    if (actionTarget.dataset.action === "toggle-save") {
      state.isSaved = !state.isSaved;
      renderPlayer();
    }
  });

  render();
})();
