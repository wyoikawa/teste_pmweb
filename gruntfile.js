module.exports = function(grunt) {

  grunt.initConfig({

    // COMPILA O LESS PARA CSS
    less: {                              
      file: {                            
        files: {                         
          'dev/css/styles.css': 'dev/less/styles.less'
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

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['less', 'cssmin', 'uglify']);

};