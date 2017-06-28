/**
 * Created by madalin.mocanu on 6/28/2017.
 */


angular.module('hrApp').controller('MenuController',  ['$scope',function($scope) {
    $scope.demoActionList = [
        {
            label: "Employees List",
            url: "views/childscope.html"
        }
    ];
}
]);

