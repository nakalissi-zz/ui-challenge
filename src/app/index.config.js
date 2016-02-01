(function() {
  'use strict';

  angular
    .module('uiChallenge')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
