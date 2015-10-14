hys.controller('feeformCtrl', function ($scope, $state) {
    $scope.greet = "费用报销界面";
    
    $scope.return = function () {
        $state.go('/mainform');
    }
    $scope.goFee = function () {
        $state.go('/feelist');
    }
    
});
