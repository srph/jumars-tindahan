# jumars-tindahan
> A sample cart app written in Alt.

This was originally named **alt-cart**, but later changed to the current because is sounded too generic. Few things you will find in the source code is shit coding (yes), and weird stuff. The css file (LESS) found in the along with the `Cart` component does is one example. At the time I was compiling the LESS files, I have no further proof (nor do I know much about file systems and what node or LESS does), but it was obvious that the file being compiled was the from cache.

## Tools

Mainly about testing Flux (Thanks, Alt, this was easier with you), Immutable, and also an approach to placing css along with its respective components (check the components).

- [React](https://facebook.github.io/react)
- [Alt](https://alt.js.org)
- [ImmutableJS](https://facebook.github.io/immutable-js)

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

**jumars-tindahan** © 2015+, Kier Borromeo (srph). **jumasrs-tindahan** is released under the [MIT](mit-license.org) license.

> [srph.github.io](http://srph.github.io) &nbsp;&middot;&nbsp;
> GitHub [@srph](https://github.com/srph) &nbsp;&middot;&nbsp;
> Twitter [@_srph](https://twitter.com/_srph)
