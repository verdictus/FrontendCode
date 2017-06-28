/**
 * Created by madalin.mocanu on 6/28/2017.
 */

angular.module('hrApp').controller('HeaderController',  ['$rootScope','$scope',function($rootScope,$scope){


        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

}]);
