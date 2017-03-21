(function() {
    'use strict';
    angular.module('4loop', [
            'ngAnimate',
            'ui.router',
            'ngResource',
            'ui.bootstrap'
        ])
        .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
            $locationProvider.html5Mode(false);

            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: './templates/main.html',
                    controller:'mainCtrl'
                })
                .state('products',{
                    url:'/products',
                    templateUrl: './templates/services.html'
                })
                .state('frontier',{
                    url:'/frontier',
                    templateUrl: './templates/frontier/analytics.html'
                })
                .state('frontier-web',{
                    url:'/frontier/web',
                    templateUrl: './templates/frontier/web.html',
                    controller:'frontierWebCtrl'
                })
                .state('frontier-web-install',{
                    url:'/frontier/web/install',
                    templateUrl: './templates/frontier/web/install.html',
                    controller:'frontierWebCtrl'
                })
                .state('frontier-web-native',{
                    url:'/frontier/web/native',
                    templateUrl: './templates/frontier/web/native.html',
                    controller:'frontierWebCtrl'
                })
                .state('frontier-web-angular',{
                    url:'/frontier/web/angular',
                    templateUrl: './templates/frontier/web/angular.html',
                    controller:'frontierWebCtrl'
                })
                .state('frontier-collection',{
                    url:'/frontier/collection',
                    templateUrl: './templates/frontier/platform.html'
                })
                .state('frontier-collection-ios',{
                    url:'/frontier/collection/ios',
                    templateUrl: './templates/frontier/ios.html'
                })
                .state('frontier-collection-android',{
                    url:'/frontier/collection/android',
                    templateUrl: './templates/frontier/android.html'
                })
                .state('frontier-collection-windows',{
                    url:'/frontier/collection/windows',
                    templateUrl: './templates/frontier/windows.html'
                })
                .state('frontier-learn',{
                    url:'/frontier/learn',
                    templateUrl: './templates/frontier/learn.html'
                })
                .state('symphony',{
                    url:'/symphony',
                    templateUrl: './templates/api/symphony.html',
                    controller: 'symphonyCtrl'
                })
                .state('design',{
                    url:'/design',
                    templateUrl: './templates/designs/main.html'
                })
                .state('design-components',{
                    url:'/design/components',
                    templateUrl: './templates/designs/components.html'
                })
                .state('design-layout',{
                    url:'/design/layout',
                    templateUrl: './templates/designs/layout.html',
                    controller:'designCtrl'
                })
                .state('design-style',{
                    url:'/design/style',
                    templateUrl: './templates/designs/style.html',
                    controller: 'designStyleCtrl'
                })
                .state('sdks',{
                    url:'/sdks',
                    templateUrl: './templates/sdks.html'
                })                
                .state('contact',{
                    url:'/contact',
                    templateUrl: './templates/contact.html'
                });

            $urlRouterProvider.otherwise('/');
        }]);
})();
