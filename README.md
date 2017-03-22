# liteweight

[![Build Status](https://travis-ci.org/malsf21/liteweight.svg?branch=master)](https://travis-ci.org/malsf21/liteweight)

liteweight is a really small CSS framework I made to help teach basic HTML, CSS, and maybe some SASS. It promotes clean, responsive design, but also is in no means perfect. It's just here to be small and educational. If you've got any pointers or bug fixes, PR's and forks are fully welcome.

## File Structure

Here's a general idea of each of the important files:

| File Name | Description |
|-----------|-------------|
| `dist/` | The folder that contains final distribution files, in `.css` and `.min.css` format |
| `lightweight.scss` | The SCSS file that compiles into `lightweight.css`.  |
| `lightweight/*` | The files that are imported into `lightweight.scss`. To change colours and general theme edit `variables.scss` |

## Development

We use [Grunt](https://gruntjs.com) to help us develop things!

First, we need to install our dependencies, using npm.

```bash
$ npm install
```

Then, to compile `liteweight.scss` into some awesome, nicely minified code, run our default grunt task.

```bash
$ grunt
```

And now your code is nicely packaged in `dist/`! Awesome!

## Notes

There are a few undocumented things that we're still working on polishing. For reference, they are:
* Themes
* Dropdowns and navs
* Text utilities (font-size)
* Image manipulation
