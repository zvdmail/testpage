const gulp = require("gulp");
const plumber = require("gulp-plumber");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const del = require("del");
const sync = require("browser-sync").create();
const svgstore = require("gulp-svgstore");


// Style

const styles = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename("style.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}

const stylesmin = () => {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
}


// HTML

const html = () => {
  return gulp.src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}


// Scripts

const scripts = () => {
  return gulp.src("source/js/script.js")
    .pipe(uglify())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream());
}


// Images

const images = () => {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"))
}


// WebP

const createWebp = () => {
  return gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({ quality: 90 }))
    .pipe(gulp.dest("build/img"))
}


// Sprite

const sprite = () => {
  return gulp.src("source/img/icon/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
}


// Copy

const copy = (done) => {
  gulp.src([
    "source/fonts/*.{woff2,woff}",
    "source/*.ico",
    "source/img/**/*.{jpg,png,svg}",
    "source/*.html",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"))
  done();
}


// Clean

const clean = () => {
  return del("build");
};


// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}


// Reload

const reload = done => {
  sync.reload();
  done();
}


// Watcher

const watcher = () => {
  // gulp.watch("source/less/**/*.less", gulp.series(styles));
  gulp.watch("source/less/**", gulp.series(build, reload));
  gulp.watch("source/js/script.js", gulp.series(scripts));
  gulp.watch("source/*.html", gulp.series(html, reload));
}


// Build

const build = gulp.series(
  clean,
  gulp.parallel(
    styles,
    stylesmin,
    html,
    scripts,
    sprite,
    copy,
    images,
    createWebp
  ));


// Default

exports.default = gulp.series(
  clean,
  gulp.parallel(
    styles,
    stylesmin,
    html,
    scripts,
    sprite,
    copy,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  ));


exports.styles = styles;
exports.stylesmin = stylesmin;
exports.scripts = scripts;
exports.images = images;
exports.createWebp = createWebp;
exports.sprite = sprite;
exports.copy = copy;
exports.server = server;
exports.build = build;
