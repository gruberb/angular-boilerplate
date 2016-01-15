describe( 'ApplicationController', function() {
  describe( 'isCurrentUrl', function() {
    var ApplicationController, $location, $scope, $translate;

    beforeEach( module( 'application' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope, _$translate_ ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      $translate = _$translate_;
      ApplicationController = $controller( 'ApplicationController', { $location: $location, $scope: $scope, $translate: $translate });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( ApplicationController ).toBeTruthy();
    }));
  });
});
