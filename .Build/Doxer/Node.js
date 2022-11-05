function NodeList (list) {
	Define(list, 'Filter', (filters) => {
		let _list = list
	    filters.Keys().forEach(key => {
			let types = Array.isArray(filters[key]) ? filters[key] : [filters[key]]
		    _list = _list.filter(node => types.includes(node.doclet[key]))
	    })
		return NodeList(_list)
	})
	Define(list, 'Print', (name = 'name', joinChar = '\n') => {
		log(list.Sort().map(n=>n.doclet[name]).join(joinChar))

	})
	Define(list, 'Sort', () => {
		return list.sort((a, b) => {
			return a.doclet.longname.localeCompare(b.doclet.longname, 'en'/*, { sensitivity: 'base' }*/)
		})
	})

	return list
}


function Node (doclet, children = []) {
	this.doclet = doclet

	this.children = NodeList(children)
}

Node.prototype.Add = function (node) {
	this.children.push(node)
	return this
}

Node.prototype.Filter = function (filters) {
	return new Node(this.doclet, this.children.Filter(filters))
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
