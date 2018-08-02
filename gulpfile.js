const gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    usemin = require('gulp-usemin'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['copy'], () => {
    gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function () {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', () => {

    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', () => {
    return gulp.src('dist/**/*.html')
        .pipe(usemin({
            js: [uglify],
            css: [autoprefixer, cssmin]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('workflow', () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/**/*').on('change', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src('src/sass/geral.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});