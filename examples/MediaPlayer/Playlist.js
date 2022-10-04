define(['jquery', 'jquery-ui'], ($) => {

	$.widget('Ui.Playlist', {
		defaultElement: $('<ul class="Ui Playlist">'),
		options: {
			current: 0,
			random: false,
			repeat: false
		},
		_create: function () {
			logj(this.options)
			$(() => {
				this.element.children('ul').sortable()
				this.element.find('.Link').on('click', (event) => {
					log($(event.target).data('cmd'))
				})

			})



		},
		_setOption: function(key, value) {
			this._super(key, value)
			if (typeof value !== 'undefined') {
				if (key == 'current') {this._trigger('play', value)}
				if (key == 'random') {this._trigger('random', value)}
				if (key == 'repeat') {this._trigger('repeat', value)}
			}
		},
		_setOptions: function(options) {
			this._super(options)
		},
		Add: function (...bookmarks) {
		    Array.Flatten(bookmarks).forEach(e => {
			    e = decodeURI(e);
			    let item = $(`<li class="ui-state-default"><div class="Item" data-url="${e}"><div class="Number">###</div><div class="Title">${e.split(/[\\\/]/).pop()}</div><div class="Buttons"><i class="fas fa-times-circle Remove"></i></div></div></li>`);
				$('.Playlist ul.List').append(item);

			})
		},
		Refresh: function () {
			this.element.trigger('refresh')
		}
	})

	//$(() => {
	//	$('.Ui.Playlist').Playlist()
	//})

})
