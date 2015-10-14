hys.controller('applicationCtrl', function ($scope, $state) {

        $scope.greet = "申请填报";
        //返回主界面
        $scope.gohome = function () {
            $state.go('/homepage');

        }
    
        //跳项目出差申请
        $scope.goProject = function () {
            $state.go('/project');
            lastroute = '/project'
        }
        //跳项目出差申请
        $scope.goSale = function () {
            $state.go('/project');
            lastroute = '/project'
        }
        //跳部门出差申请
        $scope.goApart = function () {
            $state.go('/apart');
            lastroute = '/apart'
        }
    });