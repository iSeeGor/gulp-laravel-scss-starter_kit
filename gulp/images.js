const imagemin = require('gulp-imagemin'),
      imgRecompress = require('imagemin-jpeg-recompress'),
      cache = require('gulp-cache');


module.exports = function(){
    $.gulp.task('images:dev', () => {
        return $.gulp.src('./resources/front/images/**')
            .pipe($.gulp.dest('./public/assets/images'))
    });

    $.gulp.task('images:build', () => {
        return $.gulp.src('./resources/front/images/**')
            .pipe(cache(
                imagemin([
                    imgRecompress({
                        loops: 4,
                        min: 70,
                        max: 80,
                        quality: 'high'
                    }),
                    imagemin.gifsicle(),
                    imagemin.optipng(),
                    imagemin.svgo()
                ],

                {
                    verbose: true
            })))
        .pipe($.gulp.dest('./public/assets/images'))
    });

    $.gulp.task('icons', () => {
        return $.gulp.src('./resources/front/icons/**')
            .pipe(cache(
                imagemin([
                    imagemin.svgo(
                        // {
                        //     plugins: [
                        //         {removeViewBox: false}
                        //     ]
                        // }
                    )
                ])
            ))
        .pipe($.gulp.dest('./public/assets/icons'))
    });

};
