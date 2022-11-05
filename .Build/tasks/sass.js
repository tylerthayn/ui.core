'use strict'
let Fs = require('fs')
let Path = require('path')
let ChildProcess = require('child_process')

let log = console.dir
let cmd = Path.join(Path.dirname(process.argv[0]), 'sass.cmd')
module.exports = function(grunt) {
	grunt.registerMultiTask('sass', 'Generate css files', function() {
		let options = this.options({separator: '\n\n'})

		let files = {}
		this.files.forEach(file => {
			grunt.log.write(`Generating file: '${file.dest}'...`)
			let cp = ChildProcess.spawnSync(cmd, [file.src[0], file.dest, ...options.args])
			if (cp.error) {
				grunt.log.writeln('error')
				grunt.log.writeln(cp.error)
			} else {
				grunt.log.writeln('done')
			}
		})
	})
}
