require(['jquery', '../src/Ui.js'], ($) => {

	$(() => {
/*
		$.widget('Ui.Activatable', $.Ui.Activatable, {
			_setOption: function (key, value) {
				log(key+'::'+value)
				this._super(key, value)
			}
		})
*/
		$('.Ui.Activatable').Container()
		$('.Ui.Activatable').Activatable({
			active: false,
			activated: (event, ...args) => {
				log('activated')
			},
			deactivated: (event, ...args) => {
				log('deactivated')
			}
		})
		//$('.Ui.Activatable').on('click', function () {
		//	$(this).Activatable('Toggle')
		//})
	})
})

