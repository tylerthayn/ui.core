define(['jquery', 'jquery-ui', 'Ui/Widgets/Ui'], ($, jQueryUi, Ui) => {
	let className = 'Ui/Widgets/App'

	return $.widget(className.split(/\//g).slice(-2).join('.'), Ui, {
		type: className,
		widgetEventPrefix: className.split(/\//g)[0].toLowerCase(),
		options: {
			loader: {
				hide: true,
				effect: 'fade'
			},
			show: false
		},
		_create: function () {
			if (this.options.loader.hide) {
				this.element.one('uishown', () => {
					$('.Loader').effect(this.options.loader.effect, () => {
						$('.Loader').remove()
					})
				})
			}

			this._super()
		}
	})

})
