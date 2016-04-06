/* 
* @Author: Conekta Inc.
* @Date:   2015-10-14 10:04:04
* @Last Modified by:   Julian Ceballos
* @Last Modified time: 2016-04-06 14:17:01
*/

var _ = require('underscore');

var files = ['./docs/0.txt', './docs/1.txt', './docs/2.txt'];

var update_doc = function(file) {
  var fs = require('fs');
  _.each(_.range(1000000), function() {
    fs.appendFileSync(file, Math.random().toString(16));
  });
}

_.each(files, function(file) {
  console.log(file);
  update_doc(file);
});
