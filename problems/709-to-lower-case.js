/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  // return str.toLowerCase();
  return str.replace(/[A-Z]/g, (c) => {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
};
