'use strict';

/**
 * @ngdoc overview
 * @name pokeApp
 * @description
 * # pokeApp
 *
 * Main module of the application.
 */
angular
  .module('pokeApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      .when('/listado', {
        templateUrl: 'views/listado.html',
        controller: 'ListadoCtrl',
        controllerAs: 'listado'
      })
      .when('/detalle/:id', {
        templateUrl: 'views/detalle.html',
        controller: 'DetalleCtrl',
        controllerAs: 'detalle'
      })
      .when('/listadotipos/:id', {
        templateUrl: 'views/listadotipos.html',
        controller: 'ListadotiposCtrl',
        controllerAs: 'listadoTipos'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix("");
  });
