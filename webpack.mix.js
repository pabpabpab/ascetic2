const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/*
mix.js('resources/js/app.js', 'public/js')
    .vue() // из-за этого ошибка
    .sass('resources/sass/app.sass', 'public/css');
*/


// для админской части
/*
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.sass', 'public/css');
*/


// для публичного js
/*
mix.js('resources/js2/index.js', 'public/js2')
    .sass('resources/sass2/index.sass', 'public/css');
*/
/*
    .webpackConfig({
        watch: true,
        watchOptions: {
            aggregateTimeout: 600,
            poll: 1000,
            ignored: /node_modules/,
        }
    });
*/


mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.sass', 'public/css')
   //.js('resources/js2/index.js', 'public/js2')
   .js('resources/js2/productListApp.js', 'public/js2')
   .js('resources/js2/singleProductApp.js', 'public/js2')
   .js('resources/js2/menuApp.js', 'public/js2')
   .sass('resources/sass2/index.sass', 'public/css')
    .webpackConfig({
        watch: true,
        watchOptions: {
            aggregateTimeout: 600,
            poll: 1000,
            ignored: /node_modules/,
        }
    });


   //.version();
