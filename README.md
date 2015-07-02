![preview](https://cloud.githubusercontent.com/assets/5093058/7192515/d6907e40-e4c8-11e4-9ba3-751befb3da8e.gif)

<sup>Preview is a bit oudated.</sup>

# Jumar's Tindahan
> A sample cart app written in Alt.

This project was mainly about trying out Flux (Thanks, Alt, this was easier with you), Immutable, and also an approach to placing css along with its respective components (check the components).

**Notes**:

- I think trying to check if a `Product` exists (by checking `index == -1` from `findIndex`) was useless. It was expected that no non-existent `Product` would be removed from `ProductStore`.
- Immutable data structures makes data easier to maintain and predict.
- LESS, as of this time of writing, does not support globbing in which I used [*less-plugin-glob*](https://github.com/just-boris/less-plugin-glob) by [**just-boris**](https://github.com/just-boris). I also had to `@import` the main files which is really tedious and non-dry, especially in actual projects.
- LESS's feat that [everything is a mixin](http://lesscss.org/features/#features-overview-feature-mixins) is pretty neat.
- Flux is so awesome.

**Tools**

- [React](https://facebook.github.io/react) - UI Library
- [Alt](https://alt.js.org) - Library based on Flux
- [Immutable.js](https://facebook.github.io/immutable-js) - Immutable persistent data collections for JS

## Local Setup

At this time of writing, this project requires **node** `>=v0.10` and **npm**.

```bash
git clone https://github.com/srph/jumars-tindahan && cd jumars-tindahan
npm install
npm run build
npm run style
open index.html
```

## Acknowledgement

**Jumar's Tindahan** © 2015+, Kier Borromeo (srph). **Jumar's Tindahan** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
