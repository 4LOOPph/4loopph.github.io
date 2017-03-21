(function() {
    'use strict';
    angular.module('4loop')
        .controller('frontierWebCtrl', ['$scope', function($scope) {
            $scope.overview = true;
            $scope.install = false;
            $scope.native = false;
            $scope.angular = false;

            $scope.showOverview = function() {
                $scope.overview = true;
                $scope.install = false;
                $scope.native = false;
                $scope.angular = false;
            };

            $scope.showInstall = function() {
                $scope.overview = false;
                $scope.install = true;
                $scope.native = false;
                $scope.angular = false;
            };

            $scope.showNative = function() {
                $scope.overview = false;
                $scope.install = false;
                $scope.native = true;
                $scope.angular = false;
            };

            $scope.showAngular = function() {
                $scope.overview = false;
                $scope.install = false;
                $scope.native = false;
                $scope.angular = true;
            };

        }]);
})();
