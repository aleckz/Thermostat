document.getElementById("greeting").innerHTML = "Hail, rain, sleet or snow. The thermostat cares not where you go. Set the temperature, take a break. All will be well upon your wake.";

var thermostat = new Thermostat();

document.getElementById("temperature").innerHTML=thermostat.showTemp();

document.getElementById("up").onclick = function() {
  thermostat.increase();
  document.getElementById("temperature").innerHTML=thermostat.showTemp();
};

document.getElementById("down").onclick = function() {
	thermostat.decrease();
	document.getElementById("temperature").innerHTML=thermostat.showTemp();
};

document.getElementById("reset").onclick = function() {
	thermostat.reset();
	document.getElementById("temperature").innerHTML=thermostat.showTemp();
};

document.getElementById("powerSaving").onclick = function() {
	thermostat.powerSavingToggle();
};
