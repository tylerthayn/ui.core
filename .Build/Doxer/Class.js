
function Class (doclet) {
	this.name = doclet.name
	this.longname = doclet.longname
	this.path = $path.resolve(doclet.meta.path, doclet.meta.filename)
	this.doclet = doclet
	this.children = []

}

Node.prototype.Add = function (node) {
	this.children.push(node)
	return this
}

Node.prototype.Print = function (indent = 0) {
	log('\t'.repeat(indent) + this.doclet.name)
	this.children.forEach(node => {
		node.Print(indent+1)
	})
}

Node.prototype.Walk = function (fn, down = true) {
	if (down) {
		fn(this.doclet)
	}
	this.children.forEach(node => {
		node.Walk(fn)
	})
	if (!down) {
		fn(this.doclet)
	}
}


module.exports = Node
