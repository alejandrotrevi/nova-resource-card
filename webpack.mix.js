let mix = require('laravel-mix')
let path = require('path')

// Load custom Nova mix extension
require('./nova.mix')

mix
    .setPublicPath('dist')
    .js('resources/js/card.js', 'js')
    .vue({version: 3})
    .css('resources/css/card.css', 'css')
    .nova('norman-huth/nova-resource-card')
    .version()
    .disableNotifications()
