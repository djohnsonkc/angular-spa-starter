module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            css: {
                //files for the home page - Rook theme
                src: [
                    'public/assets/css/bootstrap.css',
                    'public/assets/css/font-awesome.css',
                    'public/assets/css/animate.css',
                    'public/assets/css/icons.css',
                    'public/css/themes/default/default-nivo-theme.css',
                    'public/assets/css/nivo-lightbox.css',
                    'public/assets/css/style.css',
                    //added for the new carousel
                    'public/css/responsive-slider.css',
                    'public/css/custom.css' //nothing here yet, but it's where my custom overrides can go

                ],
                dest: 'public/css/dist/app-concat.css'
            },
            js: {

                files: [
                    { 
                        //files for core angular files
                        src: [  
                            'public/scripts/libs/angular-cookie.js', 
                            'public/scripts/libs/angular-resource.min.js', 
                            'public/scripts/libs/angular-cookies.min.js', 
                            'public/scripts/libs/ui-bootstrap-tpls-0.10.0.min.js'], 

                        dest: 'public/scripts/dist/angular-concat.js' 
                    },
                    //files for the home page - Rook theme
                    { 
                        src: [  
                            'public/assets/js/jquery.min.js', 
                            'public/assets/js/bootstrap.min.js', 
                            'public/assets/js/holder/holder.js', 
                            'public/assets/js/smooth-scroll.js', //smooth scrolling
                            'public/assets/js/wow.min.js', //animation scrolling
                            'public/assets/js/jquery.hcaptions.js', //hover captions
                            'public/assets/js/nivo-lightbox.min.js', //hover captions
                            'public/assets/js/bootstrapValidator.min.js', //Form Validation
                            'public/assets/js/app.js', //animation scrolling
                            //these were added for the new carousel
                            'public/scripts/libs/jquery.event.move.js', 
                            'public/scripts/libs/responsive-slider.js'
                            ], 

                        dest: 'public/scripts/dist/app-ui-concat.js' 
                    },
                    { 
                        //files specific to "app" app segment
                        src: [  'public/scripts/app/app.js', 
                                'public/scripts/factories/*', 
                                'public/scripts/app/controllers/*'
                            ], 

                        dest: 'public/scripts/dist/app-concat.js' 
                    },
                    { 
                        //files specific to the "account" app segment
                        src: [  'public/scripts/account/app.js', 
                                'public/scripts/factories/*', 
                                'public/scripts/account/controllers/*'
                            ], 

                        dest: 'public/scripts/dist/app-account-concat.js' 
                    },
                    { 
                        //files specific to the "order" app segment
                        src: [  'public/scripts/order/app.js', 
                                'public/scripts/factories/*', 
                                'public/scripts/order/controllers/*'
                            ], 

                        dest: 'public/scripts/dist/app-order-concat.js' 
                    },
                    { 
                        //files specific to the "order" app segment
                        src: [  'public/scripts/hooks/app.js', 
                                'public/scripts/factories/*', 
                                'public/scripts/hooks/controllers/*'
                            ], 

                        dest: 'public/scripts/dist/app-hooks-concat.js' 
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
                  { src: 'public/scripts/dist/app-concat.js', dest: 'public/scripts/dist/app.min.js' },
                  { src: 'public/scripts/dist/angular-concat.js', dest: 'public/scripts/dist/angular-libs.min.js' },
                  { src: 'public/scripts/dist/app-ui-concat.js', dest: 'public/scripts/dist/app-ui.min.js' },
                  { src: 'public/scripts/dist/app-account-concat.js', dest: 'public/scripts/dist/app-account.min.js' },
                  { src: 'public/scripts/dist/app-order-concat.js', dest: 'public/scripts/dist/app-order.min.js' },
                   { src: 'public/scripts/dist/app-hooks-concat.js', dest: 'public/scripts/dist/app-hooks.min.js' }

                ],
                options: {
                    preserveComments: false,
                    //set mangle to false for Angular, since doesn't play nice
                    mangle: false
                }

            }
        },
        watch: {
            // css: {
            //     files: ['public/assets/css/*.cs'],
            //     tasks: ['concat:css', 'cssmin:css']
            // },
            js: {
                files: ['public/scipts/dist/*.js'],
                tasks: ['concat:js', 'uglify:js']
            }
        }
    });

    // 2. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.loadNpmTasks("grunt-processhtml");

    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify']);
};