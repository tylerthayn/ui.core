define('Ui/Layout/Scrolled', ['jquery', 'Ui/Layout'], ($) => {

	return $.widget('Layout.Scrolled', $.Ui.Layout, {
		options: {
			panelTemplate: `<div class="Layout">`
		},
		_create: function () {
			this._super()


			this.element.children().each((i, e) => {
				if (this.options.type == 'horizontal') {
					$(e).Height(this.element.Height())
				} else {
					$(e).Width(this.element.Width())
				}

			})
		}
	})

})
