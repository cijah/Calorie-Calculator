(function () {

    'use strict';

    angular.module('HealthCalculator.services').factory('CalculatorService', [function () {

        var personInfo = undefined;
        var calculateCalories = function (data) {
            var result;
            if (data) {
                personInfo = data;
                if (personInfo.gender == 0) {
                    result = 66.473 + (13.7516 * personInfo.weight) + (5.0033 * personInfo.height) - (6.7550 * personInfo.age);

                }
                else {
                    result = 655.0955 + (9.5634 * personInfo.weight) + (1.8496 * personInfo.height) - (4.6756 * personInfo.age);
                }
                return result;
            }
            else {
                return null;
            }
        };
       
        return {

            calculateCalories: calculateCalories

        };

    } ]);

})();