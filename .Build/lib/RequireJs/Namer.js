
module.exports = (file, name) => {
	return new Promise((resolve, reject) => {
		$fs.readFile(file, 'utf-8', (error, contents) => {
			if (error) {return reject(error)}
			resolve(contents.replace(/define\(/, `define('${name}', `))
		})
	})
}

