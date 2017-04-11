/// <binding BeforeBuild='compile' ProjectOpened='watch:sass' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("default", function () {
    // place code for your default task here
});

gulp.task("compile", ["compile:sass"]);

gulp.task("compile:sass", function () {
    gulp.src("./Sass/**/*.scss").pipe(sass()).pipe(gulp.dest("./wwwroot/css"));
});

gulp.task("watch:sass", function () {
    gulp.watch("./Sass/**/*.scss", ["compile:sass"]);
});