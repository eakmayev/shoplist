angular.module('myApp')

.controller('HomeController', ['$scope', 'ShoppingListItem', function($scope, ShoppingListItem){
	var home = $scope
	home.items = ShoppingListItem.getList();

}]);





