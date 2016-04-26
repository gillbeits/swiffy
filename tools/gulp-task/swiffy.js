/**
 * Created by gillbeits on 01.03.16.
 */
module.exports = function (gulp, $) {
  "use strict";

  gulp.task('swiffy', function () {
    return gulp.src('src/**/*.swf')
      .pipe($.swiffy())
      .pipe(gulp.dest('swiffy/'));
  });
};
