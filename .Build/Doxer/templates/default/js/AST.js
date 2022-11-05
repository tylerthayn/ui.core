define([$, './Doclet', 'ast'], ($, Doclet, ast) => {

	function Sort (a, b) {return a.longname.localeCompare(b.longname, 'en'/*, { sensitivity: 'base' }*/)}

	function AST (ast) {
		Define(this, 'ast', ast.filter(t => t.Get('comment', '') != ''))

		this.modules = this.Filter({kind: 'module'}).sort(Sort).map(doclet => this.BuildTree(doclet))

		this.classes = this.Filter({kind: 'class'}).sort(Sort).map(doclet => this.BuildTree(doclet))

		this.tree = {
			global: new Doclet({kind: 'global', name: 'global', longname: 'global'}, this.Filter({scope: 'global'}).filter(d=>d.kind != 'class').map(d=>new Doclet(d))),
			modules: this.Filter({kind: 'module'}).map(d => this.BuildTree(d)),
			classes: this.Filter({kind: 'class'}).map(d => this.BuildTree(d))
		}

		return this
	}

	AST.prototype.BuildTree = function (doclet) {
		let root = new Doclet(doclet)
		this.Filter({memberof: doclet.longname}).sort(Sort).forEach(d => {
			root.Add(this.BuildTree(d))
		})
		root.children = root.children.Sort()
		return root
	}

	AST.prototype.Filter = function Filter(filters) {
		let _ast = this.ast
		filters.Keys().forEach(key => {
			let types = Array.isArray(filters[key]) ? filters[key] : [filters[key]]
			_ast = _ast.filter(d => types.includes(d[key]))
		})
		return _ast.sort(Sort)
	}

	AST.prototype.LookupModule = function (doclet) {
		let module = null
		let path = $path.resolve(doclet.meta.path, doclet.meta.filename)
		this.Filter({kind: 'module'}).forEach(m => {
			if (path == $path.resolve(m.meta.path, m.meta.filename)) {
				module = m
			}
		})
		return module
	}

	return new AST(ast)
})
