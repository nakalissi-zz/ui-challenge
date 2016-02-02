(function(){

'Use strict';
  angular.module('uiChallenge').service('MainService', function($http){
    this.getCoordinates = function(param){
      return $http.get('http://ip-api.com/json/' + param + '?fields=258047');
    }
  });
})();
