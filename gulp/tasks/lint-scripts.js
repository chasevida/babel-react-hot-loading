// gulp/tasks/lint-scripts.js

var errors = require('../utils/error-handler');
var gulp = require('gulp');
var lint = require('gulp-eslint');
var logger = require('../utils/bundle-logger');


gulp.task('lint:scripts', function () {

    return gulp.src(['./src/scripts/**/*'])
        .pipe(lint())
        .pipe(lint.format());
});
