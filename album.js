// ───────────────────────────────────────────────────────────────
//  YOUR APP — edit everything in here.
//  Put recordings in the audio/ folder and list them under an album.
//  Bump `version` every time you change anything, so phones that already
//  installed the app download the new files.
// ───────────────────────────────────────────────────────────────
self.APP = {
  version: 30,

  // ── Log-in screen (the wrapped gift + password) ──
  welcome: {
    to: "Jiaqi",
    heading: "Something's waiting for you",
    password: "qiqienen",          // not case-sensitive
    hint: "David & Jiaqi",
  },

  // ── Albums ── (each song's `file` must be unique across all albums)
  albums: [
    {
      id: "birthday",
      title: "献给妳的生日歌",
      artist: "David",
      year: "2026",
      dedication: "Every song here was sung with you in mind.",
      cover: "cover.jpg",          // plus a 512px copy named cover-512.jpg for the lock screen
      tracks: [
        { title: "等雨停", file: "audio/01.mp3" },
        { title: "愛錯", file: "audio/02.mp3" },
        { title: "天后", file: "audio/03.mp3" },
        { title: "連名帶姓", file: "audio/04.mp3" },
        { title: "最后一页", file: "audio/05.mp3" },
        { title: "如果愛忘了", file: "audio/06.mp3" },
        { title: "碎碎念", file: "audio/07.mp3" },
        { title: "折起的遗憾", file: "audio/08.mp3" },
        { title: "所以我只想对你说", file: "audio/09.mp3" },
        { title: "對等關係 (feat. 黄献恩)", file: "audio/10.mp3" },
      ],
    },
    {
      id: "shiyi",
      title: "十一如一",
      artist: "David",
      year: "2026",
      dedication: "Eleven months in, and it still feels like day one.",
      cover: "covers/shiyi.jpg",   // plus covers/shiyi-512.jpg
      tracks: [
        { title: "怎麼了", file: "audio/shiyi/01.mp3" },
        { title: "至少我還記得", file: "audio/shiyi/02.mp3" },
        { title: "我很快樂", file: "audio/shiyi/03.mp3" },
      ],
    },
  ],

  // ── Stories (Wrapped-style slides), oldest first ──
  // The newest one plays the next time the app opens; all of them live in
  // Library → Archive afterwards. Each one ends by revealing its `album`.
  //   kicker = small line on top     big = the headline
  //   small  = caption underneath    date = little sticker on the photo
  // Leave out `photo` for a text-only slide. Add `square: true` for a square picture.
  // {to} = her name · {days} = days from `since` to `months` later
  // Colours: purple, lime, pink, orange, blue, red, green.
  stories: [
    {
      id: "birthday",
      title: "Memories of QiQi EnEn",
      label: "Birthday 2026",
      album: "birthday",
      gift: { opened: "It's all yours, {to}.", inside: "memories/collage.jpg" },
      slides: [
        { color: "purple", photo: "memories/collage.jpg", square: true, kicker: "Hey {to}, it's your Wrapped", big: "Memories of QiQi EnEn!", small: "Let's look back on our adventure." },
        { color: "orange", photo: "memories/halloween.jpg", date: "19 Oct 2025", kicker: "Our first Halloween", big: "2 little devils", small: "…and the first time we held hands. Who's scared now?" },
        { color: "pink",   photo: "memories/birthday.jpg", date: "27 Oct 2025", kicker: "Your first birthday with me", big: "Celebrated early", small: "Couldn't wait for the actual day, so we didn't." },
        { color: "blue",   photo: "memories/flight.jpg", date: "2 Jun 2026", kicker: "Altitude reached", big: "Wheels up!", small: "Our first time flying somewhere together. (Also: your face when the food arrived.)" },
        { color: "green",  photo: "memories/place.jpg", date: "9 Sep 2026", kicker: "Most memorable place", big: "This spot", small: "A place we'll always remember. You know exactly why." },
        { color: "lime",   photo: "memories/outfit.jpg", date: "10 Oct 2026", kicker: "Outfit rating", big: "10/10", small: "You look great in anything. Even a storeroom becomes your runway." },
        { color: "purple", kicker: "That's a wrap!", big: "Hope you enjoyed it!", small: "Our mini memory album story. Starring: you. Directed by: me. Sequel: already in production." },
        { color: "blue",   kicker: "Come closer…", big: "Psssssst…", small: "I know what you've been wishing for…" },
        { color: "red",    type: "final", kicker: "…a whole album, sung just for you", button: "Open the album" },
      ],
    },
    {
      id: "monthsary-11",
      title: "Happy 11 monthsary",
      label: "11 monthsary",
      album: "shiyi",
      since: "2025-10-05",           // the day we got together
      months: 11,                    // {days} counts from `since` to this many months later
      gift: { heading: "Something new is waiting for you", opened: "Happy 11 monthsary, {to}!", inside: "memories/11/first.jpg" },
      slides: [
        { color: "pink",   photo: "memories/11/first.jpg", square: true, kicker: "Hey {to}, it's your 11-month Wrapped", big: "Happy 11 monthsary!", small: "Eleven months of us. Let's see how we did." },
        { color: "lime",   kicker: "Time spent together", big: "{days} days", small: "…and I'd happily do every single one again." },
        { color: "orange", photo: "memories/11/top.jpg", kicker: "Top memory this month (for now)", big: "Your 28th birthday", small: "The night you opened my present and cried. Happy tears only (I checked)." },
        { color: "blue",   kicker: "Most-said phrase", big: "“你要睡觉了吗?”", small: "Said roughly a million times. Still fun every time." },
        { color: "green",  photo: "memories/11/spot.jpg", kicker: "Our most-visited spot", big: "Massage places", small: "We say it's for our sore backs. It's 100% for the matching robes." },
        { color: "purple", kicker: "Things I love about you", big: "Too many to count", small: "But today it's everything, everything and everything." },
        { color: "orange", kicker: "Coming up next", big: "Month 12", small: "One more month and it's a whole year. I can't wait." },
        { color: "blue",   kicker: "Eleven months in, and it still feels like…", big: "Day one.", small: "So I put it into songs…" },
        { color: "red",    type: "final", kicker: "…a brand-new album, just for you", button: "Open the album" },
      ],
    },
  ],
};
