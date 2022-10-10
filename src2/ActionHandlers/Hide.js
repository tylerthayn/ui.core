define(['jquery'], ($) => {
	return function (effect, cb = Function.Noop) {
		$(this).hide(effect, () => {
			$(this).triggerHandler('hidden')
			cb()
		})
	})
})
