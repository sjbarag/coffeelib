# Runtime
`coffeelib` is a runtime library for [CoffeeScript](http://coffeescript.org) that contains all of
the CoffeeScript helper functions, so that they don't have to be re-defined for every compiled
CoffeeScript file. It's heavily inspired by TypeScript's [tslib](https://github.com/Microsoft/tslib).

# Installation
```
npm install --save tslib
```

# Getting Started
You probably don't want to use this module directly, but instead want CoffeeScript's compiled output
to use it.  Execute a script using helper functions from this module:

```
coffee --import-helpers /path/to/script.coffee
```

or set the `--import-helpers` compiler option on the CoffeeScript command line to output a
JavaScript file that uses helper functions from this module:

```
coffee -c --import-helpers /path/to/script.coffee
```
