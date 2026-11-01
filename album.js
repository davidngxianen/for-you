// ───────────────────────────────────────────────────────────────
//  YOUR ALBUM — edit everything in here.
//  Put your recordings in the audio/ folder and list them below.
//  Bump `version` every time you change songs, so phones that already
//  installed the app download the new files.
// ───────────────────────────────────────────────────────────────
self.ALBUM = {
  version: 26,

  title: "献给妳的生日歌",
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
      title: "天后",
      file: "audio/03.mp3",
      note: "",
      lyrics: "",
    },
    {
      title: "連名帶姓",
      file: "audio/04.mp3",
      note: "",
      lyrics: "",
    },
    {
      title: "最后一页",
      file: "audio/05.mp3",
      note: "",
      lyrics: "",
    },
    {
      title: "如果愛忘了",
      file: "audio/06.mp3",
      note: "",
      lyrics: "",
    },
  ],

  // ── Welcome screen (the wrapped gift + password) ──
  welcome: {
    to: "Jiaqi",
    heading: "Something's waiting for you",
    password: "qiqienen",          // not case-sensitive
    hint: "David & Jiaqi",
    inside: "memories/collage.jpg",   // what the gift reveals (the album cover stays a surprise for the end)
  },

  // ── "Wrapped" story slides shown after unwrapping ──
  // One slide per memory. Put your photos in the memories/ folder
  // (portrait photos look best) and point `photo` at them.
  //   kicker = small line on top     big = the headline
  //   small  = caption underneath    date = little sticker on the photo
  // Leave out `photo` for a text-only slide. {to} and {artist} are filled in for you.
  // Add `square: true` for a square picture.
  // Colours: purple, lime, pink, orange, blue, red, green.
  wrapped: [
    { color: "purple", photo: "memories/collage.jpg", square: true, kicker: "Hey {to}, it's your Wrapped", big: "Memories of QiQi EnEn!", small: "Let's look back on our adventure." },
    { color: "orange", photo: "memories/halloween.jpg", date: "19 Oct 2025", kicker: "Our first Halloween", big: "2 little devils", small: "…and the first time we held hands. Who's scared now?" },
    { color: "pink",   photo: "memories/birthday.jpg", date: "27 Oct 2025", kicker: "Your first birthday with me", big: "Celebrated early", small: "Couldn't wait for the actual day, so we didn't." },
    { color: "blue",   photo: "memories/flight.jpg", date: "2 Jun 2026", kicker: "Altitude reached", big: "Wheels up!", small: "Our first time flying somewhere together. (Also: your face when the food arrived.)" },
    { color: "green",  photo: "memories/place.jpg", date: "9 Sep 2026", kicker: "Most memorable place", big: "This spot", small: "A place we'll always remember. You know exactly why." },
    { color: "lime",   photo: "memories/outfit.jpg", date: "10 Oct 2026", kicker: "Outfit rating", big: "10/10", small: "You look great in anything. Even a storeroom becomes your runway." },
    { color: "red",    type: "final", kicker: "And I made you something", button: "Open the album" },
  ],
};
