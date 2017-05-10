module.exports = function(grunt) {

  grunt.initConfig({

    // COMPILA O SASS PARA CSS
    sass: {                              
      file: {                            
        files: {                         
          'dev/css/styles.css': 'dev/sass/styles.sass'
        }
      }
    },

    // MINIFICA O CSS E JOGA PARA PRODUÇÃO
    cssmin: {
      file: {
        files: {
          'prod/css/styles.min.css': 'dev/css/styles.css'
        }
      }
    },

    // MINIFICA O JS

    uglify: {
      file: {
        files: {
          'prod/js/scripts.min.js': 'dev/js/scripts.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass', 'cssmin', 'uglify']);

};