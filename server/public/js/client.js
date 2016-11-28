//----------------------------------------------------------------------------//
var app = angular.module('desk', ['ngRoute']); // instantiates app
//----------------------------------------------------------------------------//

//------------------------------- ROUTE CONFIG -------------------------------//
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/newhero', {
      templateUrl: 'views/tempates/newhero.html',
      controller: 'HeroController',
      controllerAs: 'heroctrl'
    })
    .when('/herodb', {
      templateUrl: 'views/templates/herodb.html',
      controller: 'HeroDb',
      controllerAs: 'herodb'
    })
    .otherwise({ redirectTo: 'herodb' });
}]);
//----------------------------------------------------------------------------//

//--------------------------------CONTROLLERS---------------------------------//



//----------------------------------------------------------------------------//
