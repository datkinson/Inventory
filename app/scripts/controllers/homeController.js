application.controller('homeController', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.title = 'Home';
    $scope.toggleSideNav = function(menuId) {
      $mdSidenav (menuId).toggle();
    };
}]);