var hys = angular.module('hysapp', ['ngRequire','ionic']);
var lastroute = "";
hys
    .config(['$stateProvider', '$urlRouterProvider', '$requireProvider',
        function ($stateProvider, $urlRouterProvider,$requireProvider) {
        $stateProvider
           .state('/homepage', {
                url: '/homepage',
                templateUrl: 'p_homepage/homepage.html',
                controller: 'homepageCtrl'
            }).state('/applyform', {
                url: '/applyform',
                templateUrl: 'p_applyformpage/applyform.html',
                controller: 'applyformCtrl',
                // resolve:{
                //     deps:$requireProvider.requireJS([
                //         'a_applyformpage/p_apartpage/apartCtrl',
                //         'a_applyformpage/p_projectpage/projectCtrl'
                //     ])
                //     // ,
                //     // css:$requireProvider.requireCSS([
                        
                //     // ])
                // }
            })
            // .state('/apart', {
            //     url: '/apart',
            //     templateUrl: 'p_applyformpage/p_apartpage/apart.html',
            //     controller: 'apartCtrl'
            // }).state('/project', {
            //     url: '/project',
            //     templateUrl: 'p_applyformpage/p_projectpage/project.html',
            //     controller: 'projectCtrl'
            // })
            ;
        var D = new Date();
        console.log("Staten:" + D.getTime());
        $urlRouterProvider.otherwise('/homepage');
    }]).run([function () {
        var D = new Date();
        lastroute = '/homepage';
        console.log("Runnnn:" + D.getTime());
    }]);

