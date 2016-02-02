(function() {
  'use strict';

  angular
    .module('uiChallenge')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, MainService) {

    $scope.markers = [];
    $scope.message = false;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onGoogleReady);
    }

    //Get latitude and longitude;
    function onGoogleReady(position) {
      $scope.loadMap(position, 0);
    }

    $scope.loadMap = function(info, val){

      if (val === 0){
        var coords = {lat: info.coords.latitude, lng: info.coords.longitude}
      } else {
        var coords = {lat: info.lat, lng: info.lon}
      }

      var map = new google.maps.Map(document.getElementById('map'), {
        center: coords,
        scrollwheel: true,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var marker = new google.maps.Marker({
        map: map,
        position: coords
      });

      var infoWindow = new google.maps.InfoWindow();
      marker.content =
        '<div class="infoWindowContent">' +
        '<b>' + info.city + '</b>' + ', ' + info.region + '<br>' +
        info.country
        '</div>';

      google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent('<h3>' + info.isp + '</h3>' + marker.content);
        infoWindow.open(map, marker);
      });
    }

    $scope.loadCoordinates = function(url){
      if(url){

        MainService.getCoordinates(url).success(function(response){
          if(response.status === "success"){
            $scope.loadMap(response, 1);
          } else {
            $scope.message = {
              content: response.message,
              status: true
            }
          }
        });
      }
    }

    $scope.openInfoWindow = function(e, selectedMarker){
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    };

    $scope.reset = function(){
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGoogleReady);
      }
    }

}

})();
