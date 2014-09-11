/*global angular*/

(function (angular) {
  'use strict';

  angular.module('720kb', [
    'ngRoute',
    '720kb.downloader',
    'hljs'
  ])
  .config(['hljsServiceProvider', function (hljsServiceProvider) {

    hljsServiceProvider.setOptions({
      // replace tab with 4 spaces
      tabReplace: ''
    });
  }])
  .controller('DownloaderController', ['$scope', '$http', function DownloaderController($scope, $http) {

    $scope.downloadStuffFromAjax = function downloadStuffFromAjax() {
      $http({
        'method': 'GET',
        'url': 'https://www.gravatar.com/avatar',
        'responseType': 'arraybuffer'
      }).then(function (response) {

        if (response &&
          response.headers &&
          response.data) {

          var contentType = response.headers('Content-Type');
          $scope.valueThatWillBePopulated = {
            'contentType': contentType,
            'responseData': response.data,
            'fileName': contentType.split('/')[1]
          };
        }
      });
    }
  }]);
}(angular));
