/**
* @module Observers/Mounted
* @requires jquery#triggerHandler
* @requires MutationObserver
*/
define('Observers/Mounted', ['jquery'], ($) => {

	/** Observers/Mounted
	* @memberof jQuery.Observers.
	* @function Mounted
	* @fires Element#mounted
	* @param {HTMLElement} element - Html Element to observe
	* @param {String} prefix - Event name prefix
	*/
	return (element, prefix = '') => {
		const observer = new MutationObserver(function callback(mutationList, observer) {
			mutationList.forEach((mutation) => {
				if (mutation.type == 'childList') {
					mutation.addedNodes.forEach(node => {
						/** Element event
						* @event Element#mounted
						*/
						$(node).triggerHandler(prefix+'mounted')
					})
				}
			})
		})
		observer.observe(element, {childList: true, subTree: true})
	}

})
