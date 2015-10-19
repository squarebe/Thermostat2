var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increaseBy = function(number){
  return this.temperature = this.temperature + number;
};

Thermostat.prototype.decreaseBy = function(number){
  return this.temperature = this.temperature - number;
};
