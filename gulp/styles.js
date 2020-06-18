const sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps = require('gulp-sourcemaps'),
      csscomb = require('gulp-csscomb'),
      rename = require("gulp-rename"),
      cleanCSS = require('gulp-clean-css');


module.exports = function(){
    $.gulp.task('styles:dev', () => {
        return $.gulp.src("./resources/front/scss/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                overrideBrowserslist:  ['last 4 versions'],
                cascade: false
            }))
            .pipe(csscomb())
            .pipe(sourcemaps.write('./'))
            .pipe($.gulp.dest("./public/assets/css"))
            .pipe($.browserSync.stream());       
    });

    $.gulp.task('styles:build', () => {
        return $.gulp.src("./resources/front/scss/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                overrideBrowserslist:  ['last 4 versions'],
                cascade: false
            }))
            .pipe(csscomb())     
            .pipe(sourcemaps.write('./'))
            .pipe($.gulp.dest("./public/assets/css"))
        
    });

    $.gulp.task('styles:min', () => {
        return $.gulp.src("./public/assets/css/*.css")
            .pipe(cleanCSS({
                level: 1 //Level: 0, 1, 2
            }))
            .pipe(rename({ suffix: '.min' }))
            .pipe($.gulp.dest("./public/assets/css")) 
    });

    $.gulp.task('styles:minMap', () => {
        return $.gulp.src("./resources/front/scss/*.scss")
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                overrideBrowserslist:  ['last 4 versions'],
                cascade: false
            }))
            .pipe(csscomb())
            .pipe(cleanCSS({
                level: 1 //Level: 0, 1, 2
            }))
            .pipe(rename({ suffix: '.min' }))     
            .pipe(sourcemaps.write('./'))
            .pipe($.gulp.dest("./public/assets/css"))
        
    })
};
