hys.controller('feelistCtrl', function ($scope, $state) {
    $scope.greet = "费用列表界面";
    
    $scope.return = function () {
        $state.go('/feeform');
    }
    $scope.addFee = function () {
        $state.go('/addfee');
    }
    
});
