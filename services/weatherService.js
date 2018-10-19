/**
 * Created by catalinc on 7/13/2016.
 */


(function () {
    angular.module('weatherApp')
        .service('weatherService', ['$resource', function ($resource) {

            this.getWeather = function (city, days) {

                var weatherApi = $resource(
                    "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=4abb8c79a028d9098c82c89b9f52f03a",
                    {callback: "JSON_CALLBACK"},
                    {get: {method: "JSONP"}}
                );

                return weatherApi.get({
                    q: city,
                    cnt: days,
                    units: 'metric'
                });

            }


        }])
})();