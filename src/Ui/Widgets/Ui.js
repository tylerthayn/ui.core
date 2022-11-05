/**
* @module Ui/Widgets/Ui
*/
define('Ui/Widgets/Ui', ['jquery', 'jquery-ui', 'jQuery', 'Observers'], ($) => {
	let className = 'Ui/Widgets/Ui'

	/** Ui widget
	* @memberof Ui.Widgets.
	* @class Ui
	*/
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
		/** Hide widget, with animation
		* @see {@link https://api.jqueryui.com/effect/|jQueryUi Effect}
		* @memberof Ui.Widgets.Ui#
		* @function Hide
		* @param {string|object} [effect]
		* @param {fn} [cb]
		*/
		Hide: function (effect) {
			this._hide(this.element, effect || this.options.effect, () => {
				this._triggerHandler('hidden')
			})
		},
		/** Update widget
		* @memberof Ui.Widgets.Ui#
		* @function Update
		* @param {function} [cb]
		*/
		Update: function (cb = Function.Noop) {
			this._triggerHandler('updated')
			cb()
		},
		/** Show widget, with animation
		* @see {@link https://api.jqueryui.com/effect/|jQueryUi Effect}
		* @memberof Ui.Widgets.Ui#
		* @function Show
		* @param {string|object} [effect]
		* @param {fn} [cb]
		*/
		Show: function (effect) {
			this.element.removeClass('Hidden')
			this._show(this.element, effect || this.options.effect, () => {
				this._triggerHandler('shown')
			})
		}
	})

})
