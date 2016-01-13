module testApp {
  'use strict';

  export class HeaderController {
    public title: string;

    /* @ngInject */
    constructor ($rootScope, $state) {
      var eventTest;
      $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams)=> {
        if (toState.name === 'base.home') {
          this.title = 'User Profiles';
        } else if (toState.name === 'base.repositories') {
          this.title = 'Repositories';
        } else if (toState.name === 'base.userProfile') {
          this.title = 'Profile';
        }
      });
    }
  }

}
