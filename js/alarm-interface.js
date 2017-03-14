var Alarm = require('./../js/alarm.js').alarmModule;

function Alarm(setTime) {
  this.time = setTime;
}

$(document).ready(function(){
  $('#time').text(moment().format('LT'));
  var nowTime = moment().format('LT');
  nowTime = nowTime.split(":");
  var formattedNowTime = moment().hour(nowTime[0]).minute(nowTime[1]);
  $("#alarm-set").submit(function(event) {
    event.preventDefault();
    var time = $("#alarm").val();
    time = time.split(':');
    var formattedTime = moment().hour(time[0]).minute(time[1]);
    console.log(formattedTime);
    var newAlarm = new Alarm(formattedTime);
    var isPastTime = newAlarm.checkTime();
    if(isPastTime === true) {
      $('#result').show();
    }
  });
});
