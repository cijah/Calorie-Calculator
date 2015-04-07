angular.module('HealthCalculator.services', []);

angular.module('HealthCalculator.controllers', []);

var app=angular.module('HealthCalculator',
    [
        'ngRoute',
        'HealthCalculator.services',
        'HealthCalculator.controllers',
        'ngResource'
        ]).config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
      when('/', {
          templateUrl: 'app/views/IntroView.html'
      }).
      when('/letsGo', {
          templateUrl: 'app/views/InfoView.html'
      }).
      otherwise({
          redirectTo: '/'
      });
  } ]);
