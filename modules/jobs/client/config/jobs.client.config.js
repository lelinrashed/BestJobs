(function () {
  'use strict';

  angular
    .module('jobs')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Latest Jobs',
      state: 'jobs.list',
      roles: ['*']
    });

    // Add the dropdown create item
    menuService.addMenuItem('topbar', {
      title: 'Create Job',
      state: 'jobs.create',
      roles: ['user']
    });
  }
}());
