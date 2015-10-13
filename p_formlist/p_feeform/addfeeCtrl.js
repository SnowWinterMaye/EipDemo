hys.controller('addfeeCtrl', function ($scope, $state) {
    $scope.greet = "费用添加界面";
    
    $scope.return = function () {
        $state.go('/feelist');
    }
});