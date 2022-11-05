/**
* @module Observers
*/
define('Observers', ['jquery', 'Observers/Hidden', 'Observers/Mounted', 'Observers/Resized', 'Observers/Shown'], ($, Hidden, Mounted, Resized, Shown) => {
	Mounted($('body')[0])

	/** Observers() will establish Hidden, Resized and Shown MutationObservers on provided Element
	* @memberof jQuery.
	* @function Observers
	* @param {HtmlElement} element - Element to observer
	* @param {string} [prefix=''] - Event name prefix
	*/
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
