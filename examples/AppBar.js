require(['jquery', 'jquery-ui', '../src/Ui.js'], ($) => {

	$(() => {
		$('.Ui.AppBar').AppBar({
			autohide: false,
			overlay: true,
			position: top,
			width: 100
		})

		$('#Width').val($('.Ui.AppBar').AppBar('option', 'width'))
		$('#Width').on('change', () => {
			$('.Ui.AppBar').AppBar('option', 'width', parseInt($('#Width').val()))
		})
		$('#Position').on('change', () => {
			$('.Ui.AppBar').AppBar('option', 'position', $('#Position').val())
		})
		$('#Autohide').on('change', () => {
			$('.Ui.AppBar').AppBar('option', 'autohide', $('#Autohide').val() == 'true' ? true : false)
		})
		$('#Overlay').on('change', () => {
			$('.Ui.AppBar').AppBar('option', 'overlay', $('#Overlay').val() == 'true' ? true : false)
		})

		//$('.Ui.Bar.Top.Horizontal').Bar('option', 'effects.show', {duration: 2000, effect: 'slide', direction: 'up'})
		//$('.Ui.Bar.Top.Horizontal').Bar('option', 'effects.hide', {duration: 2000, effect: 'slide', direction: 'up'})

	})


})
