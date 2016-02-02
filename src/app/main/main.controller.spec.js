(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('uiChallenge'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should map on screen', function() {
      expect(vm.onGoogleReady.length === 5).toBeTruthy();
    });
  });
})();
