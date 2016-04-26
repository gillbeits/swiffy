/**
 * Created by gillbeits on 02.03.16.
 */
module.exports = function (gulp, $) {
    "use strict";

    gulp.task('avito', function(cb) {
        return $.__runSequence('clean', 'unzip', 'swiffy', cb);
    });

};
