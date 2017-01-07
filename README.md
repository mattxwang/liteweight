# liteweight

liteweight is a really small CSS framework I made to help teach basic HTML, CSS, and maybe some SASS. It promotes clean, responsive design, but also is in no means perfect. It's just here to be small and educational. If you've got any pointers or bug fixes, PR's and forks are fully welcome.

## File Structure

Here's a general idea of each of the important files:

| File Name | Description |
|-----------|-------------|
| `lightweight.css` | The one CSS file you need. Compiled from `lightweight.scss`. Use this for distribution/download. |
| `lightweight.scss` | The SCSS file that compiles into `lightweight.css`.  |
| `SCSS/*` | The files that are imported into `lightweight.scss`. To change colours and general theme edit `variables.scss` |

## Useful Commands

While editing
```
sass --watch  liteweight.scss:css/liteweight.css
```

To Minfiy your CSS
```
sass liteweight.scss css/liteweight.css --style=compressed
```
