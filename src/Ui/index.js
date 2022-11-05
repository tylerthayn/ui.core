define('Ui', ['jquery', 'jquery-ui', 'jQuery', 'Observers', 'Ui/Widgets', 'Ui/Builder'], ($, ...modules) => {

	let widgets = []

	function Ui (selector) {
		if (Type(selector, 'object')) {
			widgets.push(selector)
			return selector
		}

		let list = []
		widgets.forEach(w => {
			if (selector.includes('/')) {
				if (w.type == selector) {
					list.push(w)
				}
			} else {
				if (w.element.is(selector)) {
					list.push(w)
				}
			}
		})
		return list //list.length == 1 ? list[0] : list
	}

	Define(Ui, 'widgets', widgets)
	Define(Ui, 'Builder', modules.last.Builder)
	Define(Ui, 'Loader', modules.last.Loader)

	Define(global, 'Ui', Ui)

	$(() => {
		$(window).on('app-ready', () => {
			$('.Loader').effect('fade')
		})
		Ui.Loader('include').then((...args) => {
			//Ui('Ui/Widgets/App')[0].Show()
		})
	})

	return Ui

})
