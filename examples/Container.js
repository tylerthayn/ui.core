require(['jquery', '../src/Ui.js'], ($) => {

	$(() => {
		$('.Ui.Container').Container({
			contentElement: '.B',
			appended: (event, ...args) => {
				log('appended')
				log(args)
			},
			cleared: (event, ...args) => {
				log('cleared')
				log(args)
			},
			detached: (event, ...args) => {
				log('detached')
				log(args)
			},
			prepended: (event, ...args) => {
				log('prepended')
				log(args)
			},
			removed: (event, ...args) => {
				log('removed')
				log(args)
			}
		})
	})
})

