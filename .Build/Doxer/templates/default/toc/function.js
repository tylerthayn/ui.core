module.exports = function (doclet, options = {}) {
	if (!doclet.memberof || !doclet.memberof.startsWith('module:')) {
		this.Out(options.indentChar.repeat(options.level) + doclet.name)
	}
}
