const { series, watch, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();


const SRC = {
    JS: 'mobile/js/*',
    CSS: 'mobile/css/app.scss',
    HTML: 'mobile/*.html'
};

const DEST = {
    JS: 'mobile/js',
    CSS: 'mobile/css',
    HTML: 'mobile/'
};

const build_css = series(task_scss);
function task_scss() {
    return src(SRC.CSS)
    .pipe(sass())
        .on('error', console.log.bind(console))
    .pipe(sourcemaps.write())
    .pipe(dest(DEST.CSS))
    .pipe(browserSync.reload( {stream : true} ));
}

const reload_js = series(task_js);
function task_js() {
    return src(SRC.JS)
    .pipe(browserSync.reload( {stream : true} ));
}


const reload_html = series(task_html);
function task_html() {
    return src(SRC.HTML)
    .pipe(browserSync.reload( {stream : true} ));
}


exports.default = function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    const cssWatcher = watch('mobile/css/*.scss', { events: 'all', delay: 500 }, build_css);
    cssWatcher.on('change', function(path, stats) {
        console.log(`File ${path} was changed`);
    });

    const jsWatcher = watch('mobile/js/*', { events: 'all', delay: 500 }, reload_js);
    jsWatcher.on('change', function(path, stats) {
        console.log(`File ${path} was changed`);
    });

    const htmlWatcher = watch('mobile/*.html', { events: 'all', delay: 500 }, reload_html);
    htmlWatcher.on('change', function(path, stats) {
        console.log(`File ${path} was changed`);
    });   

};

exports.build = build_css;