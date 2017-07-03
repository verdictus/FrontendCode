hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory',
    function($scope, $http, $location, CommonResourcesFactory) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.nameNotRespected ="Introduceti numele corect ! ";
        $scope.emailNotRespected ="Introduceti email-ul corect !";
        $scope.idNotRespected = "Introduceti ID-ul corect !";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.numarTelefon = "Nu e un numar de telefon";
        $scope.salariuinvalid = "Salariul introdus e invalid";
        //TODO #HR1

        /**
         * Reset form
         */

        $scope.reset = function () {
            this.employee = {};
        };
        $http({url: CommonResourcesFactory.findAllEmployeesUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.employees = data;
            });

        $http({url: CommonResourcesFactory.addDepartmentUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.departamente = data;
            });
        $http({url: CommonResourcesFactory.addJobUrl, method: 'GET'})
            .success(function (data, status, headers, config) {
                $scope.joburi = data;
            });



        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: $commonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);