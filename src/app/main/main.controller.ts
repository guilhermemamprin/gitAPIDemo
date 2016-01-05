module testApp {
  'use strict';

  class Thing {
    public rank: number;
    public login: string;
    public avatar_url: string;
    public html_url: string;

    constructor(login: string, avatar_url: string, rank: number, html_url: string) {
      this.login = login;
      this.avatar_url = avatar_url;
      this.html_url = html_url;
      
    }
  }

  export class MainController {
    public awesomeThings: Thing[];

    public search: string;

    private pendingTask: any;
    private $http: any;

    getAllUsers() {
      var _this = this;
      var data
      this.$http.get("https://api.github.com/users")
        .then(function(response) {
            _this.awesomeThings = new Array<Thing>();

            response.data.forEach(function(awesomeThing: Thing) {
              _this.awesomeThings.push(awesomeThing);
            });
        });
    }

    fetchUser() {
      var awesomeThings;
      var _this = this;
      if (this.search.length <= 0) {
        this.getAllUsers();
        return;
      }
      this.$http.get("https://api.github.com/search/users?q=" + this.search)
        .then(function(response) {
            awesomeThings = response.data.items;
            _this.awesomeThings = new Array<Thing>();

            awesomeThings.forEach(function(awesomeThing: Thing) {
              _this.awesomeThings.push(awesomeThing);
            });
        });
    }

    change(){
      if (this.pendingTask) {
        clearTimeout(this.pendingTask);
      }      
      this.pendingTask = setTimeout(this.fetchUser(), 1000);
    }


    /* @ngInject */
    constructor ($scope, $http) {
      var vm = this;
      var awesomeThings = [];
      var pendingTask;

      this.$http = $http;

      if(this.search === undefined){
        this.getAllUsers();
      }
    }
  }

}
