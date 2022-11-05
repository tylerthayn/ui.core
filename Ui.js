define('@css/Ui', ['Util'], ($) => {
	return $.AddStyle(`.patternlock {
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: inset 0px 0px 10px #aaa;
  margin: 20px;
}

.patternlock, .patternlock * {
  /**disable dragging**/
  -webkit-touch-callout: none;
  touch-callout: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: pointer;
}

.patternlock .insideWrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.patternlock .insideWrapper canvas, .patternlock .insideWrapper .tbl {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.patternlock .insideWrapper .tbl {
  border-collapse: separate;
  border-spacing: 25px;
}

.patternlock .tbl td {
  background-color: #fff; /* required by IE to sense mouse over */
  border: 1px solid black;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  box-shadow: 4px 4px 4px #aaa;
  vertical-align: middle;
}

.patternlock .tbl td:hover {
  box-shadow: 4px 4px 4px #ccc;
}

.patternlock .tbl td.ie8FallbackHighlight {
  background-color: red;
}

.patternlock .centerCircle {
  border: 1px solid red;
  margin: auto;
  border-radius: 50%;
  background-color: yellow;
}

.PatternLock {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.PinPad {
  background: #336699;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.patternlock {
  box-shadow: inset 0px 0px 10px #aaa;
  background: #336699;
}

.patternlock .tbl td {
  box-shadow: 4px 4px 4px #aaa;
}

.patternlock .tbl td:hover {
  box-shadow: 4px 4px 4px #ccc;
}

.patternlock .centerCircle {
  background-color: #336699;
}

.Ui.Hidden {
  display: none !important;
}
.Ui.AppBarx {
  position: relative;
}
.Ui.AppBarx.Top {
  width: 100%;
  top: 0px;
  left: 0px;
}
.Ui.AppBarx.Bottom {
  width: 100%;
  bottom: 0px;
  left: 0px;
}
.Ui.AppBarx.Left {
  left: 0px;
  top: 0px;
  height: 100%;
}
.Ui.AppBarx.Right {
  top: 0px;
  height: 100%;
}
.Ui.AppBarWrapperx {
  position: relative;
}
.Ui.AppBarWrapperx.Top {
  width: 100%;
  top: 0px;
}
.Ui.AppBarWrapperx.Bottom {
  width: 100%;
  bottom: 0px;
}
.Ui.AppBarWrapperx.Left {
  left: 0px;
  height: 100%;
}
.Ui.AppBarWrapperx.Right {
  right: 0px;
  height: 100%;
}
.Ui.AppBarWrapperx .AppBar {
  position: relative;
}
.Ui.Size {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.Layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.Layout.Horizontal {
  flex-direction: row;
}
.Layout.Horizontal > div {
  height: 100%;
}
.Layout.Vertical {
  flex-direction: column;
}
.Layout.Vertical > div {
  width: 100%;
}
.Layout > .Bar {
  flex-grow: 0;
  flex-shrink: 0;
}
.Layout.Expand {
  flex-grow: 1;
  flex-shrink: 1;
}
.Layout.Split {
  overflow: hidden;
}
.Layout.Split > :nth-of-type(1) {
  flex-grow: 0;
  flex-shrink: 0;
}
.Layout.Split > :nth-of-type(2) {
  flex-grow: 1;
  flex-shrink: 1;
}
.Layout.Split .ui-resizable-s {
  height: 9px !important;
  background: rgb(2, 0, 36);
  background: -webkit-gradient(linear, 100% 0, 0 0, from(rgba(255, 255, 255, 0)), color-stop(0.5, rgb(0, 0, 0)), to(rgba(255, 255, 255, 0)));
  background: -webkit-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
  background: -moz-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
  background: -o-linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
}
.Layout.Split .ui-resizable-e {
  width: 12px !important;
  right: -8px !important;
  background: rgb(2, 0, 36);
  background: -webkit-gradient(linear, 100% 0, 0 0, from(rgba(255, 255, 255, 0)), color-stop(0.5, rgb(0, 0, 0)), to(rgba(255, 255, 255, 0)));
  background: -webkit-linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
  background: -moz-linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
  background: -o-linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 100%);
}
`, 'src/Ui')
})


