var hys = angular.module('hysapp', ['ionic']);

hys
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/',
                controller: 'indexCtrl'
            }).state('/homepage', {
                url: '/homepage',
                templateUrl: 'module_homepage/homepage.html',
                controller: 'homepageCtrl'
            }).state('/second', {
                url: '/second',
                templateUrl: 'module_secondpage/second.html',
                controller: 'secondCtrl'
            });
        var D = new Date();
        console.log("Staten:" + D.getTime());
        $urlRouterProvider.otherwise('/homepage');
    }]).run([function () {
        var D = new Date();
        console.log("Runnnn:" + D.getTime());
    }]);