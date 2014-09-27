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

    $scope.resetDownload = false;

    $scope.resetButton = function resetButton() {
      $scope.resetDownload = true;
    };

    $scope.downloadStuffFromAjax = function downloadStuffFromAjax() {
      $http({
        'method': 'GET',
        'url': 'https://www.gravatar.com/avatar',
        'responseType': 'arraybuffer'
      }).then(function (response) {

        if (response &&
          response.headers &&
          response.data) {

          var contentType = response.headers('Content-Type')
            , contentDisposition = response.headers('Content-Disposition'); /*Gravatar ATM don't send an Access-Control-Expose-Headers header so this value is lost...*/
          $scope.resetDownload = false;
          $scope.valueThatWillBePopulated = {
            'contentType': contentType,
            'responseData': response.data,
            'fileName': 'thisIsTheFileName'
          };
        }
      });
    }
  }]);
}(angular));