define('ActionHandlers/Hide', ['jquery'], ($) => {
	return function (effect, cb = Function.Noop) {
		$(this).hide(effect, () => {
			$(this).triggerHandler('hidden')
			cb()
		})
	}
})


define('ActionHandlers', ['jquery', 'ActionHandlers/Hide', 'ActionHandlers/Show', 'ActionHandlers/Toggle'], ($, Hide, Show, Toggle) => {
	$.extend({
		ActionHandlers: {
			Hide: Hide,
			Show: Show,
			Toggle: Toggle
		}
	})
})


define('ActionHandlers/Show', ['jquery'], ($) => {
	return function (effect, cb = Function.Noop) {
		$(this).show(effect, () => {
			$(this).triggerHandler('shown')
			cb()
		})
	}
})


define('ActionHandlers/Toggle', ['jquery'], ($) => {
	return function (effect, cb = Function.Noop) {
		$(this).toggle(effect, () => {
			$(this).triggerHandler(this.style.display && this.style.display == 'none' ? 'hidden' : 'shown')
			cb()
		})
	}
})


/*
require([
	'@js/core',
	'jquery',
	'jquery-ui',
	'./jQuery/Data',
	'./jQuery/Action',
	'./jQuery/Property',
	'./jQuery/ValueOf',
	'./jQuery/Value',
	'./jQuery/Height',
	'./jQuery/Width',
	'./jQuery/index',
	'./Observers/Hidden',
	'./Observers/Mounted',
	'./Observers/Resized',
	'./Observers/Shown',
	'./Observers/index',
	'./Widgets/Ui',
	'./Widgets/Dialog',
	'./Widgets/index',
	'./Ui/Loader',
	'./Ui/Builder',
	'./Ui/index'
], (...modules) => {

})

define((require, exports, module) => {
	return require('./Ui/index')
})
*/


define(['Ui', 'jQuery', 'ActionHandlers', 'Observers'], (Ui) => {
	return Ui
})



define('jQuery/Action', ['jquery'], ($) => {

	$.fn.extend({
		Action: function (name, ...args) {
			this.each((i, e) => {
				$(e).triggerHandler('action.'+name, args)
			})
		},
		ActionHandler: function (name, fn) {
			this.each((i, e) => {
				$(e).on('action.'+name, {action: name}, (event, ...args) => {
					fn.call(e, ...args)
				})
			})
		}
	})

})


/**
* @module jQuery/Data
*/
define('jQuery/Data', ['jquery'], ($) => {
	let dataFn = $.fn.data

	/** data-change event
	* @event jQuery#data-change
	* @type {object}
	* @property {string} name - data property name that changed
	*/
	$.fn.extend({

		/** Data
		* @fires jQuery#data-change
		*/
		data: function (key, value) {
			if (typeof key === 'undefined') {
				return dataFn.call($(this[0]))
			}
			if (typeof key === 'string' && typeof value === 'undefined') {
				return dataFn.call($(this[0]), key)
			}
			let ret = dataFn.call(this, key, value)
			if (typeof key === 'object') {
				this.trigger('data-change', key)
			} else if (typeof value !== 'undefined') {
				let d = {}
				d[key] = value
				this.trigger('data-change', d)
			}
			return ret
		}
	})

})


