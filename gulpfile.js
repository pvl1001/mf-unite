let project_folder = 'dist'
let source_folder = 'app'

let fs = require('fs')

let path = {
    build: {
        html: project_folder + '/',
        css: project_folder + '/css/',
        js: project_folder + '/js/',
        img: project_folder + '/img/',
        fonts: project_folder + '/fonts/'
    },
    src: {
        html: [source_folder + '/*.html', '!' + source_folder + '/_*.html'],
        css: source_folder + '/scss/style.scss',
        js: source_folder + '/js/script.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: source_folder + '/fonts/*'
    },
    watch: {
        html: source_folder + '/**/*.html',
        css: source_folder + '/scss/**/*.scss',
        js: source_folder + '/js/**/*.js',
        img: source_folder + '/img/**/*.{jpg,png,svg,gif,ico,webp}'
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
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2')


function browserSync() {
    browsersync.init({
        server: {
            baseDir: './' + project_folder + '/'
        },
        port: 3000,
        notify: false
    })
}

function html() { // работа с html
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
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
                svgoPlugind: [{ removeViewBox: false }],
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

function cb() {}

function watchFile() { //динамические изменения страницы
    gulp.watch([path.watch.html], html)
    gulp.watch([path.watch.css], css)
    gulp.watch([path.watch.js], js)
    gulp.watch([path.watch.img], images)
}

function clean() { //удаление лишних html
    return del(path.clean)
}

let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts))
let watch = gulp.parallel(build, watchFile, browserSync)

exports.fonts = fonts
exports.images = images
exports.js = js
exports.css = css
exports.html = html
exports.build = build
exports.watch = watch
exports.default = watch