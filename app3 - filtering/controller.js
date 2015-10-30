angular.module('app3').controller('mainCtrl',['$scope', 'mainService', function($scope, mainService) {

	$scope.something = mainService.dataGood();




}]);