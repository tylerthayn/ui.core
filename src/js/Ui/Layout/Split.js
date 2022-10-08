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
