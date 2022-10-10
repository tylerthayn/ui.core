define(['jquery'], ($) => {
	return function (effect, cb = Function.Noop) {
		$(this).show(effect, () => {
			$(this).triggerHandler('shown')
			cb()
		})
	})
})
