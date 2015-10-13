var hys = angular.module('hysapp', ['ionic']);
var lastroute = "";
hys
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/',
                controller: 'indexCtrl'
            }).state('/homepage', {
                url: '/homepage',
                templateUrl: 'p_homepage/homepage.html',
                controller: 'homepageCtrl'
            });
        var D = new Date();
        console.log("Staten:" + D.getTime());
        $urlRouterProvider.otherwise('/homepage');
    }]).run([function () {
        var D = new Date();
        lastroute = '/homepage';
        console.log("Runnnn:" + D.getTime());
    }]);

