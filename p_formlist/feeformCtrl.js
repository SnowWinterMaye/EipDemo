hys.controller('feeformCtrl', function ($scope, $state) {
    $scope.greet = "项目费用报销";

    $scope.return = function () {
        $state.go('/mainform');
    }
    $scope.goFee = function () {
        $state.go('/feelist');
    }
    $scope.save = function () {
        alert("保存");
    }
    $scope.submit = function () {
        alert("提交");
    }
});