# koa-nunjucks

Nunjunks rendering middleware for koa


## Usage

```
var nj = require('koa-nunjucks');
var koa = require('koa');

var app = koa();
app.use(nj({
  extname: '.tpl',
  views: './views'
  //other nunjunks options can be assigned here for nunjunks.Environment obj
}));
```


## License
MIT
