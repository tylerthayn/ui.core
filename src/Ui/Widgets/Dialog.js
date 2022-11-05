define('Ui/Widgets/Dialog', ['jquery', 'jquery-ui'], ($) => {
	let className = 'Ui/Widgets/Dialog'

	return $.widget(className.split(/\//g).slice(-2).join('.'), {
		type: className,
		widgetEventPrefix: className.split(/\//g)[0].toLowerCase(),
		options: {
			effect: {
				effect: 'fade'
			},
			modal: true,
			clickExit: false,
			closeOnEscape: true
		},
		_create: function () {
			this.parent = this.element.parent()
			this.element.detach()
		},
		Hide: function () {
			this._hide(this.element, this.options.effect, () => {
				this._trigger('hidden')
				this.element.detach()
			})
		},
		Show: function () {
			this.parent.append(this.element)
			this._show(this.element, this.options.effect, () => {
				this._trigger('shown')
			})
		}

	})

})

