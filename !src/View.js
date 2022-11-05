/** View
* Widget creation from definitions & state =>
*  yielding a widget instance
*
* @constructor
* @function Init()
* @function AppendTo(element)
* @function PrependTo(element)
* @function Replace(element)
* @function Detach()
* @function Remove()
*/

define('View', ['jquery'], ($) => {

	let defaults = {
		id: null,
		name: null,

		class: null,
		module: null,
		script: null,

		style: {
			src: null,
			css: null
		},

		src: null,
		html: null
	}


	function View (options = {}) {
		Extend(this, defaults, options)
		Object.Extensions.EventEmitter(this)

		this.refs = []

		return this
	}

	View.prototype.Init = function () {
		return new Promise((resolve, reject) => {
			this._InitHtml()
				.then(() => {return this._InitJs()})
				.then(() => {return this._InitStyle()})
				.then(() => {
					resolve(this)
				}).catch(error => {
					reject(error)
				})
		})
	}

	View.prototype._InitHtml = function () {
		return new Promise((resolve, reject) => {
			resolve()
		})
	}

	View.prototype._InitJs = function () {
		return new Promise((resolve, reject) => {
			resolve()
		})
	}

	View.prototype._InitStyle = function () {
		return new Promise((resolve, reject) => {
			if (!this.style.src) {
				return resolve()
			}
			$.InsertStyle(this.style.src, event => {
				this.refs.push(event.target)
				resolve()
			})
		}).then(new Promise((resolve, reject) => {
			if (!this.style.css) {
				return resolve()
			}
			this.refs.push($.AddStyle(this.style.css))
			resolve()
		}))
	}



	/* Wrap
	* new View()
	* View.Init(resolve)
	*/
	//async View.FromXml = (xml) => {/* Parser(xml) */}
	//async View.LoadXml = (path) => {/* $fs.readFile => FromXml() */}
	View.FromJSON = (json) => {
		let view = new $.View(JSON.parse(json))
		return view.Init()
	}

	//async View.LoadJson = (path) => {/* $s.readFile => FromJson() */}


	$.extend({View: View})

	return View

})

require(['jquery', 'View'], ($) => {

	let json = JSON.stringify({
		 style: {
			src: 'test.css',
			css: `body {border: 2px solid yellow !important;}`
		}
	}, null, 4)

	$.View.FromJSON(json).then(view => {
		window.view = view
		//view.[append, prepend, replace]
	}).catch(console.error)

})


