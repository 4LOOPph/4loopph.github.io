(function() {
    'use strict';
    angular.module('4loop')
        .directive('appHeader', function() {
            return {
                restrict: 'AE',
                templateUrl: './templates/directive/header.html',
            };
        })
        .directive('appFooter', function() {
            return {
                restrict: 'AE',
                templateUrl: './templates/directive/footer.html',
            };
        })
        .directive('apiResponse', function() {
            return {
                restrict: 'AE',
                templateUrl: './templates/directive/apiresponse.html',
            };
        });
})();
