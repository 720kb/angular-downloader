Angular Downloader
==================


Angular Downloader is an angularjs directive that enables you to manage browser download.


The angular downloader is developed by [720kb](http://720kb.net).

##Requirements

AngularJS v1.2+

###Example

####[Live demo](https://720kb.github.io/angular-downloader)

###Browser support

![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)
--- | --- | --- | --- | --- |
 ✔ | ✔ | NO | ✔ | NO |

###Load

To use the directive, include the javascript file of angular downloader in your web page:

```html
<!DOCTYPE HTML>
<html>
<body ng-app="app">
  //.....
  <script src="src/js/angular-downloader.js"></script>
</body>
</html>
```

###Install

####Bower installation

```
$ bower install angular-downloader --save
```
_then load the js files in your html_

###Add module dependency

Add the ```720kb.downloader``` module dependency

```js
angular.module('app', [
  '720kb.downloader
 ]);
```

Call the directive wherever you want in your html page

```html
<button type="button" 
ng-click="downloadStuffFromAjax()" 
downloader="valueThatWillBePopulated" 
downloader-classes="btn btn-medium center-content bg-success color-white radius3" 
downloader-custom-text="Download Ready!" 
downloader-reset="resetDownload">
  Download Now!
</button>
```
##Options
Angular downloader allows you to use some options via `attribute` datas.

Passing values from the result of an XHR to the directive is done watching a variable in the scope. That name must be provided in the `downloader` attribute value.

The style for the download button is provided by the `downloader-classes` attribute value, you concatenate as the class attribute the css classes to assign to download button.

Custom text can be assigned to download button via the `downloader-custom-text` attribute value.

If the button that invokes the XHR is needed again `downloader-reset` can be assigned to a boolean variable.


##Contributing

We will be much grateful if you help us making this project to grow up.
Feel free to contribute by forking, opening issues, pull requests etc.

## License

The MIT License (MIT)

Copyright (c) 2014 Dario Andrei, Filippo Oretti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
