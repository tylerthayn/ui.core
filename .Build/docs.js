let ChildProcess = require('child_process')

//kind: member, function, class, param, module

function Sort (a, b) {return a.longname.localeCompare(b.longname, 'en'/*, { sensitivity: 'base' }*/)}

function Node (doclet) {
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

function AST (ast) {
	log(Type(ast))
	Define(this, 'ast', ast.filter(t => t.Get('comment', '') != ''))

	this.modules = {}
	this.Filter({kind: 'module'}).sort(Sort).forEach(doclet => {
		this.modules[doclet.longname.replace(/^module:/, '')] = doclet
	})

	this.classes = {}
	this.Filter({kind: 'class'}).sort(Sort).forEach(doclet => {
		this.classes[doclet.longname] = doclet
	})

	return this
}

AST.prototype.BuildTree = function (doclet) {
	log(doclet.name+ '::'+doclet.meta.filename+'::'+doclet.memberof)
	let root = new Node(doclet)
	this.Filter({memberof: doclet.longname}).forEach(d => {
		root.Add(this.BuildTree(d))
	})
	return root
}

AST.prototype.Filter = function Filter(filters) {
    let _ast = this.ast
    filters.Keys().forEach(key => {
		let types = Array.isArray(filters[key]) ? filters[key] : [filters[key]]
        _ast = _ast.filter(d => types.includes(d[key]))
    })
    return _ast
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

function Filter(ast,filters){let _ast=ast;filters.Keys().forEach(key=>{_ast=_ast.filter(d=>d[key]==filters[key])});return _ast}
function Sort (a, b) {return a.longname.localeCompare(b.longname, 'en'/*, { sensitivity: 'base' }*/)}
function StringifyParam(param){let s=`${param.name}`;return param.optional?`[${s}]`:s}

function GetModule (doclet) {


}

let jsdoc = Path.resolve(Path.dirname(process.argv[0]), "jsdoc.cmd")
let ast = new AST(JSON.parse(ChildProcess.spawnSync(jsdoc, ['-c', Path.resolve('./jsdoc.conf'), '-X']).stdout.toString()))

ast.classes.Keys().forEach(key => {
	ast.Filter({memberof: key, kind: 'function'})

	ast.BuildTree(ast.classes[key]).Print()
})

//log(ast.modules)

//logj(Filter(ast, {kind: 'module'}).map(d=>d.meta.filename))
//logj(Filter(ast, {kind: 'class'}).sort(Sort).map(d=>d.longname))

//ast.Filter({memberof: 'jQuery'}).forEach(doclet => {
//logj(doclet)
//	log(ast.LookupModule(doclet))

//})

