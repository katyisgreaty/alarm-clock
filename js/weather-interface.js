var apiKey = "433e8c7286499246ed8f97e2764cdf79";

$(document).ready(function() {
  $("#weatherLocation").click(function(){
    var city = $("#location").val();
    $("#location").val("");
    $(".showCity").text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey) .then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    })
    .fail(function(error) {
        $('.showWeather').text(error.responseJSON.message);
      });
  });
});
