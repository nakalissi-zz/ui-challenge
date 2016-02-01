(function(){

'Use strict';
  angular.module('uiChallenge').directive('maps', function(){
    return{
      replace: true,
      template: '<section id="map"><div ui-map="myMap" ui-options="mapOptions" class="map-canvas"' +
                'ui-event="{\'map-click\': \'addMarker($event, $params)\' }">' +
                '</div></section>',
      link: function(scope, element, attrs){
        console.log(scope);
      }
    }
  });
})();
