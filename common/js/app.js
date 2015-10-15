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
            }).state('/application', {
                url: '/application',
                templateUrl: '/p_applyformpage/application.html',
                controller: 'applicationCtrl'
            })
            .state('/choosedept', {
                url: '/choosedept',
                templateUrl: 'p_applyformpage/p_choosedept/choosedept.html',
                controller: 'choosedeptCtrl'
            }).state('/choosepro', {
                url: '/choosepro',
                templateUrl: 'p_applyformpage/p_choosepro/choosepro.html',
                controller: 'chooseproCtrl'
            }).state('/feeform', {
                url: '/feeform',
                templateUrl: 'p_formlist/feeform.html',
                controller: 'feeformCtrl'
            }).state('/feelist', {
                url: '/feelist',
                templateUrl: 'p_formlist/p_feeform/feelist.html',
                controller: 'feelistCtrl'
            })
            .state('/addfee', {
                url: '/addfee',
                templateUrl: 'p_formlist/p_feeform/addfee.html',
                controller: 'addfeeCtrl'
            }).state('/mainform', {
                url: '/mainform',
                templateUrl: 'p_formlist/mainform.html',
                controller: 'mainformCtrl'
            }).state('/mainlist', {
                url: '/mainlist',
                templateUrl: 'p_formlist/p_mainform/mainlist.html',
                controller: 'mainlistCtrl'
            }).state('/addpath', {
                url: '/addpath',
                templateUrl: 'p_formlist/p_mainform/addpath.html',
                controller: 'addpathCtrl'
            })
            ;
        var D = new Date();
        console.log("Staten:" + D.getTime());
        $urlRouterProvider.otherwise('/homepage');
    }]).run([function () {
        var D = new Date();
        lastroute = '/homepage';
        console.log("Runnnn:" + D.getTime());
    }]);

