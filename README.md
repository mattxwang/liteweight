# liteweight

Forked from Matthew Wang's original [liteweight repo](https://github.com/malsf21/liteweight/) to learn sass. I tried to modularize the code and add more colour support, along with some more components.

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
sass --watch  liteweight.scss:liteweight.css
```

Once Finished
```
sass liteweight.scss liteweight.css --style=compressed
```
