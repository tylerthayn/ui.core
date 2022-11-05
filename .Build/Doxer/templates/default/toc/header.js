module.exports = function (filter) {
	let header = '', data = []
	if (filter == 'global') {
		header = 'Globals'
		data.push('data-kind="global"')
	} else {
		if (filter.kind) {
			header = filter.kind
		}
		filter.Keys().forEach(key => {
			data.push(`data-${key}="${filter[key]}"`)
		})
	}
	header = header == 'module' ? 'Modules' : header
	header = header == 'class' ? 'Classes' : header
	this.Out('<div class="Section '+header+'">')
	this.Out(`\t<div class="Header" ${data.join(' ')}>${header}</div>`)
}
