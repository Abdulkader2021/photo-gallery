const mix = require('laravel-mix');
const exec = require("child_process").exec;
require("dotenv").config();


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


const glob = require('glob');
const path = require("path");

function mixAssetsDir(query, cb){
    (glob.sync("resources/" + query) || []).forEach((f) => {
        f = f.replace(/[\\\/]+/g, "/")
        cb(f, f.replace("resources", "public"));
    })
}

const sassOptions = {
    precision: 5,
    includePaths: ["node_modules", "resources/assets/"],
}

// plugins Core stylesheets
mixAssetsDir("css/plugin/!(_)*.css", (src, dest) =>
    mix.postCss(
        src,
        dest.replace(/(\\|\/)css(\\|\/)/, "$1css$2").replace(/\.css$/, ".css"),
        { sassOptions }
    )
);

mixAssetsDir("fonts", (src, dest) => mix.copy(src, dest));
mixAssetsDir("fonts/**/**/*.css", (src, dest) => mix.copy(src, dest));
mix.copyDirectory("resources/assets/**/*.png", "public/assets/default");
mix.copyDirectory("resources/assets/**/*.jpg", "public/assets/img");


mix.js('resources/js/app.js', 'public/js')
    .js('resources/assets/js/plugin/feather.js', 'public/assets/js/plugin')
    .js('resources/assets/js/main.js', 'public/assets/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .postCss('resources/assets/css/style.css', 'public/assets/css/')
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
