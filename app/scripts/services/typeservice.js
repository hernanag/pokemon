'use strict';

/**
 * @ngdoc service
 * @name pokeApp.TypeService
 * @description
 * # TypeService
 * Service in the pokeApp.
 */
angular.module('pokeApp')
  .service('TypeService', function (Config, $q, $http, $routeParams) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    function listado(){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_TYPES)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    function listadoTipos(){
      var deferred = $q.defer();
      $http.get(Config.URL + Config.POKEMON_TYPES + $routeParams.id)
       .then(function(response){
        deferred.resolve(response);
      });
      return deferred.promise;
    }

    return{
      listado: listado,
      listadoTipos: listadoTipos
    }
  });
