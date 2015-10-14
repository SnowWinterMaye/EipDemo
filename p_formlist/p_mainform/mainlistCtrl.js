
hys.controller('mainlistCtrl', function ($scope, $state) {
    $scope.greet = "行程清单";

    $scope.return = function () {
        $state.go('/mainform');
    }
    $scope.addPath = function () {
        $state.go('/addpath');
    }
    $scope.savePath = function () {
        alert('保存');
    }
    
    $scope.items = ["Chinese", "English", "German", "Italian", "Janapese", "Sweden", "Koeran", "Russian", "French"];
    
    $scope.flag={showDelete:false,showReorder:false};
    //删除记录
    $scope.delete_item = function (item) {
        var idx = $scope.items.indexOf(item);
        $scope.items.splice(idx, 1);
    };
});