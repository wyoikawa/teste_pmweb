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

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify']);

};
