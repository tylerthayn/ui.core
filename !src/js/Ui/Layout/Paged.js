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
