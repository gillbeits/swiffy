/**
 * Created by gillbeits on 01.03.16.
 */
var
  taskPath = __dirname + '/tools/gulp-task/',
  gulp     = require('gulp'),
  plugins  = require('gulp-load-plugins')(),
  runSequence = require('run-sequence').use(gulp)
;

plugins.__runSequence = runSequence;

// jshint ignore: start
var fs = require('fs');
require.extensions[".json"] = function (m) {
  m.exports = JSON.parse(fs.readFileSync(m.filename));
};

require('fs').readdirSync(taskPath).forEach(function (taskFile) {
  require(taskPath + taskFile)(gulp, plugins);
});

gulp.task('default', function(cb){});
