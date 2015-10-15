hys.controller('choosedeptCtrl', function ($scope, $state) {
    $scope.greet = "部门出差 选择项目";
    
    $scope.return = function () {
        $state.go('/application');
    }
    $scope.goform = function () {
        $state.go('/mainform');
    }
    
});