hys.controller('applicationCtrl', function ($scope, $state) {

        $scope.greet = "申请填报";
        //返回主界面
        $scope.gohome = function () {
            $state.go('/homepage');

        }
    
        //跳项目出差申请
        $scope.goProject = function () {
            $state.go('/choosepro');
            lastroute = '/choosepro'
        }
        //跳项目出差申请
        $scope.goSale = function () {
            $state.go('/choosepro');
            lastroute = '/choosepro'
        }
        //跳部门出差申请
        $scope.goDept = function () {
            $state.go('/choosedept');
            lastroute = '/choosedept'
        }
    });