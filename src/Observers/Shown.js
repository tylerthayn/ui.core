/**
* @module Observers/Shown
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Shown', ['jquery', 'ParseStyle'], ($, ParseStyle) => {

	/** Observers/Shown
	* @memberof jQuery.Observers.
	* @function Shown
	* @fires Element#shown
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		let shownObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if (!$(element).hasClass('Hidden') && mutationRecord.oldValue.includes('Hidden')) {
					/** Element event
					* @event Element#shown
					*/
					$(element).triggerHandler(prefix+'shown')
				}
			})
		})
		shownObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(old, 'display') && old.display == 'none') {
					if (!Reflect.has(current, 'display') || current.display != 'none') {
						$(element).triggerHandler(prefix+'shown')
					}
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})

