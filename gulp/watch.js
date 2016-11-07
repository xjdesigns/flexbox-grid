var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
gulp.task('watch', ['sass', 'html'], function () {
    browserSync({
      server: './',
      browser: "google chrome",
      ui: {
        port: 8080
      }
    });

    watch('./scss/**/*.scss', function(){
      gulp.start('sass');
    });
    watch('./*.html', function(){
      gulp.start('html');
    });
});
