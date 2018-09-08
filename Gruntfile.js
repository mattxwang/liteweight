module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  const sass = require('node-sass');
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        implementation: sass,
        sourceMap: true
      },
      dist: {
        files: {
          'dist/liteweight.css': 'liteweight.scss',
          'dist/liteweight-full.css': 'liteweight-full.scss',
          'dist/theme/liteweight-duo.css': 'liteweight-duo.scss'
        }
      }
    },
    cssmin: {
      options: {
        sourceMap: true
      },
      target: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/',
          ext: '.min.css'
        },
        {
          expand: true,
          cwd: 'dist/theme/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/theme/',
          ext: '.min.css'
        }]
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['sass', 'cssmin']);

};
