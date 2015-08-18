application.controller('MainController', ['$scope', function($scope, $mdSidenav){
    $scope.data = {
        selectedIndex: 0,
        bottom:        false
    };

    $scope.next = function() {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
    $scope.detectPlatform = function() {
        if(!navigator.userAgent.match(/Windows Phone/i) || !navigator.userAgent.match(/iemobile/i)) {
            $scope.data.bottom = true;
        }
    };
   
   $scope.detectPlatform();


}]);