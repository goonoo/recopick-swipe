"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        preserveComments: 'some'
      },
      compress: {
        files: {
          "dist/swipe.min.js": ['swipe.js']
        }
      }
    },
    cssmin: {
      options: {
      },
      compress: {
        files: {
          "dist/swipe.min.css": ['swipe.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['uglify', 'cssmin']);
};
