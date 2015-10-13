hys.controller('homepageCtrl', function ($scope, $state) {
    $scope.greet = "home page";
    var D = new Date();
    console.log("homepa:" + D.getTime());
    $scope.gotime = function () {
        $state.go('/second');
    }
}).controller('indexCtrl', function ($scope, $state) {
        var D = new Date();
        console.log("indexC:" + D.getTime());
        $scope.Greet = "home page";
        $scope.gotime = function () {
            $state.go('/homepage');

        }
});