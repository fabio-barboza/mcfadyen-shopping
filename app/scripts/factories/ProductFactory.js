'use strict';

mcfadyenApp.factory('productFactory', function($http, SERVER_URL) {

  const URL = SERVER_URL + '/products';

  let list = function() {
    return $http.get(URL);
  };

  let save = function(product) {
    if (product.id) {
      return $http.put(URL + `/${product.id}`, product);
    } else {
      return $http.post(URL, product);
    }
  };

  let find = function(id) {
    return $http.get(URL, id);
  };

  let remove = function(id) {
    return $http.delete(URL + `/${id}`);
  };

  return {list, save, find, remove};
});
