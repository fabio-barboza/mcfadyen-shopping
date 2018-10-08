'use strict';

/**
 * Usuários Controller
 */
mcfadyenApp.controller('ProductCtrl', function ($scope, $rootScope, productFactory, products) {

    $scope.products = products.data;

    $rootScope.pageInfo = {
        icon: 'birthday-cake',
        title: 'Products',
        subTitle: 'Product Registration'
    };

    let reloadList = function () {
        productFactory.list().then(result => {
            $scope.products = result.data;
        });
    };

    $scope.edit = function (product) {
        $scope.product = {...product};
    };

    $scope.save = function () {
        productFactory.save($scope.product).then(() => {
          reloadList();
            $scope.product = {};
        });
    };

    $scope.remove = function (product) {
        if (confirm(`Do you want to remove the product ${product.name}?`)) {
            productFactory.remove(product.id).then(() => {
                reloadList();
            });
        }
    };

    $scope.cancel = function () {
        $scope.product = {};
    };

});
