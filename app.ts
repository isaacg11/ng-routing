namespace Myrouterapp {
  angular.module("MyApp",['ui.router'])
      .config(($stateProvider: ng.ui.IStateProvider, $locationProvider:ng.ILocationProvider, $urlRouterProvider:ng.ui.IUrlRouterProvider) => {
        $stateProvider
          .state('Page1', {
            url:'/page1',
            templateUrl: 'templates/page1.html',
            controller: Myrouterapp.Controllers.MainController,
            controllerAs: 'controller'
          })
          .state('Page2', {
            url:'/page2',
            templateUrl:'templates/page2.html',
            controller: Myrouterapp.Controllers.Page2Controller,
            controllerAs: 'controller'
          })
          .state('Page3', {
            url:'/page3',
            templateUrl: 'templates/page3.html',
            controller: Myrouterapp.Controllers.Page3Controller,
            controllerAs:'controller'
          });
          $urlRouterProvider.otherwise('/page1');
          $locationProvider.html5Mode(true);
      });

}
