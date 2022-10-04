require(['jquery', 'jquery-ui', '../src/Ui.js'], ($) => {

	let widget = $.widget('Ui.Bar', $.Ui.Ui, {
		options: {
			effects: {
				show: {effect: 'slide', duration: 2000},
				hide: {effect: 'slide', duration: 2000}
			},
			type: 'overlay',
			visible: false


		},
		_create: function () {
			this._super()

			//if (!this.options.visible) {this.Toggle()}
			if (this.element.hasClass('Top')) {
				this.options.effects.show.direction = 'down'
				this.options.effects.hide.direction = 'up'
			}
			if (this.element.hasClass('Bottom')) {
				this.options.effects.show.direction = 'up'
				this.options.effects.hide.direction = 'down'
			}
			if (this.element.hasClass('Left')) {
				this.options.effects.show.direction = 'right'
				this.options.effects.hide.direction = 'left'
			}
			if (this.element.hasClass('Right')) {
				this.options.effects.show.direction = 'left'
				this.options.effects.hide.direction = 'right'
			}

			this.Refresh()
		},
		Show: function () {
			this._show(this.element, this.options.effects.show)
		},
		Hide: function () {
			this._hide(this.element, this.options.effects.hide)
		},
		Toggle: function (effect = 'drop') {
			this.element.toggle(effect)
		}

	})


	$(() => {
		$('.Ui.Bar').Bar()


		//$('.Ui.Bar.Top.Horizontal').Bar('option', 'effects.show', {duration: 2000, effect: 'slide', direction: 'up'})
		//$('.Ui.Bar.Top.Horizontal').Bar('option', 'effects.hide', {duration: 2000, effect: 'slide', direction: 'up'})

	})


})
