module.exports = function(){

	$.gulp.task('fonts', () => {
        return $.gulp.src('./resources/front/fonts/**')
            .pipe($.gulp.dest('./public/assets/fonts'))
    });
	
}