(function () {
  const tracks = [
    {
      id: "tycho-awake",
      artist: "Tycho",
      title: "Awake",
      album: "Awake",
      cover: "../concept-02/assets/tycho-awake.jpg",
      link: "https://music.apple.com/us/album/awake/793928184?i=793928278",
      theme: {
        accent: "#9fdcff",
        glow: "rgba(159, 220, 255, 0.34)",
        bg: "linear-gradient(180deg, #eef1f2 0%, #dce1e6 34%, #8f97a0 100%)",
      },
    },
    {
      id: "bonobo-kerala",
      artist: "Bonobo",
      title: "Kerala",
      album: "Migration",
      cover: "../concept-02/assets/bonobo-kerala.jpg",
      link: "https://music.apple.com/us/album/kerala/1169245868?i=1169246072",
      theme: {
        accent: "#ffcc93",
        glow: "rgba(255, 204, 147, 0.32)",
        bg: "linear-gradient(180deg, #f2efeb 0%, #e3d9ce 34%, #98908c 100%)",
      },
    },
    {
      id: "khruangbin-time-you-and-i",
      artist: "Khruangbin",
      title: "Time (You and I)",
      album: "Mordechai",
      cover: "../concept-02/assets/khruangbin-time-you-and-i.jpg",
      link: "https://music.apple.com/us/album/time-you-and-i/1501585499?i=1501585505",
      theme: {
        accent: "#f39abc",
        glow: "rgba(243, 154, 188, 0.34)",
        bg: "linear-gradient(180deg, #f3efec 0%, #e0d0c8 34%, #978b87 100%)",
      },
    },
    {
      id: "tourist-elixir",
      artist: "Tourist",
      title: "Elixir",
      album: "Wild",
      cover: "../concept-02/assets/tourist-elixir.jpg",
      link: "https://music.apple.com/us/album/elixir/1480919558?i=1480919573",
      theme: {
        accent: "#83d2ff",
        glow: "rgba(131, 210, 255, 0.30)",
        bg: "linear-gradient(180deg, #eef2f1 0%, #d9e0e2 34%, #8b939a 100%)",
      },
    },
    {
      id: "dj-shadow-midnight",
      artist: "DJ Shadow",
      title: "Midnight In a Perfect World",
      album: "Endtroducing.....",
      cover: "../concept-02/assets/dj-shadow-midnight.jpg",
      link: "https://music.apple.com/us/album/midnight-in-a-perfect-world/1660485817?i=1660486423",
      theme: {
        accent: "#cab0ff",
        glow: "rgba(202, 176, 255, 0.34)",
        bg: "linear-gradient(180deg, #eeedf1 0%, #d9d6df 34%, #8a8892 100%)",
      },
    },
  ];

  const state = {
    trackId: "khruangbin-time-you-and-i",
    isPlaying: true,
    isSaved: false,
  };

  const screen = document.getElementById("screen");
  const hero = document.getElementById("hero");
  const trackPicker = document.getElementById("track-picker");

  function currentTrack() {
    return tracks.find(function (track) {
      return track.id === state.trackId;
    });
  }

  function renderPicker() {
    trackPicker.innerHTML = tracks
      .map(function (track) {
        const active = track.id === state.trackId ? "is-active" : "";
        return `
          <button class="track-option ${active}" data-track="${track.id}">
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

  function applyTheme(track) {
    screen.style.setProperty("--accent", track.theme.accent);
    screen.style.setProperty("--glow", track.theme.glow);
    screen.style.setProperty("--screen-bg", track.theme.bg);
  }

  function renderHero() {
    const track = currentTrack();
    applyTheme(track);

    hero.innerHTML = `
      <div class="object">
        <div class="object__halo"></div>

        <div class="topline">
          <img class="brand" src="../concept-02/assets/RFlogo.jpg" alt="Rare Fish logo" />
        </div>

        <div class="cover-wrap">
          <img class="cover" src="${track.cover}" alt="${track.title} cover" />
        </div>

        <div class="meta">
          <p class="artist">${track.artist}</p>
          <h1>${track.title}</h1>
          <p class="album">${track.album}</p>
        </div>

        <div class="controls">
          <button class="ghost-control" data-action="toggle-save">
            ${state.isSaved ? "Saved" : "Catch"}
          </button>

          <button class="play-control" data-action="toggle-play" aria-label="${state.isPlaying ? "Stop" : "Play"}">
            <span class="play-control__core">${state.isPlaying ? "Stop" : "Play"}</span>
          </button>

          <a class="ghost-control" href="${track.link}" target="_blank" rel="noreferrer">
            Open
          </a>
        </div>
      </div>
    `;
  }

  function render() {
    renderPicker();
    renderHero();
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
      renderHero();
      return;
    }

    if (actionTarget.dataset.action === "toggle-save") {
      state.isSaved = !state.isSaved;
      renderHero();
    }
  });

  render();
})();
