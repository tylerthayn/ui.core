define('Observers', ['jquery', 'Observers/Mounted', 'Observers/Hidden', 'Observers/Resized'], ($, Mounted, Hidden, Resized) => {

	Mounted($('body')[0])

	let Observers = (element, prefix = '') => {
		Hidden(element, prefix)
		Resized(element, prefix)
	}

	Define(Observers, 'Mounted', Mounted)
	Define(Observers, 'Hidden', Hidden)
	Define(Observers, 'Resized', Resized)


	$.extend({Observers: Observers})

})
