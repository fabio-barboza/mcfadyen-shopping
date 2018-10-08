'use strict';

/**
 * @ngdoc overview
 * @name mcfadyenShoppingApp
 * @description
 * # mcfadyenShoppingApp
 *
 * Main module of the application.
 */
const mcfadyenApp = angular
  .module('mcfadyenShoppingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'views/home.html'
      })
      .state('products', {
        url: '/products',
        controller: 'ProductCtrl',
        templateUrl: 'views/products.html',
        resolve: {
          products: function (productFactory) {
            return productFactory.list();
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }).constant(
    'SERVER_URL', 'http://localhost:8080'
  );
