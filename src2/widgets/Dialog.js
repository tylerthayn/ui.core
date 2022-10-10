define('Ui/Dialog', ['jquery', 'jquery-ui'], ($) => {

	return $.widget('Ui.Dialog', {
		options: {
			effect: {
				effect: 'fade'
			},
			modal: true,
			clickExit: false,
			closeOnEscape: true
		},
		_create: function () {
			this.element.detach()
		},
		Hide: function () {
			this._hide(this.element, this.options.effect, () => {
				this._trigger('hidden')
				this.element.detach()
			})
		},
		Show: function () {
			$('body').append(this.element)
			this._show(this.element, this.options.effect, () => {
				this._trigger('shown')
			})
		}

	})

})

