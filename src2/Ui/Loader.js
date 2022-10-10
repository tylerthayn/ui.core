define('Ui/Loader', ['jquery', 'Ui/Builder'], ($, Builder) => {

	function Loader (...args) {
		if (args.first instanceof $) {
			return PromiseWrapper(Promise.all(args.shift().toArray().map(e => Loader(e, ...args))))
		} else if (Type(args.first, 'string')) {
			if (!args.first.startsWith('uri:')) {
				return PromiseWrapper(Promise.all($(args.shift()).toArray().map(e => Loader(e, ...args))))
			}
		} else if (Array.isArray(args.first)) {
			return PromiseWrapper(Promise.all(args.shift().map(e => Loader(e, ...args))))
		}

		let src = args.shift()
		let type = typeof args.first === 'string' ? args.shift() : null
		let options = args.length > 0 ? args.shift() : {}
		let data = args.length > 0 ? args.shift() : {}
		if (type != null) {options.type = type}

		if (src instanceof Element) {
			let attributes = {}
			for (i=0; i<src.attributes.length; i++) {
				if (!src.attributes[i].name.startsWith('data-')) {
					attributes[src.attributes[i].name] = src.attributes[i].value
				}
			}
			data = Extend({}, $(src).data(), data)
			options = Extend({}, attributes, options)
			return new Builder(src, options).Build(data)
		} else if (Type(src, 'string') || Type(src, 'url')) {
			src = src.toString().replace(/^uri\:\/*/i, '')
			return Builder(src, options).Build(data)
		} else {
			return new Promise((resolve, reject) => {reject('Invalid src')})
		}
	}

	function PromiseWrapper (promise) {
		return new Promise((resolve, reject) => {
			promise.then(results => {
				results = Array.Flatten(results)
				if (results.length == 1) {
					resolve(results[0])
				} else {
					resolve(results)
				}
			}).catch(reject)
		})
	}

	return Loader

})
