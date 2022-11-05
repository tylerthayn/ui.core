/**
* @module Ui/Container
*/

/** Container
*
* @function Append(...[elements])
* @function Prepend(...[elements])
* @function Clear()
* @function Detach(...[selectors])
* @function Remove(...[selectors])
*/
define('Ui/Container', ['jquery', 'jquery-ui', 'Ui/Ui'], ($) => {

	/** Options
	* @typedef {object} Ui/Container.Options
	* @property {}
	*/

	let widget = $.widget('Ui.Container', $.Ui.Ui, {
		options: {
			contentElement: null,

			// callbacks
			appended: Function.Noop,
			cleared: Function.Noop,
			detached: Function.Noop,
			prepended: Function.Noop,
			removed: Function.Noop
		},
		_create: function () {
			this._super()

			if (this.options.contentElement == null) {
				this.options.contentElement = this.element[0]
			} else if (Type(this.options.contentElement, 'string')) {
				this.options.contentElement = this.element.find(this.options.contentElement)[0]
			} else if (this.options.contentElement instanceof $) {
				this.options.contentElement = this.options.contentElement[0]
			}

			this.Refresh()
		},
		_Elements: function (...args) {
			let selectors = typeof args.first === 'boolean' ? args.shift() : false
			let elements = []
			args.forEach(arg => {
				if (arg instanceof Element) {
					elements.push(arg)
				} else if (arg instanceof $) {
					arg.each((i, e) => {
						elements.push(e)
					})
				} else if (selectors && Type(arg, 'string')) {
					$(this.options.contentElement).children(arg).each((i, e) => {
						elements.push(e)
					})
				}
			})
			return elements
		},

		Append: function (...args) {
			if (!this.options.disabled) {
				this._Elements(...args).forEach(element => {
					this.options.contentElement.append(element)
					this._trigger('appended', {}, element)
				})
			}
			return this
		},
		Clear: function () {
			if (!this.options.disabled) {
				this.Contains().forEach(e => {
					e.remove()
				})
				this._trigger('cleared')
			}
			return this
		},
		Contains: function (...args) {
			args = args.length == 0 ? $(this.options.contentElement).children() : args
			return this._Elements(true, ...args).filter(element => $(this.options.contentElement).index(element) == -1)
		},
		Detach: function (...args) {
			if (!this.options.disabled) {
				let elements = []
				this.Contains(...args).forEach(element => {
					elements.push($(element).detach())
					this._trigger('detached', {}, elements.last)
				})
				return elements
			}
			return this
		},
		Prepend: function (...args) {
			if (!this.options.disabled) {
				this._Elements(...args).forEach(element => {
					this.options.contentElement.prepend(element)
					this._trigger('prepended', {}, element)
				})
			}
			return this
		},
		Refresh: function () {
			this._super()
		},
		Remove: function (...args) {
			if (!this.options.disabled) {
				this.Contains(...args).forEach(element => {
					this._trigger('removed', {}, element)
					element.remove()
				})
			}
			return this
		}
	})

	return widget
})
