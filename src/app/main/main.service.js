(function(){

'Use strict';
  angular.module('uiChallenge').service('MainService', function($http){
    this.getCoordinates = function() {
      return $http.get('http://ip-api.com/json/');
    }
  });
})();
