
/*
require.config({
	paths: {
		'@js': 'js'
	},
	map: {
		'*': {
			'Ui': '@js/Ui'
		}
	}
})
*/

require(['jquery', '../../src/Ui.js', 'Playlist'], ($, Ui, Playlist) => {
	let pl = null

	$(() => {
		pl = $('.Ui.Playlist').Playlist()
		window.pl = pl.Playlist('instance')
	})



})

