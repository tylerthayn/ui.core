'use strict'

module.exports = function(grunt) {

	grunt.initConfig({
		clean: {
			options: {
				paths: [
					'.Build/tmp',
					'src/Ui.css',
					'Ui.js',
					'docs'
				]
			}
		},
		concat: {
			default: {
				files: {
					'Ui.js': [
						'.Build/tmp/styles.js',
						'src/**/*.js',
						'src/*.js',
						'!src/js/!*.js',
						'!src/js/**/!*.js',
						'!src/**/!/**/*.js',
						'!src/**/!/*.js'
					]
				},
				options: {
					separator: '\n\n',
					listFile: false
				}
			}
		},
		jsdoc: {
			default: {
				src: ["src/*.js", "src/**/*.js", "README.md"],
				options: {
					"destination": "docs",
					"template": ".Build/templates/docs/template",
					"configure": "jsdoc.conf"
				}
			}
		},
		readme: {
			options: {
				output: 'README.md',
				template: '.Build/templates/readme'
			}
		},
		rev: {},
		sass: {
			default: {
				files: {
					'src/Ui.css': [
						'styles/Ui.scss'
					]
				},
				options: {
					args: ['--no-source-map']
				}
			}
		},
		styles: {
			options: {
				dest: '.Build/tmp/styles.js',
				folder: 'src',
				prefix: 'Ui',
				separator: '\n\n'
			}
		}
	})

	grunt.loadTasks('.Build/tasks')
	grunt.loadNpmTasks('grunt-jsdoc')
	grunt.registerTask('docs', ['readme', 'jsdoc'])
	grunt.registerTask('default', ['clean', 'sass', 'styles', 'concat', 'docs'])
	grunt.registerTask('patch', ['rev:patch'])
	grunt.registerTask('minor', ['rev:minor'])
	grunt.registerTask('major', ['rev:major'])

}
