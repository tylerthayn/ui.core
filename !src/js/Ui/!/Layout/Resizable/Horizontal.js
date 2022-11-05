/**
 * HorizontalResizableLayout
 *
 * @memberof Ui.
 * @class HorizontalResizableLayout
 */
define('Ui/Layout/Resizable/Horizontal', ['jquery', 'jquery-ui'], ($) => {
	function ValueOf (v) {return parseFloat(v.replace(/px$/, ''))}

	$.widget('Ui.HorizonatlResizableLayout', {
		/** Options
		* @memberof Ui.HorizontalResizableLayout#
		* @property {Ui.ResizableLayoutOptions} options
		*/
		options: {
			max: 100,
			min: 0,
			value: 50
		},
		_min: 0,
		_max: 0,
		_Calculate: function () {
			this._min = ValueOf(this.element.css('width')) * (this.options.min / 100)
			this._max = ValueOf(this.element.css('width')) * (this.options.max / 100)
		},
		_create: function () {
			if (this.element.data('min')) {this.options.min = parseFloat(this.element.data('min'))}
			if (this.element.data('max')) {this.options.max = parseFloat(this.element.data('max'))}
			this._Calculate()
			if (this.element.data('value')) {
				this.options.value = parseFloat(this.element.data('value')) / 100
				this.SetPercentage(this.options.value)
			} else {this.SetWidth()}

			this.element.children().css('height', this.element.css('height'))

			$(this.element.children()[0]).resizable({
				handles: 'e',
				minWidth: this._min,
				maxWidth: this._max,
				resize: (event, ui) => {
					this.SetWidth(ui.size.width)
				}
			})

			this.element.on('refresh', (event, element) => {
				if (element == this.element) {event.stopPropagation()}
				else {this.Refresh()}
			})

			$(this.element.children()[0]).find('.ui-resizable-handle').on('dblclick', () => {
				this.Toggle()
			})

			this.Refresh()
		},
		_setOption: function (key, value) {
			if (value < 0) {value = 0}
			if (value > 100) {value = 100}
			if (key == 'value') {
				this.SetPercentage(value)
			} else {
				this._Calculate()
				this.Refresh()
				this.SetHeight()
			}
			this._super(key, value)
		},
		/** Refresh
		* @memberof Ui.HorizontalResizableLayout#
		* @function Refresh
		*/
		Refresh: function () {
			this._Calculate()
			this.element.children().css('height', this.element.css('height'))
			$(this.element.children()[0]).resizable('option', 'minWidth', this._min)
			$(this.element.children()[0]).resizable('option', 'maxWidth', this._max)
			this.SetWidth()
		},
		/** SetPercentage
		* @memberof Ui.VerticalResizableLayout#
		* @function SetPercentage
		* @param {number} percentage - Percentage of overall width to set
		*/
		SetPercentage: function (p) {
			this.SetWidth(this.element.width() * (p/100))
		},
		/** SetWidth
		* @memberof Ui.HorizontalResizableLayout#
		* @function SetWidth
		* @param {number} width - The width to set (default is child[0] width)
		*/
		SetWidth: function (w) {
			w = typeof w === 'undefined' ? $(this.element.children()[0]).width() : w
			w = w < this._min ? this._min : w
			w = w > this._max ? this._max : w
			$(this.element.children()[0]).width(w)
			$(this.element.children()[1]).width(this.element.width() - $(this.element.children()[0]).width())
			this.options.value = Math.trunc((w/this.element.width())*100000)/1000
			this.element.children().trigger('refresh', [this.element])
		},
		/** Toggle
		* @memberof Ui.HorizontalResizableLayout#
		* @function Toggle
		*/
		Toggle: function () {
			if ($(this.element.children()[0]).width() < this.element.width()/2) {
				this.SetPercentage(100)
			} else {
				this.SetPercentage(0)
			}
		}
	})

	$(() => {
		$('.Ui.Layout.Resizable.Horizontal').HorizonatlResizableLayout()
	})

})
