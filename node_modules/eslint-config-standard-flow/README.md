# Standard Flow - ESLint Shareable Config
[![travis][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

[travis-image]: https://img.shields.io/travis/Gozala/eslint-config-standard-flow/master.svg
[travis-url]: https://travis-ci.org/Gozala/eslint-config-standard-flow
[npm-image]: https://img.shields.io/npm/v/eslint-config-standard-flow.svg
[npm-url]: https://npmjs.org/package/eslint-config-standard-flow
[downloads-image]: https://img.shields.io/npm/dm/eslint-config-standard-flow.svg
[downloads-url]: https://npmjs.org/package/eslint-config-standard-flow

#### An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for Flow support in [JavaScript Standard Style](https://github.com/feross/standard)

This module is for advanced users. You probably want to use [`standard-flow`](https://github.com/Gozala/standard-flow) instead :)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Install

```bash
npm install eslint-config-standard-flow
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

This Shareable Config adds Flow to the baseline JavaScript Standard Style rules provided in `eslint-config-standard`.

Here's how to install everything you need:

```bash
npm install eslint-config-standard eslint-config-standard-flow
```

Then, add this to your .eslintrc file:

```
{
  "extends": ["standard", "standard-flow"]
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

### Looking for something easier than this?

The easiest way to use JavaScript Standard Style with Flow is to use the [`standard-flow`](https://github.com/Gozala/standard-flow) package. This comes with a global Node command line program (`standard`) that you can run or add to your `npm test` script to quickly check your style.

## Badge

Use this in one of your projects? Include one of these badges in your readme to let people know that your code is using the standard style.

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

```markdown
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)
```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

```markdown
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
```

## Learn more

For the full listing of rules, editor plugins, FAQs, and more, visit the main
[JavaScript Standard Style repo](https://github.com/feross/standard).
