define(['jquery', './AST'], ($, ast) => {
	window.ast = ast

	function Load (kind, name) {
		log('Load('+kind+', '+name+')')
		$('.Main').text(JSON.stringify(ast.Filter({kind: kind.toLowerCase(), longname: name}), null, 4))
	}


	let TOC = {
		Insert: (cDoc, pDoc) => {
			if (cDoc.kind == 'class') {
				let li = $(`<li class="Class ${cDoc.scope.Capitalize()}" data-name="${cDoc.longname}" data-kind="${cDoc.kind.Capitalize()}">${cDoc.name}<ul></ul></li>`)
				$('ul.TOC li.Classes > ul').append(li)
			}
			if (cDoc.kind == 'module') {
				let li = $(`<li class="Module" data-name="${cDoc.longname}" data-kind="${cDoc.kind.Capitalize()}">${cDoc.name}<ul></ul></li>`)
				$('ul.TOC li.Modules > ul').append(li)
				return
			}

			if (/^(function|member|param|event)$/.test(cDoc.kind)) {
				let li = $(`<li class="${cDoc.kind.Capitalize()} ${cDoc.scope.Capitalize()}" data-name="${cDoc.longname}" data-kind="${cDoc.kind.Capitalize()}">${cDoc.name}<ul></ul></li>`)
				$(`li[data-name="${pDoc.longname}"] > ul`).append(li)
			}

			ast.Filter({memberof: cDoc.longname, scope: 'static', kind: 'function'}).forEach(d => {TOC.Insert(d, cDoc)})
			ast.Filter({memberof: cDoc.longname, scope: 'static', kind: 'member'}).forEach(d => {TOC.Insert(d, cDoc)})
			ast.Filter({memberof: cDoc.longname, scope: 'static', kind: 'param'}).forEach(d => {TOC.Insert(d, cDoc)})
			ast.Filter({memberof: cDoc.longname, scope: 'instance', kind: 'function'}).forEach(d => {TOC.Insert(d, cDoc)})
			ast.Filter({memberof: cDoc.longname, scope: 'instance', kind: 'member'}).forEach(d => {TOC.Insert(d, cDoc)})
			ast.Filter({memberof: cDoc.longname, scope: 'instance', kind: 'param'}).forEach(d => {TOC.Insert(d, cDoc)})
			ast.Filter({memberof: cDoc.longname, scope: 'instance', kind: 'event'}).forEach(d => {TOC.Insert(d, cDoc)})

		}
	}






	$(() => {
		ast.Filter({kind: 'class'}).forEach(doclet => {
			TOC.Insert(doclet)
		})
		ast.Filter({kind: 'module'}).forEach(doclet => {
			TOC.Insert(doclet)
		})

		$('.TOC li').on('click', function (event) {
			event.stopPropagation()
			Load($(this).data('kind'), $(this).data('name'))
		})

	})



	return {}

})
