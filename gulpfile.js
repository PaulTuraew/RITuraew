var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', function () {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: "./",
      index: 'index.html'
    }
  });

  // watch for changes
  gulp.watch([
    '*.html', 'css/*.css', 'js/*.js'
  ]).on('change', reload);

});
