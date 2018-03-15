const gulp = require('gulp');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');
const plugins = gulpLoadPlugins();

gulp.task('clean', function() {
    return del(['./inc/assets/dist']);
});

gulp.task('styles', () => {
    return gulp.src('./inc/assets/src/scss/**/*.scss')
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(gulp.dest('./inc/assets/dist/css'));
});

gulp.task('scripts', function() {
    return gulp.src('./inc/assets/src/js/**/*.js')
        .pipe(gulp.dest('./inc/assets/dist/js'))
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./inc/assets/dist/js'));
});

gulp.task('images', function() {
    return gulp.src('./inc/assets/src/images/**/*.jpg')
        .pipe(plugins.imagemin({ progressive: true }))
        .pipe(gulp.dest('./inc/assets/dist/images'));
});

gulp.task('watch', function() {
    gulp.watch('./inc/assets/src/scss/**/*.scss', ['styles']);
    gulp.watch('./inc/assets/src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});