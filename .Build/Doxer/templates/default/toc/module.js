module.exports = function (doclet, options) {
	this.Out(`\t<div class="Module Clickable Level${options.level}" data-name="${doclet.name}">${doclet.name}</div>`)
}
