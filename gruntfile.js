module.exports = function(grunt) {
  'use strict';

  // Load all grunt packages
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
            'dist/css/style.css': [
              'src/scss/style.scss',
              'src/scss/*/*.scss',
              'src/scss/*/*/*.scss',
              'src/scss/*/*/*/*.scss'
            ]
        }
      }
    },
    uglify: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
        },
      targets: {
        files: {
          'dist/js/main.min.js' : 'dist/js/main.js',
        } //Files
      }
    },
    concat: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %> */ \n'
        },
      targets: {
        files: {
          'dist/js/main.js' : ['node_modules/bootstrap-sass/assets/javascripts/bootstrap.js', 'src/js/*/*/*.js', 'src/js/*/*.js', 'src/js/main.js'],
        } //Files
      }
    }, //concat
    cssmin: {
      files: {
          expand: true,
          cwd: 'dist/css/',
          src: ['*.css', '!*.min.css'], // 1
          dest: 'dist/css/',
          ext: '.min.css'
      }
    },
    postcss: {
        options: {
            map: true,
            processors: [
                require('autoprefixer')({
                    browsers: ['last 2 versions']
                })
            ]
        },
        dist: {
            src: 'www/stylesheets/*.css'
        }
    },
    watch : {
      options: {
        livereload: true
      },
      scripts: {
          files: ['src/js/**/*.js'],
          tasks: ['concat']
        }, //scripts
        sass: {
          files: ['src/scss/**/*.scss'],
          tasks: ['sass']
        }
    }
  }); //initConfig
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['concat', 'uglify', 'sass', 'cssmin']);
} //exports
