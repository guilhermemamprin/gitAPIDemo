/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="about/about.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />

module testApp {
  'use strict';

  angular.module('testApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
    .controller('MainController', MainController)
    .controller('NavbarController', NavbarController)
    .controller('AboutController', AboutController)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main',
      })

      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
      });

    $urlRouterProvider.otherwise('/');
  })
;
}
