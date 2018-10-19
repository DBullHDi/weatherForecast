/**
 * Created by catalinc on 7/4/2016.
 */

(function () {
    angular.module('weatherApp')
        .controller('homeCtrl', ['$scope', 'cityService','$location',
            function ($scope, cityService, $location) {
            $scope.city = cityService.city;
        
            $scope.$watch('city', function(){
                cityService.city = $scope.city;
            });


            $scope.submit = function(){
              $location.path('/forecast');
            };


        }])
})();