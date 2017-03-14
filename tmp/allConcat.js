var Alarm = require('./../js/alarm.js').alarmModule;

function Alarm(setTime) {
  this.time = setTime;
}

$(document).ready(function(){
  $('#time').text(moment().format('LT'));
  var nowTime = moment().format('LT');
  timeArray = nowTime.split(" ");
  var amPm = timeArray[1];
  nowTime = nowTime.split(":");
  var formattedNowTime;
  if (amPm === "PM" || amPm === "pm"){
    formattedNowTime = moment().hour(parseInt(nowTime[0])+12).minute(parseInt(nowTime[1]));
  } else {
    formattedNowTime = moment().hour(parseInt(nowTime[0])).minute(parseInt(nowTime[1]));
  }
  $("#alarm-set").submit(function(event) {
    event.preventDefault();
    var inputtedTime = $("#alarm").val();
    inputtedTime = inputtedTime.split(':');
    var formattedTime;
    formattedTime = moment().hour(parseInt(inputtedTime[0])).minute(parseInt(inputtedTime[1]));
    var newAlarm = new Alarm(formattedTime);
    var interval  = setInterval(function(){
      var isPastTime = newAlarm.checkTime();
      if(isPastTime === true) {
        $('#result').show();
        clearInterval(interval);
      }
    }, 2000);

    $("#stop").click(function(event) {
      event.preventDefault();
      $('#result').hide();
    });
  });
});

var apiKey = "433e8c7286499246ed8f97e2764cdf79";

$(document).ready(function() {
  $("#weatherLocation").click(function(){
    var city = $("#location").val();
    $("#location").val("");
    $(".showWeather").text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    });
  });
});
