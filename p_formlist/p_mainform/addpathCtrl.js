hys.controller('addpathCtrl', function ($scope, $state) {
    $scope.greet = "添加行程";
    
    $scope.return = function () {
        $state.go('/mainlist');
    }
    $scope.save = function () {
       alert("保存");
    }
});