hrApp.controller('MathController', ['$scope', 'MathService', function($scope, MathService){

    $scope.aaa = function() {
        $scope.op1 =  MathService.add(parseInt($scope.a),parseInt($scope.b));
        $scope.op2 =  MathService.substract(parseInt($scope.a),parseInt($scope.b));
        $scope.op3 =  MathService.multiply(parseInt($scope.a),parseInt($scope.b));
        $scope.op4 =  MathService.divide(parseInt($scope.a),parseInt($scope.b));
    }
//        TODO #8 calculate op1, op2, op3, op4



//        TODO #13 refactor your calculations using MathService




}]);

