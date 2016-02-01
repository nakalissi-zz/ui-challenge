(function() {
  'use strict';

  angular
    .module('uiChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, MainService) {

    MainService.getCoordinates().success(function(response){
      $scope.setCoord = response;
      createMarker($scope.setCoord);
    })
    .error(function(response){
      console.log('Erro');
    });

    var mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(-15.2404581,-50.6520091),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function (info){
      console.log(info);
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.lon),
            title: $scope.setCoord.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

        google.maps.event.addListener(marker, 'click', function(){
          infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
          infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    }



    // for (var i = 0; i < $scope.setCoord.length; i++){
    //     createMarker($scope.setCoord);
    // }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };

}

})();
