
require.config({
	shim: {
		'jquery.patternlock': {
			deps: ['jquery']
		}
	}
})

define(['jquery', 'jquery.patternlock'], function ($) {

	let defaults = {
		rows: 4,
		columns: 4,
		width: (innerWidth < innerHeight ? innerWidth : innerHeight) - 2 * 20,
		height: (innerWidth < innerHeight ? innerWidth : innerHeight) - 2 * 20,
		showPatternLine: true,
		patternLineColoe: '#000000',
		lineWidth: 4,
		selectionColor: '#ff0000',
		fieldName: '',
		valueSeparator: ',',
		valueArray: [],
		centerCircle: true,
		centerCircleSize: 20,
		drawEnd: Function.Noop,
		timeout: 4000,
		allowRepeatSelection: true
	}

	function PatternLock (options) {
		this.options = Extend({}, PatternLock.Options, options)
		this.data = ''

		this.options['_drawEnd'] = this.options.drawEnd

		this.options.drawEnd = (data) => {
			this.data = data

			$('div.PatternLock').remove()
			if (this.options._drawEnd && this.options._drawEnd instanceof Function) {
				this.options._drawEnd(data)
			}
		}

		return this
	}

	Define(PatternLock, 'Options', {get: () => {return defaults}})

	PatternLock.prototype.Show = function (cb) {
		$('body').append($('<div class="PatternLock">'))
		if (typeof cb !== 'undefined' && typeof cb === 'function') {this.options['_drawEnd'] = cb}
		$('.PatternLock').patternLock(this.options)
	}

	PatternLock.prototype.Close = function () {
		$('div.PatternLock').remove()
	}

return PatternLock
})