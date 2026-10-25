# Blossom Within

The website for the Hindi YouTube channel [Blossom Within](https://www.youtube.com/@Blossomwithincreations) — stories from the Vedas and Upanishads.

## Editing the site

Almost everything you will want to change lives in one file:

```
src/data/content.js
```

That file holds the hero question, the scroll sequence, the video list, the
series list, and the channel links. The components read from it, so you can
change the site's content without touching any component code.

**To link a video directly**, put its 11-character YouTube id in the `id`
field. While `id` is `null`, that card links to the channel's video tab
instead.

**To link a playlist directly**, put its list id in the `listId` field.

**To change the front page question**, edit `hero.question`. A line break in
the string becomes a line break on the page.

## Running it

```bash
npm install
npm start      # development, http://localhost:3000
npm run build  # production bundle into build/
```

## Design notes

The design is built around two things the channel actually is: a series of
**questions**, and something made to be **heard** rather than watched.

- **Colour** comes from brahma muhurta, the hour before sunrise when
  recitation happened — deep indigo night (`--ink`) with a pale gold horizon
  (`--dawn`). Not the usual saffron.
- **Type** is Tiro Devanagari Hindi for display and Mukta for body. Both
  carry Devanagari and Latin in one voice, so Hindi headlines are set
  properly rather than falling back to a Latin face.
- **The descent** is the one piece of scroll-driven motion on the page:
  Yajnavalkya's answer to Shakalya falling from 3306 to one. Everything
  else stays still on purpose.
- **The thread** down the left edge stands for the unbroken guru–shishya
  line the Vedas travelled along. It lights as you read.

All tokens live at the top of `src/index.css`. Change them there and the
whole page follows.

Reduced motion is respected throughout: with it on, the scroll sequence
becomes a plain list and the reveals are switched off.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
app and copies `build/` to the EC2 box over SSH, then restarts nginx. The
host and the `EC2_SSH_KEY` secret are configured in the workflow and in the
repository settings.
