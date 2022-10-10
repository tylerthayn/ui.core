requirejs.config({
	baseUrl: '../'
})

require(['jquery', 'index'], ($, Ui) => {
	log(Ui)
/*
	require(['Ui'], (Ui) => {
		log(Ui)
		log(Type(Ui))
		$(() => {



		})

		window.Ui = Ui
	})
*/
})
