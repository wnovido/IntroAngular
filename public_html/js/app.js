/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

var myApplication = angular.module('myApplication',['ngRoute']);

myApplication.config(function ($routeProvider) {
    $routeProvider.when('/customers', {templateUrl: 'partials/customers.html', controller: 'BasicController'});
    $routeProvider.when('/animals', {templateUrl: 'partials/animals.html', controller: 'AnimalController'});
    $routeProvider.otherwise({redirectTo: '/customers'});
});

myApplication.factory('dataFactory', function() {
    var customers = [{name:'Josh Smith', code:'DX1012'},{name:'Michael Carl', code:'XX2033'},{name:'John Doe', code:'YY2301'},{name:'Mick Conan', code:'YY2302'},{name:'Arnold Stuart', code:'DF3402'}];
    var objFactory = {};

    objFactory.getCustomers = function() {
        return customers;
    };

    objFactory.pushCustomer = function(customer) {
        customers.push(customer);
    };

    return objFactory;
});

function BasicController($scope, dataFactory) {                
    $scope.customers = dataFactory.getCustomers();
    $scope.addCustomer = function() {
        dataFactory.pushCustomer($scope.newCustomer);
        $scope.newCustomer = {};
    };
}

function AnimalController($scope) {
    $scope.animals = ['dog','cat','turtle','lion','falcon'];
}

myApplication.controller('BasicController',BasicController);
myApplication.controller('AnimalController',AnimalController);
