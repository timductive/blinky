var dirs,
    gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    concat  = require('gulp-concat');

dirs = {
  js: {
    filename: 'blinky.js',
    dest: 'assets/js',
    src: [
      'bower_components/fastclick/lib/fastclick.js',
      'bower_components/modernizr/modernizr.js',
      'bower_components/foundation/js/foundation/foundation.js',
      'js/*.js'
    ]
  },
  assests: {
    css: 'assets/css'
  },
  sass: {
    base: 'sass',
    src: 'sass/blinky.scss',
    libs: [
      'bower_components/foundation/scss/',
      'bower_components/fontawesome/scss/'
    ]
  }
};

// compile sass files
gulp.task('sass', function () {
  return gulp.src(dirs.sass.src)
    .pipe(sass({ includePaths: dirs.sass.libs,
      style: 'expended',
      quite: true,
      cacheLocation: dirs.sass.base }))
    .pipe(gulp.dest(dirs.assests.css));
});

// compile js files
gulp.task('js', function () {
  return gulp
    .src(dirs.js.src)
    .pipe(concat(dirs.js.filename))
    .pipe(gulp.dest(dirs.js.dest));
});

// watch scss and js files
gulp.task('watch', function () {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
});

// execute while developing
gulp.task('develop', function () {
  gulp.start('sass', 'js', 'watch');
});
