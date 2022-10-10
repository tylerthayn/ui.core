define('Ui', ['jquery', 'jquery-ui', './jQuery
define(['jquery', 'jquery-ui', './jQuery/index', './Observers/index', './Widgets/Dialog'], ($) => {

	let config = {
		id: 0,
		buildOptions: {
			ignoreScripts: false,
			ignoreStyles: false,
			folder: location.href.split(/\//g).slice(0, -1).join('/') + '/',

			id: null,
			type: null,

			elements: [],
			scripts: [],
			styles: [],
			widget: null
		},
		extensions: {
			regexp: /\.(html|tpl|ui)$/i,
			default: '.html'
		}
	}

	function Ui () {


	}

	Define(Ui, 'Id', {get: () => {
		return 'UI'+ (++config.id)
	}})

	function Builder (src, options = {}) {
		this.src = src
		this.options = Extend({}, config.buildOptions, options)
		this.options.url = this.Path(src instanceof Element ? $(src).attr('src') : src)
		if (this.options.id == null) {this.options.id = Ui.Id}

		return this
	}

	Builder.prototype.Build = function (data = {}) {
		return new Promise((resolve, reject) => {
			this.Get(this.options.url).then(html => {
				html.each((i, e) => {
					if (e instanceof Element) {
						if (e instanceof HTMLStyleElement || (e instanceof HTMLLinkElement && $(e).attr('rel') == 'stylesheet')) {
							this.options.styles.push(e)
						} else if (e instanceof HTMLScriptElement) {
							this.options.scripts.push(e)
						} else {
							this.options.elements.push(e)
						}
					}
				})

				this.options.elements[0].style.display = 'none'

				this.InsertStyles().then(() => {
					return this.InsertScripts()
				}).then(() => {
					if (this.src instanceof Element) {
						$(this.src).replaceWith(this.options.elements[0])
					} else {
						$('body').append(this.options.elements[0])
					}
				}).then(() => {
					return this.CreateWidget()
				}).finally(() => {
					resolve(this.options.widget || this.options.elements[0])
				})
			}).catch(reject)
		})
	}

	Builder.prototype.CreateWidget = function () {
		return new Promise((resolve, reject) => {
			if (this.options.type == null) {
				return resolve()
			}
			require([this.options.type], (uiClass) => {
				this.options.widget = new uiClass(this.options.data, this.options.elements[0])
				resolve()
			})
		})
	}

	Builder.prototype.Get = function (url) {
		return new Promise((resolve, reject) => {
			$.get(url, res => {
				resolve($(res))
			}).fail(reject)
		})
	}

	Builder.prototype.InsertScripts = function () {
		return new Promise((resolve, reject) => {
			if (this.options.ignoreScripts) {
				return resolve()
			}

			let scripts = Clone(this.options.scripts)

			let Process = () => {
				if (scripts.length > 0) {
					let script = scripts.shift()
					if ($(script).attr('src')) {
						$.get($(script).attr('src'), src => {
							try {
								let fn = new Function('$', src)
								fn.call(this.options.elements[0], $)
							} catch (e)  {log(e)}
							Process()
						}).fail(() => {Process()})
					} else {
						try {
							let fn = new Function('$', script.innerText)
							fn.call(this.options.elements[0], $)
						} catch (e) {log(e)}
						Process()
					}
				} else {
					resolve()
				}
			}
			Process()
		})
	}

	Builder.prototype.InsertStyles = function () {
		return new Promise((resolve, reject) => {
			if (this.options.ignoreStyles) {
				return resolve()
			}

			let styles = Clone(this.options.styles)

			let Process = () => {
				if (styles.length > 0) {
					let style = styles.shift()
					if (style instanceof HTMLLinkElement) {
						$.get($(style).attr('href'), res => {
							style = $('<style>')
							style.addClass(this.options.id)
							$('head').append(style)
							Process()
						}).fail(() => {Process()})
					} else {
						$(style).addClass(this.options.id)
						$('head').append(style)
						Process()
					}
				} else {
					resolve()
				}
			}
			Process()
		})
	}

	Builder.prototype.Path = function (path) {
		path = path.replace(/^(file|uri)\:\/*/i, '')
		path = this.options.folder + path
		if (!config.extensions.regexp.test(path)) {
			path += config.extensions.default
		}
		return path
	}


	function Loader (...args) {
		if (args.first instanceof $) {
			return PromiseWrapper(Promise.all(args.shift().toArray().map(e => Loader(e, ...args))))
		} else if (Type(args.first, 'string')) {
			if (!args.first.startsWith('uri:')) {
				return PromiseWrapper(Promise.all($(args.shift()).toArray().map(e => Loader(e, ...args))))
			}
		} else if (Array.isArray(args.first)) {
			return PromiseWrapper(Promise.all(args.shift().map(e => Loader(e, ...args))))
		}

		let src = args.shift()
		let type = typeof args.first === 'string' ? args.shift() : null
		let options = args.length > 0 ? args.shift() : {}
		let data = args.length > 0 ? args.shift() : {}
		if (type != null) {options.type = type}

		if (src instanceof Element) {
			let attributes = {}
			for (i=0; i<src.attributes.length; i++) {
				if (!src.attributes[i].name.startsWith('data-')) {
					attributes[src.attributes[i].name] = src.attributes[i].value
				}
			}
			data = Extend({}, $(src).data(), data)
			options = Extend({}, attributes, options)
			return new Builder(src, options).Build(data)
		} else if (Type(src, 'string') || Type(src, 'url')) {
			src = src.toString().replace(/^uri\:\/*/i, '')
			return Builder(src, options).Build(data)
		} else {
			return new Promise((resolve, reject) => {reject('Invalid src')})
		}
	}

	function PromiseWrapper (promise) {
		return new Promise((resolve, reject) => {
			promise.then(results => {
				results = Array.Flatten(results)
				if (results.length == 1) {
					resolve(results[0])
				} else {
					resolve(results)
				}
			}).catch(reject)
		})
	}

	function ExtractAttributes (e) {
		let attributes = {}
		for (i=0; i<e.attributes.length; i++) {
			if (!e.attributes[i].name.startsWith('data-')) {
				attributes[e.attributes[i].name] = e.attributes[i].value
			}
		}
		return attributes
	}


	Define(Ui, 'Builder', Builder)
	Define(Ui, 'Config', {get: () => {return config}})
	Define(Ui, 'Loader', Loader)
	//Define(Ui, 'Ui', widget)

	Define(Ui, 'Path', (uri = '') => {
		return new URL(location.href.split(/\//g).slice(0, -1).join('/') + '/' + uri)
	})

	return Ui

})