/**
* @module jQuery/Height
*/
define('jQuery/Height', ['jquery', 'jQuery/Value'], ($, Value) => {

	/** Height - gets or sets the height of an element
	* @function Height
	* @param {Element|jQuery} element
	* @param {number} [height]
	* @returns {Element|jQuery|number}
	*/
	function Height (e, v) {
		return Value(e, 'height', v)
	}

	/** Height - gets or sets the height of an element
	* @memberof jQuery#
	* @function Height
	* @param {Element|jQuery} element
	* @param {number} [height]
	* @returns {Element|jQuery|number}
	*/
	$.extend({Height: Height})

	/** Height - gets or sets the height of an element
	* @memberof jQuery.
	* @function Height
	* @param {number} [height]
	* @returns {Element|jQuery|number}
	*/
	$.fn.extend({Height: function (v) {return Height(this, v)}})

	return Height

})


define('jQuery/Include', ['jquery'], ($) => {
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

				InsertStyles(element, options, styles).then(() => {
					return InsertScripts(element, options, scripts)
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

define('jQuery', ['jquery', 'jQuery/Action', 'jQuery/Data', 'jQuery/Height', 'jQuery/Include', 'jQuery/Property', 'jQuery/Value', 'jQuery/ValueOf', 'jQuery/Width'], ($) => {
	return $
})


define('jQuery/Property', ['jquery', 'jQuery/Data'], ($) => {

	$.fn.extend({
		Property: function (name, value) {
			if (Type(name, 'string')) {
				if (typeof value === 'undefined') {
					return this.data(name)
				} else if (value instanceof Function) {
					this.each((i, e) => {
						$(e).on('data-change', (event, data) => {
							if (Reflect.has(data, name)) {
								value(data[name])
							}
						})
					})
				} else {
					this.each((i, e) => {
						$(e).data(name, value)
					})
				}
			} else if (Type(name, 'object')) {
				this.each((i, e) => {
					Object.keys(name).forEach(key => {
						$(e).data(key, name[key])
					})
				})
			}
		}
	})

})


/**
* @module jQuery/Value
*/
define('jQuery/Value', ['jquery', 'jQuery/ValueOf'], ($, ValueOf) => {

	/** Value
	*
	* @function Value
	* @param {Element|jQuery} e
	* @param {string} name - css property name
	* @param {*} [value] - css property value
	* @returns {*} value - css property value or the element
	*/
	function Value (e, name, v) {
		if (e instanceof Element) {
			if (typeof v === 'undefined' || v === null) {
				return ValueOf($(e).css(name))
			} else {
				$(e).css(name, `${v}px`)
				return e
			}
		} else if (e instanceof $) {
			if (typeof v === 'undefined' || v === null) {
				return ValueOf($(e[0]).css(name))
			} else {
				e.css(name, `${v}px`)
				return e
			}
		}
	}

	/** Value
	* @memberof jQuery#
	* @function Value
	* @param {Element|jQuery} e
	* @param {string} name - css property name
	* @param {*} [value] - css property value
	* @returns {*} value - css property value or the element
	*/
	$.extend({Value: Value})

	/** Value
	* @memberof jQuery.
	* @function Value
	* @param {string} name - css property name
	* @param {*} [value] - css property value
	* @returns {*} value - css property value or the element
	*/
	$.fn.extend({Value: function (name, v) {return Value(this, name, v)}})


	return Value

})


/**
* @module jQuery/ValueOf
*/
define('jQuery/ValueOf', ['jquery'], ($) => {

	/** ValueOf
	* @function ValueOf
	* @param {string} value - css property value
	* @returns {float} value - css property value as float
	*/
	function ValueOf (v) {
		return parseFloat(v.replace(/px$/, ''))
	}

	/** ValueOf
	* @memberof jQuery#
	* @function ValueOf
	* @param {string} value - css property value
	* @returns {float} value - css property value as float
	*/
	$.extend({ValueOf: ValueOf})

	return ValueOf

})


/**
* @module jQuery/Width
*/
define('jQuery/Width', ['jquery', 'jQuery/Value'], ($, Value) => {

	/** Width - gets or sets the width of an element
	* @function Width
	* @param {Element|jQuery} element
	* @param {number} [width]
	* @returns {Element|jQuery|number}
	*/
	function Width (e, v) {
		return Value(e, 'width', v)
	}


	/** Width - gets or sets the width of an element
	* @memberof jQuery#
	* @function Width
	* @param {Element|jQuery} element
	* @param {number} [width]
	* @returns {Element|jQuery|number}
	*/
	$.extend({Width: Width})

	/** Width - gets or sets the width of an element
	* @memberof jQuery.
	* @function Width
	* @param {Element|jQuery} element
	* @param {number} [width]
	* @returns {Element|jQuery|number}
	*/
	$.fn.extend({Width: function (v) {return Width(this, v)}})

	return Width
})


define('Observers/Hidden', ['jquery'], ($) => {

	function ParseStyle (style) {
		let css = {}
		if (style == null || style == '') {return css}
		style.split(/;/g).forEach(def => {
			[name, value] = def.split(':').map(v => v.trim())
			css[name] = value
		})
		return css
	}

	return (element, prefix = '') => {
		let hiddenObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if ($(element).hasClass('Hidden') && !mutationRecord.oldValue.includes('Hidden')) {
					$(element).trigger(prefix+'hidden')
				}
			})
		})
		hiddenObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(old, 'display') && old.display == 'none') {
					if (!Reflect.has(current, 'display') || current.display != 'none') {
						$(element).triggerHandler(prefix+'shown')
					}
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})



define('Observers', ['jquery', 'Observers/Hidden', 'Observers/Mounted', 'Observers/Resized', 'Observers/Shown'], ($, Hidden, Mounted, Resized, Shown) => {
	Mounted($('body')[0])

	let Observers = (element, prefix = '') => {
		Hidden(element, prefix)
		Resized(element, prefix)
		Shown(element, prefix)
	}

	Define(Observers, 'Hidden', Hidden)
	Define(Observers, 'Mounted', Mounted)
	Define(Observers, 'Resized', Resized)
	Define(Observers, 'Shown', Shown)

	$.extend({Observers: Observers})

})


define('Observers/Mounted', ['jquery'], ($) => {
	return (element, prefix = '') => {
		const observer = new MutationObserver(function callback(mutationList, observer) {
			mutationList.forEach((mutation) => {
				if (mutation.type == 'childList') {
					mutation.addedNodes.forEach(node => {
						$(node).triggerHandler(prefix+'mounted')
					})
				}
			})
		})
		observer.observe(element, {childList: true, subTree: true})
	}

})


define('Observers/Resized', ['jquery'], ($) => {

	function ParseStyle (style) {
		let css = {}
		if (style == null || style == '') {return css}
		style.split(/;/g).forEach(def => {
			[name, value] = def.split(':').map(v => v.trim())
			css[name] = value
		})
		return css
	}

	return (element, prefix = '') => {
		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (current.width != old.width || current.height != old.height) {
					$(element).triggerHandler(prefix+'resized')
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})



define('Observers/Shown', ['jquery'], ($) => {

	function ParseStyle (style) {
		let css = {}
		if (style == null || style == '') {return css}
		style.split(/;/g).forEach(def => {
			[name, value] = def.split(':').map(v => v.trim())
			css[name] = value
		})
		return css
	}

	return (element, prefix = '') => {
		let shownObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if (!$(element).hasClass('Hidden') && mutationRecord.oldValue.includes('Hidden')) {
					$(element).triggerHandler(prefix+'shown')
				}
			})
		})
		shownObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(old, 'display') && old.display == 'none') {
					if (!Reflect.has(current, 'display') || current.display != 'none') {
						$(element).triggerHandler(prefix+'shown')
					}
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})



