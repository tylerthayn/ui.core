define('jQuery/Property', ['jquery', 'jQuery/Data'], ($) => {

	$.fn.extend({
		Property: function (name, value) {
			if (Type(name, 'string')) {
				if (typeof value === 'undefined') {
					return this.data(name)
				} else if (value instanceof Function) {
					this.each((i, e) => {
						$(e).on('data-change', (event, data) => {
							if (Reflect.has(data, name)) {
								value(data[name])
							}
						})
					})
				} else {
					this.each((i, e) => {
						$(e).data(name, value)
					})
				}
			} else if (Type(name, 'object')) {
				this.each((i, e) => {
					Object.keys(name).forEach(key => {
						$(e).data(key, name[key])
					})
				})
			}
		}
	})

})
