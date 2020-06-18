const concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      babel = require("gulp-babel");

const jsFiles = [
    './resources/front/js/main.js',
    './resources/front/js/components.js',
    './resources/front/js/mobile.js',
    './resources/front/js/home.js',
    './resources/front/js/transfer.js',
    './resources/front/js/blog.js',

]

module.exports = function(){

    $.gulp.task('js:dev', () =>{

        return Promise.all([
            $.gulp.src(jsFiles)
            .pipe(concat('scripts.js'))
            .pipe($.gulp.dest("./public/assets/js"))
            .pipe($.browserSync.stream()),
        ]);

    });

    $.gulp.task('js:build', () =>{

        return Promise.all([
            $.gulp.src("./resources/front/js/scripts.js")
            .pipe(babel())
            .pipe(uglify())
            .pipe($.gulp.dest("./public/assets/js")),
            
            $.gulp.src("./resources/front/js/vendor/**/*.js")
            .pipe(concat('vendor.js'))
            .pipe($.gulp.dest("./public/assets/js/vendor"))
        ]);

    });

};