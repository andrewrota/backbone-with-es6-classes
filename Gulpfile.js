var gulp = require('gulp');
var del = require('del');
var webpack = require('gulp-webpack');
gulp.task('webpack', function () {
    return gulp.src('src/**/*.js').pipe(webpack({
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: '6to5-loader',
                    exclude: /node_modules/
                }
            ]
        },
        context: __dirname + '/src',
        devtool: '#source-map',
        output: {
            path: __dirname + '/dist',
            filename: 'index.js'
        }
    })).pipe(gulp.dest('dist'));
});
gulp.task('html', function () {
    return gulp.src('src/**/*.html').pipe(gulp.dest('./dist'));
});
gulp.task('clean', function() {
    del(['dist']);
});
gulp.task('default', ['webpack', 'html']);