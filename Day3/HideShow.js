/**
 * Created by madalin.mocanu on 6/29/2017.
 */


angular.module('hrApp').controller('HideShow',  ['$rootScope','$scope',function($rootScope,$scope){

    $scope.descriptionHide = false;
    $scope.descriptionShow = true;
    $scope.toggleDescriptionShow = function(){
        if($scope.descriptionShow == true )
        {
            $scope.descriptionShow = false;
            $scope.descriptionHide = true;

        }
        else
        {
            $scope.descriptionShow = true;
            $scope.descriptionHide = false;
        }

    }

}]);

