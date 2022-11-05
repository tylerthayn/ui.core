/**
* @module jQuery/Action
*/
define('jQuery/Action', ['jquery'], ($) => {

	/** ActionHandler Callback
	* @callback ActionHandler
	* @param {Event} event
	* @param {...*} args
	*/

	$.fn.extend({
		/** Trigger Action for element
		* @memberof jQuery#
		* @function Action
		* @param {string} name - Action name to trigger
		* @param {...*} [args] - Action args to pass to handler
		*/
		Action: function (name, ...args) {
			this.each((i, e) => {
				$(e).triggerHandler('action.'+name, args)
			})
		},

		/** Register ActionHandler for element
		* @memberof jQuery#
		* @function ActionHandler
		* @param {string} name - Action name to handle
		* @param {ActionHandler} fn - Handler function
		*/
		ActionHandler: function (name, fn) {
			this.each((i, e) => {
				$(e).on('action.'+name, {action: name}, (event, ...args) => {
					fn.call(e, ...args)
				})
			})
		}
	})

})
