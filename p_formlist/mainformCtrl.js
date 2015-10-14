
hys.controller('mainformCtrl', function ($scope, $state) {
    $scope.greet = "出差申请单填写主界面";

    $scope.return = function () {
        $state.go(lastroute);
    }
    $scope.goPath = function () {
        $state.go('/mainlist');
    }
    $scope.goFee = function () {
        $state.go('/feeform');
    }
});