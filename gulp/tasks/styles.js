// gulp/tasks/styles.js

var autoprefixer = require('autoprefixer-core');
var axis = require('axis');
var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var filter = require('gulp-filter');
var errors = require('../utils/error-handler');
var nib = require('nib');
var postcss = require('gulp-postcss');
var reload = require('browser-sync').reload;
var rupture = require('rupture');
var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');


// Styles

gulp.task('styles', function () {

    var stylusOptions = {
        compress: !config.env.development ? true : false,
        use: [nib(), rupture(), axis()]
    };

    var processors = [
        autoprefixer({browsers: 'last 2 versions, > 5%, ie 9'})
    ];

    return gulp.src(config.paths.src + 'styles/style.styl')
        .pipe(gulpif(config.env.development, sourcemaps.init()))
        .pipe(stylus(stylusOptions))
        .pipe(postcss(processors))
        .pipe(gulpif(config.env.development, sourcemaps.write('.')))
        .on('error', errors)
        .pipe(gulp.dest( config.paths.build + 'css/'))
        .pipe(filter('**/*.css'))
        .pipe(reload({stream: true}));

});
