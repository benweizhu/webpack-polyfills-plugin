var ConcatSource = require("webpack-core/lib/ConcatSource");
var fs = require("fs");

function PolyfillsPlugin(polyfills, exclude) {
    this.polyfills = polyfills || [];
    this.exclude = exclude;
}

module.exports = PolyfillsPlugin;

PolyfillsPlugin.prototype.apply = function(compiler) {

    var filesContent = "";

    this.polyfills.forEach(function(polyfill) {
        var filePath = require.resolve("./polyfills/" + polyfill + "/polyfill");
        if (filePath) {
            filesContent += fs.readFileSync(filePath, { encoding: 'utf8' });
        }
    });
    var exclude = this.exclude;

    compiler.plugin("compilation", function(compilation) {
        compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
            chunks.forEach(function(chunk) {
                if(!chunk.isInitial()) return;
                chunk.files.forEach(function(file, i) {
                  if(!file.match(exclude)){
                    compilation.assets[file] = new ConcatSource("/* Polyfills */\n", filesContent, compilation.assets[file]);
                  }
                });
            });
            callback();
        });
    });
};
