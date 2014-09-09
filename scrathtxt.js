
  .directive('downloader', ['$rootScope', '$compile', '$document', function ($rootScope, $compile, $document) {
    return {
      'restrict': 'A',
      'link': function (scope, elem, attrs) {

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
            excelElementToDownload.textContent = 'Download ready';
            excelElementToDownload.target = '_self';

            excelElementToDownload.dataset.downloadurl = [newValue.contentType, excelElementToDownload.download, excelElementToDownload.href].join(':');
            excelElementToDownload.draggable = true;
            excelElementToDownload.classList.add('dragout');

            newElem = $compile(excelElementToDownload)(scope);
            newElem.off('click');
            elem.after(newElem);
          }
        });
      }
    };
  }])
