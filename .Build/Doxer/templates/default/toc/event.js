module.exports = function (doclet, options = {}) {
	if (!doclet.memberof) {
		this.Out(options.indentChar.repeat(options.level) + doclet.name)
	}
}
