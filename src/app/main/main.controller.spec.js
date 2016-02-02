(function() {
  'use strict';

  describe('MainController', function(){

    beforeEach(module('uiChallenge'));

    var scope, service;

    var getCoordinates = {
      "as":"AS26599 TELEFÔNICA BRASIL S.A",
      "city":"São Paulo",
      "country":"Brazil",
      "countryCode":"BR",
      "isp":"Vivo",
      "lat":-23.5475,
      "lon":-46.6361,
      "mobile":false,
      "org":"Vivo",
      "proxy":false,
      "query":"200.142.128.18",
      "region":"SP",
      "regionName":"Sao Paulo",
      "status":"success",
      "timezone":"America/Sao_Paulo",
      "zip":""
    }

    beforeEach(inject(function($rootScope, $controller, $mainservice) {
      service = $mainservice;

      scope = $rootScope.$new();
      $controller('MainController', {
        $scope.scope
      });
    }));

    it('should message equals to false', function(){
      expect(scope.message).toEqual(false);
    })

  });
})();
