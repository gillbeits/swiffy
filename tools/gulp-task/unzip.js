/**
 * Created by gillbeits on 17.02.16.
 */

module.exports = function (gulp, $) {
  "use strict";

  var through2    = require('through2'),
      AdmZip      = require('adm-zip'),
      path        = require('path'),
      fs          = require('fs')
  ;

  gulp.task('unzip', function() {

    return gulp.src('src/**/*.zip')
      .pipe($.plumber())
      .pipe(through2.obj(function (file, enc, cb) {
        var
          self = this,
          zip = new AdmZip(file.contents),
          zipEntries = zip.getEntries(),
          zipFileName = file
          ;

        zipEntries.forEach(function(zipEntry) {
          var dirName, zipDirName, fileName, pathName, _ref;

          zipDirName = path.basename(zipFileName.path, path.extname(zipFileName.path));

          if (zipEntry.isDirectory) return;

          pathName = zipEntry.entryName;
          dirName = (_ref = path.dirname(pathName).match(/\/([^\/]*)$/)) != null ? _ref[1] : void 0;
          fileName = path.basename(pathName);

          var file = new $.util.File({
            path: zipDirName + '/' + (dirName ? dirName : '') + fileName,
            contents: zipEntry.getData()
          });
          self.push(file);
        });
        cb();
      }))
      .pipe(gulp.dest('src/'))
    ;
  });
};
