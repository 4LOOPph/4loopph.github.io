(function() {
    'use strict';
    angular.module('4loop')
        .controller('mainCtrl', ['$scope', function($scope) {
            angular.element(document).ready(function() {
            	console.log('mainCtrl');
                $('.carousel').carousel({
                    interval: 5000 //changes the speed
                })
            });
        }])
        .controller('symphonyCtrl', ['$scope', function($scope) {
            angular.element(document).ready(function() {

                // RESOURCES
                $scope.isResourced = true;
                // SESSION
                $scope.apiSession = true;
                $scope.apiPOSTSessionLogin = false;
                $scope.apiDELETESessionLogin = false;
                $scope.apiGETSessionLogin = false;
                // ARTICLE INFO
                $scope.apiArticleInfo = true;
                $scope.apiGETArticleInfo = false;
                $scope.apiPOSTArticleInfo = false;
            });
        }]);
})();
