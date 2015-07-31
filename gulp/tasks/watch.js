// gulp/tasks/watch.js

var globs = require('../config').globs;
var gulp = require('gulp');
var watch = require('gulp-watch');


var watcher = function(glob, task) {

    var isInitial = true;

    gulp.src('./src')
        .pipe(watch(glob, function() {

            if ( ! isInitial) {
                gulp.start(task);
            }
            isInitial = false;
        }));
};

// Watch

gulp.task('watch', function() {

    watcher(globs.styles,  ['styles']);
});
