define('$Ui', ['jquery'], ($) => {

	let Ui = (...args) => {


	}

	Ui.GetUi = (root = document.body) => {
		return $(root).find('ui').filter(function (index) {
			let filter = true
			$(this).parentsUntil(root).each((i, e) => {
				if (/^ui$/i.test(e.tagName)) {
					filter = false
				}
			})
			return filter
		})
	}


	Ui.Process = (ui) => {
		if (typeof ui === 'undefined') {
			return Promise.all(Ui.GetUi().get().map(Ui.Process))
		} else {
			return new Promise((resolve, reject) => {
				$.get($(ui).attr('src'), html => {
					//let type = $(ui).attr('type')
					//let fn = $.Get(type)
					let e = $(html.split(/\<\/*body.*?\>/i)[1].trim())
					//let i = new fn({}, e)
					//$(ui).replaceWith(i.element)

					require([$(ui).attr('type')], (uiClass) => {
						let i = new uiClass({}, e)
						$(ui).replaceWith(i.element)
						resolve(i)

					})



				})

			})
		}
	}


	$(() => {

		$('view').each((i, e) => {
			log($(e).attr('type'))
			require([$(e).attr('type')], (m) => {

//				m.prototype.namespace + '.' + m.prototype.widgetName
//				$(
//				console.dir(m.prototype.namespace)
			})
		})

	})


	Extend(global, {$Ui: Ui})
	return Ui

})
