var gulp = require('gulp');
 
var compass = require('gulp-compass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browser = require("browser-sync");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

// compass
gulp.task('compass', function(){
    gulp.src('sass/**/*.scss')
    .pipe(compass({
        config_file: 'config.rb',
        css: 'stylesheets/',
        sass: 'sass/'
    }));
});
 
 
// css-min
gulp.task('cssmin', function () {
  gulp.src('stylesheets/*.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('cssmin'))
  .pipe(browser.reload({stream:true}))
});
 
 
 
/**
 * watch
 * watchでcompassを自動で書きだす
 */
 // Watch
gulp.task('watch', ['server'], function(){
    gulp.watch('sass/**/*.scss', function(event) {
        gulp.run('compass');
    });
    gulp.watch('stylesheets/**/*.css', function(event) {
        gulp.run('cssmin');
    });
});
  
gulp.task('default', function(){
    gulp.run('watch');
});