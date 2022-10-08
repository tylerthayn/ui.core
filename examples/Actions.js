require(['jquery', '../src/Ui'], ($) => {

	$('.App').ActionHandler('print', function (s) {
		log(s)
	})

	//$('.App').Action('print', 'one', 'two')

	$('.App').Property('repeat', repeat => {
		log('^^^'+repeat)
	})

	$('.App').Property('repeat', 'one')
/*
	$('.App').PropertyHandler('random', function (random) {
		log('random:'+random)
		$('.App').trigger('property.change', 'random', random)
	})

	$('.App').Property('random', function (event, random) {
		log('<<'+random)
	})

	$('.App').triggerHandler('property.set', {random: 'one'})

	$('.App').Property('random', true)
*/

})
