ready(function(){
	mvc.model.register();
	mvc.view.register('test');
	mvc.controller.register();
	mvc.run(function(){
		mvc.view.get('test').open();
	});
});