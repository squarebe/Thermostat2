thermostat = new Thermostat;
$(document).ready(function() {
  function value() {
    $('h1').text(thermostat.temperature);
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
  value()
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
