hrApp.service('MathService', function () {
        return {
            add: function (a,b) {
                return a+b;
            },
            substract: function (a,b) {
                return a-b;
            },
            multiply: function (a,b) {
                return a*b;
            },
            divide: function(a,b) {
                return a/b;
            }

            // TODO #14 add multiply and divide functions
        }
    }
);