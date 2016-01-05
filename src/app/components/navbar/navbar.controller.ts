module testApp {
  'use strict';

  export class NavbarController {
    public date: Date;
    public controller;
    public $state;

    isActive(viewLocation) {
      return this.$state.includes(viewLocation);
    }

    /* @ngInject */
    constructor ($state) {
      this.$state = $state;    }
  }

}
