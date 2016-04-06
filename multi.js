/* 
* @Author: Conekta Inc.
* @Date:   2015-10-14 10:04:04
* @Last Modified by:   Julian Ceballos
* @Last Modified time: 2016-04-06 14:54:46
*/

var _ = require('underscore');

var files = [{
  id: '0',
  filename: './docs/0.txt'
}, {
  id: '1',
  filename: './docs/1.txt'
}, {
  id: '2',
  filename: './docs/2.txt'
}, {
  id: '3',
  filename: './docs/3.txt'
}, {
  id: '4',
  filename: './docs/4.txt'
}];

_.each(files, function(file) {
  var fork = function(opts) {
    var update_doc = function(file) {
      var fs = require('fs'),
          _ = require('underscore');

      _.each(_.range(1000000), function() {
        fs.appendFileSync(file, Math.random().toString(16));
      });

      process.sendToMain({
        status: 'finished',
        thread_id: file.id
      });
    }

    update_doc(opts.filename);
  };

  jxcore.tasks.setThreadCount(5);
  jxcore.tasks.addTask(fork, file);
});

jxcore.tasks.on('message', function (thread_id, params) {
  console.log(thread_id, params);
});
