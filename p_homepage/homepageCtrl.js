hys.controller('homepageCtrl', function ($scope, $state) {
    $scope.greet = "home page";

    $scope.gotime = function () {
        $state.go('/applyform');
    }
});