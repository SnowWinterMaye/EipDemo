hys.controller('projectCtrl', function ($scope, $state) {
    $scope.greet = "项目出差 选择项目";

    $scope.return = function () {
        $state.go('/applyform');
    }
    $scope.goform = function () {
        $state.go('/mainform');
    }
});