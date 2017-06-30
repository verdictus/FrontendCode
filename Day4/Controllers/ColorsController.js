/**
 * Created by madalin.mocanu on 6/30/2017.
 */


$scope.colors = [
    {

        "text" : "muted",
        "class": "text-muted",
        "type" : "strong"
    },
    {
    "text" : "primary",
    "class": "text-primary",
    "type" : "strong"
    },
    {
    "text" : "success",
    "class": "text-success",
    "type" : "strong"
    },
    {
    "text" : "info",
    "class": "text-info",
    "type" : "boring"
    },
    {
    "text" : "warning",
    "class": "text-warning",
    "type" :"boring"
    },
    {
    "text" : "danger",
    "class": "text-danger",
    "type" : "boring"
    }

];


var Culoare = function($scope)
{
    $scope.color = "Exercitiul5";

    $scope.onChange = function()
    {
        console.info("culoarea este "+$scope.color);
    }

}























