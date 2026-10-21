// ───────────────────────────────────────────────────────────────
//  YOUR ALBUM — edit everything in here.
//  Put your recordings in the audio/ folder and list them below.
//  Bump `version` every time you change songs, so phones that already
//  installed the app download the new files.
// ───────────────────────────────────────────────────────────────
self.ALBUM = {
  version: 7,

  title: "For You",
  artist: "David",
  year: "2026",
  dedication: "Every song here was sung with you in mind.",
  cover: "cover.jpg",

  tracks: [
    {
      title: "等雨停",
      file: "audio/01.mp3",
      note: "",
      lyrics: "",
    },
    {
      title: "愛錯",
      file: "audio/02.mp3",
      note: "",
      lyrics: "",
    },
    {
      title: "Third Song",
      file: "audio/03.m4a",
      note: "A little thank-you.",
      lyrics: "",
    },
  ],

  // ── Welcome screen (the wrapped gift + password) ──
  welcome: {
    to: "Jiaqi",
    heading: "Something's waiting for you",
    password: "qiqienen",          // not case-sensitive
    hint: "David & Jiaqi",
  },

  // ── "Wrapped" story slides shown after unwrapping ──
  // One slide per memory. Put your photos in the memories/ folder
  // (portrait photos look best) and point `photo` at them.
  //   kicker = small line on top     big = the headline
  //   small  = caption underneath    date = little sticker on the photo
  // Leave out `photo` for a text-only slide. {to} and {artist} are filled in for you.
  // Colours: purple, lime, pink, orange, blue, red, green.
  wrapped: [
    { color: "purple", kicker: "Your 2026 Wrapped", big: "Hey {to}.", small: "We made a lot of memories this year. Let's look back." },
    { color: "lime",   photo: "memories/01.jpg", date: "Jan 2025", kicker: "Your #1 memory", big: "Our first date", small: "Where it all started." },
    { color: "pink",   photo: "memories/02.jpg", date: "Mar 2025", kicker: "Total length of our trip", big: "5 days", small: "…and somehow still not enough." },
    { color: "orange", photo: "memories/03.jpg", kicker: "Most-visited place", big: "That café", small: "Same order. Every single time." },
    { color: "blue",   photo: "memories/04.jpg", date: "Aug 2025", kicker: "Your #2 memory", big: "Getting lost together", small: "Best wrong turn we ever took." },
    { color: "green",  photo: "memories/05.jpg", kicker: "Photos taken", big: "1,284", small: "You approved 12 of them." },
    { color: "red",    type: "final", kicker: "And I made you something", button: "Open the album" },
  ],
};