define('Ui/Builder', ['jquery', 'jquery-ui', 'jQuery', 'Observers', 'Ui/Widgets'], ($) => {

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

				if (this.src instanceof Element) {
					for (i=0; i<this.src.attributes.length; i++) {
						$(this.options.elements[0]).attr(this.src.attributes[i].name, this.src.attributes[i].value)
					}
				}
				$(this.options.elements[0]).attr('id', this.options.id)
				this.options.elements[0].style.display = 'none'

				this.InsertStyles().then(() => {
					return this.InsertScripts()
				}).then(() => {
					return this.CreateWidget(data)
				}).then(() => {
					if (this.src instanceof Element) {
						$(this.src).replaceWith(this.options.elements[0])
					} else {
						$('body').append(this.options.elements[0])
					}
				}).finally(() => {
					Ui(this.options.widget || this.options.elements[0])
					Loader($(this.options.elements[0]).find('Ui')).then(children => {
						resolve([this.options.widget || this.options.elements[0], ...children])
					}).catch(reject)
				})
			}).catch(reject)
		})
	}

	Builder.prototype.CreateWidget = function (data = {}) {
		return new Promise((resolve, reject) => {
			if (this.options.type == null) {
				return resolve()
			}
			require([this.options.type], (uiClass) => {
				if (this.src instanceof Element) {
					Extend(data, {children: $(this.src).children()})
				}
				this.options.widget = new uiClass(data, this.options.elements[0])
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
		if (args.length == 0) {
			return new Promise((resolve, reject) => {resolve([])})
		}
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
				//if (results.length == 1) {
				//	resolve(results[0])
				//} else {
					resolve(results)
				//}
			}).catch(reject)
		})
	}

	return {
		Builder: Builder,
		Loader: Loader
	}

})


