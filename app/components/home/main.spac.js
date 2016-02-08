'use strict';

define(['angularMocks'], function(){

  describe('Suite de test para o component home', function(){
    
    beforeEach(function(){
      module('elHome');
    });


    describe('Teste para controlador', function(){
      
      var $rootScope, testedController;

      beforeEach(inject(function(_$rootScope_, _$controller_){
	  $rootScope = _$rootScope_;
	  var $state = {
	      current: {
		  name: 'Home'
	      }
	  };
	  testedController = _$controller_('elHomeController', {$scope:$rootScope, $state: $satte});
      }));

      it('deve estar definido', function(){
	  expect(testedController).toBeDefined();
      });
    });
  })
});
