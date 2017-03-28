'use strict';

/**
 * @ngdoc service
 * @name pokeApp.Config
 * @description
 * # Config
 * Service in the pokeApp.
 */
angular.module('pokeApp')
  .constant('Config', {
    // AngularJS will instantiate a singleton by calling "new" on this function
    URL: 'http://pokeapi.co/api/v2/',
    POKEMON_LIST: 'pokemon/?limit=1000',
    POKEMON_DETAIL: 'pokemon/',
    POKEMON_SPECIE: 'pokemon-species/',
    POKEMON_TYPES: 'type/',
    POKEMON_FORM: 'pokemon-form/',
    POKEMON_EVOLUTION: 'evolution-chain/',
  });
