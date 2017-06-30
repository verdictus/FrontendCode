/**
 * Created by madalin.mocanu on 6/30/2017.
 */
$scope.users = [
    {

        "text" : "muted",
        "class": "12",
        "type" : "M"
    },
    {
        "text" : "primary",
        "class": "11",
        "type" : "F"
    },
    {
        "text" : "success",
        "class": "11s",
        "type" : "M"
    },
    {
        "text" : "info",
        "class": "12",
        "type" : "F"
    },
    {
        "text" : "warning",
        "class": "11",
        "type" :"F"
    },
    {
        "text" : "danger",
        "class": "12",
        "type" : "M"
    }

];

$scope.formData = {};
$scope.formData.users = users;

console.log($scope.myForm.Persoana.$pristine);
console.log($scope.myForm.Persoana.$dirty);
console.log($scope.myForm.Persoana.$valid);
console.log($scope.myForm.Persoana.$invalid);
console.log($scope.myForm.Persoana.$submitted);
console.log($scope.myForm.Persoana.$error);



























