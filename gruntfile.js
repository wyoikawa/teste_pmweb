module.exports = function(grunt) {

  grunt.initConfig({

    // MINIFICA O JS

    uglify: {
      file: {
        files: {
          'prod/js/scripts.min.js': 'dev/js/scripts.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};
