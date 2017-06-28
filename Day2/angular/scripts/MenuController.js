/**
 * Created by madalin.mocanu on 6/28/2017.
 */

angular.module('hrApp').controller('MenuController',  ['$scope',function($scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label: "Demo action",
            url: "views/demomath.html"
        },
        {
            label: "ShoppingCart",
            url:"views/ShoppingCart.html"
        }
    ];
}
    ]);

