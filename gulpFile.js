const gulp = require("gulp"),
    connect = require('gulp-connect'),//服务器
    Proxy = require('gulp-connect-proxy')//服务器端口扩展
  

    //静态服务器
gulp.task('connect', function () {
    connect.server({
        root: './build',
        port: 6060,
        livereload: true,
        middleware: function (connect, opt) {

            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
        // middleware:function (connect,opt) {
        //     return[Proxy2('/server',{
        //         target: 'http://220.197.219.235:8089/YHPC/oneScreen/titleNum',
        //         // cookieDomainRewrite: { "unchanged.domain": "unchanged.domain", "old.domain": "new.domain", "*": "" }
        //         changeOrigin: true,
        //     })]
        //
        //
        // }
    });
});