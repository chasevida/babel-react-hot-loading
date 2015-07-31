// gulp/tasks/lint-styles.js

var config = require('../config');
var errors = require('../utils/error-handler');
var gulp = require('gulp');
var lint = require('gulp-stylint');


gulp.task('lint:styles', function () {

    return gulp.src([config.paths.src + 'styles/**/*'])
        .on('error', errors)
        .pipe(lint({config: '.stylintrc'}));
});
