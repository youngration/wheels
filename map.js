/**
 * Array.prototype.map()
 * 
 * @param {iterable} it
 * @param {Function} fn
 * @param {Object} thisArg
 * @return {Array}
 */
function map(it, fn, thisArg = null) {
  let tempArray = [];

  if(typeof it[Symbol.iterator] !== 'function') {
    throw new Error('need an iterable!');
  } else if(!Array.isArray(it)) {
    for(let el of it[Symbol.iterator]()) {
      tempArray.push(el);
    }
  } else {
    tempArray = it;
  }
  if(typeof fn !== 'function') {
    throw new Error('need a function!');
  }

  let results = new Array(tempArray.length);
  for(let entry of tempArray.entries()) {
    if(entry[1]) {
      let result = fn.call(thisArg, entry[1], entry[0], it);
      results[entry[0]] = result;
    }
  }
  return results;
}

module.exports = map;