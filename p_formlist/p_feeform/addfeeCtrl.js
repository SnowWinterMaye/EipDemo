hys.controller('addfeeCtrl', function ($scope, $state) {
    $scope.greet = "添加费用清单";
    
    $scope.return = function () {
        $state.go('/feelist');
    }
});