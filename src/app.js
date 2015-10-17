/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Accel = require('ui/accel');
var ajax = require('ajax');

Accel.init();

var main = new UI.Card({
  title: 'MySensors',
  icon: 'images/menu_icon.png'
});

main.show();

main.on('accelTap', function(e){
  console.log('Shake detected.');
});


main.on('accelData', function(e) {
  ajax({
      url: 'http://192.168.1.215:8080/pebble_data',
      method: 'post',
      type: 'json',
      data: {
        data : e.accels
    }
  },
    function(data) {
      // Success!
      console.log(JSON.stringify(data));
    },
    function(error) {
      // Failure!
      console.log('no response');
    }
  );
});