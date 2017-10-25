var nunjucks = require('nunjucks');


module.exports = nunjucks.FileSystemLoader.extend({
  init: function (extname, searchPaths, noWatch, noCache) {
    this.extname = extname;
    this.parent(searchPaths, {watch: !noWatch, noCache});
  },
  getSource: function (name) {
    return this.parent(name + this.extname);
  }
})
