(function() {
  'use strict';

  function sum() {
    return Array.prototype.reduce.call(arguments, function(accumulated, item) {
      return accumulated + item;
    });
  }

  console.log(sum(1, 2, 3, 4, 5));
}) ();
