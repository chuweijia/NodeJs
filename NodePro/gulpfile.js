// 获取 gulp
var gulp = require('gulp')
// 获取 gulp-ruby-sass 模块
var sass = require('gulp-ruby-sass')

// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function() {
    return sass('sass/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('dist2/css'))
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    // 监听文件修改，当文件被修改则执行 images 任务
    gulp.watch('sass/**/*.scss', ['sass'])
});

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass', 'auto'])





// // 获取 gulp
// var gulp = require('gulp')

// // 获取 minify-css 模块（用于压缩 CSS）
// var minifyCSS = require('gulp-minify-css')

// // 压缩 css 文件
// // 在命令行使用 gulp css 启动此任务
// gulp.task('css', function () {
//     // 1. 找到文件
//     gulp.src('css/*.css')
//     // 2. 压缩文件
//         .pipe(minifyCSS())
//     // 3. 另存为压缩文件
//         .pipe(gulp.dest('dist/css'))
// })

// // 在命令行使用 gulp auto 启动此任务
// gulp.task('auto', function () {
//     // 监听文件修改，当文件被修改则执行 css 任务
//     gulp.watch('css/*.css', ['css'])
// });

// // 使用 gulp.task('default') 定义默认任务
// // 在命令行使用 gulp 启动 css 任务和 auto 任务
// gulp.task('default', ['css', 'auto'])