/**
 * Function.prototype.bind()
 * 
 * @param {Function} fn
 * @param {Object} obj
 * @param {Array} outArgs
 * @return {Function}
 */
function bind(fn, obj, ...outArgs) {
  if(typeof fn !== 'function') throw new Error('need a function!');

  let f = function(...inArgs) {
    fn.apply(new.target ? this : obj, outArgs.concat(inArgs));
  }
  f.prototype = fn.prototype;
  return f;
}
module.exports = bind;