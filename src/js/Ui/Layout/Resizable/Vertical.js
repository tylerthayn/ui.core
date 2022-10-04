/**
 * VerticalResizableLayout
 *
 * @memberof Ui.
 * @class VerticalResizableLayout
 */
define('Ui/Layout/Resizable/Vertical', ['jquery', 'jquery-ui'], ($) => {
	function ValueOf (v) {return parseFloat(v.replace(/px$/, ''))}

	$.widget('Ui.VerticalResizableLayout', {
		/** Options
		* @memberof Ui.VerticalResizableLayout#
		* @property {Ui.ResizableLayoutOptions} options
		*/
		options: {
			max: 100,
			min: 0,
			value: 50
		},
		_minHeight: 0,
		_maxHeight: 0,
		_Calculate: function () {
			this._min = ValueOf(this.element.css('height')) * (this.options.min / 100)
			this._max = ValueOf(this.element.css('height')) * (this.options.max / 100)
		},
		_create: function () {
			if (this.element.data('min')) {this.options.min = parseFloat(this.element.data('min'))}
			if (this.element.data('max')) {this.options.max = parseFloat(this.element.data('max'))}
			this._Calculate()
			if (this.element.data('value')) {
				this.SetPercentage(parseFloat(this.element.data('value')))
			} else {this.SetHeight()}

			this.element.children().css('width', this.element.css('width'))

			$(this.element.children()[0]).resizable({
				handles: 's',
				minHeight: this._min,
				maxHeight: this._max,
				resize: (event, ui) => {
					this.SetHeight(ui.size.height)
				}
			})

			this.element.on('refresh', (event, element) => {
				if (element == this.element) {event.stopPropagation()}
				else {this.Refresh()}
			})

			$(this.element.children()[0]).children('.ui-resizable-handle').on('dblclick', () => {
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
		* @memberof Ui.VerticalResizableLayout#
		* @function Refresh
		*/
		Refresh: function () {
			this._Calculate()
			this.element.children().css('width', this.element.css('width'))
			$(this.element.children()[0]).resizable('option', 'minHeight', this._min)
			$(this.element.children()[0]).resizable('option', 'maxHeight', this._max)
			this.SetHeight()
		},
		/** SetHeight
		* @memberof Ui.VerticalResizableLayout#
		* @function SetHeight
		* @param {number} height - The height to set (default is child[0] height)
		*/
		SetHeight: function (h) {
			h = typeof h === 'undefined' ? (this.options.value/100) * this.element.height() : h
			h = h < this._min ? this._min : h
			h = h > this._max ? this._max : h
			$(this.element.children()[0]).height(h)
			$(this.element.children()[1]).height(this.element.height() - $(this.element.children()[0]).height())
			this.options.value = Math.trunc((h/this.element.height())*100000)/1000
			this.element.children().trigger('refresh', [this.element])
		},
		/** SetPercentage
		* @memberof Ui.VerticalResizableLayout#
		* @function SetPercentage
		* @param {number} percentage - Percentage of overall height to set
		*/
		SetPercentage: function (p) {
			this.SetHeight(this.element.height() * (p/100))
		},
		/** Toggle
		* @memberof Ui.VerticalResizableLayout#
		* @function Toggle
		*/
		Toggle: function () {
			if ($(this.element.children()[0]).height() < this.element.height()/2) {
				this.SetPercentage(100)
			} else {
				this.SetPercentage(0)
			}
		}
	})

	$(() => {
		$('.Ui.Layout.Resizable.Vertical').VerticalResizableLayout()
	})

})
