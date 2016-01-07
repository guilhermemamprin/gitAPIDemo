/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="about/about.controller.ts" />
/// <reference path="repositories/repositories.controller.ts" />
/// <reference path="auth/auth.controller.ts" />
/// <reference path="../app/components/navbar/navbar.controller.ts" />

module testApp {
  'use strict';

  angular.module('testApp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router'])
    .controller('MainController', MainController)
    .controller('NavbarController', NavbarController)
    .controller('AboutController', AboutController)
    .controller('RepositoriesController', RepositoriesController)
    .controller('AuthController', AuthController)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about',
      })

      .state('repositories', {
        url: '/repositories?code',
        templateUrl: 'app/repositories/repositories.html',
        controller: 'RepositoriesController',
        controllerAs: 'repositories',
      })

      .state('/auth', {
        url: '/auth?code',
        controller: 'AuthController',
        controllerAs: 'auth',
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);


  })
;
}
