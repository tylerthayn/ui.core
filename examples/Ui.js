require(['jquery', '../src/Ui.js'], ($) => {
	let effects = ['blink', 'bounce', 'clip', 'drop', 'explode', 'fade', 'fold', 'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide']
	let effectsIndex = 0

	$(() => {

		$.widget('Ui.Ui', $.Ui.Ui, {

			Show: function () {
				log('\t'+effects[effectsIndex])
				this._super(effects[effectsIndex])
				effectsIndex++
			},
			Hide: function () {
				log(effects[effectsIndex])
				this._super(effects[effectsIndex])
			}
		})

		//$('.Ui.Size').Size('instance').Refresh = function () {
		//	log(this.options.parent)
		//	this._super()
		//}

		$(() => {
			$('.Ui').Ui({
				ready: function (event, ui) {
					logj(event)
					logj(ui)
					log('ready')
					ui._hoverable(ui.element)
				},
				create: function () {
					log('create')
					//this._hoverable(this.element.find('div'))
				}
				//mounted: () => {log('mounted')},
				//shown: () => {log('shown')},
				//hidden: () => {log('hidden')},
				//refreshed: () => {log('refreshed')},
				//resized: () => {log('resized')},
			})
		})
	})

})

