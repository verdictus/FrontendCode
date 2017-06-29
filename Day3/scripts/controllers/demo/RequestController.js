hrApp.controller('RequestController', ['$scope', '$http', function($scope, $http){

    $scope.jobList = [];

    $http.get("http://10.16.8.77:8181/hrapp/jobs/findAll")
        .success(function(data, status, headers, config) {
            $scope.jobList = data;
        })
        .error (function(data, status, headers, config){
            alert("Error: " + status);
        });


//    TODO #10 - make AJAX call


}]);
