app.controller("HotelEditCtrl", function ($scope, Hotel, $state, $stateParams) {
    

    function init() {
        $scope.hotel = Hotel.get({id:$stateParams.hotelId})
    }

    $scope.updateHotel = function() {
       var hotel = new Hotel($scope.hotel);
       hotel.$update().then(function() {
           $state.transitionTo("home");
       }) ;      
    }
    
    init();
    
});
