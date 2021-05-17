let project_folder = 'dist'
let source_folder = 'src'

let fs = require('fs')

let path = {
   build: {
      css: project_folder + '/css/',
      js: project_folder + '/js/',
      img: project_folder + '/img/',
      fonts: project_folder + '/fonts/',
   },
   src: {
      css: source_folder + '/scss/style.scss',
      js: source_folder + '/js/script.js',
      img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
      fonts: source_folder + '/fonts/*',
   },
   watch: {
      css: source_folder + '/**/*.scss',
      js: source_folder + '/js/**/*.js',
      img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
      hbs: source_folder + '/**/**/*.hbs'
   },
   clean: './' + project_folder + '/'
}

let {src, dest} = require('gulp'), // Плагины
   gulp = require('gulp'),
   browsersync = require('browser-sync').create(),
   fileinclude = require('gulp-file-include'),
   del = require('del'),
   scss = require('gulp-sass'),
   autoprefixer = require('gulp-autoprefixer'),
   group_media = require('gulp-group-css-media-queries'),
   clean_css = require('gulp-clean-css'),
   rename = require('gulp-rename'),
   uglify = require('gulp-uglify-es').default,
   imagemin = require('gulp-imagemin'),
   handlebars = require('gulp-compile-handlebars'),
   gulp_data = require('gulp-data')


// шаблонизатор handlebars
function hbs() {
   var templateData = {
         // countGreen: []
      },
      options = {
         ignorePartials: true, //ignores the unknown footer2 partial in the handlebars template, defaults to false
         batch: ['./src/components', './src/components/modals'],
         helpers: require('./src/js/helpers')
      }

   return gulp.src('src/index.hbs')
      // подключить json
      .pipe(gulp_data(function () {
         const tariffs = require( './src/json/tariffs' )
         const performance = require( './src/json/performance' )
         const info = require( './src/json/info' )
         const cities = require( './src/json/cities' )
         const unite = require( './src/json/unite' )

         return {tariffs, performance, info, cities, unite}
      }))
      .pipe(handlebars(templateData, options))
      .pipe(rename('index.html'))
      .pipe(fileinclude())
      .pipe(gulp.dest('dist'))
      .pipe(browsersync.stream())
}

function browserSync() {
   browsersync.init({
      server: {
         baseDir: './' + project_folder + '/'
      },
      port: 3000,
      notify: false
   })
}

function css() { // работа с scss
   return src(path.src.css)
      .pipe(
         scss({
            outputStyle: 'expanded'
         })
      )
      .pipe(autoprefixer({
         overrideBrowserslist: ['last 5 version'],
         cascade: true
      }))
      .pipe(group_media())
      .pipe(dest(path.build.css))
      .pipe(clean_css())
      .pipe(rename({
            extname: '.min.css'
         }
      ))
      .pipe(dest(path.build.css))
      .pipe(browsersync.stream())
}

function js() { // работа с js
   return src(path.src.js)
      .pipe(fileinclude())
      .pipe(dest(path.build.js))
      .pipe(uglify())
      .pipe(rename({
            extname: '.min.js'
         }
      ))
      .pipe(dest(path.build.js))
      .pipe(browsersync.stream())
}

function images() { //сжатие изображений
   return src(path.src.img)
      .pipe(
         imagemin({
            progressive: true,
            svgoPlugind: [{removeViewBox: false}],
            interlaced: true,
            optimizationLevel: 3 // 0 or 7
         })
      )
      .pipe(dest(path.build.img))
      .pipe(browsersync.stream())
}

function fonts() { // шрифтов
   return src(path.src.fonts)
      .pipe(dest(path.build.fonts))
}

function cb() {
}

function watchFile() { //динамические изменения страницы
   gulp.watch([path.watch.css], css)
   gulp.watch([path.watch.js], js)
   gulp.watch([path.watch.img], images)
   gulp.watch([path.watch.hbs], hbs)
}

function clean() { //удаление лишних html
   return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel(js, css, images, fonts, hbs))
let watch = gulp.parallel(build, watchFile, browserSync)

exports.hbs = hbs
exports.fonts = fonts
exports.images = images
exports.js = js
exports.css = css
exports.build = build
exports.watch = watch
exports.default = watch