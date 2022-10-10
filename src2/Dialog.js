define(['jquery-ui', 'Ui/Ui'], ($) => {

	function Dialog () {

		return this
	}

	let widget = $.widget('Ui.Dialog', $.Ui.Ui, {
		options: {

		},
		_create: function () {


		}
	})

	Define(Dialog, 'Ui', widget)


	return Dialog

})
