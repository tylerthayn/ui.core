let Doclet = require('./Doclet')

let defaults = {
	style: 'default',
	down: true,
	indentChar: '\t',
	level: 0,
	steps: {
		toc: [{kind: 'module'}, {kind: 'class'}, 'global'],
		detailed: [{kind: 'module'}, {kind: 'class'}]
	},
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
function Template (ast, options = {}) {
	Define(this, 'ast', ast)
	this.options = Extend({}, defaults, options)
	this.output = []

	this.render = {}
	this.options.steps.Keys().forEach(type => {
		this.render[type] = {}
		$fs.readdirSync($path.resolve(__dirname, 'templates', this.options.style, type)).forEach(file => {
			this.render[type][file.replace(/\.js$/, '')] = require($path.resolve(__dirname, 'templates', this.options.style, type, file))
		})
	})

	return this
}

Template.prototype.Export = function (destination) {
	destination = $path.resolve(__dirname, 'templates', this.options.style, 'index.html')
	let head = $fs.readFileSync($path.resolve(__dirname, 'templates', this.options.style, 'head.html'), 'utf-8')
	let foot = $fs.readFileSync($path.resolve(__dirname, 'templates', this.options.style, 'foot.html'), 'utf-8')

	//$fs.writeFileSync(destination, head + this.output.join('\n') + foot, 'utf-8')

}

Template.prototype.break = function () {
	this.Out('\n')
}

Template.prototype.Break = function (type) {
	this.Get(`render.${type}.break`, this.break).call(this)
}

Template.prototype.header = function (filter) {
	this.Out(Object.values(filter)[0])
}
Template.prototype.Header = function (type, filter) {
	this.Get(`render.${type}.header`, this.header).call(this, filter)
}

Template.prototype.Render = function (doclet = null, options = {}) {
	options = Extend({}, this.options, options)
	if (doclet != null) {
		if (Array.isArray(doclet)) {
			doclet.forEach(d => {this.Render(d, options)})
		} else {
			let fn = this.Get(`render.${options.type}.${doclet.kind}`, this.Get(`render.${options.type}.generic`, this.RenderGeneric))
			fn.call(this, doclet, options)
		}
	} else {
		options.steps.Keys().forEach(type => {
			options.steps[type].forEach(filter => {
				if (filter == 'global') {
					this.Header(type, 'global')
					let d = new Doclet({
						global: 'global',
						name: 'global',
						longname: 'global',
						kind: 'global',
						scope: 'global'
					}, this.ast.Filter({scope: 'global'}).filter(d => d.kind != 'class')).Walk(this.Render.bind(this), Extend({}, options, {type: type}))
				} else {
					this.Header(type, filter)
					this.ast.Filter(filter).forEach(step => {
						this.ast.BuildTree(step).Walk(this.Render.bind(this), Extend({}, options, {type: type}))
					})
				}
				this.Break(type)
			})
		})
	}
}

Template.prototype.RenderClasses = function (options = {}) {
	options = Extend({}, this.options, options, {type: 'toc'})
	this.ast.classes.forEach(c => {
		c.Walk(this.Render.bind(this), options)
	})
}

Template.prototype.RenderModules = function (options = {}) {
	options = Extend({}, this.options, options, {type: 'toc'})
	this.ast.modules.forEach(c => {
		c.Walk(this.Render.bind(this), options)
	})
}

Template.prototype.RenderGeneric = function (doclet, options = {}) {
	options = Extend({}, this.options, options)
	this.Out(options.type+'>'+options.indentChar.repeat(options.level) + doclet.longname)
}

Template.prototype.Out = function (...args) {
	args.forEach(arg => {
		this.output.push(arg)
	})
}

module.exports = Template
