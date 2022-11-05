function List (list) {
	Define(list, 'Filter', (filters) => {
		let _list = list
	    filters.Keys().forEach(key => {
			let types = Array.isArray(filters[key]) ? filters[key] : [filters[key]]
		    _list = _list.filter(doclet => types.includes(doclet[key]))
	    })
		return List(_list)
	})
	Define(list, 'Print', (name = 'name', joinChar = '\n') => {
		log(list.Sort().map(d=>d[name]).join(joinChar))

	})
	Define(list, 'Sort', () => {
		return list.sort((a, b) => {
			return a.longname.localeCompare(b.longname, 'en'/*, { sensitivity: 'base' }*/)
		})
	})

	return list
}


function Doclet (doclet, children = []) {
	Extend(this, doclet)
	this._doclet = doclet
	this.children = List(children)

	Define(this, 'Event', {get: () => {
		return this.Filter({kind: 'event'})
	}})
	Define(this, 'Function', {get: () => {
		return this.Filter({kind: 'function'})
	}})
	Define(this, 'Instance', {get: () => {
		return this.Filter({scope: 'instance'})
	}})
	Define(this, 'Member', {get: () => {
		return this.Filter({kind: 'member'})
	}})
	Define(this, 'Param', {get: () => {
		return this.Filter({kind: 'param'})
	}})
	Define(this, 'Static', {get: () => {
		return this.Filter({scope: 'static'})
	}})


	return this
}

Doclet.prototype.Add = function (doclet) {
	this.children.push(doclet)
	return this
}

Doclet.prototype.Filter = function (filters) {
	return new Doclet(this._doclet, this.children.Filter(filters))
}

Doclet.prototype.Print = function (indent = 0) {
	log('\t'.repeat(indent) + this.name)
	this.children.forEach(doclet => {
		doclet.Print(indent+1)
	})
}

let walkOptions = {
	down: true,
	level: 0,
	order: [
		{scope: 'static', kind: 'function'},
		{scope: 'static', kind: 'member'},
		{scope: 'static', kind: 'param'},
		{scope: 'instance', kind: 'function'},
		{scope: 'instance', kind: 'member'},
		{scope: 'instance', kind: 'param'},
		{scope: 'instance', kind: 'event'},
	]
}


Doclet.prototype.Walk = function (fn, options = {}) {
	options = Extend({}, walkOptions, options)
	if (options.down && !this.global) {
		fn(this, options)
	}

	options.level++
	options.order.forEach(filter => {
		this.Filter(filter).children.forEach(child => {
			child.Walk(fn, options)
		})
	})
	options.level--

	if (!options.down && !this.global) {
		fn(this, options)
	}
}


module.exports = Doclet
