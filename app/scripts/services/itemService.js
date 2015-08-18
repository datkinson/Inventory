application.service('list', function(){

	var retrievedObject = localStorage.getItem('inventory');
	if (retrievedObject === null ) {
		return {
			'items': [
				{
					'name': 'Battery',
					'type': 'Lion',
					'value': '250mAh',
					'quantity': '9'
				},
				{
					'name': 'Battery',
					'type': 'Lion',
					'value': '5000mAh',
					'quantity': '12'
				},
				{
					'name': 'Resistor',
					'type': '',
					'value': '1Kohm',
					'quantity': '25'
				}
			]
		};
	} else {
		var jsonRetrieved = JSON.parse(retrievedObject);
		return {
			'items': jsonRetrieved
		};
	}
});