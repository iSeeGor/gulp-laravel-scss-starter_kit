const assets = ['public/assets/**/*'];
const images = ['public/assets/**/*', '!assets/vendor'];

module.exports = () => {
    $.gulp.task('clean', function () {
        return $.del(assets);
    })
}