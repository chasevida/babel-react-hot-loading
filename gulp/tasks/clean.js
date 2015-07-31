// gulp/tasks/clean.js

var config = require('../config');
var errors = require('../utils/error-handler');
var gulp   = require('gulp');
var shell  = require('gulp-shell');


gulp.task('clean', function () {

    return gulp.src( [config.paths.build, config.paths.dist], { read: false } )
        .on('error', errors)
        .pipe(shell([
            'rm -rf ' + config.paths.build,
            'rm -rf ' + config.paths.dist
        ]));
});
