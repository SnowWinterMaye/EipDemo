hys.controller('apartCtrl', function ($scope, $state) {
    $scope.greet = "部门出差 选择项目";
    
    $scope.return = function () {
        $state.go('/applyform');
    }
    $scope.goform = function () {
        $state.go('/mainform');
    }
    
});