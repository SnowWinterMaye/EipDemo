
hys.controller('mainformCtrl', function ($scope, $state) {
    $scope.greet = "项目出差申请单";

    $scope.return = function () {
        $state.go(lastroute);
    }
    $scope.goPath = function () {
        $state.go('/mainlist');
    }
    $scope.goFee = function () {
        $state.go('/feeform');
    }
    $scope.save = function () {
        alert("保存");
    }
    $scope.submit = function () {
        alert("提交");
    }
});