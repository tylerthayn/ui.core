define('Ui/Layout', ['jquery', 'Ui/Ui'], ($) => {

	return $.widget('Ui.Layout', $.Ui.Ui, {
		options: {
			direction: 'vertical',
			type: 'scrolled'
		},
		_create: function () {
			this._super()

			this.options.direction = this.element.hasClass('Horizontal') ? 'horizontal' : 'vertical'
			this.options.type = this.element.hasClass('Fixed') ? 'fixed' : this.element.hasClass('Split') ? 'split' : this.element.hasClass('Paged') ? 'paged' : 'scrolled'


			this.Refresh()
		}
	})

})
