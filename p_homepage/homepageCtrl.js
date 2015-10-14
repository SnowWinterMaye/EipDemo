hys.controller('homepageCtrl', function ($scope, $state) {
    $scope.greet = "导航界面";

    $scope.gotime = function () {
        $state.go('/applyform');
    }
});