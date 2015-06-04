module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                //files for the home page - Rook theme
                src: [
                    'public/css/*'
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
                            'public/js/app.js'
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
            }
        },
        // processhtml: {
        //     dist: {
        //           files: {
        //             '<%= pkg.dest %>/magic.html': ['<%= pkg.src %>/magic.html']
        //           }
        //     }
        // },
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-processhtml");

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);

};