define(['jquery', 'jquery-ui', 'jQuery/index', 'Observers/index', 'Widgets/index', 'Ui/Loader', 'Ui/Builder'], (...modules) => {

	function Ui () {


	}


	Define(Ui, 'Builder', modules.pop())
	Define(Ui, 'Config', {get: () => {return config}})
	Define(Ui, 'Loader', modules.pop())

	modules.first.extend({Ui: Ui})

})
