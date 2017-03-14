var Alarm = require('./../js/alarm.js').alarmModule;

function Alarm(setTime) {
  this.time = setTime;
}

$(document).ready(function(){
  $('#time').text(moment().format('LT'));
  var nowTime = moment().format('LT');
  nowTime = nowTime.split(":");
  var formattedNowTime = moment().hour(parseInt(nowTime[0])).minute(parseInt(nowTime[1]));
  $("#alarm-set").submit(function(event) {
    event.preventDefault();
    setInterval(function(){
      var time = $("#alarm").val();
      time = time.split(':');
      var formattedTime = moment().hour(parseInt(time[0])).minute(parseInt(time[1]));
      var newAlarm = new Alarm(formattedTime);
      var isPastTime = newAlarm.checkTime();
      if(isPastTime === true) {
        $('#result').show();
      }
    }, 10000);
  });
});
