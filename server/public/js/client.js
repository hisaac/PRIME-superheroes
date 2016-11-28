//----------------------------------------------------------------------------//
var app = angular.module('desk', ['ngRoute']); // instantiates app
//----------------------------------------------------------------------------//

//------------------------------- ROUTE CONFIG -------------------------------//
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/heroentry', {
      templateUrl: 'views/templates/heroentry.html',
      controller: 'HeroEntry',
      controllerAs: 'heroentry'
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
app.controller('HeroEntry', ['$http', function($http){
  var self = this;
  var newHero = {};

  getSuperPowers();

  self.submitNewHero = function(){
    self.newHero.power_id = parseInt(self.newHero.power_id);
    $http.post('/heroes', angular.copy(self.newHero));
  };

  function getSuperPowers(){
    $http.get('/powers')
      .then(function(res){
        self.powers = res.data;
        console.log(self.powers);
      });
  };

}]);

app.controller('HeroDb', ['$http', function($http){
  var self = this;
  getSuperHeroes();

  function getSuperHeroes(){
    $http.get('/heroes')
      .then(function(res){
        self.heroes = res.data;
      });
  }

}]);
//----------------------------------------------------------------------------//
