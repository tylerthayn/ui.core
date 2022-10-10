define(['jquery'], ($) => {

	function ParseStyle (style) {
		let css = {}
		if (style == null || style == '') {return css}
		style.split(/;/g).forEach(def => {
			[name, value] = def.split(':').map(v => v.trim())
			css[name] = value
		})
		return css
	}

	return (element, prefix = '') => {
		let shownObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if (!$(element).hasClass('Hidden') && mutationRecord.oldValue.includes('Hidden')) {
					$(element).triggerHandler(prefix+'shown')
				}
			})
		})
		shownObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(old, 'display') && old.display == 'none') {
					if (!Reflect.has(current, 'display') || current.display != 'none') {
						$(element).triggerHandler(prefix+'shown')
					}
				}
			})
		})
		displayObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['style']})
	}

})

