(function() {

  describe('MainController', function(){

    beforeEach(module('uiChallenge'));

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

    var $controller, $service, scope;

    beforeEach(inject(function(_$rootScope_, _$controller_, $injector) {
      scope = _$rootScope_.$new();
      $controller = _$controller_;
      $service = $injector.get('MainService');
    }));

    describe('geolocation', function(){
      beforeEach(function(){
        controller = $controller('MainController', { $scope: scope });
        service  = $service;
      });

      it('should receive the response of the api', function(){
        var pattern = /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
        scope.filter = 'www.vivo.com.br';
        expect(pattern.test(scope.filter)).toBe(true);
        service.getCoordinates(scope.filter).success(function(response){
          expect(response.status).toBe('success');
          expect(response).toEqual(getCoordinates);
        });
      })

      it('should reset pointer to a local geolocation', function(){
        scope.reset = function(){
          if (navigator.geolocation) {
            expect(navigator.geolocation.getCurrentPosition(onGoogleReady)).toBeDefine();
          }
        }
      });
    });

  });
})();
