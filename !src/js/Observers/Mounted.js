define('Observers/Mounted', ['jquery'], ($) => {

	return (element, prefix = '') => {
		const observer = new MutationObserver(function callback(mutationList, observer) {
			mutationList.forEach((mutation) => {
				if (mutation.type == 'childList') {
					mutation.addedNodes.forEach(node => {
						$(node).triggerHandler(prefix+'mounted')
					})
				}
			})
		})
		observer.observe(element, {childList: true, subTree: true})
	}

})
