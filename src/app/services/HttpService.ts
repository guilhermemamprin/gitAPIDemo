  module testApp {

    export class HttpService {
      private $http;
      private $window;

      call(method, path, params) {
        var request = "https://api.github.com/" + path + "?" + this.$window.localStorage.getItem('authToken');
        if(method === 'POST') {
          this.$http.post(request, JSON.stringify(params));
        } else if(method === 'PATCH') {
          return this.$http.patch(request, JSON.stringify(params));
        }
        return this.$http.get(request, JSON.stringify(params));
      }

      constructor($http, $window) {
        this.$http = $http;
        this.$window = $window;
      }

    }
  }
