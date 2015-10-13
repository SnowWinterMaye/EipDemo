hys.controller('homepageCtrl', function ($scope, $state) {
    $scope.greet = "home page";
    var D = new Date();
    console.log("homepa:" + D.getTime());
    $scope.gotime = function () {
        $state.go('/applyform');
    }
});