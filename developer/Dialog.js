define(['jquery', '../src/Ui'], ($) => {

	function Dialog () {


	}

	function Prompt () {}

	Define(Dialog, 'Prompt', Prompt)


	$.extend({
		Dialog: Dialog
	})

/*

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
			log(this.element)
			this.element = $('<div class="Dialog">')
			$('body').append(this.element)


		},
		Hide: function () {
			this._hide(this.element, effect, () => {
				this._trigger('hidden')
			})
		},
		Show: function () {
			this._show(this.element, effect, () => {
				this._trigger('shown')
			})
		}

	})

*/


})

