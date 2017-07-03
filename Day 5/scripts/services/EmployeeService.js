hrApp.service('EmployeeService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
        return {
            findById: function (employeeId) {
                return $http.get(CommonResourcesFactory.findOneEmployeeUrl + employeeId)
                    .success(function (data) {
                        return data;
                    })
                    .error(function (err) {
                        return {
                            "id": 100,
                            "firstName": "Steven",
                            "lastName": "King",
                            "email": "SKING",
                            "phoneNumber": "515.123.4567",
                            "hireDate": "1987-06-17",
                            "jobId": 1,
                            "salary": 24000.00,
                            "commissionPct": null,
                            "managerId": null,
                            "departmentId": 90
                        };
                    });
            }
        }
    return {
        findByDepartment: function (departmentId) {
            return $http.get(CommonResourcesFactory.findOneDepartmentUrl + departmentId)
                .success(function (data) {
                    return data;
                })
        }
    }
    return {
        findByDepartment: function (jobId) {
            return $http.get(CommonResourcesFactory.findOneJobUrl + jobId)
                .success(function (data) {
                    return data;
                })
        }
    }

    }]
);