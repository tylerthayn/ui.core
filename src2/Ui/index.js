define('Ui', ['jquery', 'jquery-ui', 'jQuery', 'Observers', 'Widgets', 'Ui/Loader', 'Ui/Builder'], (...modules) => {

	function Ui () {


	}


	Define(Ui, 'Builder', modules.pop())
	Define(Ui, 'Config', {get: () => {return config}})
	Define(Ui, 'Loader', modules.pop())

	modules.first.extend({Ui: Ui})

})
