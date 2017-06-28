/**
 * Created by madalin.mocanu on 6/28/2017.
 */


angular.module('hrApp').controller('Poze',  ['$rootScope','$scope',function($rootScope,$scope){
    <!--C:\angular\poze -->
   $scope.imagini = [

        {imagine:'GL', Pret:37000, URL:'poze/poza1.jpeg'},
        {imagine:'R8', Pret:42000, URL:'poze/poza2.jfif'},
        {imagine:'Mazda', Pret:45000, URL:'poze/poza3.jpg'},
        {imagine:'Royce', Pret:35000, URL:'poze/poza4.jfif'}
        ];



}]);