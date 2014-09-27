var gulp       = require('gulp')
var livereload = require('gulp-livereload')
var rename     = require('gulp-rename')
var concat     = require('gulp-concat')
var stylus     = require('gulp-stylus')
var minify     = require('gulp-minify-css')
var uglify     = require('gulp-uglify')
var browserify = require('browserify')
var source     = require('vinyl-source-stream')
var gh_pages   = require('gulp-gh-pages')

var dest  = 'build'
var port  = 8003
var paths = {
    markup   : 'markup/**',
    graphics : 'graphics/**',
    styles   : 'styles/*.styl',
    scripts  : 'modules/**/*.js',
    entry    : './modules/entry.js',
    vendor   : './modules/vendor.js'
}

// BUILD STEPS

gulp.task('graphics', function () {
    return gulp.src(paths.graphics)
        .pipe(gulp.dest(dest+'/graphics'))
})

gulp.task('markup', function () {
    return gulp.src(paths.markup)
        .pipe(gulp.dest(dest))
})

gulp.task('stylus', function () {
    return gulp.src(paths.styles)
        .pipe(stylus())
        .pipe(minify())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(dest))
})

gulp.task('browserify',function () {
    return browserify(paths.entry, {
            insertGlobals : true,
            debug         : true
        })
        .external('react')
        .external('react/addons')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(dest))
})

gulp.task('browserify-vendor',function () {
    return browserify({
            insertGlobals : true,
            debug         : false
        })
        .require('react')
        .require('react/addons')
        .bundle()
        .pipe(source('vendor.js'))
        .pipe(gulp.dest(dest))
})

gulp.task('build', ['markup','graphics','stylus','browserify','browserify-vendor'])

// DEPLOY, SERVER & WATCH

gulp.task('deploy', ['build'], function () {
    return gulp.src(dest+'/**/*')
        .pipe(gh_pages({
            remoteUrl : 'git@github.com:nodeschool/stavanger.git',
            cacheDir : '/srv/stavanger-nodeschool-gh-pages'
        }))
})

gulp.task('server', function(next) {
  var connect = require('connect')
  var static  = require('serve-static')
  console.log('Listening on http://localhost:'+port)
  var server  = connect()
        .use(static(dest, { index : ['index.html'] }))
        .listen(port, next);
});

gulp.task('watch', ['build','server'], function() {
    var server = livereload();
    gulp.watch(paths.markup,  ['markup'])
    gulp.watch(paths.markup,  ['graphics'])
    gulp.watch(paths.styles,  ['stylus'])
    gulp.watch(paths.scripts, ['browserify'])
    gulp.watch(dest + '/**').on('change', function(file) {
        server.changed(file.path);
    });
});
