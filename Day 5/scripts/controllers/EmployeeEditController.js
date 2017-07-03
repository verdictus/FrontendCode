hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.nameNotRespected = "Introduceti numele corect ! ";
        $scope.emailNotRespected = "Introduceti email-ul corect !";
        $scope.idNotRespected = "Introduceti ID-ul corect !";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";
        $scope.numarTelefon = "Nu e un numar de telefon";
        $scope.salariuinvalid = "Salariul introdus e invalid";
        //TODO #HR1

        //TODO #HR5

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };
        $scope.employee.lastName = 'Ana';
        $scope.employee.firstName = 'Maria';
        $scope.employee.salary = '123';
        $scope.employee.email = 'abc@yahoo.com';
        $scope.employee.jobId = '1';
        $scope.employee.departmentId = '2';
        $scope.employee.manager = 'Alexia';
        $scope.employee.commission = '12';
        $scope.employee.hireDate = '12/08/1996';
        $scope.employee.phoneNumber = '0777777777';
        $scope.employee.commissionPct = '22';

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };
        $scope.stergere = function (deleteEmployee){
            $http:({url: CommonResourcesFactory.deleteEmployeeUrl, method: 'DELETE', data: deleteEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeList/');
            });
    };
        //functia de delete
        //oldlist - variabila vector initial apoi vectorul initial il fac nepopulat si sterg introducand valorile care nu au fost sterse
        $scope.remove = function() {
            var oldList = $scope.employees;
            $scope.employees = [];
            angular.forEach(oldList, function(x) {
                if (!x.done) $scope.employees.push(x);
            });
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




        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);