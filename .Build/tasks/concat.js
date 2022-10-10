'use strict'
let Fs = require('fs')
let Path = require('path')

let log = console.dir
module.exports = function(grunt) {
	grunt.registerMultiTask('concat', 'Concat source file', function() {
		let options = this.options({separator: '\n\n'})

		let files = {}
		this.files.forEach(file => {
			files[file.dest] = []

			let content = []
			file.src.forEach(src => {
				files[file.dest].push(src)
				grunt.log.write(`Concatenating: '${src}'...`)
				content.push(grunt.file.read(src))
				grunt.log.write('done\n')
			})
			grunt.file.write('.Build/tmp/contents.json', JSON.stringify(files, null, 4))
			grunt.file.write(file.dest, content.join(options.separator))
			grunt.log.write(`Concatenated file '${file.dest}' created`)

		})
	})
}
