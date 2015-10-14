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
var result = cond1() ? result1() :cond2() ? result2() :cond3() ? result3() : result4();