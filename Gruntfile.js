module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'dist/liteweight.css': 'liteweight.scss',
          'dist/theme/liteweight-nexa.css': 'liteweight-nexa.scss',
          'dist/theme/liteweight-omun.css': 'liteweight-omun.scss'
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
