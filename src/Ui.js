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


define([
	'jquery',
	'jquery-ui',
	'jQuery/Util',
	'Observers',
	'Ui/AppBar',
	'Ui/Loader',
	'Ui/Layout',
	'Ui/Layout/Fixed',
	'Ui/Layout/Paged',
	'Ui/Layout/Scrolled',
	'Ui/Layout/Split',
	'Ui/PatternLock',
	'Ui/Size',
	'Ui/Ui',
	'@css/Ui'
], ($) => {

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
					fn.call(this, ...args)
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


define('jQuery/Util', ['jquery', 'jQuery/Action', 'jQuery/Property', 'jQuery/ValueOf', 'jQuery/Value', 'jQuery/Height', 'jQuery/Width'], ($, ValueOf, Value, Height, Width) => {

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
				if (!$(element).hasClass('Hidden') && mutationRecord.oldValue.includes('Hidden')) {
					$(element).triggerHandler(prefix+'shown')
				}
			})
		})
		hiddenObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(current, 'display') && current.display == 'none') {
					if (!Reflect.has(old, 'display') || old.display != 'none') {
						$(element).triggerHandler(prefix+'hidden')
					}
				}
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



define('Observers', ['jquery', 'Observers/Mounted', 'Observers/Hidden', 'Observers/Resized'], ($, Mounted, Hidden, Resized) => {

	Mounted($('body')[0])

	let Observers = (element, prefix = '') => {
		Hidden(element, prefix)
		Resized(element, prefix)
	}

	Define(Observers, 'Mounted', Mounted)
	Define(Observers, 'Hidden', Hidden)
	Define(Observers, 'Resized', Resized)


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



define('Ui/AppBar', ['jquery', 'jquery-ui', 'Ui/Ui'], ($) => {
	let directions = {top: 'up', bottom: 'down', left: 'left', right: 'right'}

	return $.widget('Ui.AppBar', $.Ui.Ui, {
		options: {
			autohide: true,
			effect: 'slide',
			overlay: true,
			position: 'top',
			width: 50,
			height: 0,

			Hidden: Function.Noop,
			Shown: Function.noop,
		},
		_create: function () {
			this._parent = this.element.parent()
			if (this.element.hasClass('Top')) {this.options.position = 'top';this.options.height=this.element.height()}
			if (this.element.hasClass('Bottom')) {this.options.position = 'bottom';this.options.height=this.element.height()}
			if (this.element.hasClass('Left')) {this.options.position = 'left';this.options.height=this.element.width()}
			if (this.element.hasClass('Right')) {this.options.position = 'right';this.options.height=this.element.width()}
			this._setOption('position', this.options.position)
			if (this.options.autohide) {this._Wrap()}

			$(window).on('resized', () => {this._Position()})

		},
		_Position: function () {
			this._Size()
			this.element.css('position', 'absolute')
			if (this.options.position == 'top') {
				if (this._wrapper != null) {
					this._wrapper.css('top', this._wrapper.parent().offset().top+'px')
					this._wrapper.css('left', this._wrapper.parent().offset().left+'px')
					this.element.css('top', '0px')
					this.element.css('left', '0px')
				} else {
					this.element.css('top', this.element.parent().offset().top+'px')
					this.element.css('left', this.element.parent().offset().left+'px')
				}
			}
			if (this.options.position == 'bottom') {
				if (this._wrapper != null) {
					this._wrapper.css('top', (this._wrapper.parent().offset().top+this._wrapper.parent().Height()-this._wrapper.Height())+'px')
					this._wrapper.css('left', this._wrapper.parent().offset().left+'px')
					this.element.css('top', '0px')
					this.element.css('left', '0px')
				} else {
					this.element.css('top', (this.element.parent().offset().top+this.element.parent().Height()-this.element.Height())+'px')
					this.element.css('left', this.element.parent().offset().left+'px')
				}
			}
			if (this.options.position == 'left') {
				if (this._wrapper != null) {
					this._wrapper.css('top', this._wrapper.parent().offset().top+'px')
					this._wrapper.css('left', this._wrapper.parent().offset().left+'px')
					this.element.css('top', '0px')
					this.element.css('left', '0px')
				} else {
					this.element.css('top', this.element.parent().offset().top+'px')
					this.element.css('left', this.element.parent().offset().left+'px')
				}
			}
			if (this.options.position == 'right') {
				if (this._wrapper != null) {
					this._wrapper.css('top', this._wrapper.parent().offset().top+'px')
					this._wrapper.css('left', (this._wrapper.parent().offset().left+this._wrapper.parent().Width()-this._wrapper.Width())+'px')
					this.element.css('top', '0px')
					this.element.css('left', this.options.width+'px')
				} else {
					this.element.css('top', this.element.parent().offset().top+'px')
					this.element.css('left', (this.element.parent().offset().left+this.element.parent().Width()-this.element.Width())+'px')
				}
			}
		},
		_Size: function () {
			if (this.options.position == 'top') {
				if (this._wrapper != null) {
					this._wrapper.Width(this._wrapper.parent().Width())
					this._wrapper.Height(this.options.height+this.options.width)
				}
				this.element.Width(this.element.parent().Width())
				this.element.Height(this.options.height)
			}
			if (this.options.position == 'bottom') {
				if (this._wrapper != null) {
					this._wrapper.Width(this._wrapper.parent().Width())
					this._wrapper.Height(this.options.height+this.options.width)
				}
				this.element.Width(this.element.parent().Width())
				this.element.Height(this.options.height)
			}
			if (this.options.position == 'left') {
				if (this._wrapper != null) {
					this._wrapper.Width(this.options.height+this.options.width)
					this._wrapper.Height(this._wrapper.parent().Height())
				}
				this.element.Width(this.options.height)
				this.element.Height(this.element.parent().Height())
			}
			if (this.options.position == 'right') {
				if (this._wrapper != null) {
					this._wrapper.Width(this.options.height+this.options.width)
					this._wrapper.Height(this._wrapper.parent().Height())
				}
				this.element.Width(this.options.height)
				this.element.Height(this.element.parent().Height())
			}

		},
		_setOption: function (key, value) {
			this._super(key, value)
			if (key == 'autohide') {
				if (value) {this._Wrap()}
				else {this._Unwrap()}
			}
			if (key == 'position') {
				this.element.removeClass('Top Bottom Left Right')
				this.element.addClass(value.Capitalize())
				this._Position()
			}
			if (key == 'overlay') {
				this.Show()
			}
			if (key == 'width') {
				if (this._wrapper != null) {
					if (this.options.position == 'top' || this.options.position == 'bottom') {
						this._wrapper.Height(this.element.Height() + this.options.width)
					} else {
						this._wrapper.Width(this.element.Width() + this.options.width)
					}
				}
			}
		},
		_Unwrap: function () {
			if (this._wrapper != null) {
				this._wrapper.parent().append(this.element.detach())
				this._wrapper.remove()
				this._Wrapper = null
			}
		},
		_Wrap: function () {
			if (this._wrapper == null) {
				this.element.wrap($('<div class="Ui AppBarWrapper">'))
				this._wrapper = $('.Ui.AppBarWrapper')
				this._wrapper.addClass(this.options.position.Capitalize())
				this._wrapper.css('position', 'absolute')
				let $this = this
				let Show = () => {
					$this.Show()
					$this.element.one('mouseleave', () => {
						$this._wrapper.one('mouseleave', () => {
							$this.Hide()
							$this._wrapper.one('mouseover', Show)
						})
					})
				}

				this._wrapper.one('mouseover', Show)
				this._Position()
				this.Hide()
			}
		},
		_wrapper: null,
		Hide: function () {
			this._parent.css('padding', '0px')
			this._hide(this.element, {effect: this.options.effect, direction: directions[this.options.position]}, () => {
				this._trigger('Hidden')
			})
		},
		Show: function () {
			this._parent.css('padding', '0px')
			if (this.options.overlay === false) {
				if (this.options.position == 'top') {this._parent.css('padding-top', this.options.height+'px')}
				if (this.options.position == 'bottom') {this._parent.css('padding-bottom', this.options.height+'px')}
				if (this.options.position == 'left') {this._parent.css('padding-left', this.options.height+'px')}
				if (this.options.position == 'right') {this._parent.css('padding-right', this.options.height+'px')}
			}
			this._show(this.element, {effect: this.options.effect, direction: directions[this.options.position]}, () => {
				this._trigger('Shown')
			})
		}
	})




})


define('Ui/Layout/Fixed', ['jquery', 'Ui/Layout'], ($) => {

	return $.widget('Layout.Fixed', $.Ui.Layout, {
		options: {
			panelTemplate: `<div class="Layout">`,
			max: 80,
			min: 25,
			value: 50,

			resizable: {
				handles: ''
			}

		},
		_create: function () {
			this._super()


			while (this.element.children().length < 2) {
				this.element.append($(this.options.panelTemplate))
			}
			this.element.children().each((i, e) => {if (i > 1) {$(e).detach()}})
			this.options.resizable.handles = this.options.direction == 'vertical' ? 's' : 'e'
			this.options.resizable.resize = () => {this.element.children().each((i, e) => {$(e).triggerHandler('resized')})}
			$(this.element.children()[0]).resizable(this.options.resizable)


		}
	})

})


define('Ui/Layout', ['jquery', 'Ui/Ui'], ($) => {

	return $.widget('Ui.Layout', $.Ui.Ui, {
		options: {
			direction: 'vertical',
			type: 'scrolled'
		},
		_create: function () {
			this._super()

			this.options.direction = this.element.hasClass('Horizontal') ? 'horizontal' : 'vertical'
			this.options.type = this.element.hasClass('Fixed') ? 'fixed' : this.element.hasClass('Split') ? 'split' : this.element.hasClass('Paged') ? 'paged' : 'scrolled'


			this.Refresh()
		}
	})

})


define('Ui/Layout/Paged', ['jquery', 'Ui/Layout'], ($) => {

	return $.widget('Layout.Paged', $.Ui.Layout, {
		options: {
			panelTemplate: `<div class="Layout">`,
			max: 80,
			min: 25,
			value: 50,

			resizable: {
				handles: ''
			}

		},
		_create: function () {
			this._super()


			while (this.element.children().length < 2) {
				this.element.append($(this.options.panelTemplate))
			}
			this.element.children().each((i, e) => {if (i > 1) {$(e).detach()}})
			this.options.resizable.handles = this.options.direction == 'vertical' ? 's' : 'e'
			this.options.resizable.resize = () => {this.element.children().each((i, e) => {$(e).triggerHandler('resized')})}
			$(this.element.children()[0]).resizable(this.options.resizable)


		}
	})

})


define('Ui/Layout/Scrolled', ['jquery', 'Ui/Layout'], ($) => {

	return $.widget('Layout.Scrolled', $.Ui.Layout, {
		options: {
			panelTemplate: `<div class="Layout">`
		},
		_create: function () {
			this._super()


			this.element.children().each((i, e) => {
				if (this.options.type == 'horizontal') {
					$(e).Height(this.element.Height())
				} else {
					$(e).Width(this.element.Width())
				}

			})
		}
	})

})


define('Ui/Layout/Split', ['jquery', 'Ui/Layout'], ($) => {

	return $.widget('Layout.Split', $.Ui.Layout, {
		options: {
			panelTemplate: `<div class="Layout">`,
			max: 100,
			min: 0,
			value: 50,

			resizable: {
				handles: ''
			}

		},
		_calculateLimits: function () {
			if (this.options.direction == 'horizontal') {
				this._max = this.element.width() * this.options.max/100
				this._min = this.element.width() * this.options.min/100
			} else {
				this._max = this.element.height() * this.options.max/100
				this._min = this.element.height() * this.options.min/100
			}
		},
		_calculateValue: function () {
			if (this.options.direction == 'horizontal') {
				this.options.value = ($(this.element.children()[0]).width() / this.element.width()) * 100
			} else {
				this.options.value = ($(this.element.children()[0]).height() / this.element.height()) * 100
			}
			this.options.value = Math.round(this.options.value * 1000)/1000
		},
		_configureResizable: function () {
			this._calculateLimits()
			if (this.options.direction == 'horizontal') {
				this.options.resizable.handles = 'e'
				this.options.resizable.maxHeight = this.element.height()
				this.options.resizable.minHeight = this.element.height()
				this.options.resizable.maxWidth = this._max
				this.options.resizable.minWidth = this._min
			} else {
				this.options.resizable.handles = 's'
				this.options.resizable.maxWidth = this.element.width()
				this.options.resizable.minWidth = this.element.width()
				this.options.resizable.maxHeight = this._max
				this.options.resizable.minHeight = this._min
			}
			$(this.element.children()[0]).resizable(this.options.resizable)
		},
		_create: function () {
			this._super()


			while (this.element.children().length < 2) {
				this.element.append($(this.options.panelTemplate))
			}
			this.element.children().each((i, e) => {if (i > 1) {$(e).detach()}})

			this.options.direction = this.element.hasClass('Horizontal') ? 'horizontal' : 'vertical'
			if (this.element.data('max')) {this.max = this.element.data('max')}
			if (this.element.data('min')) {this.min = this.element.data('min')}
			if (this.element.data('value')) {this.value = this.element.data('value')}

			this.options.resizable.resize = () => {
				this.element.children().each((i, e) => {$(e).triggerHandler('resized')})
				this._calculateValue()
				this._trigger('resize', {}, this.options.value)
			}
			this._configureResizable()

			this.element.on('uiresized', () => {this._configureResizable()})

			this.Refresh()
		},
		_min: 0,
		_max: 0,
		_setOption: function (key, value) {
			this._super(key, value)
			if (key == 'max' || key == 'min') {
				this._configureResizable()
				this._trigger('limits', {}, this.options.Pick('max', 'min'))
			}
			if (key == 'value') {
				this._trigger('resize', {}, this.options.value)
			}
			this.Refresh()
		},
		Refresh: function () {
			if (this.options.value < this.options.min) {this.options.value = this.options.min}
			if (this.options.value > this.options.max) {this.options.value = this.options.max}

			if (this.options.direction == 'horizontal') {
				$(this.element.children()[0]).width(this.element.width() * (this.options.value/100))
			} else {
				$(this.element.children()[0]).height(this.element.height() * (this.options.value/100))
			}
			this.element.children().each((i, e) => {$(e).triggerHandler('resized')})
			this._trigger('resize', {}, this.options.value)
			this._super()
		},
		Toggle: function () {
			this._setOption('value', this.options.value > 50 ? this.options.min : this.options.max)
		}
	})

})


define('Ui/Loader', ['jquery'], ($) => {
	let loaderTemplate = `<div class="Ui Loader" style="position:fixed;width:100%;height:100%;left:0;top:0;">\n\t<div class="Title" style="display:none;color:white;position:fixed;top:0;left:0;text-align:center;z-index:1001;width:100%">Loading</div>\n\t<img title="Loading" class="Ui Loader" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" style="position:fixed;left:0;top:0;width:100%;height:100%;background-repeat:no-repeat;background-size:75px !important;background-position-x:center;background-position-y:75px;background-color:black !important;background-image: url('data:image/gif;base64,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zqD1lmRDN7VtF0Dzf/RHPDY72ggWoEcCJC2k/iNTTbeXdnQJRh3qUpv61KhOtapXzepWu/rVsI61rGdN61rb+ta4zrWud83rXvv618AOtrCHTexiG/vYyE62spfN7GY7+9nQjra0p03talv72tjOtra3ze1ue/vb4A63uMdN7nKb+9zoTre6183udrv73fCOt7znTe962/ve+M63vvfN7377+98AD7jAB07wghv84AhPuMIXzvCGO/zhEI+4xCdO8Ypb/OIYz7jGN87xjnv84yAPuchHTvKSm/zkKE+5ylfO8pa7/OUwj7nMZ07zmtv85jjPuc53zvOe+/znQA+60IdO9KIb/ehIT7rSl870pjv96VCPutSnTvWqPVv96ljPuta3zvWue/3rYA+72MdO9rKb/exoT7va1872trv97XCPu9znTve62/3ueM+73vfO9777/e9RCAIAIfkEBQgAMAAh+QQFCAAAACwAAAAAQAFAAYX////v9//W5v+11vel1ve93vfW7/+t1ve93v/m9//39//e7//O5v/m7/+13vd7vfdrtfeExfeUzvdzvffF5v+Mxfelzvf3//9CnO8xnO9jtfdKpe9arfeczvfW5vdKnN4pjNYQe86UxebF3vchhM6EveYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCAcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvPy4BgQGi73+1BIYCu2+/4fN4A7/vbB3qCg4SFhkYIf4pwCIeOj5CRWAkHi5ZvCZKam5yal59ugZ2jpKVniaCgpqusrVipqaKus7S1RHywqra7vKUBual0vcPEj6jAl43Fy8x5bMiXA83T1GXQutXZ2lrXn9vf4FPdl+Hl5krjlufr7ADpi+3xZgr0he+K8vlgCwz9/QuD7v0pFMCAAX27GvhbuFBAHoF+9Dh4AKGixYoOELIywLDjwoN2IPbBE+GiyYsRNJLi57Elgzsi4dxpcLJmRQnCVEZyybNf/siYbuzQtEl0AgWdjhSw7NkypxmgQetQJEoVJFJBCZhqzXQGaps6VMNWnJDxKh6taF929YqGgdi3ECSYtZNWq4K1UNFMhRt27hmOdbU6FeOV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');" />\n</div>`

	let widget = $.widget('Ui.Loader', {
		options: {
			imageSrc: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
			imageBackground: `url('data:image/gif;base64,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zqD1lmRDN7VtF0Dzf/RHPDY72ggWoEcCJC2k/iNTTbeXdnQJRh3qUpv61KhOtapXzepWu/rVsI61rGdN61rb+ta4zrWud83rXvv618AOtrCHTexiG/vYyE62spfN7GY7+9nQjra0p03talv72tjOtra3ze1ue/vb4A63uMdN7nKb+9zoTre6183udrv73fCOt7znTe962/ve+M63vvfN7377+98AD7jAB07wghv84AhPuMIXzvCGO/zhEI+4xCdO8Ypb/OIYz7jGN87xjnv84yAPuchHTvKSm/zkKE+5ylfO8pa7/OUwj7nMZ07zmtv85jjPuc53zvOe+/znQA+60IdO9KIb/ehIT7rSl870pjv96VCPutSnTvWqPVv96ljPuta3zvWue/3rYA+72MdO9rKb/exoT7va1872trv97XCPu9znTve62/3ueM+73vfO9777/e9RCAIAIfkEBQgAMAAh+QQFCAAAACwAAAAAQAFAAYX////v9//W5v+11vel1ve93vfW7/+t1ve93v/m9//39//e7//O5v/m7/+13vd7vfdrtfeExfeUzvdzvffF5v+Mxfelzvf3//9CnO8xnO9jtfdKpe9arfeczvfW5vdKnN4pjNYQe86UxebF3vchhM6EveYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCAcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvPy4BgQGi73+1BIYCu2+/4fN4A7/vbB3qCg4SFhkYIf4pwCIeOj5CRWAkHi5ZvCZKam5yal59ugZ2jpKVniaCgpqusrVipqaKus7S1RHywqra7vKUBual0vcPEj6jAl43Fy8x5bMiXA83T1GXQutXZ2lrXn9vf4FPdl+Hl5krjlufr7ADpi+3xZgr0he+K8vlgCwz9/QuD7v0pFMCAAX27GvhbuFBAHoF+9Dh4AKGixYoOELIywLDjwoN2IPbBE+GiyYsRNJLi57Elgzsi4dxpcLJmRQnCVEZyybNf/siYbuzQtEl0AgWdjhSw7NkypxmgQetQJEoVJFJBCZhqzXQGaps6VMNWnJDxKh6taF929YqGgdi3ECSYtZNWq4K1UNFMhRt27hmOdbU6FeOV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')`,
			showText: false,
			text: ''
		},
		_create: function () {
			this._super()
			$(window).on('start', () => {
				this.destroy()
			})
		},
		destroy: function () {
			this._hide(this.element, 'fade')
			this._super()
			this.element.remove()
		}
	})

	return widget

})



define('Ui/PatternLock', ['jquery', 'Ui/Ui'], function ($) {

	/*
	 *  Pattern Lock - v1.0.0
	 *  Android like pattern lock for web with touch event support
	 *
	 *
	 *  Made by Bharat Patil
	 *  Under CustomLicense License
	 */
	;(function($, window, document, undefined) {var i,j,idCounter,context,len,pluginName='patternLock',defaults={rows:3,columns:3,width:250,height:250,randomizeIds:false,isCircle:true,showPatternLine:true,patternLineColor:'#000000',fieldName:'',valueSeparator:',',valueArray:[],centerCircle:false,lineWidth:4,centerCircleSize:10,drawEnd:null,selectionColor:'#0000ff',timeout:500,allowRepeatSelection:false},isCanvas=function(){var elem=document.createElement('canvas');return!!(elem.getContext&&elem.getContext('2d'))}(),cssstyle='<style id="patternLockStyylee"></style>';function Plugin(element,options){this.element=element;this.started=false;this.nums=[];this.arrCoordinates=[];this.patternClearTimeout=null;this.canvas=null;this.canvasContext=null;this.selectionClass='myselectionClass'+(new Date).getTime();this.selectionClassStyle='.'+this.selectionClass;this.options=$.extend({},defaults,options);this._defaults=defaults;this._name=pluginName;this.init()}Plugin.prototype={init:function(){this.initIESupport();0===$('#patternLockStyylee').length&&$(cssstyle).appendTo('head');try{this.selectionClassStyle+='{ background-color: '+this.options.selectionColor+' !important; }';$('#patternLockStyylee').append(this.selectionClassStyle)}catch(e){this.selectionClass='ie8FallbackHighlight'}var _that=this;if(0===this.options.valueArray.length||this.options.valueArray.length!==this.options.rows*this.options.columns)for(i=0,len=this.options.rows*this.options.columns;i<len;i++)this.options.valueArray[i]=i+1;var content='<div class="patternlock" style="width:'+this.options.width+'px;height:'+this.options.height+'px"><div class="insideWrapper">';false===$.isEmptyObject(this.options.fieldName)&&(content+='<input type="hidden" name="'+this.options.fieldName+'">');true===isCanvas&&true===this.options.showPatternLine&&(content+='<canvas class="patternLockCanvas" width="100%" height="100%;"></canvas>');content+='<table class="tbl tbl1" cellspacing="25px">';idCounter=0;for(i=1;i<=this.options.rows;i++){content+='<tr>';for(j=1;j<=this.options.columns;j++){content=content+'<td class="lockTd cell-'+this.options.valueArray[idCounter]+'" data-value="'+this.options.valueArray[idCounter]+'">';this.options.centerCircle&&(content=content+'<div class="centerCircle cir-'+this.options.valueArray[idCounter]+'" style="width:'+this.options.centerCircleSize+'px;height:'+this.options.centerCircleSize+'px"></div>');idCounter++;content+='</td>'}content+='</tr>'}content+='</table>';content+='</div></div>';$(this.element).append(content);var tableWidth=$('table.tbl',this.element).outerWidth(),tableHeight=$('table.tbl',this.element).outerHeight(),containerElement=$('.patternlock',this.element);tableWidth>this.options.width&&(this.options.width=tableWidth);tableHeight>this.options.height&&(this.options.height=tableHeight);containerElement.css({width:this.options.width,height:this.options.height});if(true===isCanvas&&true===this.options.showPatternLine){_that.canvas=$('.patternLockCanvas',this.element)[0];_that.canvas.width=this.options.width;_that.canvas.height=this.options.height;_that.canvasContext=_that.canvas.getContext('2d')}this.bindEvents()},initIESupport:function(){Array.prototype.indexOf||(Array.prototype.indexOf=function(elt){var len=this.length>>>0;var from=Number(arguments[1])||0;(from=from<0?Math.ceil(from):Math.floor(from))<0&&(from+=len);for(;from<len;from++)if(from in this&&this[from]===elt)return from;return-1})},bindEvents:function(){var _that=this;$('td.lockTd',this.element).bind('mouseenter',function(evt){evt.preventDefault();_that.lockMoveMouse(this)});$('td.lockTd',this.element).bind('mousedown',function(){if(_that.patternClearTimeout){clearTimeout(_that.patternClearTimeout);_that.clearSelection()}_that.lockStartMouse(this)});$('.tbl',this.element).bind('touchmove',function(evt){evt.preventDefault();context=$(this);var touch=evt.originalEvent.touches[0]||evt.originalEvent.changedTouches[0],xpos=touch.pageX,ypos=touch.pageY;_that.lockMoveTouch(context,xpos,ypos)});$('.tbl',this.element).bind('touchstart',function(evt){if(_that.patternClearTimeout){clearTimeout(_that.patternClearTimeout);_that.clearSelection()}var touch=evt.originalEvent.touches[0]||evt.originalEvent.changedTouches[0],xpos=touch.pageX,ypos=touch.pageY;evt.preventDefault();context=$(this);_that.lockStartTouch(context,xpos,ypos)});$('.tbl',this.element).bind('mouseup touchend',function(evt){evt.preventDefault();_that.pattenDrawEnd()});$(document).bind('mouseup touchend',function(){_that.pattenDrawEnd()})},lockStartMouse:function(thatTd){this.started=true;this.nums=[];this.arrCoordinates=[];$(thatTd).removeClass('selected '+this.selectionClass);this.clearCanvas();$(thatTd).addClass('selected '+this.selectionClass);this.nums.push($(thatTd).attr('data-value'));this.arrCoordinates.push(this.getCenter(thatTd))},lockMoveMouse:function(thatTd){var num=$(thatTd).attr('data-value'),lastNum=this.nums[this.nums.length-1];if(true===this.started&&lastNum!==num&&(this.options.allowRepeatSelection||-1===this.nums.indexOf(num))){this.arrCoordinates.push(this.getCenter(thatTd));this.drawLine();$(thatTd).addClass('selected '+this.selectionClass);this.nums.push($(thatTd).attr('data-value'))}},lockStartTouch:function(context,xpos,ypos){var element=null,_that=this;$('td.lockTd',context).each(function(){if(_that.isMouseOverLockHoles($(this),xpos,ypos)){element=$(this);_that.started=true;_that.nums=[];_that.arrCoordinates=[];_that.clearCanvas();$(element).addClass('selected '+_that.selectionClass);_that.nums.push($(element).attr('data-value'));_that.arrCoordinates.push(_that.getCenter(element))}else;})},lockMoveTouch:function(context,xpos,ypos){var element=null,_that=this;$('td.lockTd',context).each(function(){if(_that.isMouseOverLockHoles($(this),xpos,ypos)){element=$(this);var num=$(element).attr('data-value'),lastNum=_that.nums[_that.nums.length-1];if(true===_that.started&&lastNum!==num&&(_that.options.allowRepeatSelection||-1===_that.nums.indexOf(num))){_that.arrCoordinates.push(_that.getCenter(element));_that.drawLine();$(element).addClass('selected '+_that.selectionClass);_that.nums.push($(element).attr('data-value'))}}else;})},isInsideCircle:function(x,y,r,left,top){return Math.sqrt(Math.pow(left-x,2)+Math.pow(top-y,2))<=r},getCenter:function(ele){if(false!==isCanvas&&false!==this.options.showPatternLine){var offset=$(ele).position(),width=$(ele).outerWidth(),height=$(ele).outerHeight();return{x:offset.left+width/2,y:offset.top+height/2}}},clearCanvas:function(){if(false!==isCanvas&&false!==this.options.showPatternLine){this.canvasContext.clearRect(0,0,this.canvas.width,this.canvas.height);var w=this.canvas.width;this.canvas.width=1;this.canvas.width=w}},drawLine:function(){if(!(false===isCanvas||false===this.options.showPatternLine||this.arrCoordinates.length<2)){var c=this.arrCoordinates;i=c.length-1;this.canvasContext.lineWidth=this.options.lineWidth;this.canvasContext.beginPath();this.canvasContext.moveTo(c[i-1].x,c[i-1].y);this.canvasContext.lineTo(c[i].x,c[i].y);this.canvasContext.strokeStyle=this.options.patternLineColor;this.canvasContext.stroke();this.canvasContext.closePath()}},pattenDrawEnd:function(){if(true===this.started){this.started=false;this.patternClearTimeout&&clearTimeout(this.patternClearTimeout);var _that=this;this.patternClearTimeout=setTimeout(function(){_that.clearSelection()},_that.options.timeout);var patternValue=this.nums.join(this.options.valueSeparator);false===$.isEmptyObject(this.options.fieldName)&&$('input[type=hidden][name='+this.options.fieldName+']').val(patternValue);this.options.drawEnd&&$.isFunction(this.options.drawEnd)&&this.options.drawEnd.call(null,patternValue)}},clearSelection:function(){$('.tbl td',this.element).removeClass('selected '+this.selectionClass);this.clearCanvas()},isMouseOverLockHoles:function(element,left,top){var offset=element.offset();if(true===this.options.isCircle){var radius=element.width()/2;return this.isInsideCircle(offset.left+radius,offset.top+radius,radius,left,top)}return top>=offset.top&&left>=offset.left&&left<=offset.left+element[0].offsetWidth&&top<=offset.top+element[0].offsetHeight}};$.fn[pluginName]=function(options){if(void 0===options||'object'==typeof options)return this.each(function(){$.data(this,'plugin_'+pluginName)||$.data(this,'plugin_'+pluginName,new Plugin(this,options))});if('string'==typeof options&&'_'!==options[0]&&'init'!==options){this.each(function(){if('destroy'===options){$.data(this,'plugin_'+pluginName,null);$(this).empty()}});return this}};})(jQuery, window, document);


	let patternLock = $.widget('Ui.PatternLock', $.Ui.Ui, {
		defaultElement: $('<div class="Ui PatternLock">'),
		options: {
			data: '',
			confirm: false,
			confirming: false,
			rows: 4,
			columns: 4,
			width: (innerWidth < innerHeight ? innerWidth : innerHeight) - 2 * 20,
			height: (innerWidth < innerHeight ? innerWidth : innerHeight) - 2 * 20,
			showPatternLine: true,
			patternLineColoe: '#000000',
			lineWidth: 4,
			selectionColor: '#ff0000',
			fieldName: '',
			valueSeparator: ',',
			valueArray: [],
			centerCircle: true,
			centerCircleSize: 20,
			drawEnd: Function.Noop,
			timeout: 500,
			allowRepeatSelection: true
		},
		_create: function () {
			this.options['_drawEnd'] = this.options.drawEnd
			this.options.drawEnd = (data) => {
				if (!this.options.confirm) {
					this.Hide()
					this.options.data = data
					this.options._drawEnd(data)
					this.options.cb(data)
					this.options.resolve(data)
				} else {
					if (this.options.confirming) {
						this.options.confirming = false
						if (data == this.options.data) {
							this.Hide()
							this.options.data = data
							this.options._drawEnd(data)
							this.options.cb(data)
							this.options.resolve(data)
						} else {
							$.notify('Entries did not match', {className: 'error', elementPosition: 'top center'})
							setTimeout(() => {
								this.Hide()
							}, 1000)
							this.options.data = null
							this.options._drawEnd(this.options.data)
							this.options.cb(this.options.data)
							this.options.resolve(this.options.data)
						}
					} else {
						this.options.confirming = true
						this.options.data = data
						$.notify('Re-enter to confirm', {className: 'info', position: 'top right'})
					}
				}
			}

			this.element.patternLock(this.options)
			this._super()
		},
		//Hide: function () {
		//	this.element.addClass('Hidden')
		//},
		Refresh: function () {
			if (this.options.refresh instanceof Function) {
				this.options.refresh()
			}
			this.element.triggerHandler('refresh')
		},
		Show: function (cb = Function.Noop) {
			return new Promise((resolve, reject) => {
				this.options.confirming = false
				this.options.resolve = resolve
				this.options.cb = cb

				this._super()

			})
		}
	})

	$.extend({PatternLock: (selector, options = {}) => {
		let pl = {
			$e: $(selector),
			e: $(selector)[0]
		}

		pl.$e.PatternLock(options)
		pl.i = pl.$e.PatternLock('instance')
		Define(pl, 'data', {
			get: () => {
				return pl.i.options.data
			},
			set: (v) => {
				pl.i.options.data = v
			}
		})
		Define(pl, 'options', {
			get: () => {
				return pl.i.options
			}
		})
		Define(pl, 'Hide', () => {
			return pl.i.Hide()
		})

		Define(pl, 'Show', (...args) => {
			return pl.i.Show(...args)
		})
		return pl
	}})

	return patternLock
})


define('Ui/Size', ['jquery', 'Observers/Resized', 'jQuery/Util', 'jquery-ui', 'Ui/Ui'], ($, Resized) => {

	let widget = $.widget('Ui.Size', $.Ui.Ui, {
		options: {

		},
		_create: function () {
			this._super()
			Resized(this.element.parent()[0], this.uuid)
			this.element.parent().on(this.uuid+'resized', () => {this.Refresh()})
			this.element.parent().on('resized', () => {this.Refresh()})
			this.element.parents('.Ui').on('uirefreshed', () => {this.Refresh()})
		},
		Refresh: function () {
			this.element.text(`${this.element.parent().Width()}x${this.element.parent().Height()}`)
			this._super()
		}
	})

	$(() => {
		$('.Ui.Size').Size()
	})

	return widget
})


/**
* @module Ui/Base
*/
define('Ui/Ui', ['jquery', 'jquery-ui', 'Observers'], ($) => {

	/** Options
	* @typedef {object} Ui/Base.Options
	* @property {}
	*/

	let widget = $.widget('Ui.Ui', {
		widgetEventPrefix: 'ui',
		options: {
			disabled: false,

			// callbacks
			hidden: Function.Noop,
			mounted: Function.Noop,
			ready: Function.Noop,
			resized: Function.Noop,
			refreshed: Function.Noop,
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

			/** Observers
			* @fires hidden
			* @fires mounted
			* @fires shown
			* @fires resized
			*/
			$.Observers(this.element[0], 'ui')
			this.element.on('uimounted', (...args) => {this._trigger('mounted', ...args)})
			this.element.parentsUntil('body').each((i, e) => {$(e).on('uimounted', (...args) => {this._trigger('mounted', ...args)})})
			this.element.on('uihidden', (...args) => {this._trigger('hidden', ...args)})
			this.element.on('uishown', (...args) => {this._trigger('shown', ...args)})
			this.element.on('uiresized', (...args) => {this._trigger('resized', ...args)})

			if (this.element.parent('.Ui').length > 0) {
				this.element.parent('.Ui').on('uirefreshed', () => {
					this.Refresh()
				})
			}

			this._processDataConfigs()
			this.Refresh()

		},
		_processDataConfigs: function () {
			this.element.data().Keys().forEach(key => {
				if (key != this.widgetFullName) {
					if (this.options.Keys().includes(key)) {
						this._setOption(key, this.element.data(key))
						this.element.removeAttr('data-'+key)
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
		Hide: function (...args) {
			//this.element.addClass('Hidden')
			this._hide(this.element, ...args)
		},
		Refresh: function () {
			this._triggerHandler('refreshed')
		},
		Show: function (...args) {
			//this.element.removeClass('Hidden')
			//this.element[0].style.display == 'none' && this.element[0].style.removeProperty('display')
			this._show(this.element, ...args)
		}
	})

	return widget
})


define('$Ui', ['jquery'], ($) => {

	let Ui = (...args) => {


	}

	Ui.GetUi = (root = document.body) => {
		return $(root).find('ui').filter(function (index) {
			let filter = true
			$(this).parentsUntil(root).each((i, e) => {
				if (/^ui$/i.test(e.tagName)) {
					filter = false
				}
			})
			return filter
		})
	}


	Ui.Process = (ui) => {
		if (typeof ui === 'undefined') {
			return Promise.all(Ui.GetUi().get().map(Ui.Process))
		} else {
			return new Promise((resolve, reject) => {
				$.get($(ui).attr('src'), html => {
					//let type = $(ui).attr('type')
					//let fn = $.Get(type)
					let e = $(html.split(/\<\/*body.*?\>/i)[1].trim())
					//let i = new fn({}, e)
					//$(ui).replaceWith(i.element)

					require([$(ui).attr('type')], (uiClass) => {
						let i = new uiClass({}, e)
						$(ui).replaceWith(i.element)
						resolve(i)

					})



				})

			})
		}
	}


	$(() => {

		$('view').each((i, e) => {
			log($(e).attr('type'))
			require([$(e).attr('type')], (m) => {

//				m.prototype.namespace + '.' + m.prototype.widgetName
//				$(
//				console.dir(m.prototype.namespace)
			})
		})

	})


	Extend(global, {$Ui: Ui})
	return Ui

})
