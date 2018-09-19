
//Inicializamos las variables
var gulp = require('gulp'),
    browserSync = require('browser-sync');


//Inicializamos las tareas por defecto
gulp.task('default', ['browser']);

//Inicializamos el Servidor
gulp.task('browser', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
})

//Cuando haya un cambio se actualiza automaticamente
gulp.watch(['index.html', '**/*.js', '**/*.css']).on('change', function(){
    browserSync.reload();
})