document.getElementById("greeting").innerHTML = "Hail, rain, sleet or snow. The thermostat cares not where you go. Set the temperature, take a break. All will be well upon your wake.";

var thermostat = new Thermostat();

document.getElementById("temperature").innerHTML=thermostat.showTemp();

function incTemp() {
  thermostat.increase();
  document.getElementById("temperature").innerHTML=thermostat.showTemp();
}