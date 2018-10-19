/**
 * Created by catalinc on 7/13/2016.
 */


(function () {
    angular.module('weatherApp')
        .directive('weatherReport', [function () {
            return {
                restrict: 'E',
                templateUrl: 'views/directives/weatherReport.html',
                replace: true,
                scope: {
                    weatherDay: '=',
                    convertToDate: '&',
                    dateFormat: '@'
                }
            }
        }])
})();