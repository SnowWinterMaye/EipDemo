hys
    // .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    //     $stateProvider
    //         .state('/applyform', {
    //             url: '/applyform',
    //             templateUrl: 'p_applyformpage/applyform.html',
    //             controller: 'applyformCtrl'
    //         }).state('/apart', {
    //             url: '/apart',
    //             templateUrl: 'p_applyformpage/p_apartpage/apart.html',
    //             controller: 'apartCtrl'
    //         }).state('/project', {
    //             url: '/project',
    //             templateUrl: 'p_applyformpage/p_projectpage/project.html',
    //             controller: 'projectCtrl'
    //         });
    //         document.write("<h1>Hello</h1>");
    //     //<![CDATA[
    //     //document.write("<script async src='p_applyformpage/p_apartpage/apartCtrl.js'></script>".replace("HOST", location.hostname));
    //     //document.write("<script async src='p_applyformpage/p_projectpage/projectCtrl.js'></script>".replace("HOST", location.hostname));
    //     //]]>
    //     $urlRouterProvider.otherwise('/applyform');
    // }])
    .controller('applyformCtrl', function ($scope, $state) {


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