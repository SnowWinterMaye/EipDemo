hys.controller('secondCtrl', function ($scope, $state) {
    $scope.greet = "home page";
    var D = new Date();
    console.log("homepa:" + D.getTime());
    $scope.gohome = function () {
        $state.go('/homepage');
    }
});