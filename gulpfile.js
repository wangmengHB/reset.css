const { src, dest, parallel } = require('gulp');
const minifyCSS = require('gulp-csso');
const rename = require('gulp-rename');

const name = 'util.css';

function css() {
  return src(name)
    .pipe(rename({suffix: ".min"}))
    .pipe(minifyCSS())
    .pipe(dest('./'))
}

exports.css = css;
exports.default = parallel(css);