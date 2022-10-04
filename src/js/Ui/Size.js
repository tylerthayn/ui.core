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
