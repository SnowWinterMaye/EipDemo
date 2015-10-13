
hys.controller('mainlistCtrl', function ($scope, $state) {
    $scope.greet = "行程列表界面";

    $scope.return = function () {
        $state.go(lastroute);
    }
    $scope.addPath = function () {
        $state.go('/addpath');
    }
    $scope.goFee = function () {
        $state.go('/feelist');
    }
});