function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
console.log(concatArrays(['a', 'b'], ['c', 'd'], 'Hello'));
