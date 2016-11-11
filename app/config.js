var app = require('angular').module('myShoppingList');

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider.when("/",
    {
      templateUrl: "/partials/products.html",
      controller: "productsCtrl"
    }
  ).when("/purchase/:id",
    {
      templateUrl: "/partials/purchase.html",
      controller: "purchaseCtrl"
    }
  ).when("/admin",
    {
      templateUrl: "/partials/admin.html",
      controller: "adminCtrl"
    }
  );
});