define('Ui', ['jquery', 'jquery-ui', 'jQuery', 'Observers', 'Ui/Widgets', 'Ui/Builder'], ($, ...modules) => {

	let widgets = []

	function Ui (selector) {
		if (Type(selector, 'object')) {
			widgets.push(selector)
			return selector
		}

		let list = []
		widgets.forEach(w => {
			if (selector.includes('/')) {
				if (w.type == selector) {
					list.push(w)
				}
			} else {
				if (w.element.is(selector)) {
					list.push(w)
				}
			}
		})
		return list //list.length == 1 ? list[0] : list
	}

	Define(Ui, 'widgets', widgets)
	Define(Ui, 'Builder', modules.last.Builder)
	Define(Ui, 'Loader', modules.last.Loader)

	Define(global, 'Ui', Ui)

	$(() => {
		$(window).on('app-ready', () => {
			$('.Loader').effect('fade')
		})
		Ui.Loader('include').then((...args) => {
			//Ui('Ui/Widgets/App')[0].Show()
		})
	})

	return Ui

})


define('Ui/Widgets/App', ['jquery', 'jquery-ui', 'Ui/Widgets/Ui'], ($, jQueryUi, Ui) => {
	let className = 'Ui/Widgets/App'

	return $.widget(className.split(/\//g).slice(-2).join('.'), Ui, {
		type: className,
		widgetEventPrefix: className.split(/\//g)[0].toLowerCase(),
		options: {
			loader: {
				hide: true,
				effect: 'fade'
			},
			show: false
		},
		_create: function () {
			if (this.options.loader.hide) {
				this.element.one('uishown', () => {
					$('.Loader').effect(this.options.loader.effect, () => {
						$('.Loader').remove()
					})
				})
			}

			this._super()
		}
	})

})


define('Ui/Widgets/Dialog', ['jquery', 'jquery-ui'], ($) => {
	let className = 'Ui/Widgets/Dialog'

	return $.widget(className.split(/\//g).slice(-2).join('.'), {
		type: className,
		widgetEventPrefix: className.split(/\//g)[0].toLowerCase(),
		options: {
			effect: {
				effect: 'fade'
			},
			modal: true,
			clickExit: false,
			closeOnEscape: true
		},
		_create: function () {
			this.parent = this.element.parent()
			this.element.detach()
		},
		Hide: function () {
			this._hide(this.element, this.options.effect, () => {
				this._trigger('hidden')
				this.element.detach()
			})
		},
		Show: function () {
			this.parent.append(this.element)
			this._show(this.element, this.options.effect, () => {
				this._trigger('shown')
			})
		}

	})

})



define('Ui/Widgets', ['Ui/Widgets/Dialog', 'Ui/Widgets/Ui', 'Ui/Widgets/App'], () => {})

define('Ui/Widgets/Ui', ['jquery', 'jquery-ui', 'jQuery', 'Observers'], ($) => {
	let className = 'Ui/Widgets/Ui'

	return $.widget(className.split(/\//g).slice(-2).join('.'), {
		type: className,
		widgetEventPrefix: className.split(/\//g)[0].toLowerCase(),
		options: {
			children: [],
			disabled: false,
			effect: 'fade',
			show: false,

			// callbacks
			hidden: Function.Noop,
			mounted: Function.Noop,
			ready: Function.Noop,
			resized: Function.Noop,
			updated: Function.Noop,
			shown: Function.Noop
		},
		_children: function (selector = '.Ui') {
			let _e = this.element[0]
			return this.element.find(selector).filter(function (index) {
				let filter = true
				$(this).parentsUntil(_e).each((i, e) => {
					if ($(e).is(selector)) {
						filter = false
					}
				})
				return filter
			})
		},
		_create: function () {

			this.options.children.filter('section').each((i, e) => {
				this.element.find(`.Section[name=${$(e).attr('name')}]`).each((ii, ee) => {
					ee.innerHTML = e.innerHTML
				})
			})


			/** Observers
			* @fires hidden
			* @fires mounted
			* @fires shown
			* @fires resized
			*/
			//$.Observers(this.element[0], 'ui')
			this.element.on('mounted', (...args) => {this._triggerHandler('mounted', ...args)})
			this.element.parentsUntil('body').each((i, e) => {$(e).on('mounted', (...args) => {this._triggerHandler('mounted', ...args)})})
			//this.element.on('uihidden', (...args) => {this._triggerHandler('hidden', ...args)})
			//this.element.on('uishown', (...args) => {this._triggerHandler('shown', ...args)})
			//this.element.on('uiresized', (...args) => {this._triggerHandler('resized', ...args)})

			if (this.element.parents('.Ui').length > 0) {
				this.element.parents('.Ui').on('uiupdated', () => {
					this.Update()
				})
			}

			this._ProcessDataConfigs()

			this.Update(() => {
				if (this.options.show == 'onCreate') {
					this.Show()
				}
				this._triggerHandler('ready')
			})

		},
		_ProcessDataConfigs: function () {
			this.element.data().Keys().forEach(key => {
				if (key != this.widgetFullName) {
					if (this.options.Keys().includes(key)) {
						this._setOption(key, this.element.data(key))
						//this.element.removeAttr('data-'+key)
					}
				}
			})
		},
		_triggerHandler: function( type, event, data ) {
				var prop, orig;
				var callback = this.options[ type ];

				data = data || {};
				event = $.Event( event );
				event.type = ( type === this.widgetEventPrefix ?
					type :
					this.widgetEventPrefix + type ).toLowerCase();

				// The original event may come from any element
				// so we need to reset the target on the new event
				event.target = this.element[ 0 ];

				// Copy original event properties over to the new event
				orig = event.originalEvent;
				if ( orig ) {
					for ( prop in orig ) {
						if ( !( prop in event ) ) {
							event[ prop ] = orig[ prop ];
						}
					}
				}

				this.element.triggerHandler(event, data);
				return !( typeof callback === "function" &&
					callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
					event.isDefaultPrevented() );
		},
		Hide: function (effect) {
			this._hide(this.element, effect || this.options.effect, () => {
				this._triggerHandler('hidden')
			})
		},
		Update: function (cb = Function.Noop) {
			this._triggerHandler('updated')
			cb()
		},
		Show: function (effect) {
			this.element.removeClass('Hidden')
			this._show(this.element, effect || this.options.effect, () => {
				this._triggerHandler('shown')
			})
		}
	})

})
