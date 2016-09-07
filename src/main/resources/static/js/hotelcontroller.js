app.controller("HotelCtrl", function ($scope, Hotel, $state) {
    function init() {
        $scope.getHotels();
    }


    $scope.getHotels = function () {
        $scope.hotels = Hotel.query();
    };

    $scope.deleteHotel = function (hotel) {
        return hotel.$delete({}, function () {
            $scope.hotels.splice($scope.hotels.indexOf(hotel), 1);
        });
    };

    $scope.createHotel = function () {
        var hotel = new Hotel($scope.hotel);
        hotel.$save({}, function() {
            $state.transitionTo("home");
        });
    };

  
    
    init();
  
});
