define('Ui/View', ['jquery', 'jquery-ui', 'Ui/Ui'], ($) => {

	$.widget('Ui.View', $.Ui.Ui, {
		widgetEventPrefix: "view",
		defaultElement: $('<div class="View">'),
		options: {
			id: null,

			// callbacks
			hidden: null,
			refresh: null,
			shown: null
		},
		_create: function () {
			this._super()
/*
			$.Observers.Hidden(this.element[0])
			$.Observers.Resize(this.element[0])
			this.element.on('hidden', () => {
				if (this.options.hidden instanceof Function) {
					this.options.hidden()
				}
			})
			this.element.on('resized', () => {
				if (this.options.resized instanceof Function) {
					this.options.resized()
				}
				this.Refresh()
			})

			this.element.on('shown', () => {
				if (this.options.shown instanceof Function) {
					this.options.shown()
				}
				this.Refresh()
			})

			if (this.element.parent('.Ui').length > 0) {
				this.element.parent('.Ui').on('refresh', () => {
					this.Refresh()
				})
			}
			this.Refresh()
*/
		}
/*
		_setOption: function( key, value ) {
			this._super(key, value)
		},
		_setOptions: function(options) {
			this._super(options)
		},
		_subViews: function () {
			let _e = this.element[0]
			return this.element.find('.View').filter(function (index) {
				let filter = true
				$(this).parentsUntil(_e).each((i, e) => {
					if ($(e).is('.Ui.View')) {
						filter = false
					}
				})
				return filter
			})
		},
		Hide: function () {
			this.element.addClass('Hidden')
		},
		Refresh: function () {
			if (this.options.refresh instanceof Function) {
				this.options.refresh()
			}
			this.element.triggerHandler('refresh')
		},
		Show: function () {
			this.element.removeClass('Hidden')
			if (this.element[0].style.display == 'none') {
				this.element[0].style.removeProperty('display')
			}
		}
*/
	})

	$(() => {
		$('.Ui.View').View({id: Uuid()})
	})

})
