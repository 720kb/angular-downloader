/*global angular*/
(function withAngular(angular) {
  'use strict';

  angular.module('720kb.downloader', [])
  .directive('downloader', ['$rootScope', '$compile', '$document', '$window', function manageDirective($rootScope, $compile, $document, $window) {
    return {
      'restrict': 'A',
      'link': function linkingFunction(scope, elem, attrs) {

        var customDownloadText = attrs.downloaderCustomText || 'Download Now';
        if (attrs.downloader &&
          attrs.downloaderClasses) {

          scope.$watch(attrs.downloader, function watchListener(newValue) {
            var blob
              , objectUrl
              , downloadElement
              , newElem;
            if (newValue &&
              newValue.contentType &&
              newValue.responseData &&
              newValue.fileName) {


              blob = new $window.Blob([newValue.responseData], {'type': newValue.contentType});
              objectUrl = $window.URL.createObjectURL(blob);

              downloadElement = $document[0].createElement('a');
              downloadElement.download = newValue.fileName;
              downloadElement.href = objectUrl;
              downloadElement.textContent = customDownloadText;
              downloadElement.target = '_self';

              downloadElement.dataset.downloadurl = [newValue.contentType, downloadElement.download, downloadElement.href].join(':');
              downloadElement.draggable = true;


              angular.forEach(attrs.downloaderClasses.split(' '), function iterator(value) {

                downloadElement.classList.add(value);
              });

              downloadElement.classList.add('dragout');

              newElem = $compile(downloadElement)(scope);
              newElem.off('click');

              elem.css({'display': 'none'});
              elem.after(newElem);
            }
          });

        if (attrs.downloaderReset) {

            scope.$watch(attrs.downloaderReset, function watchListener(newValue) {

              if (newValue) {

                elem.next()[0].remove();
                elem.css({'display': 'block'});
              }
            });
          }
        }
      }
    };
  }]);
}(angular));
