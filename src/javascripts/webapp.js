document.getElementById("greeting").innerHTML = "Hail, rain, sleet or snow. The thermostat cares not where you go. Set the temperature, take a break. All will be well upon your wake.";

var thermostat = new Thermostat();

document.getElementById("temperature").innerHTML=thermostat.showTemp();

function increaseTemp() {
  thermostat.increase();
  document.getElementById("temperature").innerHTML=thermostat.showTemp();
};

function decreaseTemp() {
	thermostat.decrease();
	document.getElementById("temperature").innerHTML=thermostat.showTemp();
};

function resetTemp() {
	thermostat.reset();
	document.getElementById("temperature").innerHTML=thermostat.showTemp();
};

function powerSaver() {
	thermostat.powerSavingToggle();
};

// var up = document.getElementById("upButton")

// 	up.onClick = function() {
// 		thermostat.increase();
// 		document.getElementById("temperature").innerHTML=thermostat.showTemp();
// 	}