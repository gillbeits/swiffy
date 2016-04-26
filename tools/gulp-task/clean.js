/**
 * Created by gillbeits on 01.03.16.
 */
module.exports = function (gulp, $) {
  "use strict";

  var del = require('del');

  gulp.task('clean', function() {
    return del([
        'swiffy/'
      ], { force: true }
    );
  });
};
