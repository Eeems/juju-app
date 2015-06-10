var View = {
	controller: 'test',
	model: 'test',
	events: {
		resize: function(){
			// handle top level events here
		}
	},
	header: {
		css: {
			height: '100px'
		},
		children: [
			{
				type: 'text',
				text: 'This is the header'
			}
		]
	},
	body: {
		children: [
			{
				type: 'text',
				text: 'Hello World!'
			},
			{
				type: 'button',
				label: 'Reload',
				events: {
					click: function(){
						location.reload();
					}
				}
			},
			{
				type: 'input',
				name: 'name'
			},{
				type: 'save'
			}
		]
	}
};