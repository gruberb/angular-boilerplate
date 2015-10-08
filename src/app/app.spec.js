describe( 'ApplicationController', function() {
  describe( 'isCurrentUrl', function() {
    var ApplicationController, $location, $scope;

    beforeEach( module( 'application' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      ApplicationController = $controller( 'ApplicationController', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( ApplicationController ).toBeTruthy();
    }));
  });
});
