angular.module('myApp')

.controller('ShoppimgListController', ['$scope', 'ShoppimgListController', function($scope, ShoppimgListController){
	var shoplist = $scope;

	shoplist.items = ShoppingListItems.getList();

	shoplist.addItem = function(newItem){
			shoplist.items.push({
				name:shoplist.newItem.name,
				qty: shoplist.newItem.qty,
				priority: shoplist.newItem.priority
				})

	};

	shoplist.removeItem = function(item){
		var removeItem = shoplist.item.indexOf(item);
		shoplist.item.splice(removeItem, 1)
	};

	shoplist.removeAll = function(){
		shoplist.items = [];

	}

}]);