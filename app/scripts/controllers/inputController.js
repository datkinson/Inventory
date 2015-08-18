application.controller('InputController', function($scope, list){
	$scope.list = list;
	$scope.newItem = {
		'name': '',
		'type': '',
		'value': '',
		'quantity': ''
	};
	$scope.save = function() {
		$scope.list.items.push(JSON.parse(JSON.stringify($scope.newItem)));
		$scope.newItem.name = '';
		$scope.newItem.type = '';
		$scope.newItem.value = '';
		$scope.newItem.quantity = '';
	};
});