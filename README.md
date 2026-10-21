# Your Album App

A home-screen app for iPhone that plays your songs, works offline, and has
lock-screen controls (play/pause, next, previous, scrubbing).

## 1. Add your songs

1. Record in **Voice Memos** (or GarageBand). Share each memo → **Save to Files**, then copy it to your Mac.
2. Put the files in the `audio/` folder. `.m4a` or `.mp3` both work. Delete the placeholder `01/02/03.m4a`.
3. Open `album.js` and edit the title, artist name, dedication, and the `tracks` list
   (`file` must match the filename exactly, e.g. `audio/our-song.m4a`).
4. **Bump `version`** (1 → 2 → 3…) every time you change songs after you've installed it on a phone.

Tip: keep the whole album under ~100 MB so iPhone stores it offline without complaint.
Voice Memos files are small, so this is rarely a problem.

## 2. Add your cover art

Replace `cover.jpg` with a square image, then regenerate the app icons from it:

```bash
python3 make_cover.py --from-cover
```

Also change `"For You"` in `manifest.webmanifest` and the `<title>` /
`apple-mobile-web-app-title` lines in `index.html`. That's the name under the home-screen icon.

## 2b. The welcome gift + Wrapped slides

The first time the app opens, it shows a wrapped gift with a password box.
The right password unwraps it, then a Wrapped-style story plays before the album appears.
Edit `welcome` (name, password, hint) and `wrapped` (the slides) in `album.js`.

Each Wrapped slide is a memory: put your photos in the `memories/` folder (portrait
photos look best), point each slide's `photo` at one, and write its headline and caption.
Music doesn't start on its own. It plays only when they press play.

- After it has been unwrapped once, the app opens straight to the album.
- The gift icon at the top right of the album page plays the whole thing again.
- The password is a fun lock, not real security. Someone technical could find it in the files.

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
