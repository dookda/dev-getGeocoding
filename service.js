angular.module('service', [])

    .service('selectedLocation', function ($http) {
        return {
            getData: function (place) {
                var data = 'http://maps.google.com/maps/api/geocode/json?address=' + place;
                return $http.get(data);
            }
        }
    });