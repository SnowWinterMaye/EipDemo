
angular.module('dpeip').controller('mainlistCtrl', function ($rootScope, $scope, $state, $ionicPopup) {
    $scope.greet = "行程清单";

    $scope.goback = function () {
        //默认已保存，直接返回
        $state.go('/mainform');
        
        
        // //若有数据 且已保存 则直接返回
        // if ($rootScope.pathSaveFlag !== false) {
        //     $state.go('/mainform');
        // } else {//否则弹出未保存，并确认是否保存，弹出窗确定保存则保存，不确定则直接返回，并把数据清空，$rootScope.paths重置为 undefined
        //     var confirmPopup = $ionicPopup.confirm({
        //         title: '保存提示',
        //         template: '您填写的内容还未保存，是否保存?',
        //         okText: '保存',
        //         cancelText: '取消',
        //     });
        //     confirmPopup.then(function (res) {
        //         if (res) {
        //             console.log('保存');
        //             $scope.savePath();
        //             $state.go('/mainform');
        //         } else {
        //             console.log('取消');
        //             $rootScope.paths = undefined;
        //             $state.go('/mainform');
        //         }
        //     });

        // }

    }


    $scope.addPath = function () {
        //$rootScope.pathSaveFlag = false;
        $state.go('/addpath');
    }
    $scope.savePath = function () {
        //$rootScope.pathSaveFlag = true;
        alert('保存');
    }

    //修改 编辑
    $scope.doEdit = function (item) {
        console.log(item);
        $rootScope.Editem = item;

        var idx = $scope.items.indexOf(item);
        $scope.items.splice(idx, 1);

        $state.go('/addpath');
    }

    if ($rootScope.paths && $rootScope.paths.length !== 0) {
        console.log($rootScope.paths);
        $scope.items = $rootScope.paths;
    } else {
        console.log("无数据");
    }

    $scope.flag = { showDelete: false, showReorder: false };
    //删除记录
    $scope.delete_item = function (item) {
        var confirmPopup = $ionicPopup.confirm({
            title: '删除提示',
            template: '是否删除已选择的数据?',
            okText: '删除',
            cancelText: '取消',
        });
        confirmPopup.then(function (res) {
            if (res) {

                var idx = $scope.items.indexOf(item);
                $scope.items.splice(idx, 1);
            }
        });


    };
});