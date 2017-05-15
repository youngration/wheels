/**
 * Array.prototype.reduce()
 * 
 * @param {iterable} it
 * @param {Function} fn
 * @param {*} iniVal
 * @return {*}
 */
function reduce(it, fn, iniVal = null) {
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

  let i = 0;
  let result = null;
  if(iniVal) {
    result = iniVal;
  } else {
    if(tempArray.length === 0) {
      throw new Error('need a init value when given a empty iterable!');
    }
    result = tempArray[i++];
  }
  for(let l = tempArray.length; i < l; i++) {
    result = fn(result, tempArray[i], i, it);
  }
  return result;
}

module.exports = reduce;