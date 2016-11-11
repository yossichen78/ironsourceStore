var app = require('angular').module('myShoppingList');

app.controller("productsCtrl", function($scope) {
    $scope.products = products;
});

app.controller("purchaseCtrl", function($scope,$routeParams, $http, $location) {
    $scope.product = false;
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == $routeParams.id) {
          $scope.product = products[i];
        }
    }
    $scope.save = function() {
	    $scope.$broadcast('show-errors-check-validity');
	    
	    if ($scope.paymentForm.$valid) {
          var data = $scope.user;
          data.product = $scope.product.id;
          $http.post("api/buy", data)
            .success(function (data, status, headers) {
              console.log("success")
              $location.path("/");

            })
            .error(function (data, status, header) {
            });
	    }
    };
	  
	$scope.reset = function() {
	    $scope.$broadcast('show-errors-reset');
	    $scope.user = { name: '', email: '' };
    }
});

app.controller("adminCtrl", function($scope,$routeParams, $http, $location) {
    $scope.purchases = [];
    
    $http.get("purchases")
      .success(function (response) {
        console.log("success")
        $scope.purchases = response;

      })
      .error(function (data, status, header) {

      });

    $scope.sendEmail = function(purchase){
        $http.post("mail", purchase)
            .success(function (response) {
              console.log("success");
              alert(response);
            })
            .error(function (data, status, header) {
              console.log(data);
            });
    }  
});

var products = [
    {
    	id: 1,
    	name: "Philips Steam Iron",
    	price: 100,
    	image: "philipsiron.jpg",
    	description: "This is our most affordable iron, easy to use and maintain, comes in a variety of colors."
    },
    {
    	id:2,
    	name: "Sunbeam Steam Iron",
    	price: 120,
    	image: "sunbeamiron.jpg",
    	description: "This is a high quality iron with multiple features including auto mode and temperature control."

    },
    {
    	id:3,
    	name: "Tefal Steam Iron",
    	price: 134,
    	image: "tefaliron.jpeg",
    	description: "Our most advanced iron, made for pro users with the most advanced ironing technology."
    }
  ];
