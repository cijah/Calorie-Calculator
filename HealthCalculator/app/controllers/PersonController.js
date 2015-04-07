(function () {

    'use strict';

    angular.module('HealthCalculator.controllers').controller('PersonController', [

         '$scope', '$route', 'CalculatorService', function ($scope, $route, calculatorService) {

             $scope.isFirstPage = true;
             $scope.footerIsVisible = true;
             $scope.person = { name: "", gender: 0, age: null, height: null, weight: null };
             $scope.showRecommendations = false;
             $scope.result = null;
             $scope.recommendationsList = [];
             $scope.showResultView = false;

             $scope.applyInfo = function () {

                 if ($scope.person.name == "" || $scope.person.age == null || $scope.person.age < 1 || $scope.person.age > 150 || $scope.person.height == null || $scope.person.weight == null) {
                     return;
                 }

                 var calories = calculatorService.calculateCalories($scope.person);
                 if (calories) {
                     $scope.result = Math.round(calories);
                     $scope.recommendationsList = [
                     { title: "Little to no exercise", value: Math.round($scope.result * 1.2) },
                     { title: "Light exercise (1–3 days per week)", value: Math.round($scope.result * 1.375) },
                     { title: "Moderate exercise (3–5 days per week)", value: Math.round($scope.result * 1.55) },
                     { title: "Heavy exercise (6–7 days per week)", value: Math.round($scope.result * 1.725) },
                     { title: "Very heavy exercise (twice per day, extra heavy workouts)", value: Math.round($scope.result * 1.9) }
                     ];
                 }

                 $scope.showRecommendations = false;
                 $scope.showResultView = true;
             };

             $scope.showHideRecommendations = function () {

                 $scope.showRecommendations = !$scope.showRecommendations;
             };

             $scope.changePage = function () {
                 if ($scope.isFirstPage) {
                     $scope.isFirstPage = false;
                 }
                 else {
                     $scope.person = { name: "", gender: 0, age: null, height: null, weight: null };
                     $scope.showResultView = false;
                     $scope.showHideRecommendations();
                 }
                 $scope.footerIsVisible = !$scope.footerIsVisible;
             };
         } ])
})();