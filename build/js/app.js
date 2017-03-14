(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(setTime) {
  this.time = setTime;
}

Alarm.prototype.checkTime = function() {
  var nowTime = moment().format('LT');
  nowTime = nowTime.split(":");
  var formattedNowTime = moment().hour(parseInt(nowTime[0])).minute(parseInt(nowTime[1]));
  var result;

  console.log(formattedNowTime.hour())
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

},{}],2:[function(require,module,exports){
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

},{"./../js/alarm.js":1}]},{},[2]);
