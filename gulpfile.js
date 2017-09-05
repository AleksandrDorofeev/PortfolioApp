let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
        .pipe (sass())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: "public"
    },
    notify: false
  })
});

gulp.task('watch',['serve', 'sass'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass'])
  gulp.watch('public/*.html', browserSync.reload)
  gulp.watch('public/index.html', browserSync.reload)
});

gulp.task('default', ['watch']);
