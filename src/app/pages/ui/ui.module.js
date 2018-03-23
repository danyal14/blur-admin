/**
 * @author k.danovsky
 * created on 12.01.2016
 */
(function () {
  'use strict';

  angular.module('RMPA.pages.ui', [
    'RMPA.pages.ui.typography',
    'RMPA.pages.ui.buttons',
    'RMPA.pages.ui.icons',
    'RMPA.pages.ui.modals',
    'RMPA.pages.ui.grid',
    'RMPA.pages.ui.alerts',
    'RMPA.pages.ui.progressBars',
    'RMPA.pages.ui.notifications',
    'RMPA.pages.ui.tabs',
    'RMPA.pages.ui.slider',
    'RMPA.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
