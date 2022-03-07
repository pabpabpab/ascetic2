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

mix.js('resources/admin-js/app.js', 'public/admin-js')
   .sass('resources/admin-sass/index.sass', 'public/css/admin.css')

   .js('resources/public-js/app/productListApp.js', 'public/public-js')
   .js('resources/public-js/app/singleProductApp.js', 'public/public-js')
   .js('resources/public-js/app/menuApp.js', 'public/public-js')
   .sass('resources/public-sass/index.sass', 'public/css/public.css')
    .webpackConfig({
        watch: true,
        watchOptions: {
            aggregateTimeout: 600,
            poll: 1000,
            ignored: /node_modules/,
        }
    });



   //.version();



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
