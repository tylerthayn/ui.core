/**
* @module ParseStyle
*/
define('ParseStyle', [], () => {

	/** ParseStyle
	* @exports ParseStyle
	* @function ParseStyle
	* @param {string} style
	* @returns {object} css
	*/
	return (style) => {
		let css = {}
		if (style == null || style == '') {return css}
		style.split(/;/g).forEach(def => {
			[name, value] = def.split(':').map(v => v.trim())
			css[name] = value
		})
		return css
	}

})
