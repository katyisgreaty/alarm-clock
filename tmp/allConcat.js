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
      var inputtedTime = $("#alarm").val();
      inputtedTime = inputtedTime.split(':');
      var formattedTime;
      if((parseInt(inputtedTime[0])) > 12) {
        formattedTime = moment().hour((parseInt(inputtedTime[0])) - 12).minute(parseInt(inputtedTime[1]));
      } else {
        formattedTime = moment().hour(parseInt(inputtedTime[0])).minute(parseInt(inputtedTime[1]));
      }

      var newAlarm = new Alarm(formattedTime);
      setInterval(function(){
      var isPastTime = newAlarm.checkTime();
      if(isPastTime === true) {
        $('#result').show();
      }
    }, 10000);
  });
});
