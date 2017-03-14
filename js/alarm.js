function Alarm(setTime) {
  this.time = setTime;
}

Alarm.prototype.checkTime = function() {
  var nowTime = moment().format('LT');
  hourMinSplitTime = nowTime.split(":");
  timeArray = nowTime.split(" ");
  var amPm = timeArray[1];
  var formattedNowTime;
  if (amPm === "PM" || amPm === "pm"){
    formattedNowTime = moment().hour(parseInt(hourMinSplitTime[0])+12).minute(parseInt(hourMinSplitTime[1]));
  } else {
    formattedNowTime = moment().hour(parseInt(hourMinSplitTime[0])).minute(parseInt(hourMinSplitTime[1]));
  }
  var result;

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
