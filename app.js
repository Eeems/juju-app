ready(function(){
	mvc.view('test').then(function(view){
		view.open();
	}).catch(function(e){
		console.error(e);
	});
});