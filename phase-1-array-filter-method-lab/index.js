function findMatching(array, str) {
  return array.filter((newstr) => newstr.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(array, string) {
  return array.filter((letter) => letter.slice(0, string.length) === string);
}

function matchName(array, string) {
  return array.filter((element) => element.name === string);
}
