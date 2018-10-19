/**
 * Created by catalinc on 7/4/2016.
 */


(function () {
    angular.module('weatherApp')
        .controller('forecastCtrl', ['$scope', 'cityService', '$routeParams','weatherService',
            function ($scope, cityService, $routeParams, weatherService) {

            $scope.city = cityService.city;
            $scope.nrDays = $routeParams.days ? $routeParams.days : 2;


                $scope.weatherRes = weatherService.getWeather($scope.city, $scope.nrDays);

                $scope.convertDate = function(dt){
                  return new Date(dt * 1000);
                };
                
                console.log($scope.weatherRes);

        }])
})();