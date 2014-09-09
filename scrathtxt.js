
  .directive('downloader', ['$rootScope', '$compile', '$document', function ($rootScope, $compile, $document) {
    return {
      'restrict': 'A',
      'link': function (scope, elem, attrs) {

        if(attrs.downloader && 
          attrs.downloaderClass) {

          scope.$watch(attrs.downloader, function (newValue) {
            var excelElementToDownload
              , newElem;
            if (newValue &&
              newValue.contentType &&
              newValue.objectUrl &&
              newValue.fileName) {

              excelElementToDownload = $document[0].createElement('a');
              excelElementToDownload.download = newValue.fileName;
              excelElementToDownload.href = newValue.objectUrl;
              excelElementToDownload.textContent = 'Download pronto';
              excelElementToDownload.target = '_self';

              excelElementToDownload.dataset.downloadurl = [newValue.contentType, excelElementToDownload.download, excelElementToDownload.href].join(':');
              excelElementToDownload.draggable = true;

              
              angular.forEach(attrs.downloaderClass.split(' '), function (value) {

                excelElementToDownload.classList.add(value);
              });

              excelElementToDownload.classList.add('dragout');
              
              newElem = $compile(excelElementToDownload)(scope);
              newElem.off('click');
              elem.replaceWith(newElem);
            }
          });
        }
      }
    };
  }]);