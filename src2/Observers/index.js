define(['jquery', 'Observers/Hidden', 'Observers/Mounted', 'Observers/Resized', 'Observers/Shown'], ($, Hidden, Mounted, Resized, Shown) => {
	Mounted($('body')[0])

	let Observers = (element, prefix = '') => {
		Hidden(element, prefix)
		Resized(element, prefix)
		Shown(element, prefix)
	}

	Define(Observers, 'Hidden', Hidden)
	Define(Observers, 'Mounted', Mounted)
	Define(Observers, 'Resized', Resized)
	Define(Observers, 'Shown', Shown)

	$.extend({Observers: Observers})

})
