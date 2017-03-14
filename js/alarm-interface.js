var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#time').text(moment().format('LT'));
  $("#alarm-set").submit(function(event) {
    event.preventDefault();
    var alarm = $("#alarm").val();
    var newAlarm = new Alarm(alarm);
    var isPastTime = newAlarm.checkTime();
    if(isPastTime) {
      $('#result').show();
    };
  });
});
