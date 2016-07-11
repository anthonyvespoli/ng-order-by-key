//This filter will sort an object alphabetically by the key
angular.module('main').filter('orderByKey', ['$filter', function($filter) {
  return function(items, field, reverse) {
    var keys = $filter('orderBy')(Object.keys(items), field, reverse),
      obj = {};
    keys.forEach(function(key) {
      obj[key] = items[key];
    });
    return obj;
  };
}]);
