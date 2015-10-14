hys.controller('projectCtrl', function ($scope, $state) {
    $scope.greet = "项目出差 选择项目";

    $scope.return = function () {
        $state.go('/application');
    }
    $scope.goform = function () {
        $state.go('/mainform');
    }
});