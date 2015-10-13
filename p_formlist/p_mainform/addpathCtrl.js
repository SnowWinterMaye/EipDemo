hys.controller('addfeeCtrl', function ($scope, $state) {
    $scope.greet = "行程添加界面";
    
    $scope.return = function () {
        $state.go('/mainlist');
    }
});