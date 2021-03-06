

var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/partial-home.html',
            //template:"<div>Home </div>",
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            //templateUrl: 'templates/partial-home-list.html',
            template:"<div>Home List</div>",
            /*controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }*/
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'The luxurious cars'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            //templateUrl: 'partial-about.html'
            //template:"<div>About</div>"
            views: {
                '': {
                      
                    templateUrl: 'templates/partial-about.html' },
                    'columnOne@about': { template: 'See right side to for list of cars' },
                    'columnTwo@about': { 
                        templateUrl: 'templates/table-data.html',
                        //controller: 'routeController'
                        controller : function($scope){
                            //get available car list
                            $scope.cars = customUtil.getAvialbleCars();
                        } 
                    }
            }
            
        });
        
});

routerApp.controller('routeController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.cars = [];
  
});

                