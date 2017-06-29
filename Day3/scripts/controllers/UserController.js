/**
 * Created by madalin.mocanu on 6/29/2017.
 */


hrApp.controller('UserController', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {

$scope.back = function() {
    $location.url('/main');

}

}]);