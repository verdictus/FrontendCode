var hrApp = angular.module('hrApp', ['ngRoute']);

hrApp.config(['$routeProvider',function($routeProvider)
{
    $routeProvider.

    when('/colors', {
        templateUrl: 'scripts/colors.html',
        controller: 'ColorsController'
    }).
    when('/colors', {
        templateUrl:'scripts/form.html',
        controller: 'FormsController'
    }).
    otherwise({
        redirectTo: '/'
    });

}]);


