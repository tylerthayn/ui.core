define(['jquery'], ($) => {
	let id = 0

	let defaults = {
		insert: {
			element: $('body')[0],
			method: 'append' //append|prepend|replace
		},
		selector: false,
		scripts: {
			context: null,
			params: {
				$: $
			}
		},
		styles: {
			ignore: false,
			inlineLinks: true
		}
	}

	function Include (src, opts = {}, cb = Function.Noop) {
		return new Promise((resolve, reject) => {
			let options = Extend({}, defaults, opts)

			$.get(src, res => {
				let elements = [], scripts = [], styles = []
				$(res).each((i, e) => {
					if (e instanceof Element) {
						if (e instanceof HTMLScriptElement) {
							scripts.push(e)
						} else if (e instanceof HTMLStyleElement || (e instanceof HTMLLinkElement && $(e).rel == 'stylesheet')) {
							styles.push(e)
						} else {
							elements.push(e)
						}
					}
				})

				let element = elements[0]
				if (options.selector) {
					for (i=0; i<elements.length; i++) {
						if ($(elements[i]).is(options.selector)) {
							element = elements[i]
							break;
						}
					}
				}
				if (!$(element).attr('id')) {
					$(element).attr('id', 'UI'+(++id))
				}

				ProcessStyles(element, options, styles).then(() => {
					return ProcessScripts(element, options, scripts)
				}).catch(reject).finally(() => {
					if (options.insert.method == 'append') {
						$(options.insert.element).append(element)
					}
					if (options.insert.method == 'prepend') {
						$(options.insert.element).prepend(element)
					}
					if (options.insert.method == 'replace') {
						$(options.insert.element).replaceWith(element)
					}
					resolve()
				})
			}).fail(reject)
		})
	}

	function InsertStyles (element, options, styles) {
		return new Promise((resolve, reject) => {
			if (!options.styles) {
				return resolve()
			}

			let Process = () => {
				if (styles.length > 0) {
					let style = styles.shift()
					if (style instanceof HTMLLinkElement && options.styles.inlineLinks) {
						$.get($(style).attr('href'), res => {
							style = $('<style>')
							style.addClass(element.id)
							$('head').append(style)
							Process()
						}).fail(() => {Process()})
					} else {
						$(style).addClass(element.id)
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

	function InsertScripts (element, options, scripts) {
		return new Promise((resolve, reject) => {
			if (!options.scripts) {
				return resolve()
			}

			let Process = () => {
				if (scripts.length > 0) {
					let script = scripts.shift()
					if ($(script).attr('src')) {
						$.get($(script).attr('src'), src => {
							try {
								let fn = new Function(...options.scripts.params.Keys(), src)
								fn.call(options.scripts.context || element, ...options.scripts.params.Values())
							} catch (e)  {log(e)}
							Process()
						}).fail(() => {Process()})
					} else {
						try {
							let fn = new Function(...options.scripts.params.Keys(), script.innerText)
							fn.call(options.scripts.context || element, ...options.scripts.params.Values())
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

	return Include

})