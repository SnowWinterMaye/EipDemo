hys.controller('addfeeCtrl', function ($scope, $state) {
    $scope.greet = "费用列表界面";
    
    $scope.return = function () {
        $state.go('/mainlist');
    }
    $scope.addFee = function () {
        $state.go('/addfee');
    }
    
});
