define(['jquery'], ($) => {

	$.fn.extend({
		Action: function (name, ...args) {
			this.each((i, e) => {
				$(e).triggerHandler('action.'+name, args)
			})
		},
		ActionHandler: function (name, fn) {
			this.each((i, e) => {
				$(e).on('action.'+name, {action: name}, (event, ...args) => {
					fn.call(e, ...args)
				})
			})
		}
	})

})
