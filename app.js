ready(function(){
	if(!page.url.hashpath[0]){
		page.url.hash = '#test';
	}
	widget.require('header')
		.and('nav')
		.and('body')
		.and('footer')
		.and('box')
		.and('button')
		.and('link')
		.and('text')
		.and('input')
		.and('save')
		.then(function(){
			global.on('hashchange',function(){
				mvc.view(page.url.hashpath[0]).then(function(view){
					view.open(page.url.hashpath[1]);
				}).catch(function(e){
					console.error(e);
				});
			})
			.fire('hashchange');
		})
		.catch(function(e){
			console.error(e);
			console.trace();
		});
});