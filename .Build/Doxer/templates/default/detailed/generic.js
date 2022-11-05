module.exports = function (doclet, options = {}) {
	this.Out(options.indentChar.repeat(options.level) + doclet.longname)
}
