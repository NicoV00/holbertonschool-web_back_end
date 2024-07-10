export default function cleanSet(set, startString) {
  if (startString === undefined || typeof startString !== 'string') {
    return '';
  }

  let result = [];

  Array.from(set).forEach(string => {
    if (string.startsWith(startString)) {
      result.push(string.substring(startString.length));
    }
  });

  return result.join('-');
}
