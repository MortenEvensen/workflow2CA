module.exports = function(grunt) {
    grunt.initConfig({
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
                    src: "*.css",
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
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        "dist/css/styles.css",
                        "*html"
                    ]
                }
            }
        },
        watch: {
            css: {
                files: "sass/styles.scss",
                tasks: ["sass", "cssmin", "imagemin"]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["browserSync", "watch"])
}



//Sass task grunt.loadNpmTasks('grunt-contrib-sass');
//Minify CSS grunt.loadNpmTasks('grunt-contrib-cssmin');
//Compress images grunt.loadNpmTasks('grunt-compress-images');
// Browsersync grunt.loadNpmTasks('grunt-browser-sync');
// watch grunt.loadNpmTasks('grunt-contrib-watch');