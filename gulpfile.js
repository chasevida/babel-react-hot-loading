// gulpfile.js

var gulp = require('gulp');
var requireDir = require('require-dir');
var sequence = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

gulp.task('default', function(done) {

    sequence([
        'clean'
    ], [
        'views',
        'styles',
        'webpack',
        'webpack:server'
    ], [
        'browser-sync',
        'watch'
    ], done);
});

gulp.task('lint', ['lint:scripts', 'lint:styles']);
