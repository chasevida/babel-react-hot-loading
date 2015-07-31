// gulp/tasks/webpack.js

var config = require('../../webpack');
var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');


gulp.task('webpack', function(done) {

    webpack(config, function(err) {

        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        done();
    })
});


gulp.task('webpack:server', function(done) {

    var compiler = webpack(config);

    new WebpackDevServer(compiler, config.server).listen(8080, "localhost", function(err) {

        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        done();
    });
});
