# Your Album App

A home-screen app for iPhone that plays your songs, works offline, and has
lock-screen controls (play/pause, next, previous, scrubbing).

## 1. Add your songs

1. Record in **Voice Memos** (or GarageBand). Share each memo → **Save to Files**, then copy it to your Mac.
2. Put the files in the `audio/` folder (`.m4a` or `.mp3`).
3. Open `album.js`. Each entry under `albums` is one album: title, artist, cover and its `tracks`
   (`file` must match the filename exactly, e.g. `audio/our-song.mp3`, and be unique across albums).
4. **Bump `version`** (1 → 2 → 3…) every time you change anything after the app is installed on a phone.

Tip: keep everything under ~100 MB so iPhone stores it offline without complaint.

## 2. Add your cover art

Replace `cover.jpg` with a square image, then regenerate the app icons from it:

```bash
python3 make_cover.py --from-cover
```

Also change the app name (now `"Little us"`) in `manifest.webmanifest` and the `<title>` /
`apple-mobile-web-app-title` lines in `index.html`. That's the name under the home-screen icon.

## 2b. The gift, stories and Archive

Each entry under `stories` in `album.js` is a Wrapped-style story that ends by revealing one album.

- **Logged out** (first install, or after Settings → Log out): the gift asks for the password, then plays the newest story.
- **Logged in:** a story that hasn't been seen yet opens on launch with an "Open it" button.
- **Library → Archive** (or Settings → Archive) replays any story straight from the unwrap animation, no password.

Put story photos in `memories/` (portrait looks best; `square: true` for square ones).
Music doesn't start on its own. The password is a fun lock, not real security.

Playlists are made on the phone itself (Library → +, or a song's ⋯ → Add to playlist) and are saved on that phone only. A playlist's ⋯ (in the Library or on its page) can change its picture to any photo, rename it or delete it.

## 3. Put it online (free, private link) – GitHub Pages

1. Make a free account at github.com → **New repository** (name it anything, e.g. `for-you`). It must be Public for free Pages.
   The link is unlisted, so nobody finds it unless you share it.
2. On the repo page: **Add file → Upload files** → drag in everything in this folder
   (`index.html`, `album.js`, `sw.js`, `manifest.webmanifest`, `cover.jpg`, the `icon-*.png` files, and the `audio/` folder).
3. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**
4. After a minute your link appears: `https://<username>.github.io/for-you/`

(Netlify Drop at app.netlify.com/drop also works: just drag the folder in.)

## 4. Install on their iPhone

1. Open the link in **Safari** (not Chrome or Instagram's browser).
2. Tap **Share → Add to Home Screen → Add**.
3. Open it from the new icon once while online. That downloads every song for offline listening.

Now it opens full-screen like an app. Lock the phone while it plays and the controls
and cover art appear on the lock screen and in Control Center.

## Try it on your Mac

```bash
python3 -m http.server 8765
```

Then open http://localhost:8765.
