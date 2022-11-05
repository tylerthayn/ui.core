define('ActionHandlers/Toggle', ['jquery'], ($) => {
	return function (effect, cb = Function.Noop) {
		$(this).toggle(effect, () => {
			$(this).triggerHandler(this.style.display && this.style.display == 'none' ? 'hidden' : 'shown')
			cb()
		})
	}
})
