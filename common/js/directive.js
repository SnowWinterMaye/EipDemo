hys.directive('routeTo', [function () {
    return {
        restrict: 'AE',
        scope: {
            current: '=', //当前路由
            next: '=', //下一路由
        },
        template: '/meetlist.html',
        controller: ['$scope', function ($scope) {
            //点击后进入下一路由
            $scope.gonext = function (meetid) {
                if (flag == 1) {
                    console.log(meetid);
                }
                flag = 1;
            };

        }]
    };
}])