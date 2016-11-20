# polyfills-service-webpack-plugin

Adds polyfills from [polyfill-service](https://github.com/Financial-Times/polyfill-service) to bundle file. Without magic.

(It is fork from Sl1v3r/webpack-polyfills-plugin)

## Usage:

* Fist Parameter is which you want to Polyfills
* Second Parameter is provide for customer config which file you do not want to Poly, If you not provide this parameter, All files will execute Poly. This must be a Regular Expression

```javascript
var PolyfillsPlugin = require('polyfills-service-webpack-plugin');

module.exports = {

   // ...

   plugins: [
      new PolyfillsPlugin([
         'Array/prototype/find',
         'fetch'
      ], /\.(css|scss)$/)
   ]
}
```

Benwei modified

```
npm install polyfills-service-webpack-plugin --save-dev
```
