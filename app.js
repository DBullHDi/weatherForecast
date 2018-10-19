(function(){
    var weatherApp = angular.module('weatherApp',[
        'ngRoute',
        'ngResource'
    ]);

    weatherApp.config(function($routeProvider){
        $routeProvider
            .otherwise('/')
            .when('/',{
                templateUrl:'views/home.html',
                controller:'homeCtrl'
            })
            .when('/forecast',{
                templateUrl:'views/forecast.html',
                controller:'forecastCtrl'
            })      
            .when('/forecast/:days',{
                templateUrl:'views/forecast.html',
                controller:'forecastCtrl'
            })
         
    });
    
})();