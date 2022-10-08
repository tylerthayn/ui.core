define('Ui/AppBar', ['jquery', 'jquery-ui', 'Ui/Ui'], ($) => {
	let directions = {top: 'up', bottom: 'down', left: 'left', right: 'right'}

	return $.widget('Ui.AppBar', $.Ui.Ui, {
		options: {
			autohide: true,
			effect: 'slide',
			overlay: true,
			position: 'top',
			width: 50,
			height: 0,

			Hidden: Function.Noop,
			Shown: Function.noop,
		},
		_create: function () {
			this._parent = this.element.parent()
			if (this.element.hasClass('Top')) {this.options.position = 'top';this.options.height=this.element.height()}
			if (this.element.hasClass('Bottom')) {this.options.position = 'bottom';this.options.height=this.element.height()}
			if (this.element.hasClass('Left')) {this.options.position = 'left';this.options.height=this.element.width()}
			if (this.element.hasClass('Right')) {this.options.position = 'right';this.options.height=this.element.width()}
			this._setOption('position', this.options.position)
			if (this.options.autohide) {this._Wrap()}

			$(window).on('resized', () => {this._Position()})

		},
		_Position: function () {
			this._Size()
			this.element.css('position', 'absolute')
			if (this.options.position == 'top') {
				if (this._wrapper != null) {
					this._wrapper.css('top', this._wrapper.parent().offset().top+'px')
					this._wrapper.css('left', this._wrapper.parent().offset().left+'px')
					this.element.css('top', '0px')
					this.element.css('left', '0px')
				} else {
					this.element.css('top', this.element.parent().offset().top+'px')
					this.element.css('left', this.element.parent().offset().left+'px')
				}
			}
			if (this.options.position == 'bottom') {
				if (this._wrapper != null) {
					this._wrapper.css('top', (this._wrapper.parent().offset().top+this._wrapper.parent().Height()-this._wrapper.Height())+'px')
					this._wrapper.css('left', this._wrapper.parent().offset().left+'px')
					this.element.css('top', '0px')
					this.element.css('left', '0px')
				} else {
					this.element.css('top', (this.element.parent().offset().top+this.element.parent().Height()-this.element.Height())+'px')
					this.element.css('left', this.element.parent().offset().left+'px')
				}
			}
			if (this.options.position == 'left') {
				if (this._wrapper != null) {
					this._wrapper.css('top', this._wrapper.parent().offset().top+'px')
					this._wrapper.css('left', this._wrapper.parent().offset().left+'px')
					this.element.css('top', '0px')
					this.element.css('left', '0px')
				} else {
					this.element.css('top', this.element.parent().offset().top+'px')
					this.element.css('left', this.element.parent().offset().left+'px')
				}
			}
			if (this.options.position == 'right') {
				if (this._wrapper != null) {
					this._wrapper.css('top', this._wrapper.parent().offset().top+'px')
					this._wrapper.css('left', (this._wrapper.parent().offset().left+this._wrapper.parent().Width()-this._wrapper.Width())+'px')
					this.element.css('top', '0px')
					this.element.css('left', this.options.width+'px')
				} else {
					this.element.css('top', this.element.parent().offset().top+'px')
					this.element.css('left', (this.element.parent().offset().left+this.element.parent().Width()-this.element.Width())+'px')
				}
			}
		},
		_Size: function () {
			if (this.options.position == 'top') {
				if (this._wrapper != null) {
					this._wrapper.Width(this._wrapper.parent().Width())
					this._wrapper.Height(this.options.height+this.options.width)
				}
				this.element.Width(this.element.parent().Width())
				this.element.Height(this.options.height)
			}
			if (this.options.position == 'bottom') {
				if (this._wrapper != null) {
					this._wrapper.Width(this._wrapper.parent().Width())
					this._wrapper.Height(this.options.height+this.options.width)
				}
				this.element.Width(this.element.parent().Width())
				this.element.Height(this.options.height)
			}
			if (this.options.position == 'left') {
				if (this._wrapper != null) {
					this._wrapper.Width(this.options.height+this.options.width)
					this._wrapper.Height(this._wrapper.parent().Height())
				}
				this.element.Width(this.options.height)
				this.element.Height(this.element.parent().Height())
			}
			if (this.options.position == 'right') {
				if (this._wrapper != null) {
					this._wrapper.Width(this.options.height+this.options.width)
					this._wrapper.Height(this._wrapper.parent().Height())
				}
				this.element.Width(this.options.height)
				this.element.Height(this.element.parent().Height())
			}

		},
		_setOption: function (key, value) {
			this._super(key, value)
			if (key == 'autohide') {
				if (value) {this._Wrap()}
				else {this._Unwrap()}
			}
			if (key == 'position') {
				this.element.removeClass('Top Bottom Left Right')
				this.element.addClass(value.Capitalize())
				this._Position()
			}
			if (key == 'overlay') {
				this.Show()
			}
			if (key == 'width') {
				if (this._wrapper != null) {
					if (this.options.position == 'top' || this.options.position == 'bottom') {
						this._wrapper.Height(this.element.Height() + this.options.width)
					} else {
						this._wrapper.Width(this.element.Width() + this.options.width)
					}
				}
			}
		},
		_Unwrap: function () {
			if (this._wrapper != null) {
				this._wrapper.parent().append(this.element.detach())
				this._wrapper.remove()
				this._Wrapper = null
			}
		},
		_Wrap: function () {
			if (this._wrapper == null) {
				this.element.wrap($('<div class="Ui AppBarWrapper">'))
				this._wrapper = $('.Ui.AppBarWrapper')
				this._wrapper.addClass(this.options.position.Capitalize())
				this._wrapper.css('position', 'absolute')
				let $this = this
				let Show = () => {
					$this.Show()
					$this.element.one('mouseleave', () => {
						$this._wrapper.one('mouseleave', () => {
							$this.Hide()
							$this._wrapper.one('mouseover', Show)
						})
					})
				}

				this._wrapper.one('mouseover', Show)
				this._Position()
				this.Hide()
			}
		},
		_wrapper: null,
		Hide: function () {
			this._parent.css('padding', '0px')
			this._hide(this.element, {effect: this.options.effect, direction: directions[this.options.position]}, () => {
				this._trigger('Hidden')
			})
		},
		Show: function () {
			this._parent.css('padding', '0px')
			if (this.options.overlay === false) {
				if (this.options.position == 'top') {this._parent.css('padding-top', this.options.height+'px')}
				if (this.options.position == 'bottom') {this._parent.css('padding-bottom', this.options.height+'px')}
				if (this.options.position == 'left') {this._parent.css('padding-left', this.options.height+'px')}
				if (this.options.position == 'right') {this._parent.css('padding-right', this.options.height+'px')}
			}
			this._show(this.element, {effect: this.options.effect, direction: directions[this.options.position]}, () => {
				this._trigger('Shown')
			})
		}
	})




})
