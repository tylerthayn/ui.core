/**
* @module Ui/Activatable
*/

/** Container
*
* @function Append(...[elements])
* @function Prepend(...[elements])
* @function Clear()
* @function Detach(...[selectors])
* @function Remove(...[selectors])
*/
define('Ui/Activatable', ['jquery', 'jquery-ui', 'Ui/Ui'], ($) => {

	/** Options
	* @typedef {object} Ui/Container.Options
	* @property {}
	*/

	let Activatable = $.widget('Ui.Activatable', $.Ui.Ui, {
		widgetEventPrefix: 'activatable',
		options: {
			active: false,

			// callbacks
			activated: Function.noop,
			deactivated: Function.noop
		},
		_create: function () {
			this._super()

			this.element.bind('activatableclick', (...args) => {
				log('activatableclick')
				this.Toggle()
			})

			this.element.on('click', () => {
				this._trigger('click', {}, 'clicky')
			})

			this._on(this.element, {activated: () => {log('...+')}, deactivated: () => {log('...-')}})

/*
			this.element.on('activated', (...args) => {
				this.options.activated instanceof Function && this.options.activated(...args)
			})
			this.element.on('deactivated', (...args) => {
				this.options.deactivated instanceof Function && this.options.deactivated(...args)
			})
*/
			this.Refresh()
		},
		_setOption: function( key, value ) {
			if (key == 'active') {
				return value ? this.Activate() : this.Deactivate()
			}
			this._super(key, value)
		},
		Activate: function () {
			if (!this.options.disabled) {
				if (!this.options.active) {
					this.options.active = true
					this.element.addClass('Active')
					this._trigger('activated', {})
				}
			}
			return this
		},
		Deactivate: function () {
			if (!this.options.disabled) {
				if (this.options.active) {
					this.options.active = false
					this.element.removeClass('Active')
					this._trigger('deactivated', {})
				}
			}
			return this
		},
		Toggle: function () {
			if (!this.options.disabled) {
				this.options.active ? this.Deactivate() : this.Activate()
			}
			return this
		}
	})



	return Activatable
})
