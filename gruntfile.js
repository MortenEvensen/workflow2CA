module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                expand: true,
                src: '*html',
                dest: 'dist/htmlCopies/',
            },
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: "dist/css",
                    src: ["*.css", "!*.min.css"],
                    dest: "dist/css",
                    ext: ".min.css"
                }]
            }
        },
        imagemin: {
            static: {
            options: {
                  optimizationLevel: 3
                  
              },
              files: {
                  'dist/miniImages/oslo.jpg': 'images/oslo.jpg',
                  'dist/miniImages/bike-bridge.jpg': 'images/bike-bridge.jpg',
                  'dist/miniImages/bikers-city-bw.jpg': 'images/bikers-city-bw.jpg',
                  'dist/miniImages/cycles-sun.jpg': 'images/cycles-sun.jpg',
                  'dist/miniImages/bikes-sun.jpg': 'images/bikes-sun.jpg',
                  'dist/miniImages/oslo-kopi.jpg': 'images/oslo-kopi.jpg'
                  
              }
            }
        },
         watch: {
            css: {
                files: "sass/styles.scss",
                tasks: ["copy", "sass", "cssmin", "imagemin"]
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "dist/css/*css",
                        "*html",
                        "sass/*scss"
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./"
                    }
                }
            }
        }
       
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["browserSync", "watch"])
}