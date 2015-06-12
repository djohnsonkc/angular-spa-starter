module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        clean : {
            yourTarget : {
                src : [ "public/img/dist/*", 
                        "public/html/dist/*", 
                        "public/css/dist/*",
                        "public/js/dist/*"
                ]
            }
        },

        concat: {
            css: {
                src: [
                    'public/css/bootstrap.min.css',
                    //'public/css/font-awesome.css', //not included for now
                    'public/css/lato-font.css', //download of http://fonts.googleapis.com/css?family=Lato:300,400,700
                    'public/css/custom.css' 
                ],
                dest: 'public/css/dist/app-concat.css'

            },

            js: {

                files: [
                    { 
                        //files for core angular files
                        src: [  
                            //These must be in the correct order
                            'public/js/libs/jquery.min.js',
                            'public/js/libs/bootstrap.min.js',
                            'public/js/libs/angular.min.js',
                            'public/js/libs/angular-route.js',
                            'public/js/libs/angular-resource.min.js', 
                            'public/js/libs/angular-cookies.min.js', 
                            'public/js/libs/angular-animate.min.js', 
                            'public/js/libs/ui-bootstrap-tpls-0.10.0.min.js',

                            //app.js goes first, then the controllers and factories
                            'public/js/app.js',
                            'public/js/controllers/*',
                            'public/js/factories/*'
                            
                            ], 

                        dest: 'public/js/dist/app-concat.js' 
                    }
                ],
                options: {
                    preserveComments: false
                }
            }
        },
        cssmin: {
            css: {
                src: 'public/css/dist/app-concat.css',
                dest: 'public/css/dist/app.min.css'
            },
            options: {
                keepSpecialComments: 0
            }
        },


        htmlmin: {                                     // Task
          dist: {                                      // Target
            options: {                                 // Target options
              removeComments: true,
              collapseWhitespace: true
            },
            files: {                                   
              'public/html/dist/index.html': 'public/html/index.html'
            }
          }

          // dev: {                                       // Another target
          //   files: {
          //     'dist/index.html': 'src/index.html',
          //     'dist/contact.html': 'src/contact.html'
          //   }
          // }
        },


        imagemin: {
            png: {
              options: {
                optimizationLevel: 7
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'public/img/',
                  src: ['**/*.png'],
                  // Could also match cwd line above. i.e. project-directory/img/
                  dest: 'public/img/dist/',
                  ext: '.png'
                }
              ]
            },
            jpg: {
              options: {
                progressive: true
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'public/img/',
                  src: ['**/*.jpg'],
                  // Could also match cwd. i.e. project-directory/img/
                  dest: 'public/img/dist/',
                  ext: '.jpg'
                }
              ]
            },
            gif: {
              options: {
                progressive: true
              },
              files: [
                {
                  // Set to true to enable the following options…
                  expand: true,
                  // cwd is 'current working directory'
                  cwd: 'public/img/',
                  src: ['**/*.gif'],
                  // Could also match cwd. i.e. project-directory/img/
                  dest: 'public/img/dist/',
                  ext: '.gif'
                }
              ]
            }
        },


        uglify: {
            js: {

                files: [
                  { src: 'public/js/dist/app-concat.js', dest: 'public/js/dist/app.min.js' }

                ],
                options: {
                    preserveComments: false,
                    //set mangle to false for Angular, since doesn't play nice
                    mangle: false
                }

            }
        }
        // watch: {
        //     // css: {
        //     //     files: ['public/assets/css/*.cs'],
        //     //     tasks: ['concat:css', 'cssmin:css']
        //     // },
        //     js: {
        //         files: ['public/scipts/dist/*.js'],
        //         tasks: ['concat:js', 'uglify:js']
        //     }
        // }

    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks("grunt-contrib-htmlmin");

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
    //grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'imagemin', 'htmlmin']);
    grunt.registerTask('default', ['clean', 'concat', 'cssmin', 'uglify', 'imagemin', 'htmlmin']);



};