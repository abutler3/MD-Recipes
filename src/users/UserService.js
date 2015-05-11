(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Lia Lugo',
        avatar: 'svg-1',
        content: 'Chocolate Nostalgia Cake',
        photo: 'cakes-desserts-chocolate-nostalgia-cake.jpg'
      },
      {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Cookies',
        photo: 'cookies.jpg'
      },
      {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: "Brownie Bites",
        photo: 'Desserts_Brownie_Bite.jpg'
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Mini Ice Cream Sandwiches',
        photo: 'modern-red-orange.jpg'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Cupcakes',
        photo: 'OLIVE-OIL-DESSERT-RECIPES.jpg'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Whoopie Pies",
        photo: 'whoopie-pies.jpg'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
