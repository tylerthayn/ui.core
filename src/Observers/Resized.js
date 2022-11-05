/**
* @module Observers/Resized
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Resized', ['jquery', 'ParseStyle'], ($, ParseStyle) => {

	/** Observers/Resized
	* @memberof jQuery.Observers.
	* @function Resized
	* @fires Element#resized
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (current.width != old.width || current.height != old.height) {
					/** Element event
					* @event Element#resized
					*/
					$(element).triggerHandler(prefix+'resized')
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})

