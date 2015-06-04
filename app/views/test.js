var View = {
	body: {
		children: [
			{
				type: 'text',
				text: 'Hello World!'
			},
			{
				type: 'button',
				label: 'Reload',
				onclick: function(){
					location.reload();
				}
			}
		]
	}
};