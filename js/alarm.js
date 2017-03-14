function Alarm(setTime) {
  this.time = setTime;
}

Alarm.prototype.checkTime = function() {
  var nowTime = moment().format('LT');
  nowTime = nowTime.split(":");
  var formattedNowTime = moment().hour(parseInt(nowTime[0])).minute(parseInt(nowTime[1]));
  var result;

  console.log(formattedNowTime.hour());
  if(formattedNowTime.hour() >= this.time.hour() && formattedNowTime.minute() >= this.time.minute()) {
    result = true;
  }
  else {
    result = false;
  }
  console.log(result);
  return result;
};

exports.alarmModule = Alarm;
