require('@superflycss/task-clean');
require('@superflycss/task-build');
require('@superflycss/task-test');
require('@superflycss/task-lint');


var PLI = require('@superflycss/pli');

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch(PLI.SRC_MAIN_CSS, ['build:css']);
  gulp.watch(PLI.SRC_TEST_CSS, ['build:css']);
  gulp.watch(PLI.SRC_TEST_HTML, ['test:css']);
});
