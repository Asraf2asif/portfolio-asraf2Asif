import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

// eslint-disable-next-line
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

if (typeof String.prototype.replaceAll === 'undefined') {
  // eslint-disable-next-line
  String.prototype.replaceAll = function (search, replace) {
    return this.split(search).join(replace);
  };
}
