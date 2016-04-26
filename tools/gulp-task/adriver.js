/**
 * Created by gillbeits on 01.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('adriver', function(cb) {
        return $.__runSequence('clean', 'unzip', 'swiffy', '__adriver', cb);
    });

    gulp.task('__adriver', function () {
        return gulp.src('swiffy/**/*.html')
            .pipe(require('through2').obj(function (file, enc, cb) {
                var content = file.contents.toString();
                file.contents = new Buffer(content.replace('</title>', "</title><script src='/html.js'></script><script>var link1 = encodeURIComponent(ar_redirect);</script>").replace('stage.start();', "stage.setFlashVars('link1='+link1);stage.start();"));
                this.push(file);
                cb();
            }))
            .pipe($.minifyHtml({ empty: true }))
            .pipe(gulp.dest('swiffy/'))
        ;
    });
};
