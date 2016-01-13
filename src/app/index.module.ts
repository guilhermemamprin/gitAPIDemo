/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="main/main.controller.ts" />
/// <reference path="about/about.controller.ts" />
/// <reference path="issues/issues.controller.ts" />
/// <reference path="repositories/repositories.controller.ts" />
/// <reference path="repositoryProfile/repositoryProfile.controller.ts" />
/// <reference path="userProfile/userProfile.controller.ts" />
/// <reference path="services/HttpService.ts" />
/// <reference path="header/header.controller.ts" />
/// <reference path="IssueForm/IssueForm.controller.ts" />
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
    .controller('IssuesController', IssuesController)
    .controller('RepositoryProfileController', RepositoryProfileController)
    .controller('UserProfileController', UserProfileController)
    .controller('IssueFormController', IssueFormController)
    .controller('HeaderController', HeaderController)
    .service('HttpService', HttpService)

  .config(function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider) {
    $stateProvider
      .state('base', {
        templateUrl: 'app/header/header.html',
        controller: 'HeaderController',
        controllerAs: 'header'
      })

      .state('base.home', {
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
      })

      .state('base.repositories', {
        url: '/repositories?code',
        templateUrl: 'app/repositories/repositories.html',
        controller: 'RepositoriesController',
        controllerAs: 'repositories',
      })

       .state('repositoryProfile', {
        url: '/repositoryProfile?full_name',
        templateUrl: 'app/repositoryProfile/repositoryProfile.html',
        controller: 'RepositoryProfileController',
        controllerAs: 'profile'
      })

       .state('base.userProfile', {
        url: '/userProfile?login',
        templateUrl: 'app/userProfile/userProfile.html',
        controller: 'UserProfileController',
        controllerAs: 'userProfile'
      })


      .state('issues', {
        url: '/issues',
        templateUrl: 'app/issues/issues.html',
        controller: 'IssuesController',
        controllerAs: 'issues'
      })

      .state('issueForm', {
        url: '/issueForm/{owner}/{repo}?issueNumber',
        templateUrl: 'app/issueForm/issueForm.html',
        controller: 'IssueFormController',
        controllerAs: 'issueForm',
        params: {mode : false}
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
