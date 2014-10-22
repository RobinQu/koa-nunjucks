var nunjucks = require("nunjucks");

var NJ = function() {};

NJ.prototype.createRender = function(ctx, options) {
  nunjucks.configure(options.views, options.nunjucks);
};

NJ.prototype.middleware = function(options) {
  var self = this;
  return function*(next) {
    if(!this.render) {
      this.render = self.createRender(this, options);
    }
    yield next;
  };
};

module.exports = new NJ();