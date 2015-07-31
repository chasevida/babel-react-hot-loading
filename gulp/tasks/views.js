// gulp/tasks/views.js

var config = require('../config');
var gulp   = require('gulp');


gulp.task('views', function () {

    return gulp.src(config.paths.src + 'views/**/*')
        .pipe(gulp.dest(config.paths.build));
});
