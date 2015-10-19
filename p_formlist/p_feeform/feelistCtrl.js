angular.module('dpeip').controller('feelistCtrl', function ($rootScope, $scope, $state, $ionicPopup) {
    $scope.greet = "费用清单";

    $scope.goback = function () {
        //若有数据 且已保存 则直接返回
        if ($rootScope.feeSaveFlag !== false) {
            $state.go('/feeform');
        } else {//否则弹出未保存，并确认是否保存，弹出窗确定保存则保存，不确定则直接返回，并把数据清空，$rootScope.paths重置为 undefined
            var confirmPopup = $ionicPopup.confirm({
                title: '保存提示',
                template: '您填写的内容还未保存，是否保存?',
                okText: '保存',
                cancelText: '取消',
            });
            confirmPopup.then(function (res) {
                if (res) {
                    console.log('保存');
                    $scope.saveFee();
                    $state.go('/feeform');
                } else {
                    console.log('取消');
                    $rootScope.fees = undefined;
                    $state.go('/feeform');
                }
            });

        }

    }
    $scope.addFee = function () {
        $rootScope.feeSaveFlag = false;
        $state.go('/addfee');
    }
    $scope.saveFee = function () {
        $rootScope.feeSaveFlag = true;
        alert('保存');
    }

    if ($rootScope.fees && $rootScope.fees.length !== 0) {
        console.log($rootScope.fees);
        $scope.items = $rootScope.fees;
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
