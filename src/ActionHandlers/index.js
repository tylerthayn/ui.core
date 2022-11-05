define('ActionHandlers', ['jquery', 'ActionHandlers/Hide', 'ActionHandlers/Show', 'ActionHandlers/Toggle'], ($, Hide, Show, Toggle) => {
	$.extend({
		ActionHandlers: {
			Hide: Hide,
			Show: Show,
			Toggle: Toggle
		}
	})
})
