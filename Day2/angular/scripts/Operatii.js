/**
 * Created by madalin.mocanu on 6/28/2017.
 */

angular.module('hrApp').controller('Operatii',  ['$rootScope','$scope',function($rootScope,$scope){


        $scope.total = function () {
            return parseInt($scope.x) + parseInt($scope.y);
        };
        $scope.total2 = function () {
            return parseInt($scope.x) * parseInt($scope.y);
        };
        $scope.total3 = function () {
            return parseInt($scope.x) / parseInt($scope.y);
        };
        $scope.total4 = function () {
            return parseInt($scope.x) - parseInt($scope.y);
        };


}]);
