(function() {
    'use strict';
    angular.module('4loop')
        .controller('designCtrl', ['$scope', function($scope) {
            $scope.principles = true;
            $scope.icons = false;
            $scope.metrics = false;
            $scope.structure = false;
            $scope.responsive = false;

            $scope.showDisplay = function(value) {
                switch (value) {
                    case 'principles':
                        $scope.principles = true;
                        $scope.units = false;
                        $scope.metrics = false;
                        $scope.structure = false;
                        $scope.responsive = false;
                        break;
                    case 'units':
                        $scope.principles = false;
                        $scope.units = true;
                        $scope.metrics = false;
                        $scope.structure = false;
                        $scope.responsive = false;
                        break;
                    default:
                        $scope.principles = true;
                        $scope.units = false;
                        $scope.metrics = false;
                        $scope.structure = false;
                        $scope.responsive = false;
                }
            };
        }])
        .controller('designStyleCtrl', ['$scope', function($scope) {
            $scope.color = true;
            $scope.icons = false;

            $scope.showDisplay = function(value) {
                switch (value) {
                    case 'color':
                        $scope.color = true;
                        $scope.icons = false;
                        break;
                    case 'icons':
                        $scope.color = false;
                        $scope.icons = true;
                        break;
                    default:
                        $scope.color = true;
                        $scope.icons = false;
                }
            };
        }]);
})();
