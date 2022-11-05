let ChildProcess = require('child_process')
let AST = require('./AST')
let Template = require('./Template')

//function Filter(ast,filters){let _ast=ast;filters.Keys().forEach(key=>{_ast=_ast.filter(d=>d[key]==filters[key])});return _ast}
//function Sort (a, b) {return a.longname.localeCompare(b.longname, 'en'/*, { sensitivity: 'base' }*/)}
//function StringifyParam(param){let s=`${param.name}`;return param.optional?`[${s}]`:s}

let jsdocConfig = $path.resolve(process.argv.length > 2 ? process.argv[2] : './jsdoc.conf')
let jsdocCmd = $path.resolve($path.dirname(process.argv[0]), "jsdoc.cmd")

let jsdoc = ChildProcess.spawnSync(jsdocCmd, ['-c', jsdocConfig, '-X'])
if (jsdoc.error) {
	throw new Error(jsdoc.error)
}

$fs.writeFileSync('ast', jsdoc.stdout.toString(), 'utf-8')

let ast = new AST(JSON.parse(jsdoc.stdout.toString()))
$fs.writeFileSync('docs.js', `define(() => { return ${JSON.stringify(ast.tree, null, 4)}\n\n})`, 'utf-8')
//let template = new Template(ast)
//template.Render()
//template.Export('./Docs')
//log(template.output.join('\n'))

//ast.classes.Keys().forEach(key => {
//	ast.BuildTree(ast.classes[key]).Filter({scope: 'static'}).Print()
//	ast.BuildTree(ast.classes[key]).Filter({scope: 'instance'}).Print()
//})

//log(ast.modules)

//logj(Filter(ast, {kind: 'module'}).map(d=>d.meta.filename))
//logj(Filter(ast, {kind: 'class'}).sort(Sort).map(d=>d.longname))

//ast.Filter({memberof: 'jQuery.Observers'}).forEach(doclet => {
//logj(doclet)
//	log(ast.LookupModule(doclet))

//})

