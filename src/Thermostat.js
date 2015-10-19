var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increaseBy = function(number){
  return this.temperature = this.temperature + number;
};

Thermostat.prototype.decreaseBy = function(number){
  if ((this.temperature -number) < 10) {
    return "temperature too low";
  } else {
    return this.temperature = this.temperature - number;
  }
};

Thermostat.prototype.resetTemp = function() {
  return this.temperature = 20
};
