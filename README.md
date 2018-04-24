# liteweight

[![Build Status](https://travis-ci.org/malsf21/liteweight.svg?branch=gh-pages)](https://travis-ci.org/malsf21/liteweight)
[![GitHub Release](https://img.shields.io/github/release/malsf21/liteweight.svg)](https://github.com/malsf21/liteweight/releases)

liteweight is a really small CSS framework I made to help teach basic HTML, CSS, and maybe some SASS. It promotes clean, responsive design, but also is in no means perfect. It's just here to be small and educational. If you've got any pointers or bug fixes, PR's and forks are fully welcome.

## File Structure

Here's a general idea of each of the important files:

| File Name | Description |
|-----------|-------------|
| `dist/` | The folder that contains final distribution files, in `.css` and `.min.css` format |
| `liteweight.scss` | The SCSS file that compiles into `liteweight.css`.  |
| `liteweight-*.scss` | Theme SCSS files that compile into `theme/liteweight-*.css`. These are just some example themes; make your own! |
| `liteweight/*` | Individual components of liteweight, such as variables, buttons, and cards. |
| `theme/*` | Theme support components, such as variable and component overrides. |

## Development

We use [Grunt](https://gruntjs.com) to help us develop things!

First, we need to install our dependencies, using npm. 

```bash
$ git clone https://github.com/malsf21/liteweight.git
$ cd liteweight
$ npm install
```

Then, to compile `liteweight.scss` into some awesome, nicely minified code, run our `npm run build` command. This basically runs `grunt` (but might do more later).

```bash
$ npm run build
```

And now your code is nicely packaged in `dist/`! Awesome!
