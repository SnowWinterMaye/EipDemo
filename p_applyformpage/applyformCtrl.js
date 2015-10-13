hys
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) { 
    $stateProvider
   .state('/applyform', {
                url: '/applyform',
                templateUrl: 'p_applyformpage/applyform.html',
                controller: 'applyformCtrl'
            }).state('/apart', {
                url: '/apart',
                templateUrl: 'p_applyformpage/p_apartpage/apart.html',
                controller: 'apartCtrl'
            }).state('/project', {
                url: '/project',
                templateUrl: 'p_applyformpage/p_projectpage/project.html',
                controller: 'projectCtrl'
            });
             $urlRouterProvider.otherwise('/applyform');
}])
.controller('applyformCtrl', function ($scope, $state) {
    $('body').append("<script src='p_applyformpage/p_apartpage/apartCtrl.js'></script>");
    $('body').append("<script src='p_applyformpage/p_projectpage/projectCtrl.js'></script>");
    // document.write("<script src='p_applyformpage/p_apartpage/apartCtrl.js'></script>");
    // document.write("<script src='p_applyformpage/p_projectpage/projectCtrl.js'></script>");
    $scope.greet = "申请填报主界面";
    //返回主界面
    $scope.gohome = function () {
        $state.go('/homepage');
        
    }
    
    //跳项目出差申请
    $scope.goProject = function () {
        $state.go('/project');

    }
    //跳项目出差申请
    $scope.goSale = function () {
        $state.go('/project');

    }
    //跳部门出差申请
    $scope.goApart = function () {
        $state.go('/apart');
    }
});