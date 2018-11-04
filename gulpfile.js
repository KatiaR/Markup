var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');

gulp.task('scss', function () {
	return gulp.src("app/sass/**/*.scss")
		.pipe(plumber({
			errorHandler: function (err) {
				notify.onError({
					title: "Gulp error in " + err.plugin,
					message: err.toString()
				})(err);
			}
		}))
		.pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
		.on('error', function (err) {
			console.log(err.toString());

			this.emit('end');
		})
		.pipe(gulp.dest("app/css"))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function () {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});


gulp.task('watch', ['browser-sync', 'scss'], function () {
	gulp.watch("app/sass/**/*.scss", ['scss']);
	gulp.watch("app/*.html", browserSync.reload);
	gulp.watch("app/js/**/*.js", browserSync.reload);
});



