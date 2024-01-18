// Hack: https://github.com/facebook/jest/issues/6914
// This must be set up *before* the test environment so that it's possible to spy on/mock properties
// of modules that are initially loaded during the test environment setup.
const { defineProperty } = Object;
Object.defineProperty = function defineProp(object, name, meta) {
  if (meta.get && !meta.configurable) {
    // it might be an ES6 exports object
    return defineProperty(object, name, {
      ...meta,
      configurable: true, // prevent freezing
    });
  }

  return defineProperty(object, name, meta);
};
