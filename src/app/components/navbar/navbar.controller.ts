module testApp {
  'use strict';

  export class NavbarController {
    public date: Date;
    public controller;
    public $state;
    public authSet: boolean = true;

    isActive(viewLocation) {
      return this.$state.includes(viewLocation);
    }

    /* @ngInject */
    constructor ($state, $scope) {
      this.$state = $state;
      if (window.localStorage.getItem('authToken') == null) {
        this.authSet = false;
      }
    }
  }

}
