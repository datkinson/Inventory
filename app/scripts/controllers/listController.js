application.controller('ListController', function ($scope, list) {  
  $scope.list = list;
  $scope.deleteItem = function(id) {
    var newList = JSON.parse(JSON.stringify($scope.list.items));
    if(id > -1) {
      newList.splice(id, 1);
    }
    $scope.list.items = JSON.parse(JSON.stringify(newList));
  };
})