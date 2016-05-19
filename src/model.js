'use strict';

var tree = require('./tree');

var model = function (init) {
  var root = init || {};

  return function (path, value) {
    if (typeof value === 'undefined') {
      return tree.read(root, path);
    }

    root = tree.update(root, path, value);
    return root;
  };
};

module.exports = model;
