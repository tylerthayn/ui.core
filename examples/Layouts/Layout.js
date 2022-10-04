define(['jquery', 'jquery-ui', '../../src/Ui.js'], ($) => {

	let Layout = $.widget('Ui.Layout', $.Ui.Ui, {
		options: {
			direction: 'vertical',
			type: 'scrolled'
		},
		_create: function () {
			this._super()

			this.options.direction = this.element.hasClass('Horizontal') ? 'horizontal' : 'vertical'
			this.options.type = this.element.hasClass('Fixed') ? 'fixed' : this.element.hasClass('Split') ? 'split' : this.element.hasClass('Paged') ? 'paged' : 'scrolled'


			this.Refresh()
		}
	})

	let SplitLayout = $.widget('Layout.Split', $.Ui.Layout, {
		options: {
			panelTemplate: `<div class="Layout">`,
			max: 80,
			min: 25,
			value: 50,

			resizable: {
				handles: ''
			}

		},
		_create: function () {
			this._super()


			while (this.element.children().length < 2) {
				this.element.append($(this.options.panelTemplate))
			}
			this.element.children().each((i, e) => {if (i > 1) {$(e).detach()}})
			this.options.resizable.handles = this.options.direction == 'vertical' ? 's' : 'e'
			this.options.resizable.resize = () => {this.element.children().each((i, e) => {$(e).triggerHandler('resized')})}
			$(this.element.children()[0]).resizable(this.options.resizable)


		}
	})

	let ScrolledLayout = $.widget('Layout.Scrolled', $.Ui.Layout, {
		options: {
			panelTemplate: `<div class="Layout">`
		},
		_create: function () {
			this._super()


			this.element.children().each((i, e) => {
				if (this.options.type == 'horizontal') {
					$(e).Height(this.element.Height())
				} else {
					$(e).Width(this.element.Width())
				}

			})
		}
	})

	log(SplitLayout.prototype)

})
