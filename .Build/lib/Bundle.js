let Namer = require('./RequireJs/Namer')
let Glob = require('Glob')

let defaults = {
	globPatterns: [
		'**/*.js'
	],
	ignorePatterns: [
		'**/!*.js'
	],
	requireJs: {
		nameDefines: true,
		prefix: '',
		skipRootIndex: true
	}
}

module.exports = (root = './', ...args) => {
	let options = Type(args.last, 'object') ? args.pop() : {}
	let output = typeof args.first === 'string' ? args.shift() : 'bundle.js'

	options = Extend({}, defaults, options)
	root = root.endsWith('/') ? root : root+'/'

	let files = []
	Promise.all(options.globPatterns.map(pattern => {
		return new Promise((resolve, reject) => {
			Glob(root+pattern, {ignore: options.ignorePatterns}, (error, files) => {
				if (error) {return reject(error)}
				resolve(files)
			})
		})
	})).then(files => {
		files = Array.Flatten(files)
		let r = new RegExp(`^${root}`)
		Promise.all(
			files.map(file => {
				return new Promise((resolve, reject) => {
					$fs.readFile(file, 'utf-8', (error, contents) => {
						if (error) {return reject(error)}

						if (!options.requireJs.nameDefines) {return resolve(contents)}
						let name = file.replace(r, '').replace(/\.js$/, '').replace(/\/index$/, '')
						if (name == 'index' && options.requireJs.skipRootIndex) {
							return resolve(contents)
						}
						resolve(contents.replace(/define\(/, `define('${name}', `))
					})
				})
			})
		).then(data => {
			$fs.writeFile(output, data.join('\n\n'), 'utf-8', error => {
				if (error) {throw new Error(error)}
				log('Done')
			})
		}).catch(error => {throw new Error(errro)})


	}).catch(error => {throw new Error(error)})

}

/*
function RenameDefines (rename = true, files) {
	return Promise.all(
		files.map(file => {
			return new Promise((resolve, reject) => {
				$fs.readFile(file, 'utf-8', (error, contents) => {
					if (error) {return reject(error)}

					if (!rename) {return resolve(contents)}

					resolve(contents.replace(/define\(/, `define('${name}', `))

				})


			})

		})


	})

}

*/
