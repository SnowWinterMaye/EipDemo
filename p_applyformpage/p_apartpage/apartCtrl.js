hys.controller('apartCtrl', function ($scope, $state) {
    $scope.greet = "部门出差 项目选择界面";
    
    $scope.return = function () {
        $state.go('/applyform');
    }
});