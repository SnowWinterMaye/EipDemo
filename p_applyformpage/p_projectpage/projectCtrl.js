hys.controller('projectCtrl', function ($scope, $state) {
    $scope.greet = "项目出差 项目选择界面";

    $scope.return = function () {
        $state.go('/applyform');
    }
});