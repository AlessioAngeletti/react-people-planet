export const getLastNumberFromUrl = (url) => {
  var matches = url.match(/\d+/g);
  return matches[matches.length - 1];
};
