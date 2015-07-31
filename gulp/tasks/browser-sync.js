// gulp/tasks/browser-sync.js

var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');


gulp.task('browser-sync', function() {

    var proxyPath = config.url.domain + ':' + config.url.port;

    browserSync({
        proxy: proxyPath,
        notify: false
    });
});
