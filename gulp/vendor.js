const concat = require('gulp-concat');

let jsVendors = [
	'./resources/front/vendor/js/jquery-3.4.1.min.js',
	'./resources/front/vendor/js/**/*.js',
];

let cssVendors = [
    './resources/front/vendor/styles/bootstrap-grid.css',
    './resources/front/vendor/styles/**/*.css',
];


module.exports = function(){

	$.gulp.task('vendor:js', () => {

        return $.gulp.src(jsVendors)
            .pipe(concat('vendor.js'))
            .pipe($.gulp.dest("./public/assets/js/"))

	});
	
	$.gulp.task('vendor:style', () => {

        return $.gulp.src(cssVendors)
            .pipe(concat('vendor.css'))
            .pipe($.gulp.dest("./public/assets/css/"))

    });

}