let project_folder = 'dist'
let source_folder = 'app'

let fs = require('fs')

let path = {
   build: {
      // html: project_folder + '/',
      css: project_folder + '/css/',
      js: project_folder + '/js/',
      img: project_folder + '/img/',
      fonts: project_folder + '/fonts/',
      data: project_folder + '/json/',
   },
   src: {
      // html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
      css: source_folder + '/scss/style.scss',
      js: source_folder + '/js/script.js',
      img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
      fonts: source_folder + '/fonts/*',
      data: source_folder + '/json/*',
   },
   watch: {
      // html: source_folder + '/**/*.html',
      css: source_folder + '/**/**/*.scss',
      js: source_folder + '/js/**/*.js',
      img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
      data: source_folder + '/json/*.json',
      hbs: source_folder + '/**/*.hbs'
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
         batch: ['./app/components'],
         helpers: {

            // сравнение каналов (выделение цветом)
            activeName(name, tariff) {
               let tariffArr = eval(`${'dataTariffs.' + tariff}`)
               for (let el of tariffArr) {
                  for (let nameJson of el.groupData)
                     if (name === nameJson.name) return true
               }
            },

            // сравнение каналов (число каналов группы)
            countChannel(index, tariff) {
               let tariffArr = eval(`${'dataTariffs.' + tariff}`)
               if (tariffArr[index])
                  return tariffArr[index].groupData.length
               else return 0
            },

            // общее количество каналов
            totalChannel(tariff) {
               let tariffArr = eval(`${'dataTariffs.' + tariff}`)
               let count = 0
               for (let el of tariffArr) count += el.groupData.length
               return count
            }
         }
      }

   return gulp.src('app/index.hbs')
      .pipe(gulp_data(function () { // подключить json
         return dataTariffs = require('./app/json/data.json')
      }))
      .pipe(handlebars(templateData, options))
      .pipe(rename('index.html'))
      .pipe(gulp.dest('dist'));
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

// function html() { // работа с html
//    return src(path.src.html)
//       .pipe(fileinclude())
//       .pipe(dest(path.build.html))
//       .pipe(browsersync.stream())
// }

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

function data() { // json
   return src(path.src.data)
      .pipe(dest(path.build.data))
}

function cb() {
}

function watchFile() { //динамические изменения страницы
   // gulp.watch([path.watch.html], html)
   gulp.watch([path.watch.css], css)
   gulp.watch([path.watch.js], js)
   gulp.watch([path.watch.img], images)
   gulp.watch([path.watch.data], data)
   gulp.watch([path.watch.hbs], hbs)
}

function clean() { //удаление лишних html
   return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel(js, css, images, fonts, data, hbs))
let watch = gulp.parallel(build, watchFile, browserSync)

exports.hbs = hbs
exports.data = data
exports.fonts = fonts
exports.images = images
exports.js = js
exports.css = css
// exports.html = html
exports.build = build
exports.watch = watch
exports.default = watch