var app = require('angular').module('myShoppingList');

app.provider('showErrorsConfig', function () {
	var _showSuccess;
	_showSuccess = false;
	this.showSuccess = function (showSuccess) {
	  return _showSuccess = showSuccess;
	};
	this.$get = function () {
	  return { showSuccess: _showSuccess };
	};
});