/*global module*/
(function setUp(module) {
 'use strict';

  var banner = ['/*!',
      ' * Angular Downloader v<%= pkg.version %>',
      ' *',
      ' * Released under the MIT license',
      ' * www.opensource.org/licenses/MIT',
      ' *',
      ' * <%= grunt.template.today("yyyy-mm-dd") %>',
      ' */\n\n'].join('\n');

  module.exports = function doGrunt(grunt) {

    grunt.initConfig({
      'pkg': grunt.file.readJSON('package.json'),
      'confs': {
        'dist': 'dist',
        'config': 'config',
        'js': 'src/js',
        'serverPort': 8000
      },
      'eslint': {
        'options': {
          'config': '<%= confs.config %>/eslint.json'
        },
        'target': [
          'Gruntfile.js',
          '<%= confs.js %>/**/*.js'
        ]
      },
      'uglify': {
        'options': {
          'sourceMap': true,
          'sourceMapName': '<%= confs.dist %>/angular-downloader.sourcemap.map',
          'preserveComments': false,
          'report': 'gzip',
          'banner': banner
        },
        'minifyTarget': {
          'files': {
            '<%= confs.dist %>/angular-downloader.min.js': [
              '<%= confs.js %>/angular-downloader.js'
            ]
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
      'eslint'
    ]);

    grunt.registerTask('prod', [
      'eslint',
      'uglify'
    ]);
  };
}(module));
