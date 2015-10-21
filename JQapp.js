thermostat = new Thermostat;
$(document).ready(function() {
  function value() {
    $('h1').text(thermostat.temperature+"\u00b0c");
    $('h1').css("color", function() {
      if (thermostat.temperature <18) {
        return ("green");
      } else if (thermostat.temperature <25) {
        return ("orange");
      } else {
        return ("red");
      };
    });
  };
  var weatherAPI = function (city) {
    $.ajax("http://api.openweathermap.org/data/2.5/weather?q=London&APPID="+API_KEY, {
      success: function (data) {
        $('h2').html(Math.round(data.main.temp-273.15));
      }
    });
  };
  value()
  weatherAPI("London")

  $('#submit').click(function(){
    weatherAPI($('#city').val())
  });

  $('incbutton').click(function() {
    thermostat.increaseBy(1);
    value();
  });
  $('decbutton').click(function() {
    thermostat.decreaseBy(1);
    value();
  });
  $('resetbutton').click(function() {
    thermostat.resetTemp();
    value();
  });
  $('PSMbutton').click(function() {
    thermostat.psmswitch();
  });
});
