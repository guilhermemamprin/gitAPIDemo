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

  export class IssueFormController {
    public awesomeThings: Thing[];
    public search: string;
    public mode;
    public issueNumber: number;
    public repository;
    public owner;
    public repo;
    public issue: any;

    private $http: any;
    private HttpService: any;
    private $window: any;
    private $stateParams: any;
    private $state: any;

    submitForm(isValid, issue) {
      if(!isValid) {
        alert("Not valid");
      } else {
        var authToken;
        var params = {};
        params['title'] = issue.title;
        params['body'] = issue.body;
        var promise = null;

        if(this.mode){
          promise = this.HttpService.call('PATCH', "repos/" + this.owner + "/" + this.repo +  "/issues/" + this.issueNumber, params)
        } else {
          promise = this.$http.post(
            "https://api.github.com/repos/" + this.owner + "/" + this.repo +  "/issues?" + this.$window.localStorage.getItem('authToken'),
            JSON.stringify(params)
          );
        }

        var repoParams = {'full_name' : this.owner + "/" + this.repo };
        promise.then(() => this.$state.go('repositoryProfile', repoParams,  {reload: true}));
      }
    }

    closeIssue() {
      var params = {};
      params['state']  = 'closed';
      this.$http.patch(
          "https://api.github.com/repos/" + this.owner + "/" + this.repo +  "/issues/" + this.issueNumber + "?" + this.$window.localStorage.getItem('authToken'),
          JSON.stringify(params))
        .then((response)=> {
           if(response.status === 200) {
            this.$window.location.href = '/';
            alert('Issue close.');
          }
        });
    }

    /* @ngInject */
    constructor ($stateParams, $http, $scope, $window, $state, HttpService) {
      var owner = decodeURIComponent($stateParams.owner);
      var repo = decodeURIComponent($stateParams.repo);
      this.issue = {};
      this.$window = $window;
      this.$http = $http;
      this.$state = $state;
      this.HttpService = HttpService;

      this.mode = $stateParams.mode;
      this.issueNumber = $stateParams.issueNumber;

      if(owner != undefined && repo != undefined) {
        if(this.mode === true && this.issueNumber != null) {
          $http.get("https://api.github.com/repos/" + owner + "/" + repo +  "/issues/" + this.issueNumber)
            .then((response)=>{
              this.issue.title = response.data.title;
              this.issue.body = response.data.body;
            })
        }

        $http.get("https://api.github.com/repos/" + owner + "/" + repo + "?" + $window.localStorage.getItem("authToken"))
          .then(function(response) {
            $scope.repo = response.data;
        });
        this.owner = owner;
        this.repo = repo;
      }

      $http.get("https://api.github.com/user" + "?" + $window.localStorage.getItem("authToken"))
          .then(function(response) {
            $scope.user = response.data;
        });




     }
  }
}
