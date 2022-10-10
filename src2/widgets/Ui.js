define('Ui/Widgets/Ui', ['jquery', 'jquery-ui', './jQuery/Util', './Observers/index'], ($) => {

	return $.widget('Ui.Ui', {
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
			//$.Observers(this.element[0], 'ui')
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

})
