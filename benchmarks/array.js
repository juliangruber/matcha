
var arr = [1, 2, 3, 4, 5, 6];

bench('array slice: protype', function (next) {
  var args = Array.prototype.slice.call(arr, 1);
  next();
});

bench('array slice: loop', function (next) {
  var l = arr.length
    , args = new Array(l - 1);
  for (var i = 1; i < l; i++) args[i - 1] = arr[i];
  next();
});