define('Observers/Hidden', ['jquery'], ($) => {

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
		let hiddenObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				if ($(element).hasClass('Hidden') && !mutationRecord.oldValue.includes('Hidden')) {
					$(element).trigger(prefix+'hidden')
				}
				if (!$(element).hasClass('Hidden') && mutationRecord.oldValue.includes('Hidden')) {
					$(element).triggerHandler(prefix+'shown')
				}
			})
		})
		hiddenObserver.observe(element, {attributeOldValue: true, attributes : true, attributeFilter: ['class']})

		let displayObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutationRecord) {
				let current = ParseStyle($(element).attr('style'))
				let old = ParseStyle(mutationRecord.oldValue)
				if (Reflect.has(current, 'display') && current.display == 'none') {
					if (!Reflect.has(old, 'display') || old.display != 'none') {
						$(element).triggerHandler(prefix+'hidden')
					}
				}
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

