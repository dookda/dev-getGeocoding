var app = angular.module('app', ['service']);

app.controller('MainCtrl', function ($scope, $http, selectedLocation) {

   

    $scope.getData = function () {
        var a = ($scope.places).toString();
        selectedLocation.getData(a)
            .then(function (res) {
                $scope.dat = res.data.results[0];
                // $scope.name1 = $scope.dat.address_components.1.short_name;
                // $scope.dat.address_components.2.short_name;
                // $scope.dat.address_components.formatted_address;
                
                //$scope.lat = res.data.results.formatted_address.geometry.location.lat;        
                //$scope.lng = res.data.results.formatted_address.geometry.location.lng;
                console.log($scope.dat);
            })
    };
    //console.log($scope.places);
});