function Alarm(setTime) {
  this.time = setTime;
}

Alarm.prototype.checkTime = function() {
  var nowTime = moment().format('LT');
  nowTime = nowTime.split(":");
  var formattedNowTime = moment().hour(nowTime[0]).minute(nowTime[1]);
  var result;

  if(formattedNowTime.isSameOrAfter(this.time)) {
    result = true;
  }
  else {
    result = false;
  }
  console.log(result);
  return result;
};

exports.alarmModule = Alarm;
