function Alarm(setTime) {
  this.time = setTime;
}

Clock.prototype.checkTime = function(time) {
  if(moment().isSameOrAfter(time)) {
    return true;
  };
}

exports.alarmModule = Alarm;
