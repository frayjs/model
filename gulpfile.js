var gulp = require('gulp');
var eslint = require('gulp-eslint');
var del = require('del');

gulp.task('clean', function () {
  return del(['tmp', 'dist']);
});

gulp.task('lint', ['clean'], function () {
  var sources = [
    'src/**/*.js',
    'test/**/*.js'
  ];

  return gulp.src(sources)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('scripts', ['lint'], function () {
  return gulp.src('src/**/*.js')
    .pipe(gulp.dest('tmp/build'));
});

gulp.task('build', ['scripts']);
gulp.task('test', ['build']);

gulp.task('dist', ['test'], function () {
  return gulp.src('tmp/build/**')
    .pipe(gulp.dest('dist'));
});
