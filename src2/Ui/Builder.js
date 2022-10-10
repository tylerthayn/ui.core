define('Ui/Builder', ['jquery', 'jquery-ui', 'jQuery', 'Observers', 'Widgets'], ($) => {

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


	function Builder (src, options = {}) {
		this.src = src
		this.options = Extend({}, config.buildOptions, options)
		this.options.url = this.Path(src instanceof Element ? $(src).attr('src') : src)
		if (this.options.id == null) {this.options.id = Builder.Id}

		return this
	}

	Define(Builder, 'Config', {get: () => {return config}})
	Define(Builder, 'Id', {get: () => {return 'UI'+ (++config.id)}})


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

	return Builder

})
