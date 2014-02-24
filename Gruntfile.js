module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			all: {
				src: ['src/css', 'public', '.tmp', 'templates/js']
			}
		},
		
		connect: {
			server: {
				options: {
					livereload: true,
					port: 8000,
					base: 'public'
				}
			}
		},

		copy: {
			all: {
				files: [{ src: 'src/index.html', dest: 'public/index.html'}]
			}
		},
		
		fest: {
			all: {
				files: [{
					expand: true,
					cwd: 'templates',
					src: '*.xml',
					dest: 'templates/js'
				}],
				options: {
					template: function (data) {
						return grunt.template.process(
							'define(function () { return <%= contents %> ; });',
							{ data: data}
						);
					}
				}
			}
		},

		less: {
			all: {
				files: [{
					expand: true,
					cwd: 'src/less',
					src: '*.less',
					dest: 'src/css',
					ext: '.css'
				}]
			}
		},

		uglify: {
			all: {
				files: [
					{	src: 'bower_components/backbone/backbone.js', dest: 'public/js/lib/backbone.js'},
					{	src: 'bower_components/jquery/dist/jquery.js', dest: 'public/js/lib/jquery.js'},
					{	src: 'bower_components/requirejs/require.js', dest: 'public/js/lib/require.js'},
					{	src: 'bower_components/underscore/underscore.js', dest: 'public/js/lib/underscore.js'},
					{
						expand: true,
						cwd: 'src/js',
						src: '*.js',
						dest: 'public/js'
					}, {
						expand: true,
						cwd: 'templates/js',
						src: '*.js',
						dest: 'public/js/tmpl'
					}
				]
			}
		},

		usemin: {
			html: ['public/index.html']
		},

		useminPrepare: {
			options: {
				dest: 'public',
			},
			html: 'src/index.html'
		},
		
		watch: {
			build: {
				files: ['src/**'],
				tasks: ['build']
			},
			fest: {
				files: ['templates/*.xml'],
				tasks: ['fest'],
				options: {
					atBegin: true
				}
			},
			server: {
				files: ['public/**'],
				options: {
					interrupt: true,
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-fest');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('build', ['useminPrepare', 'less', 'concat', 'copy', 'uglify', 'cssmin', 'usemin']);
	grunt.registerTask('default', ['build', 'connect', 'watch']);
};
