thermostat = new Thermostat;
document.getElementsByTagName("h1")[0].innerHTML =
thermostat.temperature + ' &deg;C'

function increase() {
  thermostat.increaseBy(1)
  document.getElementsByTagName("h1")[0].innerHTML =
  thermostat.temperature + ' &deg;C'
};
function decrease() {
  thermostat.decreaseBy(1)
  document.getElementsByTagName("h1")[0].innerHTML =
  thermostat.temperature + ' &deg;C'
};
function reset() {
  thermostat.resetTemp()
  document.getElementsByTagName("h1")[0].innerHTML =
  thermostat.temperature + ' &deg;C'
};
function psm() {
  thermostat.psmswitch()
};
