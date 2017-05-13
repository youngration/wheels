;(function(module) {
  let fn = function() {};
  
  /**
  * Object.create()
  * 
  * @param {Object} prototype
  * @param {Object} properties
  * @return {Object}
  */
  function create(prototype, properties = {}) {
    if(typeof prototype !== 'object') {
      throw new Error('need a prototype!');
    }

    fn.prototype = prototype;

    let obj = new fn();
    Object.defineProperties(obj, properties);
    return obj;
  }

  module.exports = create;
})(module)