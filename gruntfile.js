module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
            dev: {
              options: {
                engine: 'im',
                rename: false,
                sizes: [
                    {
                        name: "samefilename",
                        width: 800,
                        quality: 80
                    },
                    {
                        name: "large",
                        width: 800,
                        suffix:'_800px',
                        quality: 80
                    },
                    {
                        name: "medium",
                        width: 400,
                        suffix: '_400px',
                        quality: 90
                    },
                    {
                        name: "small",
                        width: 270,
                        suffix: '_270px',
                        quality: 100
                      }
                ]
              },
              files: [{
                expand: true,
                src: ['*.{gif,jpg,png}'],
                cwd: 'img/',
                dest: 'pub/img/'
              }]
            }
          }

    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);

};