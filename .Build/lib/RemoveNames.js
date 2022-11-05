
function ProcessFolder (path) {
	$fs.readdirSync($path.resolve(path), {withFileTypes: true}).forEach(entry => {
		if (entry.isDirectory()) {
			ProcessFolder($path.join(path, entry.name))
		} else {
			if (!entry.name.includes('RemoveNames')) {
				let data = Fs.readFileSync($path.join(path, entry.name), 'utf-8')
				data = data.replace(/define\('.+?', */, 'define(')
				Fs.writeFileSync($path.join(path, entry.name), data, 'utf-8')
			}
		}
	})
}

ProcessFolder('./')
